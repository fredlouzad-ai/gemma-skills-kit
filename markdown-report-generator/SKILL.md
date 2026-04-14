---
name: markdown-report-generator
description: Generates a structured markdown report from raw data or analysis. Useful for saving Gemma's findings into a readable format for the user.
---

# Markdown Report Generator

Takes structured analysis from Gemma and formats it into a clean Markdown document.

## Instructions

Call the `run_js` tool with the following exact parameters:
- script name: `index.html`
- data: A JSON string with the following fields:
  - `title`: String. The main title of the report.
  - `sections`: Array of objects. Each object must have `heading` (String) and `content` (String).
