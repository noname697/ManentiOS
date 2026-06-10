const DesktopIcon = ({ icon, label, selected, onClick, onDoubleClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={`group flex flex-col items-center rounded-2xl p-3 text-white transition ${selected ? "bg-cyan-300/15 ring-1 ring-cyan-300/40" : "hover:bg-white/10"}`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-3xl shadow-lg shadow-cyan-500/10 backdrop-blur-md transition group-hover:scale-105">
        {icon}
      </div>
      <span className="mt-2 rounded-md px-2 py-0.5 text-center text-sm font-medium text-slate-100 drop-shadow">
        {label}
      </span>
    </button>
  );
};

export default DesktopIcon;
