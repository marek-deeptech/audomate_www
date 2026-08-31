-- Audomate — demo/lead capture table
-- Run once in the Supabase project's SQL editor (or via CLI).

create table if not exists public.audomate_leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  company     text,
  message     text,
  frameworks  text[] default '{}',
  source      text default 'audomate.eu'
);

create index if not exists audomate_leads_created_at_idx
  on public.audomate_leads (created_at desc);

-- Row Level Security: deny by default. The site writes with the service_role
-- key from a server-only API route, which bypasses RLS. No anon/public access.
alter table public.audomate_leads enable row level security;
