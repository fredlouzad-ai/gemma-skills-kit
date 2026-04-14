---
name: local-file-parser
description: Parses and extracts structured data from a local JSON or CSV file string representation.
---

# Local File Parser

This skill takes raw string content (e.g., read locally by the host app) and safely parses it into a structured summary for Gemma to analyze.

## Instructions

Call the `run_js` tool with the following exact parameters:
- script name: `index.html`
- data: A JSON string with the following fields:
  - `fileContent`: String. The raw string content of the file to parse.
  - `format`: String. The format of the file content (either "json" or "csv").
