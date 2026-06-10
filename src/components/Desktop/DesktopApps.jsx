import DesktopIcon from "./DesktopIcon";

const DesktopApps = ({ selectedIcon, onSelectIcon, onOpenFrostLog }) => {
  return (
    <div className="absolute left-5 top-20 z-30 flex flex-col gap-4">
      <DesktopIcon
        icon="🌧️"
        label="FrostLog"
        selected={selectedIcon === "frostLog"}
        onClick={() => onSelectIcon("frostLog")}
        onDoubleClick={onOpenFrostLog}
      />
    </div>
  );
};

export default DesktopApps;
