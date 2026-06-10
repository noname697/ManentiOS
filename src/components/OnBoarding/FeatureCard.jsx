const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
      <div className="mb-3 text-3xl">{icon}</div>
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
