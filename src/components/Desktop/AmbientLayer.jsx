const particlesArray = Array.from({ length: 70 }, (_, index) => index);

const effectStyles = {
  snow: {
    particleCount: 45,
    animationName: "ambient-snow-fall",
    className:
      "h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.75)]",
    durationBase: 7,
    durationRange: 9,
    delayRange: 8,
    opacityBase: 0.35,
    opacityRange: 0.55,
    driftRange: 56,
  },
  rain: {
    particleCount: 70,
    animationName: "ambient-rain-fall",
    className:
      "h-12 w-px bg-cyan-100/45 shadow-[0_0_8px_rgba(125,211,252,0.45)]",
    durationBase: 1.2,
    durationRange: 1.8,
    delayRange: 3,
    opacityBase: 0.25,
    opacityRange: 0.45,
    driftRange: 120,
  },
};

const AmbientLayer = ({ effect }) => {
  const pseudoRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const currentEffect = effectStyles[effect];

  if (!currentEffect) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      {particlesArray.slice(0, currentEffect.particleCount).map((id) => {
        const randomLeft = pseudoRandom(id * 1) * 100;
        const randomDuration =
          currentEffect.durationBase +
          pseudoRandom(id * 2) * currentEffect.durationRange;
        const randomDelay = pseudoRandom(id * 3) * currentEffect.delayRange;
        const randomOpacity =
          currentEffect.opacityBase +
          pseudoRandom(id * 4) * currentEffect.opacityRange;
        const randomDrift =
          (pseudoRandom(id * 5) - 0.5) * currentEffect.driftRange;

        return (
          <span
            key={id}
            className={`absolute -top-12 block will-change-transform ${currentEffect.className}`}
            style={{
              left: `${randomLeft}%`,
              animation: `${currentEffect.animationName} ${randomDuration}s linear infinite`,
              animationDelay: `${randomDelay}s`,
              opacity: randomOpacity,
              "--ambient-drift": `${randomDrift}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default AmbientLayer;
