const visualModes = [
  {
    id: "winter",
    name: "Winter",
    description: "Cold blue tones with a calm snowy atmosphere.",
    icon: "❄️",
  },
  {
    id: "rain",
    name: "Rain",
    description: "Darker colors with a rainy forest mood.",
    icon: "🌧️",
  },
  {
    id: "aurora",
    name: "Aurora",
    description: "Soft cyan ans purple lights inspired by northern skies.",
    icon: "🌌",
  },
];

const ambientEffects = [
  {
    id: "snow",
    name: "Snow",
    icon: "❄️",
  },
  {
    id: "rain",
    name: "Rain",
    icon: "🌧️",
  },
  {
    id: "none",
    name: "None",
    icon: "🚫",
  },
];

const SettingsApp = ({
  visualMode,
  onChangeVisualMode,
  ambientEffect,
  onChangeAmbientEffect,
}) => {
  return (
    <div className="h-130 w-180 max-w-[90vw] overflow-y-auto bg-slate-950/30 p-6">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
          System
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">Settings</h1>
        <p className="mt-2 text-slate-400">
          Customize the look and atmosphere of ManentiOS.
        </p>
      </div>

      <section>
        <h2 className="mb-3 font-semibold text-white">Visual Mode</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {visualModes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => onChangeVisualMode(mode.id)}
              className={`rounded-2xl border p-4 text-left transition ${visualMode === mode.id ? "border-cyan-300/40 bg-cyan-300/10" : "border-white/10 bg-white/5 hover:bg-white/10"}`}
            >
              <p className="text-3xl">{mode.icon}</p>
              <h3 className="mt-3 font-semibold text-white">{mode.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{mode.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 font-semibold text-white">Ambient Effect</h2>

        <div className="flex flex-wrap gap-3">
          {ambientEffects.map((effect) => (
            <button
              key={effect.id}
              type="button"
              onClick={() => onChangeAmbientEffect(effect.id)}
              className={`rounded-2xl border px-4 py-3 font-semibold transition ${ambientEffect === effect.id ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`}
            >
              {effect.icon} {effect.name}
            </button>
          ))}
        </div>
      </section>

      <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
        <p className="font-semibold text-white">Current Configuration</p>
        <p className="mt-2 text-sm text-slate-400">
          Visual Mode: <span className="text-cyan-200">{visualMode}</span>
        </p>
        <p className="mt-1 text-sm text-slate-400">
          Ambient Effect: <span className="text-cyan-200">{ambientEffect}</span>
        </p>
      </div>
    </div>
  );
};

export default SettingsApp;
