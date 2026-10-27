-- 빌려봄 Supabase 초기 스키마
-- 적용: Supabase SQL Editor에서 이 파일을 전체 실행합니다.

create extension if not exists pgcrypto;

create table if not exists public.equipment (
  id uuid primary key default gen_random_uuid(),
  equipment_type text not null,
  spec text not null default '',
  model_name text not null default '',
  asset_no text not null unique,
  status text not null check (status in ('대출 가능', '대출 중', '대출 불가')),
  storage_location text not null,
  components text[] not null default '{}',
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.rental_requests (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid references auth.users(id) on delete set null,
  requester_name text,
  requester_email text,
  purpose text not null check (char_length(trim(purpose)) >= 1),
  start_date date not null,
  end_date date not null,
  status text not null default '신청' check (status in ('신청', '승인', '대여 중', '반납 완료', '거절')),
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint rental_requests_date_order check (end_date >= start_date)
);

create table if not exists public.rental_request_items (
  request_id uuid not null references public.rental_requests(id) on delete cascade,
  equipment_id uuid not null references public.equipment(id) on delete restrict,
  asset_no_snapshot text not null,
  equipment_name_snapshot text not null,
  created_at timestamptz not null default now(),
  primary key (request_id, equipment_id)
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists equipment_set_updated_at on public.equipment;
create trigger equipment_set_updated_at
before update on public.equipment
for each row execute function public.set_updated_at();

drop trigger if exists rental_requests_set_updated_at on public.rental_requests;
create trigger rental_requests_set_updated_at
before update on public.rental_requests
for each row execute function public.set_updated_at();

create index if not exists equipment_type_status_idx
  on public.equipment (equipment_type, status);
create index if not exists equipment_status_idx
  on public.equipment (status);
create index if not exists equipment_asset_no_idx
  on public.equipment (asset_no);
create index if not exists rental_requests_requester_idx
  on public.rental_requests (requester_id, created_at desc);
create index if not exists rental_requests_status_idx
  on public.rental_requests (status, start_date);
create index if not exists rental_request_items_equipment_idx
  on public.rental_request_items (equipment_id);

alter table public.equipment enable row level security;
alter table public.rental_requests enable row level security;
alter table public.rental_request_items enable row level security;

drop policy if exists "equipment_public_select" on public.equipment;
create policy "equipment_public_select"
on public.equipment for select
to anon, authenticated
using (true);

-- requester_id가 auth.uid()인 인증 사용자 신청을 기본으로 허용합니다.
-- requester_id IS NULL insert는 키 없는 데모/마이그레이션 경로를 위한 예외이며,
-- 실제 학교 운영에서는 Auth 사용자만 허용하도록 이 정책을 제거하거나 좁히세요.
drop policy if exists "rental_requests_insert_owner_or_demo" on public.rental_requests;
create policy "rental_requests_insert_owner_or_demo"
on public.rental_requests for insert
to anon, authenticated
with check (requester_id is null or requester_id = auth.uid());

drop policy if exists "rental_requests_select_owner" on public.rental_requests;
create policy "rental_requests_select_owner"
on public.rental_requests for select
to authenticated
using (requester_id is not null and requester_id = auth.uid());

drop policy if exists "rental_requests_update_owner" on public.rental_requests;
create policy "rental_requests_update_owner"
on public.rental_requests for update
to authenticated
using (requester_id is not null and requester_id = auth.uid())
with check (requester_id is not null and requester_id = auth.uid());

drop policy if exists "rental_request_items_insert_owner_or_demo" on public.rental_request_items;
create policy "rental_request_items_insert_owner_or_demo"
on public.rental_request_items for insert
to anon, authenticated
with check (
  exists (
    select 1 from public.rental_requests r
    where r.id = request_id
      and (r.requester_id is null or r.requester_id = auth.uid())
  )
);

drop policy if exists "rental_request_items_select_owner" on public.rental_request_items;
create policy "rental_request_items_select_owner"
on public.rental_request_items for select
to authenticated
using (
  exists (
    select 1 from public.rental_requests r
    where r.id = request_id and r.requester_id = auth.uid()
  )
);
