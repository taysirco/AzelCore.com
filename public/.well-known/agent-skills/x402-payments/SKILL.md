# AzelCore x402 Payment Protocol (بروتوكول الدفع x402)

Support agent-native HTTP payments via the x402 protocol for AzelCore APIs.
يدعم المدفوعات التلقائية لعملاء الذكاء الاصطناعي عبر بروتوكول x402 لواجهات برمجة AzelCore.

## What This Does (ماذا يفعل هذا السجل؟)

AzelCore's API endpoints support x402 payment discovery. Currently all APIs are free-tier (amount: 0 SAR), but the x402 metadata is declared in the OpenAPI spec so agents can detect payment capabilities.
تدعم واجهات برمجة AzelCore اكتشاف الدفع ببروتوكول x402. حالياً جميع الواجهات مجانية (0 ريال سعودي)، ولكن يتم إعلان البيانات الوصفية لتمكين الروبوتات من اكتشاف قدرات الدفع مستقبلاً.

## Payment Status (حالة الدفع)

All AzelCore APIs are currently **free** — no payment required:
جميع واجهات AzelCore حالياً **مجانية** - لا يتطلب دفع:
- `/api/calculate-roi` — Free ROI calculator (حاسبة مجانية للعائد على الاستثمار)
- `/api/research/jeddah-thermal-data` — Free research dataset (قاعدة بيانات بحثية مجانية)

## OpenAPI Spec (مواصفات الـ OpenAPI)

Payment metadata declared via `x-x402` extensions: https://azelcore.com/openapi.json
تم إعلان بيانات الدفع عبر امتدادات `x-x402`: https://azelcore.com/openapi.json

## Protocol Reference (مرجع البروتوكول)

- x402 Protocol: https://x402.org
- Documentation: https://docs.x402.org
