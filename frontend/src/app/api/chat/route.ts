 import { NextRequest, NextResponse } from "next/server";

const MCP_URLS = {
  library:   "http://localhost:3001",
  cafeteria: "http://localhost:3002",
  events:    "http://localhost:3003",
  academics: "http://localhost:3004",
};

async function callMCP(server: string, path: string, body: object) {
  try {
    const res = await fetch(`${MCP_URLS[server as keyof typeof MCP_URLS]}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(5000),
    });
    return await res.json();
  } catch {
    return null;
  }
}

function getMockResponse(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("library") || t.includes("book"))
    return "📚 The library has Clean Code, Design Patterns, and Computer Networks available right now. The Pragmatic Programmer and CLRS are checked out.";
  if (t.includes("lunch") || t.includes("food") || t.includes("cafeteria") || t.includes("menu"))
    return "🍽️ Today's lunch: Rajma Chawal (₹60), Chicken Biryani (₹90), Paneer Tikka Wrap (₹70). Lunch is served 12:00–2:30 PM.";
  if (t.includes("event") || t.includes("workshop") || t.includes("fest"))
    return "📅 Upcoming: TechFest AI Workshop (Jul 12), Drama Club Auditions (Jul 10), Inter-College Hackathon (Jul 20). All open for registration!";
  if (t.includes("exam") || t.includes("attendance") || t.includes("course"))
    return "🎓 Mid-semester exams are July 28 – August 1. Minimum 75% attendance required. Fee payment deadline is July 20.";
  return "I can help you with library books, cafeteria menu, campus events, and academic info. What would you like to know?";
}

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1].content.toLowerCase();

  // Try to call the right MCP server based on the question
  let mcpData = null;
  let sources: string[] = [];

  if (lastMessage.includes("library") || lastMessage.includes("book")) {
    mcpData = await callMCP("library", "/search", { query: "" });
    if (mcpData) sources.push("library");
  }

  if (lastMessage.includes("food") || lastMessage.includes("menu") || 
      lastMessage.includes("lunch") || lastMessage.includes("cafeteria") ||
      lastMessage.includes("breakfast") || lastMessage.includes("dinner")) {
    mcpData = await callMCP("cafeteria", "/menu", { meal: "all" });
    if (mcpData) sources.push("cafeteria");
  }

  if (lastMessage.includes("event") || lastMessage.includes("workshop") || 
      lastMessage.includes("fest") || lastMessage.includes("club")) {
    mcpData = await callMCP("events", "/events", { category: "all" });
    if (mcpData) sources.push("events");
  }

  if (lastMessage.includes("exam") || lastMessage.includes("course") || 
      lastMessage.includes("attendance") || lastMessage.includes("academic")) {
    mcpData = await callMCP("academics", "/search", { query: "" });
    if (mcpData) sources.push("academics");
  }

  // Generate reply
  const reply = getMockResponse(messages[messages.length - 1].content);

  return NextResponse.json({ reply, sources });
}
