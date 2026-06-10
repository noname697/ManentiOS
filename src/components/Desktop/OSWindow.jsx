import { useRef, useState } from "react";

const OSWindow = ({
  title,
  children,
  isOpen,
  onClose,
  defaultPosition = { x: 80, y: 120 },
  className = "",
}) => {
  const [position, setPosition] = useState(defaultPosition);

  const dragData = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
  });

  if (!isOpen) return null;

  const handlePointerDown = (event) => {
    dragData.current = {
      isDragging: true,
      startX: event.clientX,
      startY: event.clientY,
      initialX: position.x,
      initialY: position.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragData.current.isDragging) return;

    const distanceX = event.clientX - dragData.current.startX;
    const distanceY = event.clientY - dragData.current.startY;

    setPosition({
      x: dragData.current.initialX + distanceX,
      y: dragData.current.initialY + distanceY,
    });
  };

  const handlePointerUp = (event) => {
    dragData.current.isDragging = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <section
      className={`absolute z-10 w-[90vw] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/65 text-white shadow-2xl shadow-cyan-500/10 backdrop-blur-xl ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <header
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="flex cursor-grab select-none touch-none items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3 active:cursor-grabbing"
      >
        <div className="flex items-center gap-3">
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onClose}
            aria-label="Close window"
            className="h-3.5 w-3.5 rounded-full bg-red-400 transition hover:bg-red-300"
          />
          <span className="text-sm font-semibold text-slate-200">{title}</span>
        </div>

        <span className="text-sm text-slate-400">⠿</span>
      </header>

      <div className="max-h-[75vh] overflow-y-auto">{children}</div>
    </section>
  );
};

export default OSWindow;
