import { useRef, useState } from "react";
import wallpaper from "../../assets/wallpaper.png";
import TopBar from "./TopBar";
import WelcomeWindow from "./WelcomeWindow";
import OSWindow from "./OSWindow";
import DesktopApps from "./DesktopApps";
import FrostLogApp from "../Apps/FrostLogApp";
import CalculatorApp from "../Apps/CalculatorApp";
import ProjectsApp from "../Apps/ProjectsApp";
import Dock from "./Dock";

const Desktop = ({ initialOpenApp = null }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [openWindows, setOpenWindows] = useState({
    welcome: initialOpenApp === null,
    frostLog: initialOpenApp === "frostLog",
    calculator: initialOpenApp === "calculator",
    projects: initialOpenApp === "projects",
  });
  const highestZIndex = useRef(40);
  const [windowsZIndexes, setWindowsZIndexes] = useState({
    welcome: 21,
    frostLog: 22,
  });

  const focusWindow = (windowId) => {
    highestZIndex.current += 1;

    setWindowsZIndexes((prev) => ({
      ...prev,
      [windowId]: highestZIndex.current,
    }));

    setSelectedIcon(null);
  };

  const openWindow = (windowId) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowId]: true,
    }));

    focusWindow(windowId);
  };

  const closeWindow = (windowId) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowId]: false,
    }));
  };

  const handleSelectIcon = (iconId) => {
    setSelectedIcon((prev) => (prev === iconId ? null : iconId));
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-slate-950/50"></div>
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/30 via-slate-950/20 to-slate-950/80"></div>
      <TopBar onOpenWelcome={() => openWindow("welcome")} />
      <DesktopApps
        selectedIcon={selectedIcon}
        onSelectIcon={handleSelectIcon}
        onOpenApp={openWindow}
      />
      <OSWindow
        title="Welcome"
        isOpen={openWindows.welcome}
        onClose={() => closeWindow("welcome")}
        onFocus={() => focusWindow("welcome")}
        zIndex={windowsZIndexes.welcome}
        defaultPosition={{ x: 120, y: 120 }}
        className="w-[90vw] max-w-2xl"
      >
        <WelcomeWindow />
      </OSWindow>
      <OSWindow
        title="FrostLog"
        isOpen={openWindows.frostLog}
        onClose={() => closeWindow("frostLog")}
        onFocus={() => focusWindow("frostLog")}
        zIndex={windowsZIndexes.frostLog}
        defaultPosition={{ x: 340, y: 130 }}
        className="w-fit"
      >
        <FrostLogApp />
      </OSWindow>
      <OSWindow
        title="Calculator"
        isOpen={openWindows.calculator}
        onClose={() => closeWindow("calculator")}
        onFocus={() => focusWindow("calculator")}
        zIndex={windowsZIndexes.calculator}
        defaultPosition={{ x: 520, y: 140 }}
        className="w-fit"
      >
        <CalculatorApp />
      </OSWindow>
      <OSWindow
        title="Projects"
        isOpen={openWindows.projects}
        onClose={() => closeWindow("projects")}
        onFocus={() => focusWindow("projects")}
        zIndex={windowsZIndexes.projects}
        defaultPosition={{ x: 260, y: 110 }}
        className="w-fit"
      >
        <ProjectsApp />
      </OSWindow>
      <Dock openWindows={openWindows} onOpenApp={openWindow} />
    </main>
  );
};

export default Desktop;
