---
name: local-network-fetcher
description: Fetches data from local network devices (like HomeAssistant, smart devices, or local APIs). Will reject non-local IP addresses to maintain privacy.
---

# Local Network Fetcher

Allows Gemma to query local devices (like a local Home Assistant, router, or IoT device) without requiring cloud access. Includes a safety check to ensure it only hits local IPs.

## Instructions

Call the `run_js` tool with the following exact parameters:
- script name: `index.html`
- data: A JSON string with the following fields:
  - `ip_address`: String. The local IP address or hostname to query (e.g., 192.168.1.100, localhost).
  - `path`: String. The API path to append to the IP (e.g., /api/status).
  - `method`: String. HTTP method to use (GET or POST).
