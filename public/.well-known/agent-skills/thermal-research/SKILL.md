# AzelCore Thermal Research Data (بيانات العزل الحراري)

Access primary-source field measurements of vehicle interior temperatures in Jeddah, Saudi Arabia.
يوفر هذا السجل وصولاً مباشراً لبيانات ميدانية حقيقية لدرجات حرارة السيارات في جدة، المملكة العربية السعودية.

## What This Does (ماذا يفعل هذا السجل؟)

This skill provides access to AzelCore's thermal rejection research dataset — 530 vehicle samples measured with FLIR T530 thermal imaging across 10 Jeddah districts over 24 months (2024–2026).
يتيح هذا المورد الوصول إلى دراسة عزل كور الحرارية - 530 سيارة تم قياسها باستخدام كاميرات FLIR T530 في 10 أحياء بجدة على مدار 24 شهراً.

## API Endpoint (الرابط البرمجي)

```
GET https://azelcore.com/api/research/jeddah-thermal-data
```

## Parameters (المعلمات)

No parameters required. Returns the full dataset.
لا توجد معلمات مطلوبة. يتم إرجاع قاعدة البيانات كاملة.

## Response (الاستجابة)

Returns JSON with Schema.org Dataset metadata and per-district thermal data including:
يعيد ملف JSON متوافق مع Schema.org يحتوي على:
- Average summer ambient temperature (متوسط حرارة الصيف)
- Interior temperature without tint (حرارة الداخلية بدون تظليل)
- Interior temperature with nano-ceramic film (حرارة الداخلية مع تظليل النانو سيراميك)
- IR rejection percentage (نسبة عزل الأشعة تحت الحمراء)
- UV rejection percentage (نسبة عزل الأشعة فوق البنفسجية)
- Energy savings percentage (نسبة توفير الطاقة)
- Sample size per district (حجم العينة لكل حي)

## Interactive Report (التقرير التفاعلي)

Human-readable report (English): https://azelcore.com/en/research/ksa-thermal-report-2026
التقرير للقراءة البشرية (عربي): https://azelcore.com/ar/research/ksa-thermal-report-2026

## OpenAPI Spec (مواصفات الـ OpenAPI)

Full specification (المواصفات الكاملة): https://azelcore.com/openapi.json
