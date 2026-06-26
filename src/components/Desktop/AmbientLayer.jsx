const particlesArray = Array.from({ length: 35 }, (_, index) => index);

const AmbientLayer = ({ effect }) => {
  const pseudoRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  if (effect === "none") return null;

  return (
    <div className="">
      {particlesArray.map((id) => {
        const randomLeft = pseudoRandom(id * 1) * 100;
        const randomDuration = 4 + pseudoRandom(id * 2) * 7;
        const randomDelay = pseudoRandom(id * 3) * 6;
        const randomOpacity = 0.3 + pseudoRandom(id * 4) * 0.7;
        return (
          <span
            key={id}
            className={``}
            style={{
              left: `${randomLeft}%`,
              animation: `fall ${randomDuration}s linear infinite`,
              animationDelay: `${randomDelay}s`,
              opacity: randomOpacity,
            }}
          />
        );
      })}
    </div>
  );
};

export default AmbientLayer;
