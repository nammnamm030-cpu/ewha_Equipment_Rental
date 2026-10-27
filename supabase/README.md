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

## 프론트 동작 방식

- 설정 파일이 없거나 placeholder 값이면 기존 목업 데이터와 `localStorage` 흐름을 그대로 사용합니다.
- 유효한 URL·anon key가 있으면 `equipment` 조회를 우선하고, 조회 실패 또는 CDN 로드 실패 시 목업 데이터로 자동 회귀합니다.
- 대여 신청은 `rental_requests` 한 행과 `rental_request_items` 여러 행을 함께 생성하도록 준비되어 있습니다. 신청 기간이 다른 장비는 신청 범위에서 최소 시작일과 최대 반납일을 사용합니다.

## Auth / RLS 주의사항

- `equipment` 조회는 anon/authenticated에게 공개로 허용합니다.
- `rental_requests` 조회와 수정은 `requester_id = auth.uid()`인 인증 사용자만 할 수 있습니다.
- 마이그레이션에는 연동 준비와 데모 경로를 위해 `requester_id IS NULL` 신청 insert 정책이 포함되어 있습니다. 이 데모 예외는 신청 조회를 허용하지 않으며, 실제 학교 운영 시에는 Auth 로그인을 먼저 구현하고 해당 insert 정책을 `requester_id = auth.uid()`로 제한하세요.
- 실제 사용 전에는 Supabase Auth 사용자 정책, 이메일 확인, 신청자 프로필 저장 방식을 학교 운영 정책과 맞춰 결정해야 합니다.

## 현재 연결 상태

### 연결 대기

이 저장소에는 실제 Supabase URL과 anon key가 제공되지 않아 실제 프로젝트 연결은 시도하지 않았습니다. 값을 준비하면 위 순서로 마이그레이션과 시드를 적용한 뒤 정적 호스팅에 설정 파일을 주입해 연결하세요.
