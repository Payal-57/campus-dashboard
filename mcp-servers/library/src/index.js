 const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const books = [
  { id: "L1", title: "Clean Code", author: "Robert C. Martin", available: true, location: "A-12" },
  { id: "L2", title: "The Pragmatic Programmer", author: "Hunt & Thomas", available: false, location: "B-7" },
  { id: "L3", title: "Design Patterns", author: "GoF", available: true, location: "A-15" },
  { id: "L4", title: "Introduction to Algorithms", author: "CLRS", available: false, location: "C-3" },
  { id: "L5", title: "Computer Networks", author: "Tanenbaum", available: true, location: "B-11" },
];

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "library" });
});

app.post("/search", (req, res) => {
  const { query = "", available_only = false } = req.body;
  let results = books.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.author.toLowerCase().includes(query.toLowerCase())
  );
  if (available_only) {
    results = results.filter((b) => b.available);
  }
  res.json({ source: "library", results });
});

app.listen(3001, () => {
  console.log("Library MCP running on http://localhost:3001");
});
