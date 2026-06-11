import { useState } from "react";

const projects = [
  {
    id: "manentios",
    name: "ManentiOS",
    category: "WebOS",
    status: "In development",
    icon: "❄️",
    tech: ["React", "TailwindCSS", "JavaScript"],
    description:
      "A personal web operating system inspired by winter landscapes, rainy forests, and modern technology.",
  },
  {
    id: "poupapp",
    name: "PoupApp",
    category: "Finance",
    status: "Completed",
    icon: "💰",
    tech: ["React", "Vite", "CSS Modules"],
    description:
      "A personal finance control website created to practice React styling and interface organization.",
  },
  {
    id: "slackbot",
    name: "Manenti Slack Bot",
    category: "Bot",
    status: "Completed",
    icon: "🤖",
    tech: ["Node.js", "Slack API", "APIs"],
    description:
      "A Slack bot project with custom commands, API integrations, and deployment using a server container.",
  },
  {
    id: "macropad",
    name: "Custom Macropad",
    category: "Hardware",
    status: "Completed",
    icon: "⌨️",
    tech: ["KiCad", "Fusion 360", "PCB Design"],
    description:
      "A custom macropad project combining PCB design, electronics, and 3D case modeling.",
  },
];

const ProjectsApp = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  return (
    <div className="flex h-150 w-205 max-w-[90vw] bg-slate-950/30">
      <aside className="w-64 border-r border-white/10 bg-slate-950/40 p-4">
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Portfolio
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">Projects</h2>
        </div>

        <div className="space-y-2">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProjectId(project.id)}
              className={`w-full rounded-2xl border p-3 text-left transition ${selectedProjectId === project.id ? "border-cyan-300/40 bg-cyan-300/10 text-white" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{project.icon}</span>

                <div>
                  <p className="font-semibold">{project.name}</p>
                  <p className="text-xs text-slate-400">{project.category}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      <section className="flex-1 overflow-y-auto p-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
                {selectedProject.category}
              </span>

              <h1 className="mt-5 text-4xl font-bold text-white">
                {selectedProject.icon} {selectedProject.name}
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Status: {selectedProject.status}
              </p>
            </div>
          </div>

          <p className="mt-6 leading-relaxed text-slate-300">
            {selectedProject.description}
          </p>

          <div className="mt-6">
            <h3 className="mb-3 font-semibold text-white">Technologies</h3>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-sm text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <p className="text-2xl">🧊</p>
              <h4 className="mt-2 font-semibold text-white">Cold UI</h4>
              <p className="mt-1 text-sm text-slate-400">
                Dark, clean, and atmospheric interface.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <p className="text-2xl">⚙️</p>
              <h4 className="mt-2 font-semibold text-white">Built by Me</h4>
              <p className="mt-1 text-sm text-slate-400">
                Focused on learning and improving as a developer.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <p className="text-2xl">🌲</p>
              <h4 className="mt-2 font-semibold text-white">ManentiOS</h4>
              <p className="mt-1 text-sm text-slate-400">
                Displayed inside my personal web operating system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsApp;
