-- Quest apps: "Ask Otto" questions.
-- Paste this whole file into Supabase → SQL Editor → New query, then press Run.
-- Safe to run more than once.

create table if not exists public.quest_questions (
  id bigint generated always as identity primary key,
  person text not null check (char_length(person) between 1 and 40),
  app text not null check (char_length(app) between 1 and 40),
  day text not null check (char_length(day) between 1 and 80),
  lesson text not null default '' check (char_length(lesson) <= 200),
  question text not null check (char_length(question) between 1 and 2000),
  answer text,
  created_at timestamptz not null default now(),
  answered_at timestamptz
);
create index if not exists quest_questions_unanswered on public.quest_questions (created_at) where answer is null;

-- The apps can only ask and read through the two functions below.
-- Otto reads and answers with the project's secret key, which bypasses these rules.
alter table public.quest_questions enable row level security;
revoke all on public.quest_questions from anon, authenticated;

create or replace function public.ask_question(p_person text, p_app text, p_day text, p_lesson text, p_question text)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare new_id bigint;
begin
  if char_length(trim(p_question)) = 0 then raise exception 'empty question'; end if;
  insert into public.quest_questions (person, app, day, lesson, question)
  values (left(p_person, 40), left(p_app, 40), left(p_day, 80), left(coalesce(p_lesson, ''), 200), left(p_question, 2000))
  returning id into new_id;
  return new_id;
end;
$$;

create or replace function public.get_questions(p_person text, p_app text)
returns setof public.quest_questions
language sql
security definer
set search_path = public
as $$
  select * from public.quest_questions
  where person = p_person and app = p_app
  order by created_at desc
  limit 200;
$$;

revoke all on function public.ask_question(text, text, text, text, text) from public;
revoke all on function public.get_questions(text, text) from public;
grant execute on function public.ask_question(text, text, text, text, text) to anon;
grant execute on function public.get_questions(text, text) to anon;
-- Otto's secret key (service_role) reads and answers questions.
grant select, update on public.quest_questions to service_role;
notify pgrst, 'reload schema';
