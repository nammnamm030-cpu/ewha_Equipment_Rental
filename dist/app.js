"use strict";

const mockEquipment = [
  {
    id: "CAM-01", name: "Sony A7 IV 미러리스", category: "카메라", symbol: "📷", stock: 3, total: 4,
    description: "수업 촬영과 콘텐츠 제작에 적합한 4K 풀프레임 카메라",
    location: "미디어관 2층 장비실", deposit: "없음", maxDays: 3, color: "#e8edf1",
    components: ["바디", "24–70mm 렌즈", "배터리 2개", "충전기", "SD 카드 128GB", "파우치"],
    caution: "렌즈 교환 시 먼지가 들어가지 않도록 주의하고, 우천 시 야외 사용을 피해주세요."
  },
  {
    id: "CAM-02", name: "Canon EOS R10 키트", category: "카메라", symbol: "📸", stock: 2, total: 2,
    description: "가벼운 바디와 빠른 AF로 행사·인물 촬영에 좋은 카메라",
    location: "미디어관 2층 장비실", deposit: "없음", maxDays: 3, color: "#f1ebe5",
    components: ["바디", "18–45mm 렌즈", "배터리 2개", "충전기", "SD 카드 64GB"],
    caution: "반납 전 개인 촬영 데이터를 백업하고 메모리 카드를 포맷해주세요."
  },
  {
    id: "PRJ-01", name: "Epson 레이저 프로젝터", category: "프로젝터", symbol: "🖥️", stock: 4, total: 5,
    description: "4,500안시 Full HD, 밝은 강의실에서도 선명한 이동식 프로젝터",
    location: "학생회관 1층 기자재실", deposit: "없음", maxDays: 2, color: "#e7f1f5",
    components: ["본체", "전원 케이블", "HDMI 케이블", "리모컨", "전용 가방"],
    caution: "사용 후 냉각 팬이 멈춘 뒤 전원 케이블을 분리해주세요."
  },
  {
    id: "AUD-01", name: "JBL EON One Compact", category: "음향", symbol: "🔊", stock: 2, total: 3,
    description: "충전식 배터리로 야외 행사에도 적합한 휴대용 PA 스피커",
    location: "대강당 B1 음향실", deposit: "없음", maxDays: 2, color: "#e8eaed",
    components: ["스피커 본체", "전원 케이블", "XLR 케이블", "스피커 커버"],
    caution: "물기가 닿지 않는 평탄한 곳에 설치하고 최대 음량을 장시간 사용하지 마세요."
  },
  {
    id: "AUD-02", name: "RØDE Wireless GO II", category: "음향", symbol: "🎤", stock: 0, total: 4,
    description: "2채널 녹음과 내장 메모리를 지원하는 무선 마이크 세트",
    location: "미디어관 2층 장비실", deposit: "없음", maxDays: 3, color: "#f0ece9",
    components: ["송신기 2개", "수신기 1개", "핀마이크 2개", "USB-C 케이블", "파우치"],
    caution: "송신기와 수신기의 번호를 확인하고 모든 구성품을 함께 반납해주세요."
  },
  {
    id: "LAP-01", name: "MacBook Pro 14형", category: "노트북", symbol: "💻", stock: 1, total: 3,
    description: "M3 Pro·18GB, 영상 편집과 그래픽 작업을 위한 고성능 노트북",
    location: "디지털관 3층 헬프데스크", deposit: "학생증 보관", maxDays: 5, color: "#e9eef2",
    components: ["노트북 본체", "96W 어댑터", "MagSafe 케이블", "파우치", "USB-C 허브"],
    caution: "개인 Apple ID로 로그인했다면 반납 전 반드시 로그아웃해주세요."
  },
  {
    id: "LAP-02", name: "LG gram 16", category: "노트북", symbol: "💻", stock: 5, total: 6,
    description: "발표와 문서 작업에 적합한 가벼운 16인치 Windows 노트북",
    location: "디지털관 3층 헬프데스크", deposit: "학생증 보관", maxDays: 5, color: "#edf0f7",
    components: ["노트북 본체", "USB-C 충전기", "무선 마우스", "파우치"],
    caution: "반납 전 개인 파일과 계정 정보를 반드시 삭제해주세요."
  },
  {
    id: "EVT-01", name: "접이식 행사 테이블", category: "행사 장비", symbol: "🪑", stock: 8, total: 10,
    description: "동아리 행사와 플리마켓에 쉽게 설치하는 1,800mm 접이식 테이블",
    location: "학생회관 B1 창고", deposit: "없음", maxDays: 2, color: "#f3eee7",
    components: ["접이식 테이블", "안전 고정클립 2개", "보관 커버"],
    caution: "2인 1조로 운반하고 다리를 펼 때 손이 끼이지 않도록 주의하세요."
  },
  {
    id: "EVT-02", name: "이동식 X배너 거치대", category: "행사 장비", symbol: "🏳️", stock: 6, total: 6,
    description: "600×1800mm 배너용 가벼운 알루미늄 접이식 거치대",
    location: "학생회관 B1 창고", deposit: "없음", maxDays: 3, color: "#e7f0ec",
    components: ["X배너 거치대", "운반 파우치", "고정 핀 4개"],
    caution: "야외에서는 바람에 넘어지지 않도록 추가로 고정해주세요."
  },
  {
    id: "ETC-01", name: "DJI RS 3 Mini 짐벌", category: "촬영 보조", symbol: "🎥", stock: 2, total: 2,
    description: "카메라 무빙 촬영을 위한 경량 3축 손떨림 보정 짐벌",
    location: "미디어관 2층 장비실", deposit: "없음", maxDays: 3, color: "#edecec",
    components: ["짐벌 본체", "크래들", "USB-C 케이블", "삼각대 그립", "전용 가방"],
    caution: "카메라를 장착한 후 반드시 밸런스를 맞춘 다음 전원을 켜주세요."
  }
];

