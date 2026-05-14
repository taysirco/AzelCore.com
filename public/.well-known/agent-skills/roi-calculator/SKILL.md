# AzelCore ROI Calculator (حاسبة العائد على الاستثمار لعزل كور)

Calculate return on investment for commercial building window film insulation in Saudi Arabia.
حساب العائد على الاستثمار لعزل نوافذ المباني التجارية في المملكة العربية السعودية.

## What This Does (ماذا يفعل هذا السجل؟)

This skill provides access to AzelCore's building insulation ROI calculator API. It uses Saudi Building Code SBC 601/602 energy reduction coefficients and current SEC electricity tariffs to compute accurate ROI projections.
يوفر هذا السجل وصولاً إلى واجهة برمجة تطبيقات حاسبة العائد على الاستثمار لعزل المباني. وتستخدم معاملات خفض الطاقة لكود البناء السعودي (SBC 601/602) وتعرفة الكهرباء الحالية من شركة الكهرباء لحساب العائد بدقة.

## API Endpoint (الرابط البرمجي)

```
GET https://azelcore.com/api/calculate-roi
```

## Parameters (المعلمات)

| Parameter (المعلمة) | Type (النوع) | Default (الافتراضي) | Description (الوصف) |
|-----------|------|---------|-------------|
| area_sqm | number | 500 | Glass facade area in m² (مساحة الواجهة الزجاجية بالمتر المربع 50-50000) |
| monthly_bill_sar | number | 15000 | Monthly electricity bill in SAR (الفاتورة الشهرية للكهرباء بالريال 500-500000) |
| film_type | string | nano-ceramic | Film type: nano-ceramic, reflective-silver, reflective-grey, safety (نوع الفيلم المستخدم) |

## Example (مثال)

```bash
curl "https://azelcore.com/api/calculate-roi?area_sqm=500&monthly_bill_sar=15000&film_type=nano-ceramic"
```

## Response (الاستجابة)

Returns JSON with installation cost, annual savings, payback period, 5-year and 10-year ROI percentages, and SBC 601 compliance status.
يعيد ملف JSON يحتوي على تكلفة التركيب، التوفير السنوي، فترة استرداد رأس المال، ونسبة العائد لـ 5 و 10 سنوات، وحالة التوافق مع الكود السعودي 601.

## OpenAPI Spec (مواصفات الـ OpenAPI)

Full specification (المواصفات الكاملة): https://azelcore.com/openapi.json
