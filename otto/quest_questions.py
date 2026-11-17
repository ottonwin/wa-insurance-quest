#!/usr/bin/env python3
"""Helper for Otto: fetch unanswered "Ask Otto" questions and post answers.

Setup (once): put these in Otto's environment on the Mac mini, never in the repo:
  QUEST_SUPABASE_URL=https://xhumjbqzupsmxgpumxbg.supabase.co
  QUEST_SUPABASE_SECRET_KEY=sb_secret_...   (Supabase -> Project Settings -> API Keys)

Usage:
  python3 quest_questions.py list                 # unanswered questions as JSON
  python3 quest_questions.py answer 12 "text"     # answer question 12
  echo "long text" | python3 quest_questions.py answer 12 -
  python3 quest_questions.py lesson trade-quest 12  # print that day's lesson text for context
  python3 quest_questions.py wake                 # cheap check: runs $OTTO_COMMAND only if questions are waiting

`wake` uses no AI: it's one tiny database request. Schedule it every minute
(launchd/cron) and set OTTO_COMMAND to whatever starts Otto, e.g.
  OTTO_COMMAND='claude -p "Answer the waiting Quest questions. Follow OTTO.md."'
Otto (and your AI usage) only runs when someone has actually asked something.
No third-party packages needed.
"""
import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone

SITE = "https://ottonwin.github.io/wa-insurance-quest"


def env(name):
    value = os.environ.get(name, "").strip()
    if not value:
        sys.exit(f"Missing environment variable {name}. See the top of this file.")
    return value


def request(method, path, body=None, extra_headers=None):
    url = env("QUEST_SUPABASE_URL").rstrip("/") + path
    key = env("QUEST_SUPABASE_SECRET_KEY")
    headers = {"apikey": key, "Content-Type": "application/json"}
    if key.startswith("eyJ"):  # legacy service_role JWT
        headers["Authorization"] = f"Bearer {key}"
    headers.update(extra_headers or {})
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method=method, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as res:
            text = res.read().decode()
            return json.loads(text) if text else None
    except urllib.error.HTTPError as e:
        sys.exit(f"Supabase error {e.code}: {e.read().decode()[:300]}")


def list_unanswered():
    rows = request("GET", "/rest/v1/quest_questions?answer=is.null&order=created_at.asc&limit=50")
    print(json.dumps(rows, indent=2))


def wake():
    rows = request("GET", "/rest/v1/quest_questions?answer=is.null&select=id&limit=1")
    if not rows:
        return  # nothing waiting: exit quietly, no AI used
    command = os.environ.get("OTTO_COMMAND", "").strip()
    if not command:
        sys.exit("Questions are waiting, but OTTO_COMMAND isn't set.")
    lock = os.path.join(os.path.expanduser("~"), ".quest_questions.lock")
    try:
        fd = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY)  # don't start Otto twice
    except FileExistsError:
        if (datetime.now().timestamp() - os.path.getmtime(lock)) < 15 * 60:
            return
        os.remove(lock)
        fd = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
    try:
        os.close(fd)
        import subprocess
        subprocess.run(command, shell=True, check=False)
    finally:
        os.remove(lock)


def answer(qid, text):
    if text == "-":
        text = sys.stdin.read()
    text = text.strip()
    if not text:
        sys.exit("Answer is empty.")
    request(
        "PATCH",
        f"/rest/v1/quest_questions?id=eq.{int(qid)}",
        {"answer": text[:8000], "answered_at": datetime.now(timezone.utc).isoformat()},
        {"Prefer": "return=minimal"},
    )
    print(f"Answered question {qid}.")


def lesson(app, day):
    """Print a day's lesson cards from the public site (Trade Quest / Indie Quest)."""
    day = int(re.sub(r"\D", "", str(day)) or 0)
    weeks = range(1, 10) if app == "trade-quest" else range(1, 5)
    for w in weeks:
        try:
            src = urllib.request.urlopen(f"{SITE}/{app}/data-week{w}.js", timeout=30).read().decode()
        except urllib.error.URLError:
            continue
        m = re.search(r"day:\s*%d,\s*\n" % day, src)
        if not m:
            continue
        nxt = re.search(r"\n\s*\{\s*\n\s*day:\s*\d+,", src[m.end():])
        print(src[m.start(): m.end() + (nxt.start() if nxt else len(src))])
        return
    print("Lesson text not found; answer from general knowledge.")


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if cmd == "list":
        list_unanswered()
    elif cmd == "wake":
        wake()
    elif cmd == "answer" and len(sys.argv) == 4:
        answer(sys.argv[2], sys.argv[3])
    elif cmd == "lesson" and len(sys.argv) == 4:
        lesson(sys.argv[2], sys.argv[3])
    else:
        print(__doc__)
