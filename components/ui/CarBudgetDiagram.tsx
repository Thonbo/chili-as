"use client";
import { useRef, useState, useEffect } from "react";
import { Car, Fuel, Shield, Wrench, FileText, ParkingSquare, TrendingDown, AlertTriangle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface LineItem {
  label: string;
  amount: number;      // DKK/year
  monthly: number;     // DKK/month
  color: string;
  icon: React.ReactNode;
  note: string;
}

const items: LineItem[] = [
  {
    label: "Forsikring",
    amount: 9600,
    monthly: 800,
    color: "#FFD600",
    icon: <Shield className="w-4 h-4" />,
    note: "Ansvar + delkasko. 18-årig. Høj.",
  },
  {
    label: "Brændstof / opladning",
    amount: 8400,
    monthly: 700,
    color: "#e8c700",
    icon: <Fuel className="w-4 h-4" />,
    note: "Ca. 700 km/md × 1 kr/km.",
  },
  {
    label: "Vægtafgift & ejerafgift",
    amount: 3600,
    monthly: 300,
    color: "#c9a800",
    icon: <FileText className="w-4 h-4" />,
    note: "Afhænger af bil. Lavt estimat.",
  },
  {
    label: "Service & reparationer",
    amount: 4800,
    monthly: 400,
    color: "#f0c040",
    icon: <Wrench className="w-4 h-4" />,
    note: "Syn, service, dæk, uforudsete.",
  },
  {
    label: "Parkering & bompenge",
    amount: 2400,
    monthly: 200,
    color: "#a08800",
    icon: <ParkingSquare className="w-4 h-4" />,
    note: "Hornslet er OK. Aarhus er dyr.",
  },
  {
    label: "Afskrivning (bilens værdi)",
    amount: 12000,
    monthly: 1000,
    color: "#7a6600",
    icon: <TrendingDown className="w-4 h-4" />,
    note: "Typisk 10–20% om året.",
  },
];

const TOTAL_YEAR  = items.reduce((s, i) => s + i.amount, 0);
const TOTAL_MONTH = items.reduce((s, i) => s + i.monthly, 0);
const NETTO_MONTHLY = 12000; // approximate full-time Netto student wage

export default function CarBudgetDiagram() {
  const barRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTriggered(true); },
      { threshold: 0.2 }
    );
    if (barRef.current) obs.observe(barRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-chili-matte border border-chili-gray-mid p-6 md:p-10">
      {/* Header */}
      <ScrollReveal>
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Car className="w-4 h-4 text-chili-yellow" />
              <span className="font-mono text-label uppercase tracking-widest text-chili-text-secondary">
                Bil-analyse · CHILI A/S Research Division
              </span>
            </div>
            <h3 className="font-heading text-display-md font-extrabold text-chili-text-primary leading-tight">
              Hvad koster en bil i DK?
            </h3>
            <p className="font-mono text-caption text-chili-text-secondary mt-1">
              Konservativt estimat. Faktiske tal vil overraske.
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-heading text-2xl font-extrabold text-chili-yellow leading-none">
              {TOTAL_MONTH.toLocaleString("da-DK")} kr.
            </div>
            <div className="font-mono text-[10px] text-chili-text-secondary uppercase tracking-widest">
              per måned
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Stacked bar */}
      <ScrollReveal delay={0.1}>
        <div ref={barRef} className="mb-8">
          <div className="flex h-10 rounded-sm overflow-hidden gap-px mb-3">
            {items.map((item) => {
              const pct = (item.monthly / TOTAL_MONTH) * 100;
              return (
                <div
                  key={item.label}
                  className="h-full transition-all duration-1000 ease-editorial"
                  style={{
                    width: triggered ? `${pct}%` : "0%",
                    backgroundColor: item.color,
                    transitionDelay: triggered ? "200ms" : "0ms",
                  }}
                  title={`${item.label}: ${item.monthly} kr/md`}
                />
              );
            })}
          </div>
          {/* Legend */}
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: item.color }} />
                <span className="font-mono text-[10px] text-chili-text-secondary">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Line items */}
      <div className="space-y-2 mb-8">
        {items.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 0.05}>
            <div className="flex items-center gap-3 py-3 border-b border-chili-gray-mid/50 group hover:border-chili-yellow/20 transition-colors">
              {/* Icon */}
              <span className="text-chili-text-secondary group-hover:text-chili-yellow transition-colors shrink-0">
                {item.icon}
              </span>
              {/* Label + note */}
              <div className="flex-1 min-w-0">
                <span className="font-mono text-body-sm text-chili-text-primary">{item.label}</span>
                <span className="block font-mono text-[10px] text-chili-text-secondary">{item.note}</span>
              </div>
              {/* Monthly */}
              <div className="text-right shrink-0">
                <span className="font-mono text-body-sm font-medium" style={{ color: item.color }}>
                  {item.monthly.toLocaleString("da-DK")} kr/md
                </span>
                <span className="block font-mono text-[10px] text-chili-text-secondary">
                  {item.amount.toLocaleString("da-DK")} kr/år
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Total vs income */}
      <ScrollReveal delay={0.2}>
        <div className="border border-chili-yellow/20 bg-chili-yellow-faint p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-chili-text-secondary">Bil-udgifter/md</p>
              <p className="font-heading text-2xl font-extrabold text-chili-yellow leading-none mt-1">
                {TOTAL_MONTH.toLocaleString("da-DK")} kr.
              </p>
            </div>
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-chili-text-secondary">Netto-løn/md (est.)</p>
              <p className="font-heading text-2xl font-extrabold text-chili-text-primary leading-none mt-1">
                ~{NETTO_MONTHLY.toLocaleString("da-DK")} kr.
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-label uppercase tracking-widest text-chili-text-secondary">Bil andel af indkomst</p>
              <p className="font-heading text-2xl font-extrabold text-chili-red leading-none mt-1">
                {Math.round((TOTAL_MONTH / NETTO_MONTHLY) * 100)}%
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 mt-3 pt-3 border-t border-chili-yellow/10">
            <AlertTriangle className="w-4 h-4 text-chili-yellow shrink-0 mt-0.5" />
            <p className="font-mono text-caption text-chili-text-secondary leading-relaxed">
              Ovenstående inkluderer <em>ikke</em> selve bilens pris, lån eller renter.
              Lav likviditet forbliver en strukturel udfordring.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="font-mono text-[10px] text-chili-text-secondary/50 mt-4 text-right">
          Kilde: CHILI A/S Research Division · Hornslet, 2026 · Ikke juridisk rådgivning.
        </p>
      </ScrollReveal>
    </div>
  );
}
