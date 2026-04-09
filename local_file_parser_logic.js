/**
 * Gemma 4 Agent Skill: Local File Parser
 * Designed for Google AI Edge Gallery / LiteRT-LM workflows.
 * 
 * This skill takes raw string content (e.g., read locally by the host app)
 * and safely parses it into a structured summary for Gemma to analyze, 
 * simulating local document ingestion for privacy-first tools.
 */

export async function execute(parameters) {
  const { fileContent, format } = parameters;

  try {
    if (format === 'json') {
      const data = JSON.parse(fileContent);
      const keyCount = Object.keys(data).length;
      return JSON.stringify({
        status: "success",
        metadata: { keys: keyCount, type: "JSON" },
        preview: JSON.stringify(data).substring(0, 500) + "..."
      });
    } 
    
    if (format === 'csv') {
      const rows = fileContent.split('\n').filter(row => row.trim() !== '');
      const headers = rows[0].split(',');
      return JSON.stringify({
        status: "success",
        metadata: { rowCount: rows.length, columns: headers },
        preview: rows.slice(0, 3).join('\n')
      });
    }

    throw new Error("Unsupported format. Use 'json' or 'csv'.");

  } catch (error) {
    return JSON.stringify({
      status: "error",
      message: error.message
    });
  }
}
