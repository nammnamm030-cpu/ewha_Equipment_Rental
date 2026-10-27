# 빌려봄 Supabase 적용 안내

## 적용 순서

1. 실제 Supabase 프로젝트를 생성하고 프로젝트 URL과 **anon public key**를 확인합니다.
2. Supabase SQL Editor에서 `migrations/001_initial_schema.sql`을 전체 실행합니다.
3. 그 다음 `seed.sql`을 실행하면 CSV 원본의 72개 장비가 `asset_no`를 기준으로 upsert됩니다. 반복 실행해도 중복 생성이 없습니다.
4. `supabase-config.js.example`을 `equipment-rental/dist/supabase-config.js`로 복사하고 아래 값을 채웁니다.

   ```js
   window.BORROWBOM_SUPABASE_CONFIG = {
     url: "https://YOUR_PROJECT_REF.supabase.co",
     anonKey: "YOUR_SUPABASE_ANON_KEY"
   };
   ```

5. `dist/index.html`의 `supabase-adapter.js` 스크립트 앞에 설정 파일을 추가합니다.

   ```html
   <script src="supabase-config.js" defer></script>
   <script src="supabase-adapter.js" defer></script>
   ```

6. 정적 호스팅에 `dist` 디렉터리를 배포합니다. `supabase-config.js`와 실제 키는 Git에 커밋하지 마세요.

7. Supabase Database Webhook에서 `public.notification_outbox` 테이블의 **INSERT**를 감지하도록 설정하고, `send-rental-notification` Edge Function을 webhook 대상으로 지정합니다.
8. Edge Function을 배포하고 secrets를 설정합니다.

   ```bash
   supabase functions deploy send-rental-notification
   supabase secrets set RESEND_API_KEY=re_xxxxxxxxx MAIL_FROM="빌려봄 <no-reply@example.edu>"
   ```

   `RESEND_API_KEY`는 Resend API 키이고, `MAIL_FROM`은 Resend에서 검증한 발송자 주소여야 합니다. 실제 메일 발송에는 Resend 또는 동일한 메일 공급자 계정이 필요합니다.

## 프론트 동작 방식

- 설정 파일이 없거나 placeholder 값이면 기존 목업 데이터와 `localStorage` 흐름을 그대로 사용합니다.
- 유효한 URL·anon key가 있으면 `equipment` 조회를 우선하고, 조회 실패 또는 CDN 로드 실패 시 목업 데이터로 자동 회귀합니다.
- 대여 신청은 `rental_requests` 한 행과 `rental_request_items` 여러 행을 함께 생성하도록 준비되어 있습니다. 신청 기간이 다른 장비는 신청 범위에서 최소 시작일과 최대 반납일을 사용합니다.

## Auth / RLS 주의사항

- `equipment` 조회는 anon/authenticated에게 공개로 허용합니다.
- `rental_requests` 조회와 수정은 `requester_id = auth.uid()`인 인증 사용자만 할 수 있습니다.
- 마이그레이션에는 연동 준비와 데모 경로를 위해 `requester_id IS NULL` 신청 insert 정책이 포함되어 있습니다. 이 데모 예외는 신청 조회를 허용하지 않으며, 실제 학교 운영 시에는 Auth 로그인을 먼저 구현하고 해당 insert 정책을 `requester_id = auth.uid()`로 제한하세요.
- 실제 사용 전에는 Supabase Auth 사용자 정책, 이메일 확인, 신청자 프로필 저장 방식을 학교 운영 정책과 맞춰 결정해야 합니다.

## 학생 전용 정책

- 대여 신청 폼은 학교 이메일과 학번을 필수로 받습니다.
- 이메일은 대소문자를 무시하고 `@ewhain.net` 또는 `@ewha.ac.kr`로 끝나야 합니다. 프론트와 DB CHECK 둘 다단계에서 거절합니다.
- 학번은 공백을 제거한 뒤 숫자 6~12자리여야 합니다. 학교 실제 규칙이 달라질 수 있으므로, 후속 정책 확정 시 `student-validation.js` 와 마이그레이션 CHECK를 함께 조정하세요.
- 설정 없는 인증 데모 fallback은 브라우저 로컬에 신청을 보관하며, 실제 신청으로 전환할 때는 Auth 로그인과 학생 이메일 정책을 먼저 설정해야 합니다.

## 메일 알림 흐름

`rental_requests` 생성 시 `request_submitted`, 상태가 승인되면 `approved`, 대여 중이 되면 `checked_out`, 반납 완료면 `returned`, 거절되면 `rejected` 이벤트가 `notification_outbox`에 기록됩니다. `(request_id, event_type)` unique 키로 중복 알림을 방지하고, Database Webhook이 INSERT 레코드를 Edge Function으로 넘겨 Resend HTTP API로 한국어 메일을 발송합니다. 함수는 신청·승인·대여 시작·반납 완료·거절 상태별로 제목과 본문을 구분하며, 환경변수가 없으면 비밀값을 로그로 남기지 않고 JSON 오류를 반환합니다.

## 현재 연결 상태

### 연결 대기

이 저장소에는 실제 Supabase URL과 anon key가 제공되지 않아 실제 프로젝트 연결은 시도하지 않았습니다. 값을 준비하면 위 순서로 마이그레이션과 시드를 적용한 뒤 정적 호스팅에 설정 파일을 주입해 연결하세요.
