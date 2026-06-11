import { useState } from "react";

const calculatorButtons = [
  "C",
  "±",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

const calculate = (firstValue, secondValue, operator) => {
  if (operator === "+") return firstValue + secondValue;
  if (operator === "-") return firstValue - secondValue;
  if (operator === "x") return firstValue * secondValue;
  if (operator === "÷")
    return secondValue === "0" ? "Error" : firstValue / secondValue;
};

const formatResult = (value) => {
  if (value === "Error") return value;

  return String(Number(value.toFixed(8)));
};

const CalculatorApp = () => {
  const [display, setDisplay] = useState("0");
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNumber, setWaitingForNumber] = useState(false);

  const inputNumber = (number) => {
    if (display === "Error") {
      setDisplay(number);
      return;
    }
    if (waitingForNumber) {
      setDisplay(number);
      setWaitingForNumber(false);
      return;
    }

    setDisplay(display === "0" ? number : display + number);
  };

  const inputDecimal = () => {
    if (waitingForNumber) {
      setDisplay("0.");
      setWaitingForNumber(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clearCalculator = () => {
    setDisplay("0");
    setStoredValue(null);
    setOperator(null);
    setWaitingForNumber(false);
  };

  const toggleSign = () => {
    if (display === "0" || display === "Error") return;

    setDisplay(String(parseFloat(display) * -1));
  };

  const percentage = () => {
    if (display === "Error") return;

    setDisplay(String(parseFloat(display) / 100));
  };

  const chooseOperator = (nextOperator) => {
    const inputValue = parseFloat(display);
    if (operator && waitingForNumber) {
      setOperator(nextOperator);
      return;
    }

    if (storedValue === null) {
      setStoredValue(inputValue);
    } else if (operator) {
      const result = calculate(storedValue, inputValue, operator);

      if (result === "Error") {
        setDisplay("Error");
        setStoredValue(null);
        setOperator(null);
        return;
      }

      setDisplay(formatResult(result));
      setStoredValue(result);
    }

    setOperator(nextOperator);
    setWaitingForNumber(true);
  };

  const handleEquals = () => {
    if (!operator || storedValue === null) return;

    const inputValue = parseFloat(display);
    const result = calculate(storedValue, inputValue, operator);

    if (result === "Error") {
      setDisplay("Error");
    } else {
      setDisplay(formatResult(result));
    }

    setStoredValue(null);
    setOperator(null);
    setWaitingForNumber(true);
  };

  const handleButtonClick = (button) => {
    if (!Number.isNaN(Number(button))) {
      inputNumber(button);
      return;
    }

    if (button === ".") inputDecimal();
    if (button === "C") clearCalculator();
    if (button === "±") toggleSign();
    if (button === "%") percentage();
    if (["÷", "x", "-", "+"].includes(button)) chooseOperator(button);
    if (button === "=") handleEquals();
  };

  return (
    <div className="w-85 bg-slate-950/30 p-5">
      <div className="mb-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-right shadow-inner shadow-cyan-500/10">
        <p className="mb-1 text-xs uppercase tracking-[0.25em] text-cyan-300">
          Calculator
        </p>
        <p className="overflow-hidden text-4xl font-bold text-white">
          {display}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {calculatorButtons.map((button) => {
          const isOperator = ["÷", "x", "-", "+", "="].includes(button);
          const isZero = button === "0";

          return (
            <button
              key={button}
              type="button"
              onClick={() => handleButtonClick(button)}
              className={`rounded-2xl border py-4 text-lg font-semibold transition hover:scale-105 ${isZero ? "col-span-2" : ""} ${isOperator ? "border-cyan-300/30 bg-cyan-400/15 text-cyan-100 hover:bg-cyan-400/25" : "border-white/10 bg-white/10 text-slate-100 hover:bg-white/15"}`}
            >
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalculatorApp;
