(function attachBorrowbomSupabase(global) {
  "use strict";

  var CDN_URL = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
  var adapter = {
    state: "disabled",
    client: null,
    error: null,
    async initialize(config) {
      if (!config || !isUsableConfig(config)) return this;
      try {
        var supabaseModule = await loadSupabaseModule();
        this.client = supabaseModule.createClient(config.url, config.anonKey);
        this.state = "ready";
        return this;
      } catch (error) {
        this.state = "fallback";
        this.error = error instanceof Error ? error.message : "Supabase 로드 실패";
        return this;
      }
    },
    isReady() {
      return this.state === "ready" && Boolean(this.client);
    },
    async listEquipment() {
      if (!this.isReady()) return { data: null, error: this.error || "Supabase 설정 없음" };
      var result = await this.client.from("equipment").select("id,equipment_type,spec,model_name,asset_no,status,storage_location,components,description,created_at,updated_at").order("asset_no");
      return result;
    },
    async createRentalRequest(payload) {
      if (!this.isReady()) return { data: null, error: this.error || "Supabase 설정 없음" };
      var sessionResult = await this.client.auth.getSession();
      var userId = sessionResult && sessionResult.data && sessionResult.data.session ? sessionResult.data.session.user.id : null;
      var requestPayload = {
        requester_id: userId,
        requester_name: payload.requesterName,
        requester_email: payload.requesterEmail,
        student_number: payload.studentNumber,
        requester_phone: payload.requesterPhone,
        purpose: payload.purpose,
        start_date: payload.startDate,
        end_date: payload.endDate,
        status: "신청",
        request_type: payload.requestType || "대여",
        return_components_confirmed: Boolean(payload.returnComponentsConfirmed)
      };
      var requestId = global.crypto && typeof global.crypto.randomUUID === "function" ? global.crypto.randomUUID() : createFallbackUuid();
      requestPayload.id = requestId;
      var requestResult = await this.client.from("rental_requests").insert(requestPayload);
      if (requestResult.error) return { data: null, error: requestResult.error };
      var itemRows = payload.items.map(function (item) {
        return {
          request_id: requestId,
          equipment_id: item.equipmentId,
          asset_no_snapshot: item.assetNo,
          equipment_name_snapshot: item.name
        };
      });
      var itemsResult = await this.client.from("rental_request_items").insert(itemRows);
      if (itemsResult.error) return { data: null, error: itemsResult.error };
      return { data: { id: requestId }, error: null };
    },
    async listMyRentalRequests() {
      if (!this.isReady()) return { data: null, error: this.error || "Supabase 설정 없음" };
      return this.client.from("rental_requests").select("id,requester_name,requester_email,requester_phone,student_number,request_type,return_components_confirmed,purpose,start_date,end_date,status,note,created_at,rental_request_items(request_id,equipment_id,asset_no_snapshot,equipment_name_snapshot)").order("created_at", { ascending: false });
    }
  };

  function isUsableConfig(config) {
    return typeof config.url === "string" && config.url.startsWith("https://") && !config.url.includes("YOUR_PROJECT_REF") && typeof config.anonKey === "string" && config.anonKey.length > 20 && !config.anonKey.includes("YOUR_");
  }

  function loadSupabaseModule() {
    if (global.supabase && typeof global.supabase.createClient === "function") return Promise.resolve(global.supabase);
    return import(CDN_URL).then(function (module) {
      return module && typeof module.createClient === "function" ? module : Promise.reject(new Error("Supabase CDN 모듈을 찾을 수 없음"));
    });
  }

  function createFallbackUuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (char) {
      var random = Math.random() * 16 | 0;
      var value = char === "x" ? random : random & 3 | 8;
      return value.toString(16);
    });
  }

  global.BorrowbomSupabase = adapter;
})(window);