let equipment = mockEquipment;
let categories = ["전체", ...new Set(equipment.map((item) => item.category))];
const storageKeys = { cart: "borrowbom-cart-v1", applications: "borrowbom-applications-v1" };
const statusLabels = { applied: "신청", approved: "승인", renting: "대여 중", returned: "반납 완료" };

const demoRentals = [
  { id: "DEMO-1", equipmentId: "PRJ-01", name: "Epson 레이저 프로젝터", symbol: "🖥️", color: "#e7f1f5", startDate: "2026-11-03", endDate: "2026-11-04", purpose: "전공 발표", location: "학생회관 1층 기자재실", status: "approved" },
  { id: "DEMO-2", equipmentId: "CAM-02", name: "Canon EOS R10 키트", symbol: "📸", color: "#f1ebe5", startDate: "2026-10-27", endDate: "2026-10-29", purpose: "학과 행사 촬영", location: "미디어관 2층 장비실", status: "renting" },
  { id: "DEMO-3", equipmentId: "ETC-01", name: "DJI RS 3 Mini 짐벌", symbol: "🎥", color: "#edecec", startDate: "2026-10-10", endDate: "2026-10-11", purpose: "홍보 영상 촬영", location: "미디어관 2층 장비실", status: "returned" },
  { id: "DEMO-4", equipmentId: "EVT-02", name: "이동식 X배너 거치대", symbol: "🏳️", color: "#e7f0ec", startDate: "2026-11-12", endDate: "2026-11-13", purpose: "동아리 홍보 부스", location: "학생회관 B1 창고", status: "applied" }
];

const state = {
  category: "전체",
  query: "",
  availableOnly: false,
  cart: readStorage(storageKeys.cart, []),
  applications: readStorage(storageKeys.applications, [])
};

const elements = {
  grid: document.querySelector("#equipmentGrid"), filters: document.querySelector("#categoryFilters"),
  search: document.querySelector("#searchInput"), available: document.querySelector("#availableOnly"),
  result: document.querySelector("#resultSummary"), empty: document.querySelector("#emptyState"),
  detailDialog: document.querySelector("#detailDialog"), detailContent: document.querySelector("#detailContent"),
  basketDialog: document.querySelector("#basketDialog"), basketBody: document.querySelector("#basketBody"),
  basketCount: document.querySelector("#basketCount"), rentalList: document.querySelector("#rentalList"),
  toast: document.querySelector("#toast")
};

