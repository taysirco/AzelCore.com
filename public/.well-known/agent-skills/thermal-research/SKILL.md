# AzelCore Thermal Research Data

Access primary-source field measurements of vehicle interior temperatures in Jeddah, Saudi Arabia.

## What This Does

This skill provides access to AzelCore's thermal rejection research dataset — 530 vehicle samples measured with FLIR T530 thermal imaging across 10 Jeddah districts over 24 months (2024–2026).

## API Endpoint

```
GET https://azelcore.com/api/research/jeddah-thermal-data
```

## Parameters

No parameters required. Returns the full dataset.

## Response

Returns JSON with Schema.org Dataset metadata and per-district thermal data including:
- Average summer ambient temperature
- Interior temperature without tint
- Interior temperature with nano-ceramic film
- IR rejection percentage
- UV rejection percentage
- Energy savings percentage
- Sample size per district

## Interactive Report

Human-readable report: https://azelcore.com/research/ksa-thermal-report-2026

## OpenAPI Spec

Full specification: https://azelcore.com/openapi.json
