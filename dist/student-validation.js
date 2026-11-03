(function attachStudentValidation(global) {
  "use strict";

  var allowedDomains = ["ewhain.net", "ewha.ac.kr"];
  var language = "ko";
  function message(ko, en) { return language === "en" ? en : ko; }

  function normalizeEmail(value) {
    return String(value || "").trim().toLowerCase();
  }

  function normalizeStudentNumber(value) {
    return String(value || "").trim().toUpperCase();
  }

  function normalizePhone(value) {
    return String(value || "").replace(/[^0-9]/g, "");
  }

  function validateName(value) {
    var normalized = String(value || "").trim().replace(/[\s]+/g, " ");
    var valid = normalized.length >= 2;
    return { valid: valid, value: normalized, message: valid ? "" : message("이름을 2자 이상 입력해주세요.", "Enter at least 2 characters for your name.") };
  }

  function validatePhone(value) {
    var normalized = normalizePhone(value);
    var valid = /^[0-9]{9,11}$/.test(normalized);
    return { valid: valid, value: normalized, message: valid ? "" : message("전화번호를 숫자 9~11자리로 입력해주세요.", "Enter a phone number with 9–11 digits.") };
  }

  function validateEmail(value) {
    var normalized = normalizeEmail(value);
    var atIndex = normalized.lastIndexOf("@");
    var domain = atIndex === -1 ? "" : normalized.slice(atIndex + 1);
    var localPart = atIndex === -1 ? "" : normalized.slice(0, atIndex);
    var valid = Boolean(localPart) && allowedDomains.includes(domain) && /^[^@\s]+$/.test(localPart);
    return { valid: valid, value: normalized, message: valid ? "" : message("이화 학교 이메일(@ewhain.net 또는 @ewha.ac.kr)을 입력해주세요.", "Use an Ewha email ending in @ewhain.net or @ewha.ac.kr.") };
  }

  function validateStudentNumber(value) {
    var normalized = normalizeStudentNumber(value);
    var valid = /^[A-Z0-9]{4,20}$/.test(normalized);
    return { valid: valid, value: normalized, message: valid ? "" : message("학번은 앞뒤 공백 없이 영문·숫자 4~20자로 입력해주세요.", "Use 4–20 letters and numbers with no spaces or symbols.") };
  }

  global.BorrowbomStudentValidation = {
    allowedDomains: allowedDomains.slice(),
    setLanguage: function (value) { language = value === "en" ? "en" : "ko"; },
    normalizeEmail: normalizeEmail,
    normalizeStudentNumber: normalizeStudentNumber,
    normalizePhone: normalizePhone,
    validateName: validateName,
    validatePhone: validatePhone,
    validateEmail: validateEmail,
    validateStudentNumber: validateStudentNumber
  };
})(window);
