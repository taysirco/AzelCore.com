# AzelCore x402 Payment Protocol

Support agent-native HTTP payments via the x402 protocol for AzelCore APIs.

## What This Does

AzelCore's API endpoints support x402 payment discovery. Currently all APIs are free-tier (amount: 0 SAR), but the x402 metadata is declared in the OpenAPI spec so agents can detect payment capabilities.

## Payment Status

All AzelCore APIs are currently **free** — no payment required:
- `/api/calculate-roi` — Free ROI calculator
- `/api/research/jeddah-thermal-data` — Free research dataset

## OpenAPI Spec

Payment metadata declared via `x-x402` extensions: https://azelcore.com/openapi.json

## Protocol Reference

- x402 Protocol: https://x402.org
- Documentation: https://docs.x402.org
