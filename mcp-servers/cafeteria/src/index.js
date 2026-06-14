 const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const events = [
  { id: "E1", title: "TechFest 2025 — AI Workshop", date: "2025-07-12", time: "10:00 AM", venue: "CS Seminar Hall", category: "tech", open: true },
  { id: "E2", title: "Drama Club Auditions", date: "2025-07-10", time: "3:00 PM", venue: "Cultural Centre", category: "cultural", open: true },
  { id: "E3", title: "Mid-Sem Timetable Released", date: "2025-07-08", time: "All Day", venue: "Online Portal", category: "academic", open: false },
  { id: "E4", title: "Inter-College Hackathon", date: "2025-07-20", time: "9:00 AM", venue: "Main Auditorium", category: "tech", open: true },
  { id: "E5", title: "Annual Sports Meet", date: "2025-07-25", time: "8:00 AM", venue: "Sports Complex", category: "sports", open: true },
];

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "events" });
});

app.post("/events", (req, res) => {
  const { category = "all", search } = req.body;
  let results = events;
  if (category !== "all") {
    results = results.filter((e) => e.category === category);
  }
  if (search) {
    results = results.filter((e) =>
      e.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  res.json({ source: "events", results });
});

app.listen(3003, () => {
  console.log("Events MCP running on http://localhost:3003");
});