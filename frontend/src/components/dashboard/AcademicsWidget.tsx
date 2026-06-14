"use client";
import { useState } from "react";

const timetable: Record<string, Record<string, Array<{day: string, subject: string, professor: string, time: string, room: string}>>> = {
  "Chemistry": {
    "All Years": [
      { day: "Monday", subject: "CYO-103", professor: "MS", time: "8:00-8:55 AM", room: "APJ AKB-004" },
      { day: "Monday", subject: "CYL-640", professor: "KRJT", time: "9:00-9:55 AM", room: "APJ AKB-206" },
      { day: "Monday", subject: "CYL-644", professor: "DK", time: "9:00-9:55 AM", room: "APJ AKB-301" },
      { day: "Monday", subject: "CYL-904", professor: "PD", time: "9:00-9:55 AM", room: "APJ AKB-302" },
      { day: "Monday", subject: "CYC-291", professor: "MRM", time: "10:00-10:55 AM", room: "APJ AKB-302" },
      { day: "Monday", subject: "CYC-504", professor: "PKB", time: "10:00-10:55 AM", room: "APJ AKB-304" },
      { day: "Monday", subject: "CY-524", professor: "RY", time: "10:00-10:55 AM", room: "APJ AKB-301" },
      { day: "Monday", subject: "CYL-606", professor: "NA", time: "10:00-10:55 AM", room: "APJ AKB-206" },
      { day: "Monday", subject: "CYC-208", professor: "CNR", time: "11:05-12:00 PM", room: "APJ AKB-304" },
      { day: "Monday", subject: "CYC-506", professor: "DB", time: "11:05-12:00 PM", room: "APJ AKB-302" },
      { day: "Monday", subject: "CY-522", professor: "PM", time: "11:05-12:00 PM", room: "APJ AKB-301" },
      { day: "Monday", subject: "CYL-627", professor: "HCK", time: "11:05-12:00 PM", room: "APJ AKB-402" },
      { day: "Monday", subject: "CYC-204", professor: "RKD", time: "12:05-1:00 PM", room: "APJ AKB-301" },
      { day: "Monday", subject: "CYL-614", professor: "GE", time: "12:05-1:00 PM", room: "APJ AKB-206" },
      { day: "Monday", subject: "CYB-103 (CH)", professor: "BT/CNR/SR", time: "2:00-2:55 PM", room: "APJ AKB-407" },
      { day: "Monday", subject: "CYL-302", professor: "KG", time: "2:00-2:55 PM", room: "APJ AKB-301" },
      { day: "Monday", subject: "CYL-314", professor: "PG", time: "3:00-3:55 PM", room: "APJ AKB-203" },

      { day: "Tuesday", subject: "CYO-103", professor: "MS", time: "8:00-8:55 AM", room: "APJ AKB-004" },
      { day: "Tuesday", subject: "CYL-610", professor: "SB", time: "8:00-8:55 AM", room: "APJ AKB-206" },
      { day: "Tuesday", subject: "CYL-638", professor: "TKM", time: "8:00-8:55 AM", room: "APJ AKB-207" },
      { day: "Tuesday", subject: "CYL-640", professor: "KRJT", time: "9:00-9:55 AM", room: "APJ AKB-206" },
      { day: "Tuesday", subject: "CYB-103 (24MT1) Lab", professor: "PM", time: "9:00-11:00 AM", room: "A-106" },
      { day: "Tuesday", subject: "CYC-302 Lab", professor: "AS", time: "9:00-1:00 PM", room: "A-213" },
      { day: "Tuesday", subject: "CYC-202", professor: "KKS", time: "10:00-10:55 AM", room: "APJ AKB-302" },
      { day: "Tuesday", subject: "CYC-502", professor: "RKS", time: "10:00-10:55 AM", room: "APJ AKB-301" },
      { day: "Tuesday", subject: "CYL-314 Lab", professor: "PG", time: "11:00-1:00 PM", room: "APJ AKB-506" },
      { day: "Tuesday", subject: "CYB-103 (24CH1) Lab", professor: "RP", time: "11:00-1:00 PM", room: "A-106" },
      { day: "Tuesday", subject: "CYC-206", professor: "RB", time: "11:05-12:00 PM", room: "APJ AKB-301" },
      { day: "Tuesday", subject: "CYC-508", professor: "RP", time: "11:05-12:00 PM", room: "APJ AKB-302" },
      { day: "Tuesday", subject: "CYL-612", professor: "PK", time: "11:05-12:00 PM", room: "APJ AKB-206" },
      { day: "Tuesday", subject: "CYC-204", professor: "RKD", time: "12:05-1:00 PM", room: "APJ AKB-301" },
      { day: "Tuesday", subject: "CYL-614", professor: "GE", time: "12:05-1:00 PM", room: "APJ AKB-206" },
      { day: "Tuesday", subject: "CYB-103 (MT)", professor: "BT/CNR/SR", time: "2:00-2:55 PM", room: "APJ AKB-207" },
      { day: "Tuesday", subject: "CYL-302", professor: "KG", time: "2:00-2:55 PM", room: "APJ AKB-301" },
      { day: "Tuesday", subject: "CYC-102", professor: "YD", time: "2:00-2:55 PM", room: "APJ AKB-301" },
      { day: "Tuesday", subject: "CYL-308", professor: "AK", time: "2:00-2:55 PM", room: "APJ AKB-302" },
      { day: "Tuesday", subject: "CYL-314", professor: "PG", time: "3:00-3:55 PM", room: "APJ AKB-203" },
      { day: "Tuesday", subject: "CYC-102", professor: "YD", time: "3:00-3:55 PM", room: "APJ AKB-301" },
      { day: "Tuesday", subject: "CYL-308", professor: "AK", time: "3:00-3:55 PM", room: "APJ AKB-302" },

      { day: "Wednesday", subject: "CYO-103", professor: "MS", time: "8:00-8:55 AM", room: "APJ AKB-004" },
      { day: "Wednesday", subject: "CYL-610", professor: "SB", time: "8:00-8:55 AM", room: "APJ AKB-206" },
      { day: "Wednesday", subject: "CYL-638", professor: "TKM", time: "8:00-8:55 AM", room: "APJ AKB-207" },
      { day: "Wednesday", subject: "CYL-640", professor: "KRJT", time: "9:00-9:55 AM", room: "APJ AKB-206" },
      { day: "Wednesday", subject: "CYL-644", professor: "DK", time: "9:00-9:55 AM", room: "APJ AKB-301" },
      { day: "Wednesday", subject: "CYL-904", professor: "PD", time: "9:00-9:55 AM", room: "APJ AKB-302" },
      { day: "Wednesday", subject: "CYB-103 (24MT2) Lab", professor: "PJ", time: "9:00-11:00 AM", room: "A-106" },
      { day: "Wednesday", subject: "CYC-302 Lab", professor: "KRJT", time: "9:00-1:00 PM", room: "A-213" },
      { day: "Wednesday", subject: "CYC-291", professor: "MRM", time: "10:00-10:55 AM", room: "APJ AKB-302" },
      { day: "Wednesday", subject: "CYC-504", professor: "PJ", time: "10:00-10:55 AM", room: "APJ AKB-304" },
      { day: "Wednesday", subject: "CYC-510 Lab", professor: "DK/KKS", time: "2:00-5:00 PM", room: "A-113" },
      { day: "Wednesday", subject: "CYL-610 Lab", professor: "SB", time: "2:00-4:00 PM", room: "GB-310" },
      { day: "Wednesday", subject: "CYL-638 Lab", professor: "TKM", time: "2:00-4:00 PM", room: "GB-312" },
      { day: "Wednesday", subject: "CYC-204 Lab", professor: "RKD", time: "2:00-4:00 PM", room: "A-106" },

      { day: "Thursday", subject: "CYL-640", professor: "KRJT", time: "9:00-9:55 AM", room: "APJ AKB-206" },
      { day: "Thursday", subject: "CYL-644", professor: "DK", time: "9:00-9:55 AM", room: "APJ AKB-301" },
      { day: "Thursday", subject: "CYL-904", professor: "PD", time: "9:00-9:55 AM", room: "APJ AKB-302" },
      { day: "Thursday", subject: "CYC-291", professor: "MRM", time: "10:00-10:55 AM", room: "APJ AKB-302" },
      { day: "Thursday", subject: "CYC-504", professor: "PJ", time: "10:00-10:55 AM", room: "APJ AKB-304" },
      { day: "Thursday", subject: "CY-524", professor: "VV", time: "10:00-10:55 AM", room: "APJ AKB-301" },
      { day: "Thursday", subject: "CYL-606", professor: "RKP", time: "10:00-10:55 AM", room: "APJ AKB-206" },
      { day: "Thursday", subject: "CYB-103 (24CH3) Lab", professor: "SR", time: "11:00-1:00 PM", room: "A-106" },
      { day: "Thursday", subject: "CYC-208", professor: "CNR", time: "11:05-12:00 PM", room: "APJ AKB-304" },
      { day: "Thursday", subject: "CYC-506", professor: "DB", time: "11:05-12:00 PM", room: "APJ AKB-302" },
      { day: "Thursday", subject: "CY-522", professor: "PM", time: "11:05-12:00 PM", room: "APJ AKB-301" },
      { day: "Thursday", subject: "CYL-627", professor: "HCK", time: "11:05-12:00 PM", room: "APJ AKB-402" },
      { day: "Thursday", subject: "CYC-204", professor: "PKB", time: "12:05-1:00 PM", room: "APJ AKB-301" },
      { day: "Thursday", subject: "CYL-614", professor: "NA", time: "12:05-1:00 PM", room: "APJ AKB-206" },
      { day: "Thursday", subject: "CYB-103", professor: "BT/CNR/SR", time: "2:00-2:55 PM", room: "APJ AKB-407" },
      { day: "Thursday", subject: "CYL-302", professor: "KG", time: "2:00-2:55 PM", room: "APJ AKB-301" },
      { day: "Thursday", subject: "CYC-202 Lab", professor: "KKS", time: "2:00-6:00 PM", room: "A-113" },
      { day: "Thursday", subject: "CYC-102", professor: "YD", time: "2:00-2:55 PM", room: "APJ AKB-301" },
      { day: "Thursday", subject: "CYL-308", professor: "AK", time: "2:00-2:55 PM", room: "APJ AKB-302" },
      { day: "Thursday", subject: "CYC-510 Lab", professor: "RY/PK", time: "2:00-5:00 PM", room: "A-113" },

      { day: "Friday", subject: "CYL-610", professor: "SB", time: "8:00-8:55 AM", room: "APJ AKB-206" },
      { day: "Friday", subject: "CYL-638", professor: "TKM", time: "8:00-8:55 AM", room: "APJ AKB-207" },
      { day: "Friday", subject: "CYL-640", professor: "KRJT", time: "9:00-9:55 AM", room: "APJ AKB-206" },
      { day: "Friday", subject: "CYL-644", professor: "DK", time: "9:00-9:55 AM", room: "APJ AKB-301" },
      { day: "Friday", subject: "CYL-904", professor: "PD", time: "9:00-9:55 AM", room: "APJ AKB-302" },
      { day: "Friday", subject: "CYC-202", professor: "KKS", time: "10:00-10:55 AM", room: "APJ AKB-302" },
      { day: "Friday", subject: "CYC-502", professor: "RKS", time: "10:00-10:55 AM", room: "APJ AKB-301" },
      { day: "Friday", subject: "CY-526", professor: "SC", time: "10:00-10:55 AM", room: "APJ AKB-304" },
      { day: "Friday", subject: "CYB-103 (24CH4) Lab", professor: "PD", time: "11:00-1:00 PM", room: "A-106" },
      { day: "Friday", subject: "CYC-208", professor: "CNR", time: "11:05-12:00 PM", room: "APJ AKB-304" },
      { day: "Friday", subject: "CYC-506", professor: "GE", time: "11:05-12:00 PM", room: "APJ AKB-302" },
      { day: "Friday", subject: "CY-522", professor: "PM", time: "11:05-12:00 PM", room: "APJ AKB-301" },
      { day: "Friday", subject: "CYL-627", professor: "HCK", time: "11:05-12:00 PM", room: "APJ AKB-402" },
      { day: "Friday", subject: "CYB-103 (24MT3) Lab", professor: "PKB", time: "11:00-1:00 PM", room: "A-106" },
      { day: "Friday", subject: "CYC-206", professor: "RB", time: "12:05-1:00 PM", room: "APJ AKB-301" },
      { day: "Friday", subject: "CYC-508", professor: "RP", time: "12:05-1:00 PM", room: "APJ AKB-302" },
      { day: "Friday", subject: "CYL-612", professor: "PK", time: "12:05-1:00 PM", room: "APJ AKB-206" },
    ],
  },
  "Computer Science and Engineering": {
    "1st Year": [
      { day: "Monday", subject: "Mathematics-I", professor: "Prof. Sharma", time: "9:00-10:00 AM", room: "Lecture Hall 1" },
      { day: "Tuesday", subject: "Programming in C", professor: "Prof. Kumar", time: "10:00-11:00 AM", room: "CS Lab 1" },
      { day: "Wednesday", subject: "Physics", professor: "Prof. Verma", time: "9:00-10:00 AM", room: "Physics Block" },
      { day: "Thursday", subject: "Engineering Drawing", professor: "Prof. Gupta", time: "9:00-11:00 AM", room: "Drawing Hall" },
      { day: "Friday", subject: "English", professor: "Prof. Mehta", time: "9:00-10:00 AM", room: "Lecture Hall 2" },
    ],
    "2nd Year": [
      { day: "Monday", subject: "Data Structures", professor: "Prof. Agarwal", time: "9:00-10:00 AM", room: "CS-101" },
      { day: "Tuesday", subject: "Computer Organization", professor: "Prof. Yadav", time: "9:00-10:00 AM", room: "CS-102" },
      { day: "Wednesday", subject: "OOP with Java", professor: "Prof. Tiwari", time: "10:00-11:00 AM", room: "CS Lab 2" },
      { day: "Thursday", subject: "Discrete Mathematics", professor: "Prof. Joshi", time: "11:00-12:00 PM", room: "Lecture Hall 3" },
      { day: "Friday", subject: "Digital Electronics", professor: "Prof. Pandey", time: "11:00-12:00 PM", room: "EC-101" },
    ],
  },
  "Electrical Engineering": {
    "1st Year": [
      { day: "Monday", subject: "Mathematics-I", professor: "Prof. Sharma", time: "9:00-10:00 AM", room: "Lecture Hall 1" },
      { day: "Tuesday", subject: "Basic Electrical Engg", professor: "Prof. Rawat", time: "10:00-11:00 AM", room: "EE-101" },
      { day: "Wednesday", subject: "Physics", professor: "Prof. Verma", time: "9:00-10:00 AM", room: "Physics Block" },
      { day: "Thursday", subject: "Engineering Drawing", professor: "Prof. Gupta", time: "9:00-11:00 AM", room: "Drawing Hall" },
    ],
    "2nd Year": [
      { day: "Monday", subject: "Circuit Theory", professor: "Prof. Rawat", time: "9:00-10:00 AM", room: "EE-102" },
      { day: "Tuesday", subject: "Signals & Systems", professor: "Prof. Negi", time: "9:00-10:00 AM", room: "EE-101" },
      { day: "Wednesday", subject: "Electromagnetic Fields", professor: "Prof. Sharma", time: "10:00-11:00 AM", room: "EE-103" },
      { day: "Friday", subject: "Electrical Machines", professor: "Prof. Rawat", time: "11:00-12:00 PM", room: "EE Lab 1" },
    ],
  },
};

