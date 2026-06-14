 
import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const MCP_URLS = {
  library:   process.env.LIBRARY_MCP_URL   || "http://localhost:3001",
  cafeteria: process.env.CAFETERIA_MCP_URL || "http://localhost:3002",
  events:    process.env.EVENTS_MCP_URL    || "http://localhost:3003",
  academics: process.env.ACADEMICS_MCP_URL || "http://localhost:3004",
};

async function callMCP(server: string, path: string, body: Record<string, unknown>) {
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

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1].content.toLowerCase();

  let contextData = "";

  if (lastMessage.includes("library") || lastMessage.includes("book")) {
    const data = await callMCP("library", "/search", { query: "" });
    if (data) contextData += `Library data: ${JSON.stringify(data)}\n`;
  }

  if (lastMessage.includes("food") || lastMessage.includes("menu") ||
      lastMessage.includes("lunch") || lastMessage.includes("dinner") ||
      lastMessage.includes("breakfast") || lastMessage.includes("cafeteria") ||
      lastMessage.includes("canteen") || lastMessage.includes("eat")) {
    const data = await callMCP("cafeteria", "/menu", { meal: "all" });
    if (data) contextData += `Cafeteria data: ${JSON.stringify(data)}\n`;
  }

  if (lastMessage.includes("event") || lastMessage.includes("workshop") ||
      lastMessage.includes("fest") || lastMessage.includes("club") ||
      lastMessage.includes("cognizance") || lastMessage.includes("thomso")) {
    const data = await callMCP("events", "/events", { category: "all" });
    if (data) contextData += `Events data: ${JSON.stringify(data)}\n`;
  }

  if (lastMessage.includes("exam") || lastMessage.includes("course") ||
      lastMessage.includes("attendance") || lastMessage.includes("timetable") ||
      lastMessage.includes("class") || lastMessage.includes("professor")) {
    const data = await callMCP("academics", "/search", { query: "" });
    if (data) contextData += `Academics data: ${JSON.stringify(data)}\n`;
  }

  const systemPrompt = `You are CampusAI, a helpful assistant for IIT Roorkee students. 
You help students with information about the campus library, canteen menu, events, and academics.

${contextData ? `Here is the current campus data:\n${contextData}` : ""}

IIT Roorkee has 21 bhawan canteens. All serve vegetarian food. 
Key events: Cognizance (tech fest), Thomso (cultural fest), E-Summit, COMET.
Answer questions in a friendly, helpful way. Keep responses concise and useful.`;

  const response = await client.messages.create({
 model: "claude-haiku-4-5-20251001",
    max_tokens: 500,
    system: systemPrompt,
    messages: messages,
  });

  const reply = response.content[0].type === "text" ? response.content[0].text : "";

  return NextResponse.json({ reply, sources: [] });
}
