const OnBoarding = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <section className="w-full max-w-4xl">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-blue-500/10">
          <div className="mb-8">
            <span className="inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
              Welcome to my WebOS
            </span>
            <h1 className="mt-6 text-4xl font-bold md:text-6xl">
              Welcome to{" "}
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                ManentiOS
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-slate-300">
              A personal web operating system built to showcase my projects,
              skills, and developer journey through an interactive desktop-style
              experience.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="mb-3 text-3xl">💻</div>
              <h2 className="font-semibold">Projects</h2>
              <p className="mt-2 text-sm text-slate-400">
                Explores the apps, websites, bots, and experiments I have built.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="mb-3 text-3xl">🧠</div>
              <h2 className="font-semibold">About Me</h2>
              <p className="mt-2 text-sm text-slate-400">
                Learn more about who I am, what I study, and what I like to
                create.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="mb-3 text-3xl">⚡</div>
              <h2 className="font-semibold">Fast & Web-based</h2>
              <p className="mt-2 text-sm text-slate-400">
                ManentiOS runs directly in the brownser with a simple and modern
                interface.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-xl bg-linear-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold transition hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              Enter ManentiOS
            </button>
            <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:bg-slate-800">
              View Projects
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnBoarding;
