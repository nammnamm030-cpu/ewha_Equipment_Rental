"use strict";

const fallbackEquipment = [
  {"id":"CAM-2024-001","assetNo":"CAM-2024-001","name":"카메라 · Canon","category":"카메라","symbol":"📷","stock":0,"total":1,"description":"카메라 · Canon · 관리번호 CAM-2024-001","location":"413호","deposit":"없음","maxDays":3,"color":"#e8edf1","components":["카메라 파우치","충전선","배터리 2개","어댑터"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"CAM-2024-002","assetNo":"CAM-2024-002","name":"카메라 · Canon","category":"카메라","symbol":"📷","stock":1,"total":1,"description":"카메라 · Canon · 관리번호 CAM-2024-002","location":"413호","deposit":"없음","maxDays":3,"color":"#e8edf1","components":["카메라 파우치","충전선","배터리 2개","어댑터"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"CAM-2025-003","assetNo":"CAM-2025-003","name":"카메라 · Canon","category":"카메라","symbol":"📷","stock":0,"total":1,"description":"카메라 · Canon · 관리번호 CAM-2025-003","location":"413호","deposit":"없음","maxDays":3,"color":"#e8edf1","components":["카메라 파우치","충전선","배터리 2개","어댑터"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"CAM-2025-004","assetNo":"CAM-2025-004","name":"카메라 · Canon","category":"카메라","symbol":"📷","stock":0,"total":1,"description":"카메라 · Canon · 관리번호 CAM-2025-004","location":"413호","deposit":"없음","maxDays":3,"color":"#e8edf1","components":["카메라 파우치","충전선","배터리 2개","어댑터"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"CAM-2026-005","assetNo":"CAM-2026-005","name":"카메라 · Canon","category":"카메라","symbol":"📷","stock":0,"total":1,"description":"카메라 · Canon · 관리번호 CAM-2026-005","location":"413호","deposit":"없음","maxDays":3,"color":"#e8edf1","components":["카메라 파우치","충전선","배터리 2개","어댑터"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2025-001","assetNo":"BIM-2025-001","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2025-001","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-002","assetNo":"BIM-2026-002","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-002","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-003","assetNo":"BIM-2026-003","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-003","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-004","assetNo":"BIM-2026-004","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-004","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-005","assetNo":"BIM-2026-005","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-005","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-006","assetNo":"BIM-2026-006","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-006","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-007","assetNo":"BIM-2026-007","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-007","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-008","assetNo":"BIM-2026-008","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-008","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-009","assetNo":"BIM-2026-009","name":"빔프로젝터 · panasonic · 7000안시","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · panasonic · 7000안시 · 관리번호 BIM-2026-009","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-010","assetNo":"BIM-2026-010","name":"빔프로젝터 · DLP (미니) · 500안시","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · DLP (미니) · 500안시 · 관리번호 BIM-2026-010","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-011","assetNo":"BIM-2026-011","name":"빔프로젝터 · DLP (미니) · 500안시","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · DLP (미니) · 500안시 · 관리번호 BIM-2026-011","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-012","assetNo":"BIM-2026-012","name":"빔프로젝터 · DLP (미니) · 500안시","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · DLP (미니) · 500안시 · 관리번호 BIM-2026-012","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-013","assetNo":"BIM-2026-013","name":"빔프로젝터 · LC-XL200K · 6000안시","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · LC-XL200K · 6000안시 · 관리번호 BIM-2026-013","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-014","assetNo":"BIM-2026-014","name":"빔프로젝터 · Epson · 1000안시","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · Epson · 1000안시 · 관리번호 BIM-2026-014","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-015","assetNo":"BIM-2026-015","name":"빔프로젝터 · Epson · 1000안시","category":"빔프로젝터","symbol":"🖥️","stock":1,"total":1,"description":"빔프로젝터 · Epson · 1000안시 · 관리번호 BIM-2026-015","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-001","assetNo":"TV-2025-001","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-001","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-002","assetNo":"TV-2025-002","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-002","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-003","assetNo":"TV-2025-003","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-003","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-004","assetNo":"TV-2025-004","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-004","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-005","assetNo":"TV-2025-005","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-005","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-006","assetNo":"TV-2025-006","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-006","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-007","assetNo":"TV-2025-007","name":"TV 모니터 · samsung · 42인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 42인치 · 관리번호 TV-2025-007","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-008","assetNo":"TV-2025-008","name":"TV 모니터 · samsung · 55인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 55인치 · 관리번호 TV-2025-008","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-009","assetNo":"TV-2025-009","name":"TV 모니터 · samsung · 55인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 55인치 · 관리번호 TV-2025-009","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-010","assetNo":"TV-2025-010","name":"TV 모니터 · samsung · 55인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 55인치 · 관리번호 TV-2025-010","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-011","assetNo":"TV-2025-011","name":"TV 모니터 · samsung · 65인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 65인치 · 관리번호 TV-2025-011","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-012","assetNo":"TV-2025-012","name":"TV 모니터 · samsung · 72인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 72인치 · 관리번호 TV-2025-012","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-013","assetNo":"TV-2025-013","name":"TV 모니터 · samsung · 72인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 72인치 · 관리번호 TV-2025-013","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-014","assetNo":"TV-2025-014","name":"TV 모니터 · samsung · 72인치","category":"TV 모니터","symbol":"📺","stock":1,"total":1,"description":"TV 모니터 · samsung · 72인치 · 관리번호 TV-2025-014","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2024-001","assetNo":"DIVX-2024-001","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2024-001","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2024-002","assetNo":"DIVX-2024-002","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2024-002","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2024-003","assetNo":"DIVX-2024-003","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2024-003","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2024-004","assetNo":"DIVX-2024-004","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2024-004","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-005","assetNo":"DIVX-2025-005","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-005","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-006","assetNo":"DIVX-2025-006","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-006","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-007","assetNo":"DIVX-2025-007","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-007","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-008","assetNo":"DIVX-2025-008","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-008","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-009","assetNo":"DIVX-2025-009","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-009","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-010","assetNo":"DIVX-2025-010","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-010","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-011","assetNo":"DIVX-2025-011","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-011","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-012","assetNo":"DIVX-2025-012","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-012","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-013","assetNo":"DIVX-2025-013","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-013","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-014","assetNo":"DIVX-2025-014","name":"디빅스","category":"디빅스","symbol":"📺","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-014","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-001","assetNo":"BRK-2024-001","name":"브라켓 · 소형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-001","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-002","assetNo":"BRK-2024-002","name":"브라켓 · 소형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-002","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-003","assetNo":"BRK-2024-003","name":"브라켓 · 소형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-003","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-004","assetNo":"BRK-2024-004","name":"브라켓 · 소형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-004","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-005","assetNo":"BRK-2024-005","name":"브라켓 · 소형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-005","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-006","assetNo":"BRK-2024-006","name":"브라켓 · 소형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-006","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-007","assetNo":"BRK-2024-007","name":"브라켓 · 소형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-007","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-008","assetNo":"BRK-2024-008","name":"브라켓 · 소형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-008","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-009","assetNo":"BRK-2024-009","name":"브라켓 · 중형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 중형 · 관리번호 BRK-2024-009","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-010","assetNo":"BRK-2024-010","name":"브라켓 · 중형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 중형 · 관리번호 BRK-2024-010","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-011","assetNo":"BRK-2024-011","name":"브라켓 · 중형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 중형 · 관리번호 BRK-2024-011","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-012","assetNo":"BRK-2024-012","name":"브라켓 · 중형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 중형 · 관리번호 BRK-2024-012","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-013","assetNo":"BRK-2024-013","name":"브라켓 · 중형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · 중형 · 관리번호 BRK-2024-013","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-014","assetNo":"BRK-2025-014","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-014","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-015","assetNo":"BRK-2025-015","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-015","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-016","assetNo":"BRK-2025-016","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-016","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-017","assetNo":"BRK-2025-017","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-017","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-018","assetNo":"BRK-2025-018","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-018","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-019","assetNo":"BRK-2025-019","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"🪑","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-019","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"HDMI-2024-001","assetNo":"HDMI-2024-001","name":"HDMI 선","category":"HDMI 선","symbol":"🔌","stock":1,"total":1,"description":"HDMI 선 · 관리번호 HDMI-2024-001","location":"413호","deposit":"없음","maxDays":5,"color":"#e7f0ec","components":[],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"HDMI-2024-002","assetNo":"HDMI-2024-002","name":"HDMI 선","category":"HDMI 선","symbol":"🔌","stock":1,"total":1,"description":"HDMI 선 · 관리번호 HDMI-2024-002","location":"413호","deposit":"없음","maxDays":5,"color":"#e7f0ec","components":[],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"HDMI-2024-003","assetNo":"HDMI-2024-003","name":"HDMI 선","category":"HDMI 선","symbol":"🔌","stock":1,"total":1,"description":"HDMI 선 · 관리번호 HDMI-2024-003","location":"413호","deposit":"없음","maxDays":5,"color":"#e7f0ec","components":[],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"HDMI-2024-004","assetNo":"HDMI-2024-004","name":"HDMI 선","category":"HDMI 선","symbol":"🔌","stock":1,"total":1,"description":"HDMI 선 · 관리번호 HDMI-2024-004","location":"413호","deposit":"없음","maxDays":5,"color":"#e7f0ec","components":[],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"HDMI-2024-005","assetNo":"HDMI-2024-005","name":"HDMI 선","category":"HDMI 선","symbol":"🔌","stock":1,"total":1,"description":"HDMI 선 · 관리번호 HDMI-2024-005","location":"413호","deposit":"없음","maxDays":5,"color":"#e7f0ec","components":[],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."}
];

let equipment = fallbackEquipment;
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
  returnDialog: document.querySelector("#returnDialog"), returnBody: document.querySelector("#returnBody"),
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
        <div class="field"><label for="requesterName">이름 <span aria-hidden="true">*</span></label><input id="requesterName" name="requesterName" type="text" autocomplete="name" placeholder="홍길동" required /></div>
        <div class="field"><label for="requesterPhone">전화번호 <span aria-hidden="true">*</span></label><input id="requesterPhone" name="requesterPhone" type="tel" inputmode="tel" autocomplete="tel" placeholder="010-0000-0000" required /></div>
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
  [applicationForm.elements.requesterName, applicationForm.elements.requesterPhone, applicationForm.elements.requesterEmail, applicationForm.elements.studentNumber].forEach((field) => {
    field.addEventListener("input", () => validateStudentFields(applicationForm, true));
    field.addEventListener("blur", () => validateStudentFields(applicationForm, true));
  });
  applicationForm.addEventListener("submit", submitApplication);
}

function renderReturn() {
  const options = equipment.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name)} · ${escapeHtml(item.assetNo)}</option>`).join("");
  elements.returnBody.innerHTML = `<form id="returnForm" novalidate>
    <div class="return-equipment"><label for="returnEquipment">반납할 장비 <span aria-hidden="true">*</span></label><select id="returnEquipment" name="equipmentId" required>${options}</select></div>
    <div id="returnComponents" class="component-checklist" aria-live="polite"></div>
    <div class="student-fields">
      <div class="field"><label for="returnerName">이름 <span aria-hidden="true">*</span></label><input id="returnerName" name="requesterName" type="text" autocomplete="name" required /></div>
      <div class="field"><label for="returnerPhone">전화번호 <span aria-hidden="true">*</span></label><input id="returnerPhone" name="requesterPhone" type="tel" inputmode="tel" autocomplete="tel" placeholder="010-0000-0000" required /></div>
      <div class="field"><label for="returnerEmail">학교 이메일 <span aria-hidden="true">*</span></label><input id="returnerEmail" name="requesterEmail" type="email" inputmode="email" placeholder="name@ewha.ac.kr" required /></div>
      <div class="field"><label for="returnerStudentNumber">학번 <span aria-hidden="true">*</span></label><input id="returnerStudentNumber" name="studentNumber" type="text" inputmode="numeric" maxlength="12" placeholder="6~12자리 숫자" required /></div>
    </div>
    <p class="form-error" id="returnError" role="alert"></p>
    <button class="primary-button return-submit" type="submit">반납 신청하기</button>
  </form>`;
  const form = elements.returnBody.querySelector("#returnForm");
  const select = form.elements.equipmentId;
  const renderComponents = () => {
    const item = equipment.find((entry) => entry.id === select.value) || equipment[0];
    const components = item.components || [];
    elements.returnBody.querySelector("#returnComponents").innerHTML = components.length
      ? `<strong>${escapeHtml(item.name)} 구성품을 모두 확인했나요?</strong>${components.map((component, index) => `<label><input type="checkbox" name="component-${index}" value="${escapeHtml(component)}" /> <span>${escapeHtml(component)}</span></label>`).join("")}`
      : `<strong>확인할 구성품이 없습니다.</strong><label><input type="checkbox" name="component-empty" /> 구성품 없음 확인</label>`;
  };
  select.addEventListener("change", renderComponents);
  renderComponents();
  form.addEventListener("submit", submitReturn);
}

async function submitReturn(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const error = form.querySelector("#returnError");
  const item = equipment.find((entry) => entry.id === form.elements.equipmentId.value);
  const validation = getStudentValidation();
  const name = validation.validateName(form.elements.requesterName.value);
  const phone = validation.validatePhone(form.elements.requesterPhone.value);
  const email = validation.validateEmail(form.elements.requesterEmail.value);
  const studentNumber = validation.validateStudentNumber(form.elements.studentNumber.value);
  const checks = [...form.querySelectorAll(".component-checklist input[type=checkbox]")];
  const componentsChecked = checks.length > 0 && checks.every((checkbox) => checkbox.checked);
  const firstError = [name, phone, email, studentNumber].find((result) => !result.valid);
  if (!item || !componentsChecked || firstError) {
    error.textContent = firstError ? firstError.message : (componentsChecked ? "반납할 장비를 선택해주세요." : "모든 구성품을 확인한 뒤 반납 신청해주세요.");
    return;
  }
  const submitButton = form.querySelector(".return-submit");
  submitButton.disabled = true;
  const adapter = window.BorrowbomSupabase;
  if (adapter && adapter.isReady()) {
    const remoteResult = await adapter.createRentalRequest({
      requestType: "반납", purpose: `${item.name} 반납 신청`, requesterName: name.value, requesterPhone: phone.value,
      requesterEmail: email.value, studentNumber: studentNumber.value, startDate: new Date().toISOString().slice(0, 10),
      endDate: new Date().toISOString().slice(0, 10), returnComponentsConfirmed: true,
      items: [{ equipmentId: item.id, assetNo: item.assetNo, name: item.name }]
    });
    if (remoteResult.error) { submitButton.disabled = false; error.textContent = "반납 신청을 저장하지 못했어요. 잠시 후 다시 시도해주세요."; return; }
  }
  const application = { id: `RETURN-${Date.now()}`, equipmentId: item.id, name: item.name, symbol: item.symbol, color: item.color, assetNo: item.assetNo, requesterName: name.value, requesterPhone: phone.value, requesterEmail: email.value, studentNumber: studentNumber.value, purpose: "반납 신청", startDate: new Date().toISOString().slice(0, 10), endDate: new Date().toISOString().slice(0, 10), location: item.location, status: "applied", requestType: "반납", returnComponentsConfirmed: true, createdAt: new Date().toISOString() };
  state.applications = [application, ...state.applications];
  writeStorage(storageKeys.applications, state.applications);
  renderRentals();
  closeDialog(elements.returnDialog);
  showToast(`${item.name} 반납 신청이 접수되었어요.`);
}

function getStudentValidation() {
  if (window.BorrowbomStudentValidation) return window.BorrowbomStudentValidation;
  return {
    validateName(value) {
      const normalized = String(value || "").trim().replace(/[\s]+/g, " ");
      const valid = normalized.length >= 2;
      return { valid, value: normalized, message: valid ? "" : "이름을 2자 이상 입력해주세요." };
    },
    validatePhone(value) {
      const normalized = String(value || "").replace(/[^0-9]/g, "");
      const valid = /^[0-9]{9,11}$/.test(normalized);
      return { valid, value: normalized, message: valid ? "" : "전화번호를 숫자 9~11자리로 입력해주세요." };
    },
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
  const nameResult = validation.validateName(form.elements.requesterName.value);
  const phoneResult = validation.validatePhone(form.elements.requesterPhone.value);
  const emailResult = validation.validateEmail(form.elements.requesterEmail.value);
  const numberResult = validation.validateStudentNumber(form.elements.studentNumber.value);
  const error = form.querySelector("#studentError");
  const nameInput = form.elements.requesterName;
  const phoneInput = form.elements.requesterPhone;
  const emailInput = form.elements.requesterEmail;
  const numberInput = form.elements.studentNumber;
  nameInput.setAttribute("aria-invalid", String(!nameResult.valid));
  phoneInput.setAttribute("aria-invalid", String(!phoneResult.valid));
  emailInput.setAttribute("aria-invalid", String(!emailResult.valid));
  numberInput.setAttribute("aria-invalid", String(!numberResult.valid));
  if (showMessage) {
    const firstError = [nameResult, phoneResult, emailResult, numberResult].find((result) => !result.valid);
    error.textContent = firstError ? firstError.message : "";
  }
  return { valid: nameResult.valid && phoneResult.valid && emailResult.valid && numberResult.valid, name: nameResult.value, phone: phoneResult.value, email: emailResult.value, studentNumber: numberResult.value };
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
    if (!studentDetails.name) event.currentTarget.elements.requesterName.focus();
    else if (!studentDetails.phone) event.currentTarget.elements.requesterPhone.focus();
    else if (!studentDetails.email) event.currentTarget.elements.requesterEmail.focus();
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
        requesterName: studentDetails.name,
        requesterPhone: studentDetails.phone,
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
      remoteRequestId, requesterName: studentDetails.name, requesterPhone: studentDetails.phone, requesterEmail: studentDetails.email, studentNumber: studentDetails.studentNumber,
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
document.querySelector("#returnButton").addEventListener("click", () => { renderReturn(); openDialog(elements.returnDialog); });
document.querySelector("#heroReturnButton").addEventListener("click", () => { renderReturn(); openDialog(elements.returnDialog); });
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
elements.returnDialog.addEventListener("click", (event) => { if (event.target.closest(".close-return")) closeDialog(elements.returnDialog); });

[elements.detailDialog, elements.basketDialog, elements.returnDialog].forEach((dialog) => {
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
