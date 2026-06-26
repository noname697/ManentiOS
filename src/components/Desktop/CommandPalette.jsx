import { useEffect, useMemo, useState } from "react";
import { osApps } from "../../data/osApps";

const CommandPalette = ({ onOpenApp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredApps = useMemo(() => {
    return osApps.filter((app) =>
      app.label.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const handleOpenApp = (appId) => {
    onOpenApp(appId);
    setIsOpen(false);
    setSearch("");
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-950 flex items-start justify-center bg-slate-950/40 px-6 pt-24 backdrop-blur-sm">
      <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
        <div className="border-b border-white/10 p-4">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
            Command Palette
          </p>

          <input
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search apps..."
            className="w-full bg-transparent text-lg text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <div className="max-h-80 overflow-y-auto p-3">
          {filteredApps.map((app) => (
            <button
              key={app.id}
              type="button"
              onClick={() => handleOpenApp(app.id)}
              className="flex w-full items-center gap-3 rounded-2xl p-3 text-left text-slate-200 transition hover:bg-cyan-300/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl">
                {app.icon}
              </span>

              <div>
                <p className="font-semibold text-white">{app.label}</p>
                <p className="text-sm text-slate-400">Open Application</p>
              </div>
            </button>
          ))}

          {filteredApps.length === 0 && (
            <p className="p-4 text-sm text-slate-400">No Apps found.</p>
          )}
        </div>

        <div className="border-t border-white/10 px-4 py-3 text-xs text-slate-500">
          Press Esc to close • Ctrl + K to toggle
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
