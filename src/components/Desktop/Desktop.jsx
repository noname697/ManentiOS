import { useRef, useState } from "react";
import wallpaper from "../../assets/wallpaper.png";
import TopBar from "./TopBar";
import WelcomeWindow from "./WelcomeWindow";
import OSWindow from "./OSWindow";
import DesktopApps from "./DesktopApps";
import FrostLogApp from "../Apps/FrostLogApp";

const Desktop = () => {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const [isFrostLogOpen, setIsFrostLogOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const highestZIndex = useRef(20);

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
    if (windowId === "welcome") {
      setIsWelcomeOpen(true);
    }
    if (windowId === "frostLog") {
      setIsFrostLogOpen(true);
    }

    focusWindow(windowId);
  };

  const handleSelectIcon = (iconId) => {
    setSelectedIcon((prev) => (prev === iconId ? null : iconId));
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-slate-950/50"></div>
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/30 via-slate-950/20 to-slate-950/80"></div>
      <TopBar onOpenWelcome={() => openWindow("welcome")} />
      <DesktopApps
        selectedIcon={selectedIcon}
        onSelectIcon={handleSelectIcon}
        onOpenFrostLog={() => openWindow("frostLog")}
      />
      <OSWindow
        title="Welcome"
        isOpen={isWelcomeOpen}
        onClose={() => setIsWelcomeOpen(false)}
        onFocus={() => focusWindow("welcome")}
        zIndex={windowsZIndexes.welcome}
        defaultPosition={{ x: 120, y: 120 }}
        className="w-[90vw] max-w-2xl"
      >
        <WelcomeWindow />
      </OSWindow>
      <OSWindow
        title="FrostLog"
        isOpen={isFrostLogOpen}
        onClose={() => setIsFrostLogOpen(false)}
        onFocus={() => focusWindow("frostLog")}
        zIndex={windowsZIndexes.frostLog}
        defaultPosition={{ x: 340, y: 130 }}
        className="w-fit"
      >
        <FrostLogApp />
      </OSWindow>
    </main>
  );
};

export default Desktop;
