import ActionButton from "./ActionButton";
import ProfileImage from "./ProfileImage";
import profileImage from "../../assets/profile.png";
import wallpaper from "../../assets/loginWallpaper.png";
import { useState } from "react";

const OnBoarding = ({ onEnter, onOpenProjects, onOpenFrostLog }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onEnter();
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-slate-950/50 to-slate-950/90" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-56 w-56 rounded-full bg-cyan-600/20 blur-3xl" />
      </div>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="hidden lg:block">
            <div className="rounded-3xl border border-white/10  py-6">
              <ProfileImage
                src={profileImage}
                alt="Picture of Arthur Manenti"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <div className="mb-8">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-sm font-medium text-cyan-200">
                Winter Tech Session
              </span>

              <h1 className="mt-6 text-5xl font-bold md:text-7xl">
                Manenti
                <span className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  OS
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-slate-300">
                A personal web operating system inspired by cold landscapes,
                rainy forests, glass interfaces, and modern technology.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Enter session password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Press Enter to start"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton type="submit">Enter ManentiOS</ActionButton>

                <ActionButton variant="secondary" onClick={onOpenProjects}>
                  View Projects
                </ActionButton>

                <ActionButton variant="secondary" onClick={onOpenFrostLog}>
                  Open FrostLog
                </ActionButton>
              </div>
            </form>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl">🌧️</p>
                <h2 className="mt-2 font-semibold">Rain Mode</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Dark, calm and atmospheric.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl">🌲</p>
                <h2 className="mt-2 font-semibold">Forest UI</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Inspired by winter landscapes.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl">💻</p>
                <h2 className="mt-2 font-semibold">WebOS</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Built with React and Tailwind.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              ManentiOS v1.0 • Personal desktop environment
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default OnBoarding;
