import { useState } from "react";

const frostLogEntries = [
  {
    id: "welcome",
    title: "Welcome to FrostLog!",
    date: "June 10, 2026",
    mood: "🌲 Calm boot",
    content: (
      <>
        <p>
          FrostLog is a quiet place inside ManentiOS where I can store thoughts,
          project notes, and small reflections from my development journey.
        </p>

        <p>
          The idea is simple: a cold, rainy, forest-inspired journey mixed with
          a technological interface.
        </p>

        <blockquote className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-cyan-100">
          “A personal OS should feel like a place, not just a page.”
        </blockquote>
      </>
    ),
  },
  {
    id: "build-notes",
    title: "Build Notes",
    date: "June 10, 2026",
    mood: "💻 Coding session",
    content: (
      <>
        <p>
          Today I worked on turning ManentiOS into a more realistic WebOS
          experience.
        </p>

        <ul className="list-inside list-disc space-y-2">
          <li>Created draggable and closable windows.</li>
          <li>Added a desktop app icon system.</li>
          <li>Started building the first internal app.</li>
          <li>Improved the winter-tech visual identity.</li>
        </ul>
      </>
    ),
  },
  {
    id: "atmosphere",
    title: "Atmosphere",
    date: "June 10, 2026",
    mood: "🌧️ Rain mode",
    content: (
      <>
        <p>
          The visual direction of ManentiOS is based on dark cold colors, rain,
          forests, fog, glass panels, and subtle blue/cyan technology accents.
        </p>

        <p>
          I want the interface to feel like a small digital cabin in the middle
          of a rainy winter forest.
        </p>
      </>
    ),
  },
];

const FrostLogApp = () => {
  const [selectedEntryId, setSelectedEntryId] = useState(frostLogEntries[0].id);

  const selectedEntry = frostLogEntries.find(
    (entry) => entry.id === selectedEntryId,
  );

  return (
    <div className="flex h-130 w-190 max-w-[90vw] bg-slate-950/30">
      <aside className="w-60 border-r border-white/10 bg-slate-950/40 p-4">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Journal
          </p>
          <h2 className="mt-1 text-xl font-bold text-white">FrostLog</h2>
        </div>

        <div className="space-y-2">
          {frostLogEntries.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={() => setSelectedEntryId(entry.id)}
              className={`w-full rounded-2xl border p-3 text-left transition ${selectedEntryId === entry.id ? "border-cyan-300/40 bg-cyan-300/10 text-white" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`}
            >
              <p className="font-semibold">{entry.title}</p>
              <p className="nt-1 text-xs text-slate-400">{entry.date}</p>
            </button>
          ))}
        </div>
      </aside>

      <article className="flex-1 overflow-y-auto p-6">
        <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
          {selectedEntry.mood}
        </span>

        <h1 className="mt-5 text-3xl font-bold text-white">
          {selectedEntry.title}
        </h1>

        <p className="mt-1 text-sm text-slate-400">{selectedEntry.date}</p>

        <div className="mt-6 space-y-4 leading-relaxed text-slate-300">
          {selectedEntry.content}
        </div>
      </article>
    </div>
  );
};

export default FrostLogApp;
