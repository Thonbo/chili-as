"use client";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, TrendingDown, Minus, AlertCircle } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import type { KPIItem } from "@/lib/kpi-data";

const statusIcon: Record<KPIItem["status"], React.ReactNode> = {
  green:   <TrendingUp  className="w-3 h-3 text-emerald-500" />,
  yellow:  <Minus       className="w-3 h-3 text-chili-yellow" />,
  red:     <TrendingDown className="w-3 h-3 text-red-500" />,
  neutral: <AlertCircle  className="w-3 h-3 text-chili-text-secondary" />,
};

export default function KPICard({ item }: { item: KPIItem }) {
  const ref    = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const count  = useCountUp(item.numeric ?? 0, 1400, triggered && item.numeric !== undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const displayValue =
    item.numeric !== undefined
      ? `${count}${item.value.replace(/[0-9]+/, "")}` // preserve suffix like %
      : item.value;

  return (
    <div
      ref={ref}
      className="bg-chili-matte border border-chili-gray-mid p-5 flex flex-col gap-3
        hover:border-chili-yellow/30 transition-colors duration-300 group"
    >
      {/* Status indicator + label */}
      <div className="flex items-center gap-2">
        {statusIcon[item.status]}
        <span className="font-mono text-label uppercase tracking-widest text-chili-text-secondary">
          {item.label}
        </span>
      </div>

      {/* Value */}
      <div className="font-heading text-display-md font-extrabold text-chili-text-primary leading-none
        group-hover:text-chili-yellow transition-colors duration-300">
        {displayValue}
      </div>

      {/* Sub text */}
      <p className="font-mono text-caption text-chili-text-secondary leading-snug">
        {item.sub}
      </p>
    </div>
  );
}
