-- 이화 조형예대 장비 대여 Supabase 초기 스키마
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
  requester_name text not null check (char_length(trim(requester_name)) >= 2),
  requester_email text not null check (lower(trim(requester_email)) ~ '^[^@[:space:]]+@(ewhain\.net|ewha\.ac\.kr)$'),
  student_number text not null check (regexp_replace(student_number, '[[:space:]]', '', 'g') ~ '^[0-9]{6,12}$'),
  requester_phone text not null check (regexp_replace(requester_phone, '[^0-9]', '', 'g') ~ '^[0-9]{9,11}$'),
  purpose text not null check (char_length(trim(purpose)) >= 1),
  start_date date not null,
  end_date date not null,
  request_type text not null default '대여' check (request_type in ('대여', '반납')),
  return_components_confirmed boolean not null default false,
  status text not null default '신청' check (status in ('신청', '승인', '대여 중', '반납 완료', '거절')),
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint rental_requests_date_order check (end_date >= start_date),
  constraint rental_requests_return_confirmation check (request_type = '대여' or return_components_confirmed = true)
);

create table if not exists public.notification_outbox (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.rental_requests(id) on delete cascade,
  event_type text not null check (event_type in ('request_submitted', 'approved', 'checked_out', 'returned', 'rejected')),
  recipient_email text not null check (lower(trim(recipient_email)) ~ '^[^@[:space:]]+@(ewhain\.net|ewha\.ac\.kr)$'),
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  sent_at timestamptz,
  attempts integer not null default 0 check (attempts >= 0),
  last_error text,
  unique (request_id, event_type)
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
create index if not exists notification_outbox_pending_idx
  on public.notification_outbox (created_at)
  where sent_at is null;
create index if not exists notification_outbox_request_idx
  on public.notification_outbox (request_id, created_at desc);

create or replace function public.enqueue_rental_notification()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  notification_event text;
begin
  if tg_op = 'INSERT' then
    notification_event := 'request_submitted';
  elsif new.status is distinct from old.status then
    notification_event := case new.status
      when '승인' then 'approved'
      when '대여 중' then 'checked_out'
      when '반납 완료' then 'returned'
      when '거절' then 'rejected'
      else null
    end;
  end if;

  if notification_event is not null then
    insert into public.notification_outbox (request_id, event_type, recipient_email, payload)
    values (
      new.id,
      notification_event,
      lower(trim(new.requester_email)),
      jsonb_build_object(
        'request_id', new.id,
        'event_type', notification_event,
        'requester_name', new.requester_name,
        'requester_email', lower(trim(new.requester_email)),
        'student_number', regexp_replace(new.student_number, '[[:space:]]', '', 'g'),
        'requester_phone', new.requester_phone,
        'purpose', new.purpose,
        'start_date', new.start_date,
        'end_date', new.end_date,
        'request_type', new.request_type,
        'return_components_confirmed', new.return_components_confirmed,
        'status', new.status,
        'note', new.note
      )
    )
    on conflict (request_id, event_type) do nothing;
  end if;
  return new;
end;
$$;

drop trigger if exists rental_request_notification_insert on public.rental_requests;
create trigger rental_request_notification_insert
after insert on public.rental_requests
for each row execute function public.enqueue_rental_notification();

drop trigger if exists rental_request_notification_status on public.rental_requests;
create trigger rental_request_notification_status
after update of status on public.rental_requests
for each row execute function public.enqueue_rental_notification();

alter table public.equipment enable row level security;
alter table public.rental_requests enable row level security;
alter table public.rental_request_items enable row level security;
alter table public.notification_outbox enable row level security;

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

drop policy if exists "notification_outbox_select_owner" on public.notification_outbox;
create policy "notification_outbox_select_owner"
on public.notification_outbox for select
to authenticated
using (
  exists (
    select 1 from public.rental_requests r
    where r.id = request_id and r.requester_id = auth.uid()
  )
);
