(function attachStudentValidation(global) {
  "use strict";

  var allowedDomains = ["ewhain.net", "ewha.ac.kr"];

  function normalizeEmail(value) {
    return String(value || "").trim().toLowerCase();
  }

  function normalizeStudentNumber(value) {
    return String(value || "").replace(/[\s\u00a0]+/g, "");
  }

  function normalizePhone(value) {
    return String(value || "").replace(/[^0-9]/g, "");
  }

  function validateName(value) {
    var normalized = String(value || "").trim().replace(/[\s]+/g, " ");
    var valid = normalized.length >= 2;
    return { valid: valid, value: normalized, message: valid ? "" : "이름을 2자 이상 입력해주세요." };
  }

  function validatePhone(value) {
    var normalized = normalizePhone(value);
    var valid = /^[0-9]{9,11}$/.test(normalized);
    return { valid: valid, value: normalized, message: valid ? "" : "전화번호를 숫자 9~11자리로 입력해주세요." };
  }

  function validateEmail(value) {
    var normalized = normalizeEmail(value);
    var atIndex = normalized.lastIndexOf("@");
    var domain = atIndex === -1 ? "" : normalized.slice(atIndex + 1);
    var localPart = atIndex === -1 ? "" : normalized.slice(0, atIndex);
    var valid = Boolean(localPart) && allowedDomains.includes(domain) && /^[^@\s]+$/.test(localPart);
    return { valid: valid, value: normalized, message: valid ? "" : "이화 학교 이메일(@ewhain.net 또는 @ewha.ac.kr)을 입력해주세요." };
  }

  function validateStudentNumber(value) {
    var normalized = normalizeStudentNumber(value);
    var valid = /^[0-9]{6,12}$/.test(normalized);
    return { valid: valid, value: normalized, message: valid ? "" : "학번은 공백을 제외한 숫자 6~12자리로 입력해주세요." };
  }

  global.BorrowbomStudentValidation = {
    allowedDomains: allowedDomains.slice(),
    normalizeEmail: normalizeEmail,
    normalizeStudentNumber: normalizeStudentNumber,
    normalizePhone: normalizePhone,
    validateName: validateName,
    validatePhone: validatePhone,
    validateEmail: validateEmail,
    validateStudentNumber: validateStudentNumber
  };
})(window);
