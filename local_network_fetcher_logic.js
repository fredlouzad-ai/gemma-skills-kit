/**
 * Gemma 4 Agent Skill: Local Network Fetcher
 * Designed for Google AI Edge Gallery / LiteRT-LM workflows.
 * 
 * Allows Gemma to query local devices (like a local Home Assistant, router, or IoT device)
 * without requiring cloud access. Includes a safety check to ensure it only hits local IPs.
 */

export async function execute(parameters) {
  const { ip_address, path, method = "GET" } = parameters;

  // Safety check: Ensure the IP is a local network IP (192.168.x.x, 10.x.x.x, 127.0.0.1, etc.)
  const isLocalIP = /^(192\.168|10\.|172\.(1[6-9]|2[0-9]|3[0-1])|127\.0\.0\.1|localhost)/.test(ip_address);
  
  if (!isLocalIP) {
    return JSON.stringify({
      status: "error",
      message: "Security violation: This skill can only query local network IP addresses."
    });
  }

  try {
    const url = `http://${ip_address}${path.startsWith('/') ? path : '/' + path}`;
    
    // In a real environment, this would use fetch(). We mock the response here for the Starter Kit template.
    // const response = await fetch(url, { method });
    // const data = await response.json();

    return JSON.stringify({
      status: "success",
      url_queried: url,
      message: "Successfully reached local device.",
      mock_data: {
        device_status: "online",
        uptime: "42 hours",
        readings: [12, 15, 9]
      }
    });

  } catch (error) {
    return JSON.stringify({
      status: "error",
      message: error.message
    });
  }
}