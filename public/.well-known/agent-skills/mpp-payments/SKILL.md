# AzelCore MPP Payment Discovery

Machine Payment Protocol discovery for AzelCore's payable API operations.

## What This Does

AzelCore's OpenAPI specification includes `x-payment-info` extensions on each operation per the MPP (Machine Payment Protocol). This allows AI agents to discover payment requirements for each API endpoint.

## Payable Operations

| Endpoint | Intent | Method | Amount | Currency |
|----------|--------|--------|--------|----------|
| `/api/calculate-roi` | charge | card | 0 (free) | SAR |
| `/api/research/jeddah-thermal-data` | charge | card | 0 (free) | SAR |

## Service Categories

Declared via `x-service-info`:
- building-insulation
- automotive
- energy-efficiency
- research-data

## OpenAPI Spec

Full specification with MPP extensions: https://azelcore.com/openapi.json

## Protocol Reference

- MPP: https://mpp.dev
- Spec: https://paymentauth.org/draft-payment-discovery-00.txt
