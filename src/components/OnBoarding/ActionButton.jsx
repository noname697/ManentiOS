const ActionButton = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
}) => {
  const baseClasses =
    "rounded-xl px-6 py-3 font-semibold transition active:scale-95";

  const variants = {
    primary:
      "bg-linear-to-r from-cyan-400 to-blue-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30",
    secondary:
      "border border-white-10 bg-white/5 text-slate-300 hover:bg-white/10",
    ghost: "text-slate-300 hover:bg-white/10",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
