import { osApps } from "../../data/osApps";

const Dock = ({ openWindows, onOpenApp }) => {
  return (
    <nav className="">
      {osApps.map((app) => (
        <button
          key={app.id}
          type="button"
          onClick={() => onOpenApp(app.id)}
          className=""
          title={app.label}
        >
          {app.icon}

          {openWindows[app.id] && <span className="" />}
        </button>
      ))}
    </nav>
  );
};

export default Dock;
