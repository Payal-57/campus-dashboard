"use client";

import { useState } from "react";
import ChatPanel from "@/components/dashboard/ChatPanel";
import LibraryWidget from "@/components/dashboard/LibraryWidget";
import CafeteriaWidget from "@/components/dashboard/CafeteriaWidget";
import EventsWidget from "@/components/dashboard/EventsWidget";
import AcademicsWidget from "@/components/dashboard/AcademicsWidget";
export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <main className="min-h-screen text-gray-900" style={{backgroundColor: "#FFE4E1"}}>

      {/* Header */}
     <header className="border-b border-pink-200 px-6 py-4 flex items-center justify-between" style={{backgroundColor: "#FFE4E1"}}>
          <div className="flex items-center gap-2">
  <img src="/iitr logo.png" alt="IITR Logo" className="w-8 h-8 rounded-full" />
  <h1 className="text-xl font-bold text-indigo-400">CampusAI</h1>
</div>
          <p className="text-xs text-gray-500">Unified Campus Intelligence</p>
        

        <div className="flex gap-2 bg-gray-900 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "dashboard"
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("chat")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "chat"
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            💬 AI Assistant
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="p-6">
        {activeTab === "dashboard" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <LibraryWidget />
            <CafeteriaWidget />
            <EventsWidget />
            <AcademicsWidget />
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <ChatPanel />
          </div>
        )}
      </div>

    </main>
  );
}