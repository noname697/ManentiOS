const WelcomeWindow = () => {
  return (
    <div className="p-8">
      <div className="mb-6">
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
          Welcome back
        </span>
        <h1 className="mt-5 text-4xl font-bold">
          Welcome to{" "}
          <span className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            ManentiOS
          </span>
        </h1>
        <p className="mt-4 text-slate-300">
          Your personal web operating system, inspired by winter landscapes,
          rainy forests, and modern technology.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl">🌲</p>
          <h2 className="mt-2 font-semibold">Forest UI</h2>
          <p className="mt-1 text-sm text-slate-400">
            Calm, cold, and atmospheric.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl">💻</p>
          <h2 className="mt-2 font-semibold">Web Based</h2>
          <p className="mt-1 text-sm text-slate-400">
            Built with React and Tailwind.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl">🌧️</p>
          <h2 className="mt-2 font-semibold">Rain Mode</h2>
          <p className="mt-1 text-sm text-slate-400">
            A soft winter tech vibe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeWindow;
