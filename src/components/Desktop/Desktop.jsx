import wallpaper from "../../assets/wallpaper.png";
import TopBar from "./TopBar";
import WelcomeWindow from "./WelcomeWindow";

const Desktop = () => {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-slate-950/50"></div>
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/30 via-slate-950/20 to-slate-950/80"></div>
      <TopBar />
      <WelcomeWindow />
    </main>
  );
};

export default Desktop;
