import Clock from "./Clock";

const TopBar = ({ onOpenWelcome }) => {
  return (
    <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between border-b border-white/10 bg-slate-950/40 px-5 py-3 text-white backdrop-blur-md">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenWelcome}
          className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/20"
        >
          ManentiOS
        </button>

        <span className="hidden rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-200 sm:inline">
          Winter Tech Desktop
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden text-sm text-slate-300 sm:inline">
          🌧️ Rain Mode
        </span>
        <Clock />
      </div>
    </header>
  );
};

export default TopBar;
