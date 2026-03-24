"use client";
import { useEffect, useState } from "react";
import { TrendingDown } from "lucide-react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-chili-black/90 backdrop-blur-sm border-b border-chili-gray-mid"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-8 h-14">
        <span className="flex items-center gap-2 font-heading text-sm font-bold tracking-[0.2em] text-chili-yellow uppercase">
          <TrendingDown className="w-3.5 h-3.5" />
          CHILI A/S
        </span>
        <span className="font-mono text-xs text-chili-text-secondary tracking-widest uppercase hidden sm:block">
          Årsrapport 2026
        </span>
        <span className="font-mono text-xs text-chili-text-secondary tracking-widest">
          17 ÅR
        </span>
      </div>
    </header>
  );
}
