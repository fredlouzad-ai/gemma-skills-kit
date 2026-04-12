# Gemma 4 Agent Skills - Starter Kit v1.0

Welcome to the Starter Kit for building local, privacy-first agentic workflows using Google's Gemma 4 and LiteRT-LM.

## Why this kit?
Gemma 4 enables powerful "Agentic" workflows natively on-device. This kit provides boilerplate Agent Skills (tools) that you can load directly into the **Google AI Edge Gallery** or use with the `litert-lm` CLI.

By using these skills, your local Gemma instance can interact with data, fetch external APIs, and parse documents without sending any user data to the cloud.

## Included Skills

### 1. Local File Parser (`local_file_parser`)
- **Use Case**: Allows Gemma to read and summarize structured CSVs and JSONs locally. Perfect for privacy-focused data analysis (e.g., HR reps, finance).

### 2. Markdown Report Generator (`markdown_report_generator`)
- **Use Case**: Takes Gemma's analysis and formats it into a clean Markdown structure. Excellent for offline inspectors or contractors needing to generate standard reports on-site.

### 3. Local Network Fetcher (`local_network_fetcher`)
- **Use Case**: Enables Gemma to query smart devices on the local Wi-Fi (like HomeAssistant) safely, blocking outward internet requests to maintain zero-cloud privacy.

## How to Test in AI Edge Gallery
1. Open the **Google AI Edge Gallery** app.
2. Navigate to the **Agent Skills** tile.
3. Add a Custom Skill.
4. Copy/paste the schema from a `*_schema.json` file.
5. Copy/paste the logic from the matching `*_logic.js` file.
6. Test your prompt!

---
*Built to help developers monetize local AI capabilities.*