function readStorage(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    return Array.isArray(parsed) ? parsed : fallback;
  } catch (_) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (_) {
    showToast("브라우저 저장소를 사용할 수 없어 현재 창에만 보관됩니다.");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function toLocalIso(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", weekday: "short" }).format(new Date(year, month - 1, day));
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove("show"), 2800);
}

const remoteVisuals = {
  "카메라": { symbol: "📷", color: "#e8edf1", maxDays: 3 },
  "빔프로젝터": { symbol: "🖥️", color: "#e7f1f5", maxDays: 2 },
  "TV 모니터": { symbol: "📺", color: "#e9eef2", maxDays: 3 },
  "디빅스": { symbol: "📺", color: "#f0ece9", maxDays: 3 },
  "브라켓": { symbol: "🪑", color: "#f3eee7", maxDays: 2 },
  "HDMI 선": { symbol: "🔌", color: "#e7f0ec", maxDays: 5 }
};

function normalizeRemoteEquipment(row) {
  const visual = remoteVisuals[row.equipment_type] || { symbol: "📦", color: "#edf2f6", maxDays: 3 };
  const displayParts = [row.model_name, row.spec].filter(Boolean);
  const name = displayParts.length ? `${row.equipment_type} · ${displayParts.join(" ")}` : row.equipment_type;
  return {
    id: row.id,
    assetNo: row.asset_no,
    name,
    category: row.equipment_type,
    symbol: visual.symbol,
    stock: row.status === "대출 가능" ? 1 : 0,
    total: 1,
    description: row.description || `${name} · 관리번호 ${row.asset_no}`,
    location: row.storage_location,
    deposit: "없음",
    maxDays: visual.maxDays,
    color: visual.color,
    components: Array.isArray(row.components) ? row.components : [],
    caution: "사용 후 구성품을 확인하고 보관 장소에 반납해주세요."
  };
}

async function initializeSupabaseEquipment() {
  const adapter = window.BorrowbomSupabase;
  if (!adapter) return;
  try {
    await adapter.initialize(window.BORROWBOM_SUPABASE_CONFIG);
    if (!adapter.isReady()) return;
    const result = await adapter.listEquipment();
    if (result.error || !Array.isArray(result.data) || result.data.length === 0) {
      showToast("Supabase 장비를 불러오지 못해 목업 데이터를 표시합니다.");
      return;
    }
    equipment = result.data.map(normalizeRemoteEquipment);
    categories = ["전체", ...new Set(equipment.map((item) => item.category))];
    state.category = "전체";
    renderFilters();
    renderEquipment();
    document.querySelector("#totalEquipment").textContent = equipment.length;
  } catch (_) {
    showToast("Supabase 연결을 준비하지 못해 목업 데이터를 표시합니다.");
  }
}

function renderFilters() {
  elements.filters.innerHTML = categories.map((category) => `
    <button class="filter-button${state.category === category ? " active" : ""}" type="button" data-category="${category}" aria-pressed="${state.category === category}">
      ${category}${category === "전체" ? ` <span>(${equipment.length})</span>` : ""}
    </button>`).join("");
}

function renderEquipment() {
  const query = state.query.trim().toLocaleLowerCase("ko-KR");
  const filtered = equipment.filter((item) => {
    const categoryMatch = state.category === "전체" || item.category === state.category;
    const availabilityMatch = !state.availableOnly || item.stock > 0;
    const queryMatch = !query || [item.id, item.name, item.category, item.description, item.location, ...item.components].join(" ").toLocaleLowerCase("ko-KR").includes(query);
    return categoryMatch && availabilityMatch && queryMatch;
  });

  elements.grid.innerHTML = filtered.map((item) => `
    <article class="equipment-card">
      <div class="card-visual" style="--visual-bg:${item.color}">
        <span class="stock-badge ${item.stock === 0 ? "unavailable" : ""}">${item.stock > 0 ? `대여 가능 ${item.stock}개` : "현재 대여 중"}</span>
        <span class="equipment-symbol" aria-hidden="true">${item.symbol}</span>
        <span class="category-label">${item.category}</span>
      </div>
      <div class="card-body">
        <span class="card-code">${item.id}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="card-meta">
          <span>${item.location}</span>
          <button class="detail-button" type="button" data-detail-id="${item.id}" aria-label="${item.name} 상세 보기">상세 보기 <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </article>`).join("");
  elements.result.innerHTML = `총 <strong>${filtered.length}개</strong>의 장비`;
  elements.empty.hidden = filtered.length > 0;
  elements.grid.hidden = filtered.length === 0;
}

