"use strict";

const fallbackEquipment = [
  {"id":"CAM-2024-001","assetNo":"CAM-2024-001","name":"카메라 · Canon","category":"카메라","symbol":"CAM","stock":0,"total":1,"description":"카메라 · Canon · 관리번호 CAM-2024-001","location":"413호","deposit":"없음","maxDays":3,"color":"#e8edf1","components":["카메라 파우치","충전선","배터리 2개","어댑터"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"CAM-2024-002","assetNo":"CAM-2024-002","name":"카메라 · Canon","category":"카메라","symbol":"CAM","stock":1,"total":1,"description":"카메라 · Canon · 관리번호 CAM-2024-002","location":"413호","deposit":"없음","maxDays":3,"color":"#e8edf1","components":["카메라 파우치","충전선","배터리 2개","어댑터"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"CAM-2025-003","assetNo":"CAM-2025-003","name":"카메라 · Canon","category":"카메라","symbol":"CAM","stock":0,"total":1,"description":"카메라 · Canon · 관리번호 CAM-2025-003","location":"413호","deposit":"없음","maxDays":3,"color":"#e8edf1","components":["카메라 파우치","충전선","배터리 2개","어댑터"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"CAM-2025-004","assetNo":"CAM-2025-004","name":"카메라 · Canon","category":"카메라","symbol":"CAM","stock":0,"total":1,"description":"카메라 · Canon · 관리번호 CAM-2025-004","location":"413호","deposit":"없음","maxDays":3,"color":"#e8edf1","components":["카메라 파우치","충전선","배터리 2개","어댑터"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"CAM-2026-005","assetNo":"CAM-2026-005","name":"카메라 · Canon","category":"카메라","symbol":"CAM","stock":0,"total":1,"description":"카메라 · Canon · 관리번호 CAM-2026-005","location":"413호","deposit":"없음","maxDays":3,"color":"#e8edf1","components":["카메라 파우치","충전선","배터리 2개","어댑터"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2025-001","assetNo":"BIM-2025-001","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2025-001","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-002","assetNo":"BIM-2026-002","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-002","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-003","assetNo":"BIM-2026-003","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-003","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-004","assetNo":"BIM-2026-004","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-004","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-005","assetNo":"BIM-2026-005","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-005","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-006","assetNo":"BIM-2026-006","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-006","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-007","assetNo":"BIM-2026-007","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-007","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-008","assetNo":"BIM-2026-008","name":"빔프로젝터 · samsung · 2700안시 SP-G91","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · samsung · 2700안시 SP-G91 · 관리번호 BIM-2026-008","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-009","assetNo":"BIM-2026-009","name":"빔프로젝터 · panasonic · 7000안시","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · panasonic · 7000안시 · 관리번호 BIM-2026-009","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-010","assetNo":"BIM-2026-010","name":"빔프로젝터 · DLP (미니) · 500안시","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · DLP (미니) · 500안시 · 관리번호 BIM-2026-010","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-011","assetNo":"BIM-2026-011","name":"빔프로젝터 · DLP (미니) · 500안시","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · DLP (미니) · 500안시 · 관리번호 BIM-2026-011","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-012","assetNo":"BIM-2026-012","name":"빔프로젝터 · DLP (미니) · 500안시","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · DLP (미니) · 500안시 · 관리번호 BIM-2026-012","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-013","assetNo":"BIM-2026-013","name":"빔프로젝터 · LC-XL200K · 6000안시","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · LC-XL200K · 6000안시 · 관리번호 BIM-2026-013","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-014","assetNo":"BIM-2026-014","name":"빔프로젝터 · Epson · 1000안시","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · Epson · 1000안시 · 관리번호 BIM-2026-014","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BIM-2026-015","assetNo":"BIM-2026-015","name":"빔프로젝터 · Epson · 1000안시","category":"빔프로젝터","symbol":"PROJ","stock":1,"total":1,"description":"빔프로젝터 · Epson · 1000안시 · 관리번호 BIM-2026-015","location":"413호","deposit":"없음","maxDays":2,"color":"#e7f1f5","components":["빔프로젝트 박스","빔 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-001","assetNo":"TV-2025-001","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-001","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-002","assetNo":"TV-2025-002","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-002","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-003","assetNo":"TV-2025-003","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-003","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-004","assetNo":"TV-2025-004","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-004","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-005","assetNo":"TV-2025-005","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-005","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-006","assetNo":"TV-2025-006","name":"TV 모니터 · samsung · 32인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 32인치 · 관리번호 TV-2025-006","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-007","assetNo":"TV-2025-007","name":"TV 모니터 · samsung · 42인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 42인치 · 관리번호 TV-2025-007","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-008","assetNo":"TV-2025-008","name":"TV 모니터 · samsung · 55인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 55인치 · 관리번호 TV-2025-008","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-009","assetNo":"TV-2025-009","name":"TV 모니터 · samsung · 55인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 55인치 · 관리번호 TV-2025-009","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-010","assetNo":"TV-2025-010","name":"TV 모니터 · samsung · 55인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 55인치 · 관리번호 TV-2025-010","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-011","assetNo":"TV-2025-011","name":"TV 모니터 · samsung · 65인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 65인치 · 관리번호 TV-2025-011","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-012","assetNo":"TV-2025-012","name":"TV 모니터 · samsung · 72인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 72인치 · 관리번호 TV-2025-012","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-013","assetNo":"TV-2025-013","name":"TV 모니터 · samsung · 72인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 72인치 · 관리번호 TV-2025-013","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"TV-2025-014","assetNo":"TV-2025-014","name":"TV 모니터 · samsung · 72인치","category":"TV 모니터","symbol":"TV","stock":1,"total":1,"description":"TV 모니터 · samsung · 72인치 · 관리번호 TV-2025-014","location":"413호","deposit":"없음","maxDays":3,"color":"#e9eef2","components":["TV 박스","TV 본체","연결 코드 선"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2024-001","assetNo":"DIVX-2024-001","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2024-001","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2024-002","assetNo":"DIVX-2024-002","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2024-002","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2024-003","assetNo":"DIVX-2024-003","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2024-003","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2024-004","assetNo":"DIVX-2024-004","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2024-004","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-005","assetNo":"DIVX-2025-005","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-005","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-006","assetNo":"DIVX-2025-006","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-006","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-007","assetNo":"DIVX-2025-007","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-007","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-008","assetNo":"DIVX-2025-008","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-008","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-009","assetNo":"DIVX-2025-009","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-009","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-010","assetNo":"DIVX-2025-010","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-010","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-011","assetNo":"DIVX-2025-011","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-011","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-012","assetNo":"DIVX-2025-012","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-012","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-013","assetNo":"DIVX-2025-013","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-013","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"DIVX-2025-014","assetNo":"DIVX-2025-014","name":"디빅스","category":"디빅스","symbol":"TV","stock":1,"total":1,"description":"디빅스 · 관리번호 DIVX-2025-014","location":"413호","deposit":"없음","maxDays":3,"color":"#f0ece9","components":["디빅스 박스","디빅스 본체","리모컨"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-001","assetNo":"BRK-2024-001","name":"브라켓 · 소형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-001","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-002","assetNo":"BRK-2024-002","name":"브라켓 · 소형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-002","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-003","assetNo":"BRK-2024-003","name":"브라켓 · 소형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-003","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-004","assetNo":"BRK-2024-004","name":"브라켓 · 소형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-004","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-005","assetNo":"BRK-2024-005","name":"브라켓 · 소형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-005","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-006","assetNo":"BRK-2024-006","name":"브라켓 · 소형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-006","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-007","assetNo":"BRK-2024-007","name":"브라켓 · 소형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-007","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-008","assetNo":"BRK-2024-008","name":"브라켓 · 소형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 소형 · 관리번호 BRK-2024-008","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-009","assetNo":"BRK-2024-009","name":"브라켓 · 중형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 중형 · 관리번호 BRK-2024-009","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-010","assetNo":"BRK-2024-010","name":"브라켓 · 중형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 중형 · 관리번호 BRK-2024-010","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-011","assetNo":"BRK-2024-011","name":"브라켓 · 중형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 중형 · 관리번호 BRK-2024-011","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-012","assetNo":"BRK-2024-012","name":"브라켓 · 중형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 중형 · 관리번호 BRK-2024-012","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2024-013","assetNo":"BRK-2024-013","name":"브라켓 · 중형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · 중형 · 관리번호 BRK-2024-013","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-014","assetNo":"BRK-2025-014","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-014","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-015","assetNo":"BRK-2025-015","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-015","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-016","assetNo":"BRK-2025-016","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-016","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-017","assetNo":"BRK-2025-017","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-017","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-018","assetNo":"BRK-2025-018","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-018","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"BRK-2025-019","assetNo":"BRK-2025-019","name":"브라켓 · samsung · 대형","category":"브라켓","symbol":"BRKT","stock":1,"total":1,"description":"브라켓 · samsung · 대형 · 관리번호 BRK-2025-019","location":"413호","deposit":"없음","maxDays":2,"color":"#f3eee7","components":["브라켓 박스","브라켓"],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"HDMI-2024-001","assetNo":"HDMI-2024-001","name":"HDMI 선","category":"HDMI 선","symbol":"HDMI","stock":1,"total":1,"description":"HDMI 선 · 관리번호 HDMI-2024-001","location":"413호","deposit":"없음","maxDays":5,"color":"#e7f0ec","components":[],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"HDMI-2024-002","assetNo":"HDMI-2024-002","name":"HDMI 선","category":"HDMI 선","symbol":"HDMI","stock":1,"total":1,"description":"HDMI 선 · 관리번호 HDMI-2024-002","location":"413호","deposit":"없음","maxDays":5,"color":"#e7f0ec","components":[],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"HDMI-2024-003","assetNo":"HDMI-2024-003","name":"HDMI 선","category":"HDMI 선","symbol":"HDMI","stock":1,"total":1,"description":"HDMI 선 · 관리번호 HDMI-2024-003","location":"413호","deposit":"없음","maxDays":5,"color":"#e7f0ec","components":[],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"HDMI-2024-004","assetNo":"HDMI-2024-004","name":"HDMI 선","category":"HDMI 선","symbol":"HDMI","stock":1,"total":1,"description":"HDMI 선 · 관리번호 HDMI-2024-004","location":"413호","deposit":"없음","maxDays":5,"color":"#e7f0ec","components":[],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."},
  {"id":"HDMI-2024-005","assetNo":"HDMI-2024-005","name":"HDMI 선","category":"HDMI 선","symbol":"HDMI","stock":1,"total":1,"description":"HDMI 선 · 관리번호 HDMI-2024-005","location":"413호","deposit":"없음","maxDays":5,"color":"#e7f0ec","components":[],"caution":"사용 후 구성품을 확인하고 보관 장소에 반납해주세요."}
];

let equipment = fallbackEquipment;
equipment = equipment.map((item) => ({ ...item, maxDays: 14 }));
let categories = ["전체", ...new Set(equipment.map((item) => item.category))];
const storageKeys = { cart: "borrowbom-cart-v1", applications: "borrowbom-applications-v1", holidays: "borrowbom-holidays-v1", operatorEquipment: "borrowbom-operator-equipment-v1" };
const persistedOperatorEquipment = readStorage(storageKeys.operatorEquipment, []);
if (persistedOperatorEquipment.length) {
  equipment = equipment.concat(persistedOperatorEquipment);
  categories = ["전체", ...new Set(equipment.map((item) => item.category))];
}
const studentProfileKey = "borrowbom-student-profile-v1";
const languageKey = "borrowbom-language-v1";
const themeKey = "borrowbom-theme-v1";
const operatorEmail = "nammnamm030@ewhain.net";
const translations = {
  ko: { brand: "이화여자대학교 조형예술대학 장비대여", equipment: "장비 찾기", guide: "이용 안내", rentals: "나의 대여", basket: "대여 바구니", return: "반납하기", rent: "대여하기", heroDesc: "필요한 장비를 찾고, 가능한 시간을 확인하고, 바로 빌린다.", search: "장비명, 용도를 검색해보세요", available: "대여 가능만", reset: "필터 초기화", detail: "상세 보기", unavailable: "대여 불가", addCart: "대여 바구니에 담기", cartEmpty: "대여 바구니가 비어 있어요", studentCheck: "학생 확인", rentalStudentCheck: "대여 학생 확인", returnStudentCheck: "반납 학생 확인", name: "이름", studentNumber: "학번", email: "학교 이메일", phone: "전화번호", purpose: "이용 목적", pastRentals: "과거 대여 내역", componentCheck: "구성품을 모두 확인했나요?", languageLabel: "한국어", themeLight: "라이트 모드", themeDark: "나이트 모드" },
  en: { brand: "Ewha Womans University College of Art Equipment Rental", equipment: "Find equipment", guide: "Guide", rentals: "My rentals", basket: "Rental cart", return: "Return", rent: "Rent", heroDesc: "Find the equipment you need, check availability, and rent it.", search: "Search equipment or use", available: "Available only", reset: "Reset filters", detail: "View details", unavailable: "Unavailable", addCart: "Add to rental cart", cartEmpty: "Your rental cart is empty", studentCheck: "Student check", rentalStudentCheck: "Rental student check", returnStudentCheck: "Return student check", name: "Name", studentNumber: "Student number", email: "School email", phone: "Phone", purpose: "Purpose", pastRentals: "Past rentals", componentCheck: "Have you checked all components?", languageLabel: "English", themeLight: "Light mode", themeDark: "Dark mode" }
};
function t(key) { return (translations[state.language] || translations.ko)[key] || translations.ko[key] || key; }
const statusLabels = { applied: "신청", approved: "승인", renting: "대여 중", returned: "반납 완료", cancelled: "신청 취소" };

const demoRentals = [
  { id: "DEMO-1", equipmentId: "PRJ-01", name: "Epson 레이저 프로젝터", symbol: "PROJ", color:"#eef5f0", startDate: "2026-11-03", endDate: "2026-11-04", purpose: "전공 발표", location: "학생회관 1층 기자재실", status: "approved" },
  { id: "DEMO-2", equipmentId: "CAM-02", name: "Canon EOS R10 키트", symbol: "CAM", color:"#eef5f0", startDate: "2026-10-27", endDate: "2026-10-29", purpose: "학과 행사 촬영", location: "미디어관 2층 장비실", status: "renting" },
  { id: "DEMO-3", equipmentId: "ETC-01", name: "DJI RS 3 Mini 짐벌", symbol: "PROJ", color:"#eef5f0", startDate: "2026-10-10", endDate: "2026-10-11", purpose: "홍보 영상 촬영", location: "미디어관 2층 장비실", status: "returned" },
  { id: "DEMO-4", equipmentId: "EVT-02", name: "이동식 X배너 거치대", symbol: "ITEM", color:"#eef5f0", startDate: "2026-11-12", endDate: "2026-11-13", purpose: "동아리 홍보 부스", location: "학생회관 B1 창고", status: "applied" }
];

const state = {
  category: "전체",
  query: "",
  availableOnly: false,
  cart: readStorage(storageKeys.cart, []),
  applications: readStorage(storageKeys.applications, []),
  language: localStorage.getItem(languageKey) === "en" ? "en" : "ko",
  theme: localStorage.getItem(themeKey) === "dark" ? "dark" : "light"
};
let returnHistory = [];
let qrScanner = null;
let scannedEquipmentId = "";
let operatorReturnName = "";
const koreanHolidays = {
  "2026-01-01": "신정", "2026-02-16": "설날 연휴", "2026-02-17": "설날", "2026-02-18": "설날 연휴",
  "2026-03-01": "삼일절", "2026-03-02": "삼일절 대체공휴일", "2026-05-01": "근로자의 날", "2026-05-05": "어린이날",
  "2026-05-24": "부처님오신날", "2026-05-25": "부처님오신날 대체공휴일", "2026-06-06": "현충일",
  "2026-08-15": "광복절", "2026-08-17": "광복절 대체공휴일", "2026-10-03": "개천절", "2026-10-05": "개천절 대체공휴일",
  "2026-10-09": "한글날", "2026-12-25": "성탄절",
  "2027-01-01": "신정", "2027-02-06": "설날 연휴", "2027-02-07": "설날", "2027-02-08": "설날 연휴",
  "2027-02-09": "설날 대체공휴일", "2027-03-01": "삼일절", "2027-05-01": "근로자의 날", "2027-05-05": "어린이날",
  "2027-05-13": "부처님오신날", "2027-06-06": "현충일", "2027-08-15": "광복절", "2027-08-16": "광복절 대체공휴일",
  "2027-10-03": "개천절", "2027-10-04": "개천절 대체공휴일", "2027-10-09": "한글날", "2027-12-25": "성탄절"
};

function getHolidayMap() {
  const custom = readStorage(storageKeys.holidays, {});
  return { ...koreanHolidays, ...(custom && typeof custom === "object" && !Array.isArray(custom) ? custom : {}) };
}

function holidayName(date) { return getHolidayMap()[date] || ""; }

function datesBetween(start, end) {
  const dates = [];
  const cursor = new Date(`${start}T00:00:00`);
  const last = new Date(`${end}T00:00:00`);
  while (cursor <= last) { dates.push(toLocalIso(cursor)); cursor.setDate(cursor.getDate() + 1); }
  return dates;
}

const elements = {
  grid: document.querySelector("#equipmentGrid"), filters: document.querySelector("#categoryFilters"),
  search: document.querySelector("#searchInput"), available: document.querySelector("#availableOnly"),
  result: document.querySelector("#resultSummary"), empty: document.querySelector("#emptyState"),
  detailDialog: document.querySelector("#detailDialog"), detailContent: document.querySelector("#detailContent"),
  basketDialog: document.querySelector("#basketDialog"), basketBody: document.querySelector("#basketBody"),
  returnDialog: document.querySelector("#returnDialog"), returnBody: document.querySelector("#returnBody"),
  basketCount: document.querySelector("#basketCount"), rentalList: document.querySelector("#rentalList"),
  toast: document.querySelector("#toast"), authDialog: document.querySelector("#authDialog"), operatorDialog: document.querySelector("#operatorDialog"), operatorBody: document.querySelector("#operatorBody")
  , qrDialog: document.querySelector("#qrDialog"), qrBody: document.querySelector("#qrBody"), qrReader: document.querySelector("#qrReader"), qrResult: document.querySelector("#qrResult"), qrManualCode: document.querySelector("#qrManualCode")
};

function readStorage(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    if (Array.isArray(fallback)) return Array.isArray(parsed) ? parsed : fallback;
    if (fallback && typeof fallback === "object") return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : fallback;
    return parsed ?? fallback;
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

function readStudentProfile() {
  try {
    const parsed = JSON.parse(localStorage.getItem(studentProfileKey));
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
  } catch (_) {
    return null;
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

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  const button = document.querySelector("#themeToggle");
  if (button) { button.textContent = state.theme === "dark" ? "☀" : "☾"; button.setAttribute("aria-label", state.theme === "dark" ? t("themeLight") : t("themeDark")); }
}

function applyLanguage() {
  document.documentElement.lang = state.language === "en" ? "en" : "ko";
  const map = {
    ".brand-copy strong": t("brand"), ".desktop-nav a:nth-child(1)": t("equipment"), ".desktop-nav a:nth-child(2)": t("guide"), ".desktop-nav a:nth-child(3)": t("rentals"),
    "#basketButton span:nth-of-type(1)": t("basket"), "#returnButton": t("return"), "#rentButton": t("rent"), "#heroReturnButton": t("return"), "#heroDescription": t("heroDesc"),
    "#searchInput": t("search"), ".availability-label": t("available"), "#resetFilters": t("reset"), "#equipmentTitle": state.language === "en" ? "What would you like to rent today?" : "오늘, 무엇을 빌려볼까요?",
    "#rentalsTitle": t("rentals"), "#basketTitle": t("basket"), "#returnTitle": t("return"), "#languageToggle": state.language === "ko" ? "EN" : "한글"
  };
  Object.entries(map).forEach(([selector, value]) => { document.querySelectorAll(selector).forEach((node) => { if (node.tagName === "INPUT") node.placeholder = value; else node.textContent = value; }); });
  document.title = t("brand");
  document.querySelectorAll(".brand-copy strong").forEach((node) => { node.textContent = t("brand"); });
  const footerDescription = document.querySelector(".footer-inner > div > p");
  if (footerDescription) footerDescription.textContent = state.language === "en" ? "Ewha Womans University College of Art equipment rental service" : "이화여자대학교 조형예술대학 장비대여 서비스";
  const validation = getStudentValidation();
  if (validation.setLanguage) validation.setLanguage(state.language);
  applyTheme();
  renderFilters(); renderEquipment(); renderRentals();
}

const remoteVisuals = {
  "카메라": { symbol: "CAM", color:"#eef5f0", maxDays: 14 },
  "빔프로젝터": { symbol: "PROJ", color:"#eef5f0", maxDays: 14 },
  "TV 모니터": { symbol: "TV", color:"#eef5f0", maxDays: 14 },
  "디빅스": { symbol: "DVD", color:"#eef5f0", maxDays: 14 },
  "브라켓": { symbol: "BRKT", color:"#eef5f0", maxDays: 14 },
  "HDMI 선": { symbol: "HDMI", color:"#eef5f0", maxDays: 14 }
};

const categorySymbols = { "카메라": "CAM", "빔프로젝터": "PROJ", "TV 모니터": "TV", "디빅스": "DVD", "브라켓": "BRKT", "HDMI 선": "HDMI" };
function symbolForCategory(category) { return categorySymbols[category] || "ITEM"; }

function imageUrlForCategory(category) {
  const images = {
    "카메라": "assets/equipment/camera.png",
    "빔프로젝터": "assets/equipment/projector-samsung.png",
    "TV 모니터": "assets/equipment/monitor-42.webp",
    "디빅스": "assets/equipment/divx.png",
    "브라켓": "assets/equipment/bracket-medium.jpg",
    "HDMI 선": "assets/equipment/hdmi.webp"
  };
  return images[category] || images["카메라"];
}

function imageUrlForEquipment(item) {
  if (item.imageUrl) return item.imageUrl;
  const text = `${item.name || ""} ${item.description || ""}`.toLowerCase();
  if (item.category === "카메라") return "assets/equipment/camera.png";
  if (item.category === "HDMI 선") return "assets/equipment/hdmi.webp";
  if (item.category === "디빅스") return "assets/equipment/divx.png";
  if (item.category === "브라켓") return text.includes("소형") ? "assets/equipment/bracket-small.jpeg" : "assets/equipment/bracket-medium.jpg";
  if (item.category === "TV 모니터") {
    if (text.includes("32인치")) return "assets/equipment/monitor-32.png";
    if (text.includes("55인치")) return "assets/equipment/monitor-55.png";
    if (text.includes("72인치")) return "assets/equipment/monitor-72.png";
    return "assets/equipment/monitor-42.webp";
  }
  if (item.category === "빔프로젝터") {
    if (text.includes("panasonic") || text.includes("lc-xl200k")) return "assets/equipment/projector-panasonic.png";
    if (text.includes("epson")) return "assets/equipment/projector-epson.png";
    if (text.includes("dlp")) return "assets/equipment/projector-dlp.png";
    return "assets/equipment/projector-samsung.png";
  }
  return imageUrlForCategory(item.category);
}

function normalizeRemoteEquipment(row) {
  const visual = remoteVisuals[row.equipment_type] || { symbol: "ITEM", color:"#eef5f0", maxDays: 14 };
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
    status: row.status,
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
        <img class="equipment-photo" src="${imageUrlForEquipment(item)}" alt="${escapeHtml(item.name)} 실제 장비 사진" loading="lazy" />
        <span class="stock-badge ${item.stock === 0 ? "unavailable" : ""}">${item.stock > 0 ? `대여 가능 ${item.stock}개` : "현재 대여 중"}</span>
        <span class="category-label">${item.category}</span>
      </div>
      <div class="card-body">
        <span class="card-code">${item.id}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="card-meta">
          <span>${item.location}</span>
          <button class="detail-button" type="button" data-detail-id="${item.id}" aria-label="${item.name} ${t("detail")}">${t("detail")} <span aria-hidden="true">→</span></button>
        </div>
        <button class="card-rent-button" type="button" data-rent-id="${item.id}" ${item.stock === 0 ? "disabled aria-disabled=\"true\"" : ""}>${item.stock === 0 ? t("unavailable") : t("rent")}</button>
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
  const max = toLocalIso(addDays(today, 13));
  const defaultEnd = toLocalIso(addDays(today, Math.min(1, item.maxDays - 1)));
  elements.detailContent.innerHTML = `
    <div class="detail-layout">
      <div class="detail-visual" style="--visual-bg:${item.color}"><img class="detail-photo" src="${imageUrlForEquipment(item)}" alt="${escapeHtml(item.name)} 실제 장비 사진" /><span class="detail-symbol" aria-hidden="true">${symbolForCategory(item.category)}</span></div>
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
            <p class="holiday-note">공휴일은 대여할 수 없어요. <span class="holiday-list">${Object.entries(getHolidayMap()).filter(([date]) => date >= min && date <= max).map(([date, name]) => `${date} ${name}`).join(" · ") || "등록된 공휴일 없음"}</span></p>
            <button class="holiday-admin-button" type="button">관리자 휴일 설정</button>
            <p class="form-error" id="dateError" role="alert"></p>
          </div>
          <button class="primary-button detail-submit" type="submit" ${item.stock === 0 ? "disabled" : ""}>${item.stock === 0 ? t("unavailable") : t("addCart")}</button>
        </form>
      </div>
    </div>`;
  const form = elements.detailContent.querySelector("#dateForm");
  const startInput = form.elements.startDate;
  const endInput = form.elements.endDate;
  const markHoliday = (input) => {
    const holiday = holidayName(input.value);
    input.classList.toggle("holiday-date", Boolean(holiday));
    input.setAttribute("aria-label", holiday ? `${input.name === "startDate" ? "대여일" : "반납일"} ${holiday}` : (input.name === "startDate" ? "대여일" : "반납일"));
  };
  markHoliday(startInput); markHoliday(endInput);
  startInput.addEventListener("change", () => {
    endInput.min = startInput.value || min;
    endInput.max = startInput.value ? toLocalIso(addDays(new Date(`${startInput.value}T00:00:00`), 13)) : max;
    if (endInput.value < startInput.value) endInput.value = startInput.value;
    markHoliday(startInput); markHoliday(endInput);
  });
  endInput.addEventListener("change", () => markHoliday(endInput));
  form.querySelector(".holiday-admin-button").addEventListener("click", () => {
    const date = window.prompt("지정할 휴일 날짜를 입력하세요 (YYYY-MM-DD)");
    if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(String(date || ""))) return;
    const name = window.prompt("휴일 이름을 입력하세요", "학교 지정 휴일") || "학교 지정 휴일";
    const custom = readStorage(storageKeys.holidays, {});
    custom[date] = name.trim() || "학교 지정 휴일";
    writeStorage(storageKeys.holidays, custom);
    showToast(`${date} ${custom[date]} 휴일을 저장했어요.`);
    openDetail(item.id);
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
  const holiday = datesBetween(startDate, endDate).map(holidayName).find(Boolean);
  if (holiday) {
    error.textContent = `${holiday}에는 대여할 수 없어요. 다른 날짜를 선택해주세요.`;
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
      <div class="empty-basket"><span class="empty-basket-mark" aria-hidden="true">CART</span><h3>${t("cartEmpty")}</h3><p>${state.language === "en" ? "Find equipment and choose a rental schedule." : "필요한 장비를 찾고 대여 일정을 선택해주세요."}</p><button class="secondary-button browse-equipment" type="button">${t("equipment")}</button></div>`;
    return;
  }
  const items = state.cart.map((entry) => ({ ...entry, item: equipment.find((item) => item.id === entry.equipmentId) })).filter((entry) => entry.item);
  elements.basketBody.innerHTML = `
    <div class="basket-items">
      ${items.map(({ item, startDate, endDate }) => `
        <div class="basket-item">
          <div class="basket-item-visual" style="--item-bg:${item.color}" aria-hidden="true">${symbolForCategory(item.category)}</div>
          <div><strong>${item.name}</strong><span>${formatDate(startDate)} → ${formatDate(endDate)} · ${item.location}</span></div>
          <button class="remove-button" type="button" data-remove-id="${item.id}" aria-label="${item.name} 바구니에서 삭제">삭제</button>
        </div>`).join("")}
    </div>
    <form id="applicationForm" novalidate>
      <div class="student-fields">
        <div class="field"><label for="requesterName">${t("name")} <span aria-hidden="true">*</span></label><input id="requesterName" name="requesterName" type="text" autocomplete="name" placeholder="${state.language === "en" ? "Your name" : "홍길동"}" required /></div>
        <div class="field"><label for="requesterPhone">${t("phone")} <span aria-hidden="true">*</span></label><input id="requesterPhone" name="requesterPhone" type="tel" inputmode="tel" autocomplete="tel" placeholder="010-0000-0000" required /></div>
        <div class="field"><label for="requesterEmail">${t("email")} <span aria-hidden="true">*</span></label><input id="requesterEmail" name="requesterEmail" type="email" inputmode="email" autocomplete="email" placeholder="name@ewhain.net 또는 name@ewha.ac.kr" required /></div>
        <div class="field"><label for="studentNumber">${t("studentNumber")} <span aria-hidden="true">*</span></label><input id="studentNumber" name="studentNumber" type="text" inputmode="text" pattern="[A-Za-z0-9]{4,20}" minlength="4" maxlength="20" autocomplete="off" placeholder="${state.language === "en" ? "4–20 letters and numbers" : "영문·숫자 4~20자"}" required /></div>
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
  const profile = readStudentProfile();
  if (profile) {
    applicationForm.elements.requesterName.value = profile.name || "";
    applicationForm.elements.studentNumber.value = profile.studentNumber || "";
    applicationForm.elements.requesterEmail.value = profile.email || "";
  }
  [applicationForm.elements.requesterName, applicationForm.elements.requesterPhone, applicationForm.elements.requesterEmail, applicationForm.elements.studentNumber].forEach((field) => {
    field.addEventListener("input", () => validateStudentFields(applicationForm, true));
    field.addEventListener("blur", () => validateStudentFields(applicationForm, true));
  });
  applicationForm.addEventListener("submit", submitApplication);
}

function openStudentCheck(next = "basket") {
  const form = document.querySelector("#authForm");
  const title = document.querySelector("#authTitle");
  const intro = document.querySelector("#authIntro");
  const submit = form.querySelector("button[type=submit]");
  const isReturn = next === "return";
  title.textContent = isReturn ? t("returnStudentCheck") : t("rentalStudentCheck");
  intro.textContent = isReturn ? (state.language === "en" ? "Confirm your identity to view past rentals for return." : "반납할 장비를 확인하려면 이름, 학번, 학교 이메일을 먼저 확인해주세요.") : (state.language === "en" ? "Confirm your name, student number, and school email to start a rental." : "대여 신청을 시작하려면 이름, 학번, 학교 이메일을 확인해주세요.");
  submit.textContent = isReturn ? (state.language === "en" ? "View past rentals" : "확인하고 반납 내역 보기") : (state.language === "en" ? "Confirm and start rental" : "확인하고 대여 시작하기");
  const labels = form.querySelectorAll("label");
  [t("name"), t("studentNumber"), t("email")].forEach((label, index) => { if (labels[index]) labels[index].firstChild.textContent = label + " "; });
  form.elements.studentNumber.placeholder = state.language === "en" ? "4–20 letters and numbers" : "영문·숫자 4~20자";
  const profile = readStudentProfile();
  if (profile) {
    form.elements.requesterName.value = profile.name || "";
    form.elements.studentNumber.value = profile.studentNumber || "";
    form.elements.requesterEmail.value = profile.email || "";
  }
  elements.authDialog.dataset.next = next;
  openDialog(elements.authDialog);
}

function submitStudentCheck(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const validation = getStudentValidation();
  const name = validation.validateName(form.elements.requesterName.value);
  const email = validation.validateEmail(form.elements.requesterEmail.value);
  const studentNumber = validation.validateStudentNumber(form.elements.studentNumber.value);
  const error = form.querySelector("#authError");
  const isOperatorLogin = email.value === operatorEmail;
  const firstError = (isOperatorLogin ? [email] : [name, studentNumber, email]).find((result) => !result.valid);
  if (firstError) { error.textContent = firstError.message; return; }
  const profile = { name: isOperatorLogin ? "운영자" : name.value, studentNumber: isOperatorLogin ? "OPERATOR" : studentNumber.value, email: email.value };
  writeStorage(studentProfileKey, profile);
  renderRentals();
  closeDialog(elements.authDialog);
  if (email.value === operatorEmail) {
    openOperatorDashboard(profile);
  } else if (elements.authDialog.dataset.next === "basket") {
    renderBasket(); openDialog(elements.basketDialog); showToast("학생 확인이 완료되었습니다. 대여 신청을 시작해주세요.");
  } else if (elements.authDialog.dataset.next === "return") {
    openReturnWorkspace(profile);
  } else {
    document.querySelector("#equipment").scrollIntoView({ behavior: "smooth" });
    showToast("학생 확인이 완료되었습니다. 대여할 장비를 선택해주세요.");
  }
}

function nextEquipmentCode(category, registrationYear = new Date().getFullYear()) {
  const prefixes = { "카메라": "CAM", "빔프로젝터": "PROJ", "TV 모니터": "TV", "디빅스": "DVD", "브라켓": "BRKT", "HDMI 선": "HDMI" };
  const prefix = prefixes[category] || "ETC";
  const year = String(registrationYear).slice(0, 4);
  const pattern = new RegExp(`^${prefix}-${year}-(\\d+)$`);
  const max = equipment.reduce((highest, item) => {
    const match = String(item.id || "").match(pattern);
    return match ? Math.max(highest, Number(match[1])) : highest;
  }, 0);
  return `${prefix}-${year}-${String(max + 1).padStart(3, "0")}`;
}

function loadQrScannerLibrary() {
  if (window.Html5Qrcode) return Promise.resolve(window.Html5Qrcode);
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js";
    script.onload = () => resolve(window.Html5Qrcode);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function findEquipmentByCode(code) {
  const normalized = String(code || "").trim().replace(/^.*#qr=/, "").split(/[?&]/)[0];
  return equipment.find((item) => item.id === normalized || item.assetNo === normalized);
}

function renderQrResult(item) {
  if (!item) {
    elements.qrResult.innerHTML = `<p class="form-error">장비 식별코드를 찾을 수 없습니다.</p>`;
    return;
  }
  scannedEquipmentId = item.id;
  if (operatorReturnName) {
    const matchingRental = state.applications.find((rental) => (rental.requestType || "대여") === "대여" && rental.requesterName === operatorReturnName && rental.equipmentId === item.id && !["returned", "rejected"].includes(rental.status));
    elements.qrResult.innerHTML = `<div class="qr-result-card"><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.id)} · 반납자 ${escapeHtml(operatorReturnName)}</span>${matchingRental ? `<button class="primary-button operator-return-confirm" type="button">이 장비 반납 완료 처리</button>` : `<p class="form-error">검색한 대여자의 진행 중인 대여 내역에서 이 장비를 찾을 수 없습니다.</p>`}</div>`;
    elements.qrResult.querySelector(".operator-return-confirm")?.addEventListener("click", () => {
      matchingRental.status = "returned";
      writeStorage(storageKeys.applications, state.applications);
      showToast(`${operatorReturnName}님의 ${item.id} 반납이 완료되었습니다.`);
      operatorReturnName = "";
      closeDialog(elements.qrDialog);
      openOperatorDashboard(readStudentProfile());
    });
    return;
  }
  elements.qrResult.innerHTML = `<div class="qr-result-card"><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.id)} · ${item.stock > 0 ? "대여 가능" : "현재 대여 중"}</span><div class="qr-result-actions"><button class="primary-button qr-borrow-action" type="button" ${item.stock === 0 ? "disabled" : ""}>대여 페이지에 추가</button><button class="secondary-button qr-return-action" type="button">반납 페이지 열기</button></div></div>`;
  elements.qrResult.querySelector(".qr-borrow-action")?.addEventListener("click", () => {
    const today = toLocalIso(new Date());
    const tomorrow = toLocalIso(addDays(new Date(), 1));
    const entry = { equipmentId: item.id, assetNo: item.assetNo || item.id, name: item.name, startDate: today, endDate: tomorrow };
    state.cart = [...state.cart.filter((existing) => existing.equipmentId !== item.id), entry];
    writeStorage(storageKeys.cart, state.cart); updateBasketCount(); closeDialog(elements.qrDialog);
    if (!readStudentProfile()) openStudentCheck("basket"); else { renderBasket(); openDialog(elements.basketDialog); }
  });
  elements.qrResult.querySelector(".qr-return-action")?.addEventListener("click", () => { closeDialog(elements.qrDialog); openStudentCheck("return"); });
}

async function openQrDialog() {
  openDialog(elements.qrDialog);
  elements.qrResult.innerHTML = "";
  elements.qrManualCode.value = "";
  elements.qrReader.innerHTML = `<p class="qr-camera-fallback">카메라 권한을 확인하는 중…</p>`;
  try {
    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) throw new Error("SECURE_CAMERA_UNAVAILABLE");
    const permissionStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    permissionStream.getTracks().forEach((track) => track.stop());
    const Scanner = await loadQrScannerLibrary();
    elements.qrReader.innerHTML = "";
    qrScanner = new Scanner("qrReader", { verbose: false });
    const cameras = await Scanner.getCameras();
    if (!cameras?.length) throw new DOMException("No camera found", "NotFoundError");
    const preferredCamera = cameras.find((camera) => /back|rear|environment|후면|뒤/i.test(camera.label || "")) || cameras[0];
    await qrScanner.start(preferredCamera.id, { fps: 10, qrbox: { width: 230, height: 230 } }, (decodedText) => {
      renderQrResult(findEquipmentByCode(decodedText));
      qrScanner.stop().catch(() => {});
    }, () => {});
  } catch (error) {
    const errorName = error?.name || "UnknownError";
    const message = errorName === "NotAllowedError"
      ? "카메라 권한이 거부되었습니다. 브라우저 주소창의 카메라 권한을 허용한 뒤 다시 시도해주세요."
      : errorName === "NotFoundError"
        ? "사용 가능한 카메라를 찾지 못했습니다. 휴대폰 카메라가 연결되어 있는지 확인해주세요."
        : `카메라를 시작하지 못했습니다(${errorName}). HTTPS 접속과 카메라 권한을 확인하거나 아래에 식별코드를 직접 입력해주세요.`;
    elements.qrReader.innerHTML = `<p class="qr-camera-fallback">${message}</p>`;
  }
}

function openOperatorDashboard(profile) {
  state.applications = readStorage(storageKeys.applications, state.applications);
  renderOperatorDashboard(profile);
  openDialog(elements.operatorDialog);
  refreshOperatorApplications(profile);
}

async function refreshOperatorApplications(profile) {
  const adapter = window.BorrowbomSupabase;
  if (!adapter || !adapter.isReady()) return;
  const result = await adapter.listMyRentalRequests();
  if (result.error || !Array.isArray(result.data)) return;
  const remoteApplications = result.data.flatMap((request) => (request.rental_request_items || []).map((item) => {
    const linkedItem = equipment.find((entry) => entry.id === item.equipment_id);
    const remoteStatus = { "신청": "applied", "승인": "approved", "거절": "rejected", "반납 완료": "returned" }[request.status] || request.status || "applied";
    return { id: `REMOTE-${request.id}-${item.equipment_id}`, remoteRequestId: request.id, equipmentId: item.equipment_id, assetNo: item.asset_no_snapshot, name: item.equipment_name_snapshot, category: linkedItem?.category || "", symbol: linkedItem ? symbolForCategory(linkedItem.category) : "", color: linkedItem?.color || "#e8f1ec", requesterName: request.requester_name, requesterPhone: request.requester_phone, requesterEmail: request.requester_email, studentNumber: request.student_number, purpose: request.purpose, startDate: request.start_date, endDate: request.end_date, location: linkedItem?.location || "413호", status: remoteStatus, requestType: request.request_type || "대여", createdAt: request.created_at };
  }));
  const remoteKeys = new Set();
  remoteApplications.forEach((remote) => {
    const key = `${remote.remoteRequestId}:${remote.equipmentId}`;
    remoteKeys.add(key);
    const local = state.applications.find((entry) => entry.remoteRequestId === remote.remoteRequestId && entry.equipmentId === remote.equipmentId);
    if (local) Object.assign(local, remote);
  });
  state.applications = [...remoteApplications, ...state.applications.filter((entry) => !entry.remoteRequestId || !remoteKeys.has(`${entry.remoteRequestId}:${entry.equipmentId}`))];
  writeStorage(storageKeys.applications, state.applications);
  if (document.body.contains(elements.operatorDialog)) renderOperatorDashboard(profile);
}

function renderOperatorDashboard(profile) {
  const applications = state.applications;
  const categoryOptions = ["카메라", "빔프로젝터", "TV 모니터", "디빅스", "브라켓", "HDMI 선"].map((category) => `<option value="${category}">${category}</option>`).join("");
  const statusLabels = { applied: "승인 대기", 신청: "승인 대기", approved: "승인", rejected: "거절", returned: "반납 완료" };
  const today = toLocalIso(new Date());
  const isOverdue = (application) => (application.requestType || "대여") === "대여" && application.endDate && application.endDate < today && !["returned", "rejected", "반납 완료", "거절"].includes(application.status);
  const formatRequestTime = (application) => { const date = new Date(application.createdAt); return Number.isNaN(date.getTime()) ? "-" : date.toLocaleString("ko-KR", { dateStyle: "short", timeStyle: "short" }); };
  const pendingApplications = applications.filter((application) => (application.requestType || "대여") === "대여" && !["approved", "rejected", "returned", "반납 완료", "거절"].includes(application.status));
  const approvalCards = pendingApplications.length ? pendingApplications.map((application) => `<article class="approval-card"><div><strong>${escapeHtml(application.name || "-")}</strong><span>${escapeHtml(application.requesterName || "-")} · ${escapeHtml(application.studentNumber || "-")}</span><small>${escapeHtml(application.requesterEmail || "-")} · ${escapeHtml(application.startDate || "-")} ~ ${escapeHtml(application.endDate || "-")}</small></div><div class="approval-actions"><button class="primary-button" type="button" data-approve-id="${escapeHtml(application.id)}">승인</button><button class="secondary-button" type="button" data-reject-id="${escapeHtml(application.id)}">거절</button></div></article>`).join("") : `<p class="approval-empty">현재 승인 대기 중인 대여 신청이 없습니다.</p>`;
  const inventoryCategories = ["전체", ...new Set(equipment.map((item) => item.category).filter(Boolean))];
  const inventoryRows = equipment.map((item) => `<label class="inventory-status-row" data-inventory-category="${escapeHtml(item.category || "기타")}"><span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.assetNo || item.id)}</small></span><select data-equipment-status="${escapeHtml(item.id)}"><option value="대출 가능" ${(item.status || (item.stock > 0 ? "대출 가능" : "대출 중")) === "대출 가능" ? "selected" : ""}>대출 가능</option><option value="대출 중" ${(item.status || "") === "대출 중" ? "selected" : ""}>대출 중</option><option value="대출 불가" ${(item.status || "") === "대출 불가" ? "selected" : ""}>대출 불가</option></select></label>`).join("");
  const borrowerRows = applications.length ? applications.map((application) => `<tr class="${isOverdue(application) ? "overdue" : ""}"><td>${escapeHtml(application.requesterName || "-")}</td><td>${escapeHtml(application.requesterEmail || "-")}</td><td>${escapeHtml(application.studentNumber || "-")}</td><td>${escapeHtml(application.name || "-")}</td><td>${escapeHtml(application.startDate || "-")} ~ ${escapeHtml(application.endDate || "-")}</td><td>${escapeHtml(formatRequestTime(application))}</td><td>${isOverdue(application) ? "연체" : escapeHtml(statusLabels[application.status] || application.status || "신청")}</td></tr>`).join("") : `<tr><td colspan="7">현재 대여 신청이 없습니다.</td></tr>`;
  const returnPanel = `<section class="operator-panel"><div class="operator-panel-heading"><div><p class="section-kicker">RETURN CHECK-IN</p><h3>운영자 반납 처리</h3><p>대여자 이름을 검색한 뒤 반납할 장비를 여러 개 선택해 한 번에 처리합니다.</p></div></div><form id="operatorReturnForm" class="operator-return-form"><div class="field"><label for="operatorReturnName">대여자 이름</label><input id="operatorReturnName" placeholder="대여자 이름을 입력하세요" required /></div><button class="primary-button" type="submit">대여 목록 검색</button></form><p class="form-error" id="operatorReturnError" role="alert"></p><div id="operatorReturnCandidates" class="operator-return-candidates"></div></section>`;
  elements.operatorBody.innerHTML = `<div class="operator-summary"><div><span>등록 장비</span><strong>${equipment.length}대</strong></div><div><span>대여 신청</span><strong>${applications.length}건</strong></div><div><span>운영자</span><strong>${escapeHtml(profile.email)}</strong></div></div>
    <section class="operator-panel"><div class="operator-panel-heading"><div><p class="section-kicker">APPROVALS</p><h3>대여 신청 승인</h3><p>학생이 신청한 대여를 확인한 뒤 승인 또는 거절할 수 있습니다.</p></div></div><div class="approval-list">${approvalCards}</div></section>
    ${returnPanel}
    <section class="operator-panel"><div class="operator-panel-heading"><div><p class="section-kicker">EQUIPMENT STATUS</p><h3>장비 대여 상태 관리</h3><p>카테고리를 선택하거나 장비명·식별번호를 검색해 상태를 변경할 수 있습니다.</p></div></div><div class="inventory-toolbar"><label class="inventory-category-filter" for="operatorInventoryCategory">장비 카테고리<select id="operatorInventoryCategory">${inventoryCategories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}</select></label><label class="inventory-search" for="operatorInventorySearch"><span class="sr-only">장비 상태 검색</span><input id="operatorInventorySearch" type="search" placeholder="장비명 또는 식별번호 검색" /></label></div><div class="inventory-status-list">${inventoryRows}</div></section>
    <section class="operator-panel"><div class="operator-panel-heading"><div><p class="section-kicker">ADD EQUIPMENT</p><h3>새 장비 등록</h3><p>식별코드가 <strong>카테고리약어-등록연도-장비번호</strong> 형식으로 자동 부여됩니다. 예: CAM-2026-001</p></div></div>
      <form id="operatorEquipmentForm" class="operator-form" novalidate>
        <div class="field"><label for="operatorCategory">장비 종류</label><select id="operatorCategory" name="category" required>${categoryOptions}</select></div>
        <div class="field"><label for="operatorName">장비명</label><input id="operatorName" name="name" placeholder="예: Canon EOS R10" required /></div>
        <div class="field"><label for="operatorSpec">사양</label><input id="operatorSpec" name="spec" placeholder="예: 미러리스 카메라" /></div>
        <div class="field"><label for="operatorRegistrationYear">등록 연도</label><input id="operatorRegistrationYear" name="registrationYear" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" required /></div>
        <div class="field"><label for="operatorLocation">보관 위치</label><input id="operatorLocation" name="location" value="413호" required /></div>
        <div class="field"><label for="operatorStock">수량</label><input id="operatorStock" name="stock" type="number" min="1" value="1" required /></div>
        <div class="field"><label for="operatorImage">실제 사진 URL</label><input id="operatorImage" name="imageUrl" type="url" placeholder="https://...jpg (선택)" /></div>
        <div class="field operator-wide"><label for="operatorComponents">구성품</label><input id="operatorComponents" name="components" placeholder="쉼표로 구분: 본체, 배터리, 충전기" /></div>
        <button class="primary-button" type="submit">장비 등록하기</button>
        <p class="form-error" id="operatorError" role="alert"></p>
      </form>
    </section>
    <section class="operator-panel"><div class="operator-panel-heading"><div><p class="section-kicker">EQUIPMENT QR</p><h3>장비 QR 만들기</h3><p>장비별 QR을 다운로드하거나 전체 QR을 한 번에 인쇄할 수 있습니다.</p></div></div><button class="secondary-button operator-print-all-qr" id="operatorPrintAllQr" type="button">전체 QR 인쇄</button><div class="operator-qr-grid">${equipment.map((item) => `<button class="operator-qr-item" type="button" data-qr-equipment="${escapeHtml(item.id)}"><span>${escapeHtml(item.name)}</span><small>${escapeHtml(item.id)}</small></button>`).join("")}</div></section>
    <section class="operator-panel"><div class="operator-panel-heading"><div><p class="section-kicker">BORROWERS</p><h3>대여자 목록</h3><p>운영자 계정에서만 전체 신청자를 확인할 수 있습니다.</p></div></div><div class="operator-table-wrap"><table class="operator-table"><thead><tr><th>이름</th><th>이메일</th><th>학번</th><th>장비</th><th>기간</th><th>신청 시간</th><th>상태</th></tr></thead><tbody>${borrowerRows}</tbody></table></div></section>`;
  elements.operatorBody.querySelector("#operatorEquipmentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const category = form.elements.category.value;
    const error = form.querySelector("#operatorError");
    if (!name) { error.textContent = "장비명을 입력해주세요."; return; }
    const registrationYear = Math.min(2100, Math.max(2000, Number(form.elements.registrationYear.value) || new Date().getFullYear()));
    const code = nextEquipmentCode(category, registrationYear);
    const stock = Math.max(1, Number(form.elements.stock.value) || 1);
    const newItem = { id: code, assetNo: code, name: `${name}${form.elements.spec.value.trim() ? ` · ${form.elements.spec.value.trim()}` : ""}`, category, symbol: symbolForCategory(category), stock, total: stock, description: `${name} · 관리번호 ${code}`, location: form.elements.location.value.trim() || "413호", deposit: "없음", maxDays: 14, color: "#e8f1ec", components: form.elements.components.value.split(",").map((value) => value.trim()).filter(Boolean), caution: "사용 후 구성품을 확인하고 보관 장소에 반납해주세요.", imageUrl: form.elements.imageUrl.value.trim() || imageUrlForCategory(category) };
    equipment = [...equipment, newItem];
    const customEquipment = readStorage(storageKeys.operatorEquipment, []);
    writeStorage(storageKeys.operatorEquipment, [...customEquipment, newItem]);
    categories = ["전체", ...new Set(equipment.map((item) => item.category))];
    renderFilters(); renderEquipment();
    renderOperatorDashboard(profile);
    showToast(`${code} 장비가 등록되었습니다.`);
  });
  elements.operatorBody.querySelectorAll("[data-qr-equipment]").forEach((button) => button.addEventListener("click", () => openEquipmentQrPrint(button.dataset.qrEquipment)));
  elements.operatorBody.querySelector("#operatorPrintAllQr")?.addEventListener("click", openAllEquipmentQrPrint);
  elements.operatorBody.querySelectorAll("[data-equipment-status]").forEach((select) => select.addEventListener("change", async (event) => {
    const item = equipment.find((entry) => entry.id === event.currentTarget.dataset.equipmentStatus);
    if (!item) return;
    const status = event.currentTarget.value;
    const adapter = window.BorrowbomSupabase;
    if (adapter && adapter.isReady()) await adapter.updateEquipmentStatus(item.id, status);
    item.status = status;
    item.stock = status === "대출 가능" ? (item.total || 1) : 0;
    writeStorage(storageKeys.operatorEquipment, equipment.filter((entry) => entry.id && String(entry.id).startsWith("ETC-")));
    renderEquipment();
    showToast(`${item.name} 상태를 ${status}(으)로 변경했습니다.`);
  }));
  const filterInventory = () => {
    const category = elements.operatorBody.querySelector("#operatorInventoryCategory")?.value || "전체";
    const query = (elements.operatorBody.querySelector("#operatorInventorySearch")?.value || "").trim().toLocaleLowerCase("ko-KR");
    elements.operatorBody.querySelectorAll("[data-inventory-category]").forEach((row) => { const matchesCategory = category === "전체" || row.dataset.inventoryCategory === category; const matchesQuery = !query || row.textContent.toLocaleLowerCase("ko-KR").includes(query); row.hidden = !(matchesCategory && matchesQuery); });
  };
  elements.operatorBody.querySelector("#operatorInventoryCategory")?.addEventListener("change", filterInventory);
  elements.operatorBody.querySelector("#operatorInventorySearch")?.addEventListener("input", filterInventory);
  const updateApproval = async (applicationId, nextStatus) => {
    const application = state.applications.find((entry) => entry.id === applicationId);
    if (!application) return;
    const adapter = window.BorrowbomSupabase;
    if (adapter && adapter.isReady() && application.remoteRequestId) await adapter.updateRentalRequestStatus(application.remoteRequestId, nextStatus === "approved" ? "승인" : "거절");
    application.status = nextStatus;
    writeStorage(storageKeys.applications, state.applications);
    renderRentals();
    renderOperatorDashboard(profile);
    showToast(nextStatus === "approved" ? "대여 신청을 승인했습니다." : "대여 신청을 거절했습니다.");
  };
  elements.operatorBody.querySelectorAll("[data-approve-id]").forEach((button) => button.addEventListener("click", () => updateApproval(button.dataset.approveId, "approved")));
  elements.operatorBody.querySelectorAll("[data-reject-id]").forEach((button) => button.addEventListener("click", () => updateApproval(button.dataset.rejectId, "rejected")));
  const renderOperatorReturnCandidates = (name) => {
    const candidates = state.applications.filter((rental) => (rental.requestType || "대여") === "대여" && rental.requesterName === name && !["returned", "rejected", "cancelled", "반납 완료", "거절", "취소"].includes(rental.status));
    const target = elements.operatorBody.querySelector("#operatorReturnCandidates");
    target.innerHTML = candidates.length ? `<div class="operator-return-checklist">${candidates.map((rental) => `<label><input type="checkbox" value="${escapeHtml(rental.id)}" data-operator-return-item /><span><strong>${escapeHtml(rental.name)}</strong><small>${escapeHtml(rental.equipmentId)} · ${escapeHtml(rental.startDate)} ~ ${escapeHtml(rental.endDate)}</small></span></label>`).join("")}<button class="primary-button operator-return-bulk" type="button">선택 장비 반납 처리</button></div>` : `<p class="approval-empty">진행 중인 대여 목록이 없습니다.</p>`;
    target.querySelector(".operator-return-bulk")?.addEventListener("click", async () => {
      const selected = [...target.querySelectorAll("[data-operator-return-item]:checked")].map((checkbox) => state.applications.find((entry) => entry.id === checkbox.value)).filter(Boolean);
      if (!selected.length) return;
      const adapter = window.BorrowbomSupabase;
      const requestIds = [...new Set(selected.map((entry) => entry.remoteRequestId).filter(Boolean))];
      if (adapter && adapter.isReady()) {
        await Promise.all(requestIds.map((requestId) => adapter.updateRentalRequestStatus(requestId, "반납 완료")));
        await Promise.all(selected.map((entry) => adapter.updateEquipmentStatus(entry.equipmentId, "대출 가능")));
      }
      selected.forEach((entry) => { entry.status = "returned"; const item = equipment.find((equipmentItem) => equipmentItem.id === entry.equipmentId); if (item) { item.status = "대출 가능"; item.stock = item.total || 1; } });
      writeStorage(storageKeys.applications, state.applications);
      renderOperatorDashboard(profile);
      showToast(`${selected.length}개 장비를 반납 처리했습니다.`);
    });
  };
  elements.operatorBody.querySelector("#operatorReturnForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = event.currentTarget.elements.operatorReturnName.value.trim();
    const error = elements.operatorBody.querySelector("#operatorReturnError");
    const hasRental = state.applications.some((rental) => (rental.requestType || "대여") === "대여" && rental.requesterName === name && !["returned", "rejected", "cancelled", "반납 완료", "거절", "취소"].includes(rental.status));
    if (!name || !hasRental) { error.textContent = "진행 중인 해당 대여자를 찾을 수 없습니다."; return; }
    renderOperatorReturnCandidates(name);
  });
}

function loadQrGeneratorLibrary() {
  if (window.QRCode) return Promise.resolve(window.QRCode);
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js";
    script.onload = () => resolve(window.QRCode);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function openEquipmentQrPrint(equipmentId) {
  const item = findEquipmentByCode(equipmentId);
  if (!item) return;
  closeDialog(elements.operatorDialog);
  elements.qrResult.innerHTML = `<div class="qr-print-card"><div id="qrCanvas"></div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.id)}</span><div class="qr-print-actions"><button class="primary-button" id="qrPrintButton" type="button">인쇄하기</button><button class="secondary-button" id="qrDownloadButton" type="button">PNG 다운로드</button><button class="secondary-button" id="qrScanFromPrint" type="button">스캔 화면으로</button></div></div>`;
  openDialog(elements.qrDialog);
  try {
    const QRCode = await loadQrGeneratorLibrary();
    new QRCode(document.querySelector("#qrCanvas"), { text: `${window.location.origin}${window.location.pathname}#qr=${item.id}`, width: 220, height: 220, colorDark: "#00462A", colorLight: "#ffffff" });
  } catch (_) {
    elements.qrResult.insertAdjacentHTML("beforeend", `<p class="form-error">QR 생성 라이브러리를 불러오지 못했습니다. 식별코드 ${escapeHtml(item.id)}를 사용해주세요.</p>`);
  }
  document.querySelector("#qrPrintButton")?.addEventListener("click", () => window.print());
  document.querySelector("#qrDownloadButton")?.addEventListener("click", () => downloadQrCode(item));
  document.querySelector("#qrScanFromPrint")?.addEventListener("click", openQrDialog);
}

function downloadQrCode(item) {
  const source = document.querySelector("#qrCanvas canvas, #qrCanvas img");
  if (!source) return;
  const canvas = document.createElement("canvas");
  canvas.width = 440; canvas.height = 480;
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff"; context.fillRect(0, 0, canvas.width, canvas.height);
  if (source.tagName === "CANVAS") context.drawImage(source, 110, 20, 220, 220); else { const image = new Image(); image.onload = () => { context.drawImage(image, 110, 20, 220, 220); context.fillStyle = "#00462A"; context.font = "bold 18px sans-serif"; context.textAlign = "center"; context.fillText(item.name, 220, 285); context.fillText(item.id, 220, 320); const link = document.createElement("a"); link.download = `${item.id}-QR.png`; link.href = canvas.toDataURL("image/png"); link.click(); }; image.src = source.src; return; }
  context.fillStyle = "#00462A"; context.font = "bold 18px sans-serif"; context.textAlign = "center"; context.fillText(item.name, 220, 285); context.fillText(item.id, 220, 320); const link = document.createElement("a"); link.download = `${item.id}-QR.png`; link.href = canvas.toDataURL("image/png"); link.click();
}

async function openAllEquipmentQrPrint() {
  closeDialog(elements.operatorDialog);
  elements.qrResult.innerHTML = `<div class="qr-bulk-print"><div class="qr-bulk-toolbar"><strong>전체 장비 QR</strong><button class="primary-button" id="qrBulkPrintButton" type="button">전체 인쇄</button></div><div class="qr-bulk-grid" id="qrBulkGrid"></div></div>`;
  openDialog(elements.qrDialog);
  try {
    const QRCode = await loadQrGeneratorLibrary();
    const grid = document.querySelector("#qrBulkGrid");
    equipment.forEach((item) => { const card = document.createElement("article"); card.className = "qr-bulk-item"; card.innerHTML = `<div class="qr-bulk-code"></div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.id)}</span>`; grid.appendChild(card); new QRCode(card.querySelector(".qr-bulk-code"), { text: `${window.location.origin}${window.location.pathname}#qr=${item.id}`, width: 150, height: 150, colorDark: "#00462A", colorLight: "#ffffff" }); });
  } catch (_) { document.querySelector("#qrBulkGrid").innerHTML = `<p class="form-error">QR 생성 라이브러리를 불러오지 못했습니다.</p>`; }
  document.querySelector("#qrBulkPrintButton")?.addEventListener("click", () => window.print());
}

async function openReturnWorkspace(profile) {
  let history = [];
  const adapter = window.BorrowbomSupabase;
  if (adapter && adapter.isReady()) {
    const result = await adapter.listStudentRentalRequests(profile);
    if (!result.error && Array.isArray(result.data)) {
      history = result.data.filter((request) => !["반납 완료", "거절"].includes(request.status)).flatMap((request) => (request.rental_request_items || []).map((item) => ({
        equipmentId: item.equipment_id, assetNo: item.asset_no_snapshot, name: item.equipment_name_snapshot,
        startDate: request.start_date, endDate: request.end_date, status: request.status, requestId: request.id
      })));
    }
  } else {
    history = state.applications.filter((application) => (application.requestType || "대여") === "대여" && !["returned", "rejected", "cancelled", "반납 완료", "거절", "취소"].includes(application.status) && String(application.requesterEmail || "").trim().toLowerCase() === String(profile.email || "").trim().toLowerCase() && String(application.studentNumber || "").trim().toUpperCase() === String(profile.studentNumber || "").trim().toUpperCase() && application.requesterName === profile.name).map((application) => ({
      equipmentId: application.equipmentId, assetNo: application.assetNo, name: application.name,
      startDate: application.startDate, endDate: application.endDate, status: application.status, requestId: application.id
    }));
  }
  returnHistory = history;
  renderReturn(history, profile);
  openDialog(elements.returnDialog);
}

function renderReturn(history = [], profile = {}) {
  const entries = history;
  const equipmentOptions = entries.map((entry) => `<label class="return-item-option"><input type="checkbox" name="equipmentIds" value="${escapeHtml(entry.equipmentId)}" data-return-item /><span><strong>${escapeHtml(entry.name)}</strong><small>${escapeHtml(entry.assetNo || entry.equipmentId)}${entry.startDate ? ` · ${escapeHtml(entry.startDate)} ~ ${escapeHtml(entry.endDate || "")}` : ""}</small></span></label>`).join("");
  elements.returnBody.innerHTML = `<div class="return-student-context"><strong>${escapeHtml(profile.name || "학생")}님의 반납 신청</strong><span>${history.length ? "내가 대여한 장비를 여러 개 선택한 뒤 한 번에 신청할 수 있어요." : "현재 반납할 수 있는 본인 대여 장비가 없습니다."}</span></div>${history.length ? `<div class="return-history-note">현재 반납 가능한 대여 ${history.length}건을 찾았어요.</div>` : `<div class="return-history-empty">본인 대여 내역이 있을 때만 반납 장비가 표시됩니다.</div>`}<form id="returnForm" novalidate>
    <div class="return-equipment return-multi-list"><label class="return-list-label">반납할 장비 <span aria-hidden="true">*</span></label>${equipmentOptions}</div>
    <div id="returnComponents" class="component-checklist" aria-live="polite"></div>
    <div class="student-fields">
      <div class="field"><label for="returnerName">이름 <span aria-hidden="true">*</span></label><input id="returnerName" name="requesterName" type="text" autocomplete="name" value="${escapeHtml(profile.name || "")}" required /></div>
      <div class="field"><label for="returnerPhone">전화번호 <span aria-hidden="true">*</span></label><input id="returnerPhone" name="requesterPhone" type="tel" inputmode="tel" autocomplete="tel" placeholder="010-0000-0000" required /></div>
      <div class="field"><label for="returnerEmail">학교 이메일 <span aria-hidden="true">*</span></label><input id="returnerEmail" name="requesterEmail" type="email" inputmode="email" value="${escapeHtml(profile.email || "")}" placeholder="name@ewhain.net 또는 name@ewha.ac.kr" required /></div>
      <div class="field"><label for="returnerStudentNumber">학번 <span aria-hidden="true">*</span></label><input id="returnerStudentNumber" name="studentNumber" type="text" inputmode="text" pattern="[A-Za-z0-9]{4,20}" minlength="4" maxlength="20" value="${escapeHtml(profile.studentNumber || "")}" placeholder="영문·숫자 4~20자" required /></div>
    </div>
    <p class="form-error" id="returnError" role="alert"></p>
    <button class="primary-button return-submit" type="submit" ${history.length ? "" : "disabled"}>반납 신청하기</button>
  </form>`;
  const form = elements.returnBody.querySelector("#returnForm");
  const renderComponents = () => {
    const selected = [...form.querySelectorAll("[data-return-item]:checked")].map((checkbox) => equipment.find((entry) => entry.id === checkbox.value)).filter(Boolean);
    elements.returnBody.querySelector("#returnComponents").innerHTML = selected.length ? selected.map((item) => (item.components || []).length ? `<div class="return-component-group"><strong>${escapeHtml(item.name)} 구성품</strong>${item.components.map((component, index) => `<label><input type="checkbox" name="component-${item.id}-${index}" value="${escapeHtml(component)}" /> <span>${escapeHtml(component)}</span></label>`).join("")}</div>` : `<div class="return-component-group"><strong>${escapeHtml(item.name)}</strong><label><input type="checkbox" name="component-${item.id}-empty" /> 구성품 없음 확인</label></div>`).join("") : `<p class="return-components-hint">장비를 선택하면 구성품 확인 항목이 나타납니다.</p>`;
  };
  form.querySelectorAll("[data-return-item]").forEach((checkbox) => checkbox.addEventListener("change", renderComponents));
  if (scannedEquipmentId) form.querySelector(`[data-return-item][value="${CSS.escape(scannedEquipmentId)}"]`)?.click();
  form.addEventListener("submit", submitReturn);
}

async function submitReturn(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const error = form.querySelector("#returnError");
  const selectedIds = [...form.querySelectorAll("[data-return-item]:checked")].map((checkbox) => checkbox.value);
  const selectedItems = selectedIds.map((id) => equipment.find((entry) => entry.id === id)).filter(Boolean);
  const validation = getStudentValidation();
  const name = validation.validateName(form.elements.requesterName.value);
  const phone = validation.validatePhone(form.elements.requesterPhone.value);
  const email = validation.validateEmail(form.elements.requesterEmail.value);
  const studentNumber = validation.validateStudentNumber(form.elements.studentNumber.value);
  const checks = [...form.querySelectorAll(".component-checklist input[type=checkbox]")];
  const componentsChecked = checks.length > 0 && checks.every((checkbox) => checkbox.checked);
  const firstError = [name, phone, email, studentNumber].find((result) => !result.valid);
  if (!selectedItems.length || !componentsChecked || firstError) {
    error.textContent = firstError ? firstError.message : (!selectedItems.length ? "반납할 장비를 하나 이상 선택해주세요." : "모든 구성품을 확인한 뒤 반납 신청해주세요.");
    return;
  }
  const submitButton = form.querySelector(".return-submit");
  submitButton.disabled = true;
  const adapter = window.BorrowbomSupabase;
  if (adapter && adapter.isReady()) {
    const remoteResult = await adapter.createRentalRequest({
      requestType: "반납", purpose: `${selectedItems.map((item) => item.name).join(", ")} 반납 신청`, requesterName: name.value, requesterPhone: phone.value,
      requesterEmail: email.value, studentNumber: studentNumber.value, startDate: new Date().toISOString().slice(0, 10),
      endDate: new Date().toISOString().slice(0, 10), returnComponentsConfirmed: true,
      items: selectedItems.map((item) => ({ equipmentId: item.id, assetNo: item.assetNo, name: item.name }))
    });
    if (remoteResult.error) { submitButton.disabled = false; error.textContent = "반납 신청을 저장하지 못했어요. 잠시 후 다시 시도해주세요."; return; }
  }
  const timestamp = Date.now();
  const applications = selectedItems.map((item, index) => ({ id: `RETURN-${timestamp}-${index}`, equipmentId: item.id, category: item.category, name: item.name, symbol: symbolForCategory(item.category), color: item.color, assetNo: item.assetNo, requesterName: name.value, requesterPhone: phone.value, requesterEmail: email.value, studentNumber: studentNumber.value, purpose: "반납 신청", startDate: new Date().toISOString().slice(0, 10), endDate: new Date().toISOString().slice(0, 10), location: item.location, status: "applied", requestType: "반납", returnComponentsConfirmed: true, createdAt: new Date().toISOString() }));
  state.applications = [...applications, ...state.applications];
  writeStorage(storageKeys.applications, state.applications);
  renderRentals();
  closeDialog(elements.returnDialog);
  showToast(`${selectedItems.length}개 장비의 반납 신청이 접수되었어요.`);
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
      const normalized = String(value || "").trim().toUpperCase();
      const valid = /^[A-Z0-9]{4,20}$/.test(normalized);
      return { valid, value: normalized, message: valid ? "" : "학번은 앞뒤 공백 없이 영문·숫자 4~20자로 입력해주세요." };
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
      equipmentId: item.id, category: item.category, name: item.name, symbol: symbolForCategory(item.category), color: item.color,
      assetNo: item.assetNo || entry.assetNo || item.id,
      remoteRequestId, requesterName: studentDetails.name, requesterPhone: studentDetails.phone, requesterEmail: studentDetails.email, studentNumber: studentDetails.studentNumber,
      startDate: entry.startDate, endDate: entry.endDate, purpose,
      location: item.location, status: "applied", requestType: "대여", createdAt: new Date().toISOString()
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
  const profile = readStudentProfile();
  if (!profile) {
    elements.rentalList.innerHTML = `<div class="rental-empty">대여 목록을 확인하려면 먼저 대여하기 또는 반납하기에서 학생 확인을 완료해주세요.</div>`;
    return;
  }
  const email = String(profile.email || "").trim().toLowerCase();
  const studentNumber = String(profile.studentNumber || "").trim().toUpperCase();
  const name = String(profile.name || "").trim();
  const rentals = state.applications.filter((rental) =>
    (rental.requestType || "대여") === "대여" &&
    String(rental.requesterEmail || "").trim().toLowerCase() === email &&
    String(rental.studentNumber || "").trim().toUpperCase() === studentNumber &&
    String(rental.requesterName || "").trim() === name
  );
  if (!rentals.length) {
    elements.rentalList.innerHTML = `<div class="rental-empty">현재 ${escapeHtml(name)}님의 대여 목록이 없습니다.</div>`;
    return;
  }
  elements.rentalList.innerHTML = rentals.map((rental) => {
    const linkedItem = equipment.find((item) => item.id === rental.equipmentId);
    const category = rental.category || linkedItem?.category || (rental.name.includes("프로젝터") ? "빔프로젝터" : rental.name.includes("카메라") ? "카메라" : "");
    return `
    <article class="rental-item">
      <div class="rental-thumb" style="--thumb-bg:${rental.color}" aria-hidden="true">${symbolForCategory(category)}</div>
      <div class="rental-name"><strong>${escapeHtml(rental.name)}</strong><span>${escapeHtml(rental.equipmentId)} · ${escapeHtml(rental.purpose)}</span></div>
      <div class="rental-detail"><small>대여 기간</small><strong>${formatDate(rental.startDate)} – ${formatDate(rental.endDate)}</strong></div>
      <div class="rental-detail"><small>수령 장소</small><strong>${escapeHtml(rental.location)}</strong></div>
      <span class="status-chip ${rental.status}">${statusLabels[rental.status] || rental.status}</span>
      ${["applied", "신청"].includes(rental.status) ? `<button class="rental-cancel-button" type="button" data-cancel-rental="${escapeHtml(rental.id)}">신청 취소하기</button>` : ""}
    </article>`;
  }).join("");
  elements.rentalList.querySelectorAll("[data-cancel-rental]").forEach((button) => button.addEventListener("click", async () => {
    const rental = state.applications.find((entry) => entry.id === button.dataset.cancelRental);
    if (!rental || !["applied", "신청"].includes(rental.status)) return;
    const adapter = window.BorrowbomSupabase;
    if (adapter && adapter.isReady() && rental.remoteRequestId) await adapter.updateRentalRequestStatus(rental.remoteRequestId, "취소");
    rental.status = "cancelled";
    writeStorage(storageKeys.applications, state.applications);
    renderRentals();
    showToast("대여 신청을 취소했습니다.");
  }));
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
  const rentButton = event.target.closest("[data-rent-id]");
  if (rentButton && !rentButton.disabled) openDetail(rentButton.dataset.rentId);
});

elements.search.addEventListener("input", (event) => { state.query = event.target.value; renderEquipment(); });
elements.available.addEventListener("change", (event) => { state.availableOnly = event.target.checked; renderEquipment(); });
document.querySelector("#resetFilters").addEventListener("click", () => {
  state.category = "전체"; state.query = ""; state.availableOnly = false;
  elements.search.value = ""; elements.available.checked = false;
  renderFilters(); renderEquipment(); elements.search.focus();
});

document.querySelector("#basketButton").addEventListener("click", () => {
  if (!readStudentProfile()) { openStudentCheck("basket"); return; }
  renderBasket(); openDialog(elements.basketDialog);
});
document.querySelector("#rentButton").addEventListener("click", () => openStudentCheck("equipment"));
document.querySelector("#heroReturnButton").addEventListener("click", () => openStudentCheck("return"));
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
elements.authDialog.addEventListener("click", (event) => { if (event.target.closest(".close-auth")) closeDialog(elements.authDialog); });
elements.operatorDialog.addEventListener("click", (event) => { if (event.target.closest(".close-operator")) closeDialog(elements.operatorDialog); });
document.querySelector("#authForm").addEventListener("submit", submitStudentCheck);
document.querySelector("#qrButton").addEventListener("click", openQrDialog);
document.querySelector("#mobileRentButton").addEventListener("click", () => openStudentCheck("equipment"));
document.querySelector("#mobileReturnButton").addEventListener("click", () => openStudentCheck("return"));
document.querySelector("#qrManualButton").addEventListener("click", () => renderQrResult(findEquipmentByCode(elements.qrManualCode.value)));
elements.qrDialog.addEventListener("click", (event) => { if (event.target.closest(".close-qr")) closeDialog(elements.qrDialog); });
elements.qrDialog.addEventListener("close", () => { if (qrScanner) qrScanner.stop().catch(() => {}); qrScanner = null; });

[elements.detailDialog, elements.basketDialog, elements.returnDialog, elements.authDialog, elements.operatorDialog, elements.qrDialog].forEach((dialog) => {
  dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) closeDialog(dialog);
  });
});

applyLanguage();
renderRentals();
updateBasketCount();
document.querySelector("#totalEquipment").textContent = equipment.reduce((sum, item) => sum + item.total, 0);
initializeSupabaseEquipment();
const initialQrCode = new URLSearchParams(window.location.hash.replace(/^#/, "")).get("qr");
if (initialQrCode) {
  window.setTimeout(() => { openQrDialog(); window.setTimeout(() => renderQrResult(findEquipmentByCode(initialQrCode)), 500); }, 0);
}
