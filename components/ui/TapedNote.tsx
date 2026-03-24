"use client";
import { useState } from "react";

interface Props {
  text: string;
  rotation?: number;       // degrees, default -2
  position?: string;       // Tailwind positioning classes
  tapeColor?: string;      // Tailwind bg class for tape
  alwaysVisible?: boolean; // If false, hidden on mobile until tapped
}

export default function TapedNote({
  text,
  rotation = -2,
  position = "",
  tapeColor = "bg-amber-200/70",
  alwaysVisible = false,
}: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className={`${position} select-none`}
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={() => setRevealed((v) => !v)}
    >
      {/* Tape strip */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 ${tapeColor} opacity-80`}
        style={{ mixBlendMode: "multiply" }}
      />
      {/* Note body */}
      <div
        className={`
          relative bg-amber-50 text-stone-800 px-4 py-3 shadow-lg
          font-mono text-xs leading-relaxed max-w-[200px]
          transition-all duration-300
          ${!alwaysVisible ? "hidden md:block" : ""}
          ${revealed ? "!block" : ""}
        `}
      >
        {text}
      </div>
      {/* Mobile reveal hint */}
      {!alwaysVisible && (
        <div className="md:hidden w-8 h-1 bg-chili-yellow/40 rounded cursor-pointer" />
      )}
    </div>
  );
}
