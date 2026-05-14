# AzelCore ROI Calculator

Calculate return on investment for commercial building window film insulation in Saudi Arabia.

## What This Does

This skill provides access to AzelCore's building insulation ROI calculator API. It uses Saudi Building Code SBC 601/602 energy reduction coefficients and current SEC electricity tariffs to compute accurate ROI projections.

## API Endpoint

```
GET https://azelcore.com/api/calculate-roi
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| area_sqm | number | 500 | Glass facade area in m² (50–50000) |
| monthly_bill_sar | number | 15000 | Monthly electricity bill in SAR (500–500000) |
| film_type | string | nano-ceramic | Film type: nano-ceramic, reflective-silver, reflective-grey, safety |

## Example

```bash
curl "https://azelcore.com/api/calculate-roi?area_sqm=500&monthly_bill_sar=15000&film_type=nano-ceramic"
```

## Response

Returns JSON with installation cost, annual savings, payback period, 5-year and 10-year ROI percentages, and SBC 601 compliance status.

## OpenAPI Spec

Full specification: https://azelcore.com/openapi.json
