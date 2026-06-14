 export default function EventsWidget() {
  const events = [
    { title: "Cognizance 2026", date: "March 13-15, 2026", time: "10:00 AM", venue: "Main Campus, IIT Roorkee", category: "tech", open: true },
    { title: "E-Summit 2026 (Entrepreneurship Summit)", date: "Feb 6-8, 2026", time: "9:00 AM", venue: "Main Campus, IIT Roorkee", category: "cultural", open: true },
    { title: "Institute Research Day", date: "March 13, 2026", time: "11:00 AM", venue: "Main Campus, IIT Roorkee", category: "academic", open: true },
    { title: "COMET26", date: "April 11-12, 2026", time: "10:00 AM", venue: "Main Campus, IIT Roorkee", category: "tech", open: true },
    { title: "Inter IIT Sports Meet", date: "TBA", time: "TBA", venue: "Main Campus, IIT Roorkee", category: "sports", open: true },
  ];

  const colors: Record<string, string> = {
    tech: "bg-blue-500/20 text-blue-600",
    cultural: "bg-purple-500/20 text-purple-600",
    academic: "bg-green-500/20 text-green-600",
    sports: "bg-orange-500/20 text-orange-600",
  };

  return (
    <div className="bg-white rounded-xl border border-pink-200 p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📅</span>
        <div>
          <h2 className="text-gray-900 font-semibold">Events</h2>
          <p className="text-xs text-gray-500">Upcoming on campus</p>
        </div>
      </div>

      <div className="space-y-2">
        {events.map((event, i) => (
          <div key={i} className="bg-pink-50 rounded-lg px-3 py-2">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm text-gray-900 font-medium">{event.title}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full capitalize flex-shrink-0 ${colors[event.category]}`}>
                {event.category}
              </span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <p className="text-xs text-gray-500">{event.date} · {event.time} · {event.venue}</p>
              {event.open && (
                <span className="text-xs text-emerald-600">Register ↗</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}