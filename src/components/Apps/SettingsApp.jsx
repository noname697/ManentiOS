const visualModes = [
  {
    id: "winter",
    name: "Winter",
    description: "Cold blue tones with a calm snowy atmosphere.",
    icon: "❄️",
  },
  {
    id: "rain",
    name: "Rain",
    description: "Darker colors with a rainy forest mood.",
    icon: "🌧️",
  },
  {
    id: "aurora",
    name: "Aurora",
    description: "Soft cyan ans purple lights inspired by northern skies.",
    icon: "🌌",
  },
];

const ambientEffects = [
  {
    id: "snow",
    name: "Snow",
    icon: "❄️",
  },
  {
    id: "rain",
    name: "Rain",
    icon: "🌧️",
  },
  {
    id: "none",
    name: "None",
    icon: "🚫",
  },
];

const settingsApp = ({
  visualMode,
  onChangeVisualMode,
  ambientEffect,
  onChangeAmbientEffect,
}) => {
  return (
    <div className="">
      <div className="">
        <p className="">System</p>
        <h1 className="">Settings</h1>
        <p className="">Customize the look and atmosphere of ManentiOS.</p>
      </div>

      <section>
        <h2 className="">Visual Mode</h2>
        <div className="">
          {visualModes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => onChangeVisualMode(mode.id)}
              className={``}
            >
              <p className="">{mode.icon}</p>
              <h3 className="">{mode.name}</h3>
              <p className="">{mode.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="">
        <h2 className="">Ambient Effect</h2>

        <div className="">
          {ambientEffects.map((effect) => (
            <button
              key={effect.id}
              type="button"
              onClick={() => onChangeAmbientEffect(effect.id)}
              className={``}
            >
              {effect.icon} {effect.name}
            </button>
          ))}
        </div>
      </section>

      <div className="">
        <p className="">Current Configuration</p>
        <p className="">
          Visual Mode: <span>{visualMode}</span>
        </p>
        <p className="">
          Ambient Effect: <span>{ambientEffect}</span>
        </p>
      </div>
    </div>
  );
};

export default settingsApp;
