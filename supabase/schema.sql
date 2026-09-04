-- Financetech LATAM — run this in the Supabase SQL editor.
-- Then add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to .env.local

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null,
  full_name text not null default '',
  company text not null default '',
  email text not null default '',
  phone text not null default '',
  units text[] not null default '{}',
  budget text,
  message text not null default '',
  locale text not null default 'en',
  page text not null default '',
  user_agent text not null default '',
  referrer text not null default '',
  status text not null default 'new' check (status in ('new', 'contacted', 'closed'))
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title_en text not null default '',
  title_es text not null default '',
  excerpt_en text not null default '',
  excerpt_es text not null default '',
  content_en text not null default '',
  content_es text not null default '',
  seo_title text not null default '',
  seo_description text not null default '',
  keywords text not null default '',
  faq jsonb not null default '[]'::jsonb,
  category text not null default '',
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  updated_at timestamptz not null default now(),
  author text not null default 'Financetech LATAM'
);

create index if not exists posts_published_at_idx on public.posts (published_at desc);
create index if not exists posts_slug_idx on public.posts (slug);

alter table public.leads enable row level security;
alter table public.posts enable row level security;

-- Public can read live posts only. Leads are service-role only (no anon policies).
drop policy if exists "public read live posts" on public.posts;
create policy "public read live posts" on public.posts
  for select
  to anon, authenticated
  using (status = 'published' and published_at is not null and published_at <= now());

-- Service role bypasses RLS; the Next.js dashboard uses SUPABASE_SERVICE_ROLE_KEY.
