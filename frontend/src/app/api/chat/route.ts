import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 500,
      system: "You are CampusAI for IIT Roorkee. Help students with library, canteen, events and academics. Canteen serves veg food. Plain Paratha costs Rs 10, Aloo Paratha Rs 15, Paneer Paratha Rs 25, Samosa Rs 7, Masala Dosa Rs 40, Tea Rs 10. Events: Cognizance tech fest, Thomso cultural fest. Be helpful and friendly.",
      messages: messages,
    }),
  });

  const data = await response.json();
  const reply = data.content?.[0]?.text ?? "Sorry, try again!";
  return NextResponse.json({ reply, sources: [] });
}
