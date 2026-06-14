"use client";
import { useState } from "react";

const allBooks = [
  // Mathematics
  { title: "A Basic Course in Probability Theory", author: "Rabi Bhattacharya, Edward C. Waymire", publisher: "Springer", year: 2007, type: "eBook", dept: "Mathematics" },
  { title: "A Beginner's Guide to Discrete Mathematics", author: "W.D. Wallis", publisher: "Springer", year: 2012, type: "eBook", dept: "Mathematics" },
  { title: "A Beginner's Guide to Finite Mathematics", author: "W.D. Wallis", publisher: "Springer", year: 2012, type: "eBook", dept: "Mathematics" },
  { title: "A Beginner's Guide to Graph Theory", author: "W.D. Wallis", publisher: "Springer", year: 2007, type: "eBook", dept: "Mathematics" },
  { title: "A Benchmark Approach to Quantitative Finance", author: "Eckhard Platen, David Heath", publisher: "Springer", year: 2006, type: "eBook", dept: "Mathematics" },
  { title: "A Basis Theory Primer", author: "Christopher Heil", publisher: "Springer", year: 2011, type: "eBook", dept: "Mathematics" },

  // Computer Science
  { title: "A Brief History of Computing", author: "Gerard O'Regan", publisher: "Springer", year: 2012, type: "eBook", dept: "Computer Science" },
  { title: "A Beginner's Guide to R", author: "Alain F. Zuur, Elena N. Ieno", publisher: "Springer", year: 2009, type: "eBook", dept: "Computer Science" },
  { title: "A Calculus of Distributed and Parallel Processes", author: "Springer", publisher: "Springer", year: 2000, type: "eBook", dept: "Computer Science" },
  { title: "A Brief Introduction to Engineering Computation with MATLAB", author: "Serhat Beyenir", publisher: "Knimbus Open", year: 2021, type: "eBook Open", dept: "Computer Science" },
  { title: "A CMOS Self-Powered Front-End Architecture for Subcutaneous Event-Detector Devices", author: "Jordi Colomer-Farrarons", publisher: "Springer", year: 2011, type: "eBook", dept: "Electronics" },

  // Earth Sciences
  { title: "A Breviary of Seismic Tomography", author: "Nolet", publisher: "Cambridge University Press", year: 2011, type: "eBook", dept: "Earth Sciences" },
  { title: "A Biomass Future for the North American Great Plains", author: "Norman J. Rosenberg", publisher: "Springer", year: 2007, type: "eBook", dept: "Earth Sciences" },

  // Statistics
  { title: "A Career in Statistics: Beyond the Numbers", author: "Gerald Hahn, Necip Doganaksoy", publisher: "Wiley", year: 2011, type: "eBook", dept: "Mathematics" },
  { title: "A Brief Survey of Quantitative EEG", author: "Kaushik Majumdar", publisher: "Taylor and Francis", year: 2018, type: "eBook", dept: "Electronics" },

  // Mechanical / Engineering
  { title: "A Baker's Dozen", author: "Bonnie Baker", publisher: "Science Direct", year: 2007, type: "eBook", dept: "Mechanical" },
  { title: "A Brief Illustrated History of Machines and Mechanisms", author: "Emilio Bautista Paz, Marco Ceccarelli", publisher: "Springer", year: 2010, type: "eBook", dept: "Mechanical" },

  // Physics
  { title: "A Brief History of Radio Astronomy in the USSR", author: "S.Y. Braude et al.", publisher: "Springer", year: 2012, type: "eBook", dept: "Physics" },
  { title: "A Century of Physics", author: "Springer", publisher: "Springer", year: 2002, type: "eBook", dept: "Physics" },
  { title: "A Century of Ideas", author: "B.G. Sidharth", publisher: "Springer", year: 2008, type: "eBook", dept: "Physics" },
];

const DEPTS = ["All", "Mathematics", "Computer Science", "Electronics", "Physics", "Earth Sciences", "Mechanical"];
const TYPES = ["All", "eBook", "eBook Open"];

export default function LibraryWidget() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");
  const [type, setType] = useState("All");

  const filtered = allBooks.filter((b) => {
    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === "All" || b.dept === dept;
    const matchType = type === "All" || b.type === type;
    return matchSearch && matchDept && matchType;
  });

  return (
    <div className="bg-white rounded-xl border border-pink-200 p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">📚</span>
        <div>
          <h2 className="text-gray-900 font-semibold">Library</h2>
          <p className="text-xs text-gray-500">IITR Digital Catalog · {allBooks.length} books</p>
        </div>
      </div>

      {/* Search */}
      <input
        className="w-full bg-pink-50 text-gray-900 text-sm rounded-lg px-3 py-2 border border-pink-200 outline-none mb-2 placeholder:text-gray-400"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filters */}
      <div className="flex gap-2 mb-3 flex-wrap">
        <select
          className="bg-white text-gray-900 text-xs rounded-lg px-2 py-1 border border-pink-200 outline-none"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        >
          {DEPTS.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
        <select
          className="bg-white text-gray-900 text-xs rounded-lg px-2 py-1 border border-pink-200 outline-none"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <span className="text-xs text-gray-400 self-center">{filtered.length} results</span>
      </div>

      {/* Books list */}
      <div className="space-y-1.5 max-h-72 overflow-y-auto">
        {filtered.map((book, i) => (
          <div key={i} className="bg-pink-50 rounded-lg px-3 py-2">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm text-gray-900 font-medium leading-snug">{book.title}</p>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                {book.type}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">{book.author}</p>
            <p className="text-xs text-gray-400">{book.publisher} · {book.year}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-400 text-sm text-center py-6">No books found</p>
        )}
      </div>
    </div>
  );
}