function openDetail(id) {
  const item = equipment.find((entry) => entry.id === id);
  if (!item) return;
  const today = new Date();
  const min = toLocalIso(today);
  const max = toLocalIso(addDays(today, 30));
  const defaultEnd = toLocalIso(addDays(today, Math.min(1, item.maxDays - 1)));
  elements.detailContent.innerHTML = `
    <div class="detail-layout">
      <div class="detail-visual" style="--visual-bg:${item.color}"><span class="detail-symbol" aria-hidden="true">${item.symbol}</span></div>
      <div class="detail-pane">
        <div class="dialog-topline">
          <div><p class="section-kicker">${item.category} · ${item.id}</p><h2 id="detailTitle">${item.name}</h2></div>
          <button class="icon-button close-detail" type="button" aria-label="상세 창 닫기">×</button>
        </div>
        <p class="detail-description">${item.description}</p>
        <div class="detail-facts">
          <div class="fact"><span>현재 재고</span><strong>${item.stock}개 / 총 ${item.total}개</strong></div>
          <div class="fact"><span>최대 대여</span><strong>${item.maxDays}일</strong></div>
          <div class="fact"><span>수령 장소</span><strong>${item.location}</strong></div>
          <div class="fact"><span>보증 방식</span><strong>${item.deposit}</strong></div>
        </div>
        <div class="detail-section"><h3>구성품</h3><ul>${item.components.map((part) => `<li>${part}</li>`).join("")}</ul></div>
        <div class="detail-section"><h3>사용 전 확인</h3><div class="caution"><span aria-hidden="true">⚠</span><span>${item.caution}</span></div></div>
        <form id="dateForm" novalidate>
          <div class="detail-section">
            <h3>대여 기간</h3>
            <div class="date-fields">
              <div class="field"><label for="startDate">대여일</label><input id="startDate" name="startDate" type="date" value="${min}" min="${min}" max="${max}" required /></div>
              <div class="field"><label for="endDate">반납일</label><input id="endDate" name="endDate" type="date" value="${defaultEnd}" min="${min}" max="${max}" required /></div>
            </div>
            <p class="form-error" id="dateError" role="alert"></p>
          </div>
          <button class="primary-button detail-submit" type="submit" ${item.stock === 0 ? "disabled" : ""}>${item.stock === 0 ? "현재 대여 불가" : "대여 바구니에 담기"}</button>
        </form>
      </div>
    </div>`;
  const form = elements.detailContent.querySelector("#dateForm");
  const startInput = form.elements.startDate;
  const endInput = form.elements.endDate;
  startInput.addEventListener("change", () => {
    endInput.min = startInput.value || min;
    if (endInput.value < startInput.value) endInput.value = startInput.value;
  });
  form.addEventListener("submit", (event) => addToCart(event, item));
  openDialog(elements.detailDialog);
}

