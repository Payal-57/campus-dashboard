import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1].content.toLowerCase();

  let reply = "";

  if (lastMessage.includes("paratha") || lastMessage.includes("price") || lastMessage.includes("food") || lastMessage.includes("canteen") || lastMessage.includes("menu") || lastMessage.includes("eat")) {
    reply = "🍽️ Canteen prices: Plain Paratha ₹10, Aloo Paratha ₹15, Paneer Paratha ₹25, Samosa ₹7, Masala Dosa ₹40, Veg Momos ₹30, Veg Pizza ₹70, Tea ₹10, Cold Coffee ₹25, Lassi ₹25, Rajma Chawal ₹60. All 21 IITR bhawan canteens serve vegetarian food only!";
  } else if (lastMessage.includes("library") || lastMessage.includes("book")) {
    reply = "📚 IITR Library has 18,000+ digital books from Springer, Cambridge, Wiley and more. Search by title, author or department using the Library widget above!";
  } else if (lastMessage.includes("event") || lastMessage.includes("cognizance") || lastMessage.includes("thomso") || lastMessage.includes("fest")) {
    reply = "📅 Upcoming IITR events: Cognizance 2026 (Tech Fest, Mar 13-15), E-Summit 2026 (Feb 6-8), Institute Research Day (Mar 13), COMET26 (Apr 11-12), Inter IIT Sports Meet (TBA). Check the Events widget for registration links!";
  } else if (lastMessage.includes("timetable") || lastMessage.includes("class") || lastMessage.includes("professor") || lastMessage.includes("course") || lastMessage.includes("exam")) {
    reply = "🎓 Check the Timetable widget on the dashboard! Select your department and year to see your full class schedule with professor names and room numbers. Mid-semester exams: July 28 - August 1.";
  } else if (lastMessage.includes("attendance")) {
    reply = "📋 IITR Attendance Policy: Minimum 75% attendance required in each course to be eligible for end-semester exams. Students between 60-75% may apply for condonation.";
  } else if (lastMessage.includes("chemistry") || lastMessage.includes("chem")) {
    reply = "🧪 Chemistry department timetable is available in the Timetable widget. Select 'Chemistry' department to see all courses, professors, timings and room numbers for Spring 2025-26!";
  } else if (lastMessage.includes("hostel") || lastMessage.includes("bhawan")) {
    reply = "🏠 IITR has 21 bhawan canteens: Azad, Cautley, Ganga, Govind, Jawahar, Rajendra, Radhakrishnan, Rajiv, Ravindra, Malviya, Himalaya, Indira, Kasturba, Sarojini, M.R.Chopra, Azad Wing, D.S.Barrack, A.N.Khosla House, K.I.H., One Co-ed Hostel, Vigyan Bhawan. Select any canteen to see the full menu!";
  } else {
    reply = "👋 I'm CampusAI for IIT Roorkee! I can help you with:\n• 📚 Library book search\n• 🍽️ Canteen menu and prices\n• 📅 Campus events and registration\n• 🎓 Timetable and courses\n• 📋 Attendance policy\n\nWhat would you like to know?";
  }

  return NextResponse.json({ reply, sources: [] });
}
