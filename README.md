# Gemma 4 Agent Skills - Starter Kit

Welcome to the Starter Kit for building local, privacy-first agentic workflows using Google's Gemma 4 and LiteRT-LM.

## Why this kit?
Gemma 4 enables powerful "Agentic" workflows natively on-device. This kit provides boilerplate Agent Skills (tools) that you can load directly into the **Google AI Edge Gallery** or use with the `litert-lm` CLI.

By using these skills, your local Gemma instance can interact with data, fetch external APIs, and parse documents without sending any user data to the cloud.

## Included Skills

### 1. Local File Parser (`local_file_parser`)
- **schema.json**: Defines the inputs for Gemma.
- **logic.js**: The JavaScript execution block that runs when Gemma triggers the tool.
- **Use Case**: Allows Gemma to read and summarize structured CSVs and JSONs locally on the user's phone or desktop. Perfect for privacy-focused data analysis (e.g., HR reps, finance).

## How to Test in AI Edge Gallery
1. Open the **Google AI Edge Gallery** app.
2. Navigate to the **Agent Skills** tile.
3. Add a Custom Skill.
4. Copy/paste the schema from `local_file_parser_schema.json`.
5. Copy/paste the logic from `local_file_parser_logic.js`.
6. Prompt Gemma 4: *"I have a CSV file with these contents: [paste data]. Use the local file parser to summarize it."*

---
*Built to help developers monetize local AI capabilities.*
