import { useState } from "react";
import Desktop from "./components/Desktop/Desktop";
import OnBoarding from "./components/OnBoarding/OnBoarding";

const App = () => {
  const [session, setSession] = useState({
    started: false,
    initialApp: null,
  });

  const startSession = (initialApp = null) => {
    setSession({
      started: true,
      initialApp,
    });
  };

  if (!session.started) {
    return (
      <OnBoarding
        onEnter={() => startSession()}
        onOpenProjects={() => startSession("projects")}
        onOpenFrostLog={() => startSession("frostLog")}
      />
    );
  }

  return <Desktop initialOpenApp={session.initialApp} />;
};

export default App;
