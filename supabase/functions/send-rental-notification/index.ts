import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const eventCopy = {
  request_submitted: { subject: "[이화 조형예대 장비 대여] 대여 신청이 접수되었어요", lead: "기자재 대여 신청이 접수되었습니다." },
  approved: { subject: "[이화 조형예대 장비 대여] 대여 신청이 승인되었어요", lead: "신청하신 기자재 대여가 승인되었습니다." },
  checked_out: { subject: "[이화 조형예대 장비 대여] 대여가 시작되었어요", lead: "기자재 대여가 시작되었습니다." },
  returned: { subject: "[이화 조형예대 장비 대여] 반납이 완료되었어요", lead: "기자재 반납 처리가 완료되었습니다." },
  rejected: { subject: "[이화 조형예대 장비 대여] 대여 신청 결과를 확인해주세요", lead: "기자재 대여 신청이 거절되었습니다." }
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}

function text(value, fallback = "-") {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function htmlEscape(value) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] || character);
}

function buildMessage(record) {
  const eventType = record.event_type;
  if (!eventType || !eventCopy[eventType]) return null;
  const payload = record.payload || {};
  const copy = eventCopy[eventType];
  const requesterName = text(payload.requester_name, "학생");
  const purpose = text(payload.purpose);
  const startDate = text(payload.start_date);
  const endDate = text(payload.end_date);
  const note = text(payload.note, "별도 안내 없음");
  const plainText = `${requesterName}님,\n\n${copy.lead}\n\n이용 목적: ${purpose}\n대여 기간: ${startDate} ~ ${endDate}\n안내: ${note}\n\n이화 조형예대 장비 대여 드림`;
  const html = `<div style="font-family:Arial,sans-serif;line-height:1.7;color:#19150f"><h2>${htmlEscape(copy.subject)}</h2><p>${htmlEscape(requesterName)}님,</p><p>${htmlEscape(copy.lead)}</p><dl><dt>이용 목적</dt><dd>${htmlEscape(purpose)}</dd><dt>대여 기간</dt><dd>${htmlEscape(startDate)} ~ ${htmlEscape(endDate)}</dd><dt>안내</dt><dd>${htmlEscape(note)}</dd></dl><p>이화 조형예대 장비 대여 드림</p></div>`;
  return { subject: copy.subject, plainText, html };
}

serve(async (request) => {
  if (request.method !== "POST") return json({ ok: false, error: "POST 요청만 허용됩니다." }, 405);

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const mailFrom = Deno.env.get("MAIL_FROM");
  if (!resendApiKey || !mailFrom) {
    return json({ ok: false, error: "메일 발송 환경변수가 설정되지 않았습니다." }, 500);
  }

  let webhook;
  try {
    webhook = await request.json();
  } catch (_) {
    return json({ ok: false, error: "Webhook JSON을 읽을 수 없습니다." }, 400);
  }

  const record = webhook.record || {};
  const recipient = text(record.recipient_email, "");
  const message = buildMessage(record);
  if (!recipient || !message) return json({ ok: false, error: "알림 레코드가 올바르지 않습니다." }, 400);

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendApiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: mailFrom, to: [recipient], subject: message.subject, html: message.html, text: message.plainText })
    });
    if (!resendResponse.ok) return json({ ok: false, error: "메일 공급자 요청이 실패했습니다." }, 502);
    const result = await resendResponse.json().catch(() => ({}));
    return json({ ok: true, provider_id: result.id || null });
  } catch (_) {
    return json({ ok: false, error: "메일 공급자에 연결할 수 없습니다." }, 502);
  }
});
