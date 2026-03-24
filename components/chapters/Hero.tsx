"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown, FileText } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Heavy canvas — client only, no SSR
const HeroCanvas    = dynamic(() => import("@/components/ui/HeroCanvas"),    { ssr: false });
const KenBurnsHero  = dynamic(() => import("@/components/ui/KenBurnsHero"),  { ssr: false });

export default function Hero() {
  const reduced = useReducedMotion();

  const scrollToChapters = () => {
    document.getElementById("barndom")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-chili-black overflow-hidden">

      {/* ── Layer 1: Ken Burns B&W photos ── */}
      <KenBurnsHero />

      {/* ── Layer 2: Dark gradient over photos ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-chili-black via-chili-black/60 to-chili-black/20 z-[1]" />

      {/* ── Layer 3: Particle canvas ── */}
      <div className="absolute inset-0 z-[2]">
        <HeroCanvas />
      </div>

      {/* ── Layer 4: Content ── */}
      <div className="relative z-10 max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)] pb-20 md:pb-28">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-8 h-px bg-chili-yellow" />
          <span className="font-mono text-label uppercase tracking-[0.2em] text-chili-yellow">
            CHILI A/S · Årsrapport 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: reduced ? 0 : 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reduced ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-display-xl font-extrabold text-chili-text-primary leading-none tracking-tight mb-4"
        >
          WILLIAM
          <br />
          <span className="text-chili-yellow">17</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: reduced ? 0 : 0.75 }}
          className="font-mono text-body-sm md:text-body-lg text-chili-text-secondary max-w-md mb-10"
        >
          Anden generation. Høj profil. Lav likviditet.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 1.0 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={scrollToChapters}
            className="group flex items-center gap-3 bg-chili-yellow text-chili-black
              font-heading font-extrabold uppercase tracking-[0.12em] text-sm px-6 py-3
              hover:bg-chili-yellow-dim transition-colors duration-200 cursor-pointer"
          >
            Se årsrapporten
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>
          <button
            onClick={() => document.getElementById("far")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 border border-chili-gray-mid text-chili-text-secondary
              font-mono text-sm px-6 py-3
              hover:border-chili-yellow/40 hover:text-chili-text-primary
              transition-all duration-200 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            Kræv nødpakke
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.6 }}
        className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span
          className="font-mono text-label text-chili-text-secondary uppercase tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <span className="w-px h-12 bg-gradient-to-b from-chili-text-secondary to-transparent" />
      </motion.div>
    </section>
  );
}
