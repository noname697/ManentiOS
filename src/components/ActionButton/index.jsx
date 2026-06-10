const ActionButton = ({ children, variant = "primary" }) => {
  const baseClasses = "rounded-xl px-6 py-3 font-semibold transition";

  const variants = {
    primary:
      "bg-linear-to-r from-blue-500 to-purple-600  hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30",
    secondary: "border border-slate-700  text-slate-300 hover:bg-slate-800",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default ActionButton;