const DEPARTMENTS = Object.keys(timetable);
const YEARS: Record<string, string[]> = {
  "Chemistry": ["All Years"],
  "Computer Science and Engineering": ["1st Year", "2nd Year"],
  "Electrical Engineering": ["1st Year", "2nd Year"],
};
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function AcademicsWidget() {
  const [dept, setDept] = useState("");
  const [year, setYear] = useState("");

  const classes = dept && year ? (timetable[dept]?.[year] || []) : [];

  return (
   <div className="bg-white rounded-xl border border-pink-200 p-4 shadow-sm md:col-span-2">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🎓</span>
        <div>
          <h2 className="text-gray-900 font-semibold">Timetable</h2>
          <p className="text-xs text-gray-500">IIT Roorkee · Spring 2025-26</p>
        </div>
      </div>

      {/* Selectors */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <select
        className="flex-1 bg-white text-gray-900 text-sm rounded-lg px-3 py-2 border border-pink-200 outline-none focus:border-pink-400"
          value={dept}
          onChange={(e) => { setDept(e.target.value); setYear(""); }}
        >
          <option value="">Select Department</option>
          {DEPARTMENTS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select
         className="flex-1 bg-white text-gray-900 text-sm rounded-lg px-3 py-2 border border-pink-200 outline-none focus:border-pink-400"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          disabled={!dept}
        >
          <option value="">Select Year</option>
          {(YEARS[dept] || []).map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      {/* States */}
      {!dept && (
        <p className="text-gray-400 text-sm text-center py-6">Select a department to view timetable</p>
      )}
      {dept && !year && (
       <p className="text-gray-400 text-sm text-center py-6">Now select your year</p>
      )}

      {/* Timetable */}
      {classes.length > 0 && (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {DAYS.map((day) => {
            const dayClasses = classes.filter((c) => c.day === day);
            if (dayClasses.length === 0) return null;
            return (
              <div key={day}>
                <p className="text-xs text-indigo-400 font-semibold uppercase mb-1.5 sticky top-0 bg-gray-900 py-1">{day}</p>
                <div className="space-y-1.5">
                  {dayClasses.map((c, i) => (
                    <div key={i} className="flex items-center justify-between bg-pink-50 rounded-lg px-3 py-2">
                      <div>
                       <p className="text-sm text-gray-900 font-medium">{c.subject}</p>
                       <p className="text-xs text-gray-500">{c.professor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-indigo-300">{c.time}</p>
                        <p className="text-xs text-gray-500">{c.room}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}