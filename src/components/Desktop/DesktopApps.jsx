import DesktopIcon from "./DesktopIcon";

const desktopApps = [
  {
    id: "frostLog",
    label: "FrostLog",
    icon: "🌧️",
  },
  {
    id: "calculator",
    label: "Calculator",
    icon: "🧮",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "📁",
  },
];

const DesktopApps = ({ selectedIcon, onSelectIcon, onOpenApp }) => {
  return (
    <div className="absolute left-5 top-20 z-10 flex flex-col gap-4">
      {desktopApps.map((app) => (
        <DesktopIcon
          key={app.id}
          icon={app.icon}
          label={app.label}
          selected={selectedIcon === app.id}
          onClick={() => onSelectIcon(app.id)}
          onDoubleClick={() => onOpenApp(app.id)}
        />
      ))}
    </div>
  );
};

export default DesktopApps;
