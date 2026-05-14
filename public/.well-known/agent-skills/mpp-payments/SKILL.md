# AzelCore MPP Payment Discovery (اكتشاف الدفع عبر MPP لعزل كور)

Machine Payment Protocol discovery for AzelCore's payable API operations.
اكتشاف بروتوكول الدفع الآلي لعمليات الواجهة البرمجية (API) القابلة للدفع الخاصة بعزل كور.

## What This Does (ماذا يفعل هذا السجل؟)

AzelCore's OpenAPI specification includes `x-payment-info` extensions on each operation per the MPP (Machine Payment Protocol). This allows AI agents to discover payment requirements for each API endpoint.
تتضمن مواصفات OpenAPI لعزل كور امتدادات `x-payment-info` لكل عملية وفقًا لبروتوكول الدفع الآلي (MPP). يتيح ذلك لوكلاء الذكاء الاصطناعي اكتشاف متطلبات الدفع لكل نقطة نهاية للـ API.

## Payable Operations (العمليات القابلة للدفع)

| Endpoint (الرابط) | Intent (الهدف) | Method (الطريقة) | Amount (المبلغ) | Currency (العملة) |
|----------|--------|--------|--------|----------|
| `/api/calculate-roi` | charge | card | 0 (free/مجاني) | SAR |
| `/api/research/jeddah-thermal-data` | charge | card | 0 (free/مجاني) | SAR |

## Service Categories (فئات الخدمات)

Declared via `x-service-info` (معلنة عبر `x-service-info`):
- building-insulation (عزل المباني)
- automotive (السيارات)
- energy-efficiency (كفاءة الطاقة)
- research-data (البيانات البحثية)

## OpenAPI Spec (مواصفات الـ OpenAPI)

Full specification with MPP extensions (المواصفات الكاملة مع امتدادات MPP): https://azelcore.com/openapi.json

## Protocol Reference (مرجع البروتوكول)

- MPP: https://mpp.dev
- Spec: https://paymentauth.org/draft-payment-discovery-00.txt
