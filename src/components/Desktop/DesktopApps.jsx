import { osApps } from "../../data/osApps";
import DesktopIcon from "./DesktopIcon";

const DesktopApps = ({ selectedIcon, onSelectIcon, onOpenApp }) => {
  return (
    <div className="absolute left-5 top-20 z-10 flex flex-col gap-4">
      {osApps.map((app) => (
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
