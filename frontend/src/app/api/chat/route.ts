import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content.toLowerCase();

    const systemPrompt = `You are CampusAI, a helpful assistant for IIT Roorkee students. 
You help with library books, canteen menu, campus events, and academics.
IIT Roorkee has 21 bhawan canteens serving vegetarian food.
Key events: Cognizance (tech fest), Thomso (cultural fest), E-Summit, COMET.
Canteen items include: Plain Paratha (₹10), Aloo Paratha (₹15), Paneer Paratha (₹25), 
Samosa (₹7), Veg Momos (₹30), Veg Pizza (₹70), Masala Dosa (₹40), 
Rajma Chawal (₹60), Tea (₹10), Cold Coffee (₹25), Lassi (₹25).
Library has 18000+ digital books from Springer, Cambridge, Wiley publishers.
Answer questions in a friendly, helpful way. Keep responses concise.`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system: systemPrompt,
        messages: messages,
      }),
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text || "Sorry, I could not get a response.";
    return NextResponse.json({ reply, sources: [] });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ 
      reply: "I am having trouble connecting. Please try again!", 
      sources: [] 
    });
  }
}