function addToCart(event, item) {
  event.preventDefault();
  const form = event.currentTarget;
  const startDate = form.elements.startDate.value;
  const endDate = form.elements.endDate.value;
  const error = form.querySelector("#dateError");
  const today = toLocalIso(new Date());
  if (!startDate || !endDate) {
    error.textContent = "대여일과 반납일을 모두 선택해주세요.";
    return;
  }
  if (startDate < today || endDate < startDate) {
    error.textContent = "오늘 이후의 올바른 대여 기간을 선택해주세요.";
    return;
  }
  const days = Math.round((new Date(`${endDate}T00:00:00`) - new Date(`${startDate}T00:00:00`)) / 86400000) + 1;
  if (days > item.maxDays) {
    error.textContent = `이 장비는 최대 ${item.maxDays}일까지 대여할 수 있어요.`;
    return;
  }
  error.textContent = "";
  const cartEntry = { equipmentId: item.id, assetNo: item.assetNo || item.id, name: item.name, startDate, endDate };
  const existingIndex = state.cart.findIndex((entry) => entry.equipmentId === item.id);
  if (existingIndex >= 0) state.cart[existingIndex] = cartEntry;
  else state.cart.push(cartEntry);
  writeStorage(storageKeys.cart, state.cart);
  updateBasketCount();
  closeDialog(elements.detailDialog);
  showToast(`${item.name}을(를) 대여 바구니에 담았어요.`);
}

function renderBasket() {
  if (state.cart.length === 0) {
    elements.basketBody.innerHTML = `
      <div class="empty-basket"><span aria-hidden="true">🧺</span><h3>대여 바구니가 비어 있어요</h3><p>필요한 장비를 찾고 대여 일정을 선택해주세요.</p><button class="secondary-button browse-equipment" type="button">장비 찾아보기</button></div>`;
    return;
  }
  const items = state.cart.map((entry) => ({ ...entry, item: equipment.find((item) => item.id === entry.equipmentId) })).filter((entry) => entry.item);
  elements.basketBody.innerHTML = `
    <div class="basket-items">
      ${items.map(({ item, startDate, endDate }) => `
        <div class="basket-item">
          <div class="basket-item-visual" style="--item-bg:${item.color}" aria-hidden="true">${item.symbol}</div>
          <div><strong>${item.name}</strong><span>${formatDate(startDate)} → ${formatDate(endDate)} · ${item.location}</span></div>
          <button class="remove-button" type="button" data-remove-id="${item.id}" aria-label="${item.name} 바구니에서 삭제">삭제</button>
        </div>`).join("")}
    </div>
    <form id="applicationForm" novalidate>
      <div class="student-fields">
        <div class="field"><label for="requesterEmail">학교 이메일 <span aria-hidden="true">*</span></label><input id="requesterEmail" name="requesterEmail" type="email" inputmode="email" autocomplete="email" placeholder="name@ewha.ac.kr" required /></div>
        <div class="field"><label for="studentNumber">학번 <span aria-hidden="true">*</span></label><input id="studentNumber" name="studentNumber" type="text" inputmode="numeric" autocomplete="off" maxlength="12" placeholder="6~12자리 숫자" required /></div>
      </div>
      <p class="form-error" id="studentError" role="alert"></p>
      <div class="purpose-field">
        <label for="rentalPurpose">이용 목적 <span aria-hidden="true">*</span></label>
        <textarea id="rentalPurpose" name="purpose" maxlength="100" placeholder="예: 전공 수업 팀 프로젝트 영상 촬영" required></textarea>
        <span class="char-count"><span id="purposeCount">0</span>/100자</span>
        <p class="form-error" id="purposeError" role="alert"></p>
      </div>
      <div class="basket-summary"><span>신청 장비</span><strong>${items.length}개</strong></div>
      <button class="primary-button submit-application" type="submit">대여 신청 완료하기</button>
      <p class="basket-notice">신청 후 담당자 승인이 필요하며, 결과는 나의 대여에서 확인할 수 있어요.</p>
    </form>`;
  const purpose = elements.basketBody.querySelector("#rentalPurpose");
  purpose.addEventListener("input", () => { elements.basketBody.querySelector("#purposeCount").textContent = purpose.value.length; });
  const applicationForm = elements.basketBody.querySelector("#applicationForm");
  [applicationForm.elements.requesterEmail, applicationForm.elements.studentNumber].forEach((field) => {
    field.addEventListener("input", () => validateStudentFields(applicationForm, true));
    field.addEventListener("blur", () => validateStudentFields(applicationForm, true));
  });
  applicationForm.addEventListener("submit", submitApplication);
}

