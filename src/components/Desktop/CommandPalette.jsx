import { useEffect, useMemo, useState } from "react";
import { osApps } from "../../data/osApps";

const CommandPalette = ({ onOpenApp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredApps = useMemo(() => {
    return osApps.filter((app) =>
      app.label.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const handleOpenApp = (appId) => {
    onOpenApp(appId);
    setIsOpen(false);
    setSearch("");
  };

  if (!isOpen) return null;

  return (
    <div className="absolute">
      <div className="">
        <div className="">
          <p className="">Command Palette</p>

          <input
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search apps..."
            className=""
          />
        </div>

        <div className="">
          {filteredApps.map((app) => (
            <button
              key={app.id}
              type="button"
              onClick={() => handleOpenApp(app.id)}
              className=""
            >
              <span className="">{app.icon}</span>

              <div>
                <p className="">{app.label}</p>
                <p className="">Open Application</p>
              </div>
            </button>
          ))}

          {filteredApps.length === 0 && <p className="">No Apps found.</p>}
        </div>

        <div className="">Press Esc to close • Ctrl + K to toggle</div>
      </div>
    </div>
  );
};

export default CommandPalette;
