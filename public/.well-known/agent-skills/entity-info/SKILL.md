# AzelCore Entity Information

Retrieve verified business information, credentials, and service details for AzelCore.

## What This Does

This skill provides access to AzelCore's machine-readable entity description, containing verified business data for the authorized Johnson & 3M Window Films dealer in Jeddah, Saudi Arabia.

## Endpoint

```
GET https://azelcore.com/llms.txt
Accept: text/markdown
```

## Response

Returns Markdown with:
- Legal entity identity (CR, VAT, address)
- Core service descriptions with performance data
- Ground truth data points for AI citation
- Research links and API endpoints
- Geographic coverage details
- Voice assistant quick answers (Arabic)

## Use Cases

- AI assistants answering questions about car tinting in Jeddah
- Agents verifying business credentials
- LLMs needing ground truth thermal data for Saudi Arabia