function getStudentValidation() {
  if (window.BorrowbomStudentValidation) return window.BorrowbomStudentValidation;
  return {
    validateEmail(value) {
      const normalized = String(value || "").trim().toLowerCase();
      const valid = /^[^@\s]+@(ewhain\.net|ewha\.ac\.kr)$/.test(normalized);
      return { valid, value: normalized, message: valid ? "" : "이화 학교 이메일(@ewhain.net 또는 @ewha.ac.kr)을 입력해주세요." };
    },
    validateStudentNumber(value) {
      const normalized = String(value || "").replace(/[\s\u00a0]+/g, "");
      const valid = /^[0-9]{6,12}$/.test(normalized);
      return { valid, value: normalized, message: valid ? "" : "학번은 공백을 제외한 숫자 6~12자리로 입력해주세요." };
    }
  };
}

function validateStudentFields(form, showMessage) {
  const validation = getStudentValidation();
  const emailResult = validation.validateEmail(form.elements.requesterEmail.value);
  const numberResult = validation.validateStudentNumber(form.elements.studentNumber.value);
  const error = form.querySelector("#studentError");
  const emailInput = form.elements.requesterEmail;
  const numberInput = form.elements.studentNumber;
  emailInput.setAttribute("aria-invalid", String(!emailResult.valid));
  numberInput.setAttribute("aria-invalid", String(!numberResult.valid));
  if (showMessage) error.textContent = emailResult.valid ? (numberResult.valid ? "" : numberResult.message) : emailResult.message;
  return { valid: emailResult.valid && numberResult.valid, email: emailResult.value, studentNumber: numberResult.value };
}

async function submitApplication(event) {
  event.preventDefault();
  const purpose = event.currentTarget.elements.purpose.value.trim();
  const error = event.currentTarget.querySelector("#purposeError");
  if (purpose.length < 5) {
    error.textContent = "이용 목적을 5자 이상 입력해주세요.";
    event.currentTarget.elements.purpose.focus();
    return;
  }
  const studentDetails = validateStudentFields(event.currentTarget, true);
  if (!studentDetails.valid) {
    if (!studentDetails.email) event.currentTarget.elements.requesterEmail.focus();
    else if (!studentDetails.studentNumber) event.currentTarget.elements.studentNumber.focus();
    return;
  }
  const submitButton = event.currentTarget.querySelector(".submit-application");
  submitButton.disabled = true;
  submitButton.textContent = "신청 저장 중…";
  const requestItems = state.cart.map((entry) => ({
    ...entry,
    item: equipment.find((equipmentItem) => equipmentItem.id === entry.equipmentId)
  })).filter((entry) => entry.item);
  const adapter = window.BorrowbomSupabase;
  let remoteRequestId = null;
  if (adapter && adapter.isReady() && requestItems.length) {
    const startDate = requestItems.map((entry) => entry.startDate).sort()[0];
    const endDate = requestItems.map((entry) => entry.endDate).sort().slice(-1)[0];
    try {
      const remoteResult = await adapter.createRentalRequest({
        purpose,
        requesterEmail: studentDetails.email,
        studentNumber: studentDetails.studentNumber,
        startDate,
        endDate,
        items: requestItems.map((entry) => ({ equipmentId: entry.item.id, assetNo: entry.item.assetNo || entry.assetNo || entry.item.id, name: entry.item.name }))
      });
      if (remoteResult.error) {
        submitButton.disabled = false;
        submitButton.textContent = "대여 신청 완료하기";
        error.textContent = "Supabase에 신청을 저장하지 못했어요. 잠시 후 다시 시도해주세요.";
        return;
      }
      remoteRequestId = remoteResult.data && remoteResult.data.id;
    } catch (_) {
      submitButton.disabled = false;
      submitButton.textContent = "대여 신청 완료하기";
      error.textContent = "Supabase 연결 중 문제가 발생했어요. 신청 내용은 유지됩니다.";
      return;
    }
  }
  const timestamp = Date.now();
  const newApplications = requestItems.map((entry, index) => {
    const item = equipment.find((equipmentItem) => equipmentItem.id === entry.equipmentId);
    return {
      id: `APP-${timestamp}-${index}`,
      equipmentId: item.id, name: item.name, symbol: item.symbol, color: item.color,
      assetNo: item.assetNo || entry.assetNo || item.id,
      remoteRequestId, requesterEmail: studentDetails.email, studentNumber: studentDetails.studentNumber,
      startDate: entry.startDate, endDate: entry.endDate, purpose,
      location: item.location, status: "applied", createdAt: new Date().toISOString()
    };
  });
  state.applications = [...newApplications, ...state.applications];
  state.cart = [];
  writeStorage(storageKeys.applications, state.applications);
  writeStorage(storageKeys.cart, state.cart);
  updateBasketCount();
  renderRentals();
  closeDialog(elements.basketDialog);
  document.querySelector("#my-rentals").scrollIntoView({ behavior: "smooth", block: "start" });
  const mailNotice = adapter && adapter.isReady()
    ? `알림 메일은 ${studentDetails.email}로 notification_outbox에 기록되어 Edge Function이 발송해요.`
    : `Supabase 연결 후 ${studentDetails.email}로 notification_outbox·Edge Function 메일이 발송됩니다.`;
  showToast(`대여 신청 ${newApplications.length}건이 접수되었어요. ${mailNotice}`);
}

