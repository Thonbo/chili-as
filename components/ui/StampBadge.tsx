interface Props {
  text: string;
  subText?: string;
  color?: "yellow" | "red" | "white";
  rotation?: number;
  className?: string;
}

export default function StampBadge({
  text,
  subText,
  color = "yellow",
  rotation = -4,
  className = "",
}: Props) {
  const colors = {
    yellow: { border: "#FFD600", text: "#FFD600" },
    red:    { border: "#C0392B", text: "#C0392B" },
    white:  { border: "#f0ece4", text: "#f0ece4" },
  };

  const c = colors[color];

  return (
    <div
      className={`inline-flex flex-col items-center justify-center ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <svg viewBox="0 0 160 160" width="120" height="120" className="overflow-visible">
        {/* Outer circle */}
        <circle
          cx="80" cy="80" r="72"
          fill="none"
          stroke={c.border}
          strokeWidth="3"
          strokeDasharray="6 3"
          opacity="0.85"
        />
        {/* Inner circle */}
        <circle
          cx="80" cy="80" r="60"
          fill="none"
          stroke={c.border}
          strokeWidth="1.5"
          opacity="0.5"
        />
        {/* Main text */}
        <text
          x="80" y="84"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14"
          fontWeight="700"
          letterSpacing="3"
          fill={c.text}
          fontFamily="var(--font-syne), sans-serif"
        >
          {text}
        </text>
        {/* Sub text arc */}
        {subText && (
          <>
            <defs>
              <path
                id="textCircle"
                d="M 80,80 m -55,0 a 55,55 0 1,1 110,0"
              />
            </defs>
            <text fontSize="8" letterSpacing="2.5" fill={c.text} opacity="0.7">
              <textPath href="#textCircle" startOffset="10%">
                {subText}
              </textPath>
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
