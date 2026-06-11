import { useState } from "react";

const projects = [
  {
    id: "manentios",
    name: "ManentiOS",
    category: "WebOS / Portfolio",
    status: "In development",
    icon: "❄️",
    tech: ["React", "Vite", "TailwindCSS", "JavaScript"],
    description:
      "A personal web operating system built in the browser, featuring a winter-tech visual identity, draggable windows, desktop apps, a login-style onboarding screen, and a portfolio experience.",
    highlight:
      "My main creative project, combining UI design, React state management, reusable components, window behavior, and interactive apps.",
    githubUrl: "https://github.com/noname697/ManentiOS",
    demoUrl: "",
  },
  {
    id: "slack-bot",
    name: "Manenti Slack Bot",
    category: "Bot / API Integration",
    status: "Completed",
    icon: "🤖",
    tech: ["Node.js", "Slack Bolt", "Axios", "APIs", "dotenv"],
    description:
      "A Slack bot with slash commands that can fetch random cat images, Pokémon data, anime information, stoic quotes, jokes, memes, and weather data by city.",
    highlight:
      "Shows backend logic, external API integration, Slack command handling, environment variables, and deployment/server usage.",
    githubUrl: "https://github.com/noname697/Manenti-slack-bot",
    demoUrl: "",
  },
  {
    id: "macropad",
    name: "Custom Manenti Macropad",
    category: "Hardware / Maker",
    status: "Completed",
    icon: "⌨️",
    tech: ["KiCad", "Fusion 360", "CircuitPython", "KMK", "PCB Design"],
    description:
      "A custom 3-key macropad designed for media controls, combining PCB design, 3D case modeling, electronic components, and firmware configuration.",
    highlight:
      "One of my strongest portfolio projects because it mixes software, electronics, CAD modeling, documentation, and real physical product design.",
    githubUrl: "https://github.com/noname697/Amazing-Macropad",
    demoUrl: "",
  },
  {
    id: "poupapp",
    name: "PoupApp",
    category: "Finance Dashboard",
    status: "Completed",
    icon: "💰",
    tech: ["React", "Vite", "CSS Modules"],
    description:
      "A personal finance dashboard interface with account overview, transactions, savings progress, daily budget, financial indicators, and reusable React components.",
    highlight:
      "A clean front-end project focused on component organization, dashboard UI design, and scoped styling with CSS Modules.",
    githubUrl: "https://github.com/noname697/PoupApp-React",
    demoUrl: "",
  },
  {
    id: "loja-manga",
    name: "Projeto Loja Manga",
    category: "Full Stack",
    status: "In development",
    icon: "📚",
    tech: [
      "React",
      "TypeScript",
      "Axios",
      "Styled Components",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "JWT",
    ],
    description:
      "A manga store project with a React and TypeScript front-end connected to a Node.js API using Express, Sequelize, PostgreSQL, authentication, and CORS.",
    highlight:
      "Good project to show full-stack development, because it has a separate front-end and API with database and authentication-related dependencies.",
    githubUrl: "https://github.com/noname697/Projeto-Loja-Manga",
    backendUrl: "https://github.com/noname697/Projeto-Loja-Manga-API",
    demoUrl: "",
  },
  {
    id: "jornada-milhas",
    name: "Jornada Milhas PWA",
    category: "PWA / Front-end",
    status: "Study project",
    icon: "✈️",
    tech: ["React", "Vite", "VitePWA", "Workbox", "Styled Components"],
    description:
      "A travel-themed responsive front-end project built with React and PWA technologies, including VitePWA and Workbox.",
    highlight:
      "Useful as an extra portfolio item to show PWA concepts, responsive layout, Styled Components, and Figma-based UI implementation.",
    githubUrl: "https://github.com/noname697/React-PWA",
    demoUrl: "",
  },
];

const ProjectsApp = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) || projects[0];

  const hasLinks =
    selectedProject.githubUrl ||
    selectedProject.backendUrl ||
    selectedProject.demoUrl;

  return (
    <div className="flex h-170 w-205 max-w-[90vw] bg-slate-950/30">
      <aside className="w-64 shrink-0 border-r border-white/10 bg-slate-950/40 p-4">
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
              className={`w-full rounded-2xl border p-3 text-left transition ${
                selectedProjectId === project.id
                  ? "border-cyan-300/40 bg-cyan-300/10 text-white"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
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

          {selectedProject.highlight && (
            <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <p className="text-sm font-semibold text-cyan-200">
                Project highlight
              </p>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {selectedProject.highlight}
              </p>
            </div>
          )}

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

          {hasLinks && (
            <div className="mt-6 flex flex-wrap gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/15"
                >
                  GitHub
                </a>
              )}

              {selectedProject.backendUrl && (
                <a
                  href={selectedProject.backendUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/15"
                >
                  Backend
                </a>
              )}

              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}

         
        </div>
      </section>
    </div>
  );
};

export default ProjectsApp;