function renderRentals() {
  const rentals = [...state.applications, ...demoRentals];
  elements.rentalList.innerHTML = rentals.map((rental) => `
    <article class="rental-item">
      <div class="rental-thumb" style="--thumb-bg:${rental.color}" aria-hidden="true">${rental.symbol}</div>
      <div class="rental-name"><strong>${escapeHtml(rental.name)}</strong><span>${escapeHtml(rental.equipmentId)} · ${escapeHtml(rental.purpose)}</span></div>
      <div class="rental-detail"><small>대여 기간</small><strong>${formatDate(rental.startDate)} – ${formatDate(rental.endDate)}</strong></div>
      <div class="rental-detail"><small>수령 장소</small><strong>${escapeHtml(rental.location)}</strong></div>
      <span class="status-chip ${rental.status}">${statusLabels[rental.status]}</span>
    </article>`).join("");
}

function updateBasketCount() {
  elements.basketCount.textContent = state.cart.length;
  elements.basketCount.setAttribute("aria-label", `${state.cart.length}개`);
}

function openDialog(dialog) {
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("modal-open");
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
  document.body.classList.remove("modal-open");
}

elements.filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  renderEquipment();
});

elements.grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail-id]");
  if (button) openDetail(button.dataset.detailId);
});

elements.search.addEventListener("input", (event) => { state.query = event.target.value; renderEquipment(); });
elements.available.addEventListener("change", (event) => { state.availableOnly = event.target.checked; renderEquipment(); });
document.querySelector("#resetFilters").addEventListener("click", () => {
  state.category = "전체"; state.query = ""; state.availableOnly = false;
  elements.search.value = ""; elements.available.checked = false;
  renderFilters(); renderEquipment(); elements.search.focus();
});

document.querySelector("#basketButton").addEventListener("click", () => { renderBasket(); openDialog(elements.basketDialog); });
elements.detailDialog.addEventListener("click", (event) => { if (event.target.closest(".close-detail")) closeDialog(elements.detailDialog); });
elements.basketDialog.addEventListener("click", (event) => {
  if (event.target.closest(".close-dialog")) closeDialog(elements.basketDialog);
  const remove = event.target.closest("[data-remove-id]");
  if (remove) {
    state.cart = state.cart.filter((entry) => entry.equipmentId !== remove.dataset.removeId);
    writeStorage(storageKeys.cart, state.cart); updateBasketCount(); renderBasket(); showToast("바구니에서 장비를 삭제했어요.");
  }
  if (event.target.closest(".browse-equipment")) { closeDialog(elements.basketDialog); document.querySelector("#equipment").scrollIntoView({ behavior: "smooth" }); }
});

[elements.detailDialog, elements.basketDialog].forEach((dialog) => {
  dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) closeDialog(dialog);
  });
});

renderFilters();
renderEquipment();
renderRentals();
updateBasketCount();
document.querySelector("#totalEquipment").textContent = equipment.reduce((sum, item) => sum + item.total, 0);
initializeSupabaseEquipment();
