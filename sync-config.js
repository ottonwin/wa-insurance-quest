// Cloud sync settings (Supabase). Both values are safe to publish: the
// publishable key can only call the two progress functions set up by
// supabase-setup.sql, and each person's progress is only reachable with
// their private sync code. Leave blank to turn cloud sync off.
window.QUEST_SYNC_CONFIG = {
  url: "https://xhumjbqzupsmxgpumxbg.supabase.co",
  key: "sb_publishable_HJTz4NHOk03JWb_rq2kJQQ_U7WVCUNp",
};
