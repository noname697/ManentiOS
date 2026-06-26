import { osApps } from "../../data/osApps";

const Dock = ({ openWindows, onOpenApp }) => {
  return (
    <nav className="absolute bottom-5 left-1/2 z-900 flex -translate-x-1/2 items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/60 px-4 py-3 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
      {osApps.map((app) => (
        <button
          key={app.id}
          type="button"
          onClick={() => onOpenApp(app.id)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl transition hover:translate-y-1 hover:bg-cyan-300/10"
          title={app.label}
        >
          {app.icon}

          {openWindows[app.id] && (
            <span className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow shadow-cyan-300" />
          )}
        </button>
      ))}
    </nav>
  );
};

export default Dock;
