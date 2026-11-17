-- Quest apps: cloud progress sync.
-- Paste this whole file into Supabase → SQL Editor → New query, then press Run.
-- Safe to run more than once.

create table if not exists public.quest_progress (
  id text primary key check (char_length(id) between 24 and 160),
  data jsonb not null,
  updated_at timestamptz not null default now()
);

-- Nobody can read or write the table directly. The app can only use the two
-- functions below, and only for a sync code it already knows.
alter table public.quest_progress enable row level security;
revoke all on public.quest_progress from anon, authenticated;

create or replace function public.get_progress(p_id text)
returns jsonb
language sql
security definer
set search_path = public
as $$
  select jsonb_build_object('data', data, 'updated_at', updated_at)
  from public.quest_progress
  where id = p_id;
$$;

create or replace function public.put_progress(p_id text, p_data jsonb)
returns timestamptz
language plpgsql
security definer
set search_path = public
as $$
declare
  t timestamptz := now();
begin
  if char_length(p_id) < 24 or char_length(p_id) > 160 then
    raise exception 'invalid sync id';
  end if;
  if pg_column_size(p_data) > 200000 then
    raise exception 'progress too large';
  end if;
  insert into public.quest_progress (id, data, updated_at)
  values (p_id, p_data, t)
  on conflict (id) do update set data = excluded.data, updated_at = t;
  return t;
end;
$$;

revoke all on function public.get_progress(text) from public;
revoke all on function public.put_progress(text, jsonb) from public;
grant execute on function public.get_progress(text) to anon;
grant execute on function public.put_progress(text, jsonb) to anon;
