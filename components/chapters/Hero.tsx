"use client";
import { motion } from "framer-motion";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Hero() {
  const reduced = useReducedMotion();

  const scrollToChapters = () => {
    document.getElementById("barndom")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-chili-black overflow-hidden">
      {/* Background photo */}
      <ParallaxImage
        src="/images/civilian/IMG20250624182300.jpg"
        alt="William — CHILI A/S"
        className="absolute inset-0 w-full h-full"
        priority
        strength={0.06}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-chili-black via-chili-black/50 to-transparent" />
      <div className="absolute inset-0 bg-chili-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)] pb-20 md:pb-28">
        {/* Ticker line */}
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

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: reduced ? 0 : 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reduced ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-display-xl font-extrabold text-chili-text-primary leading-none tracking-tight mb-4 text-balance"
        >
          WILLIAM
          <br />
          <span className="text-chili-yellow">17</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.8 }}
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
            className="group flex items-center gap-3 bg-chili-yellow text-chili-black font-heading font-extrabold uppercase tracking-[0.12em] text-sm px-6 py-3 hover:bg-chili-yellow-dim transition-colors duration-200 cursor-pointer"
          >
            Se årsrapporten
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => document.getElementById("far")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 border border-chili-gray-mid text-chili-text-secondary font-mono text-sm px-6 py-3 hover:border-chili-yellow/40 hover:text-chili-text-primary transition-all duration-200 cursor-pointer"
          >
            Kræv nødpakke
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.5 }}
        className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-label text-chili-text-secondary uppercase tracking-widest" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <span className="w-px h-12 bg-gradient-to-b from-chili-text-secondary to-transparent" />
      </motion.div>
    </section>
  );
}
