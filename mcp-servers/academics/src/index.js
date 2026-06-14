 const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const data = [
  { id: "C1", type: "course", title: "CS-401: Machine Learning", subtitle: "Dr. Agarwal · 4 credits · Mon/Wed/Fri 10AM" },
  { id: "C2", type: "course", title: "CS-301: Operating Systems", subtitle: "Dr. Sharma · 4 credits · Tue/Thu 9AM" },
  { id: "C3", type: "course", title: "CS-302: Computer Networks", subtitle: "Prof. Khan · 3 credits · Mon/Wed 2PM" },
  { id: "E1", type: "exam", title: "Mid-Semester Exams", subtitle: "July 28 – August 1, 2025" },
  { id: "E2", type: "exam", title: "End-Semester Exams", subtitle: "November 10–25, 2025" },
  { id: "P1", type: "policy", title: "Attendance Policy", subtitle: "Min. 75% required for end-sem eligibility" },
  { id: "P2", type: "policy", title: "Academic Integrity Policy", subtitle: "Plagiarism leads to zero marks and disciplinary action" },
  { id: "N1", type: "notice", title: "Fee Payment Deadline", subtitle: "Last date: July 20, 2025" },
];

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "academics" });
});

app.post("/search", (req, res) => {
  const { query = "", type } = req.body;
  let results = data;
  if (type && type !== "general") {
    results = results.filter((d) => d.type === type);
  }
  if (query) {
    results = results.filter((d) =>
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.subtitle.toLowerCase().includes(query.toLowerCase())
    );
  }
  res.json({ source: "academics", results });
});

app.listen(3004, () => {
  console.log("Academics MCP running on http://localhost:3004");
});
