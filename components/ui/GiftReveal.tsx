"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Stage = "idle" | "opening" | "revealed" | "complete";

interface Confetti {
  id: number;
  x: number;
  y: number;
  r: number;
  color: string;
  size: number;
}

export default function GiftReveal() {
  const [stage, setStage] = useState<Stage>("idle");
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const reduced = useReducedMotion();
  const countStarted = stage === "complete";
  const amount = useCountUp(1000, 1800, countStarted);

  const advance = () => {
    if (stage === "idle") {
      setStage("opening");
      setTimeout(() => setStage("revealed"), reduced ? 50 : 900);
      setTimeout(() => setStage("complete"), reduced ? 100 : 1600);
    }
  };

  // Generate confetti on complete
  useEffect(() => {
    if (stage !== "complete") return;
    const colors = ["#FFD600", "#f0ece4", "#C0392B", "#111111"];
    const pieces: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 500 - 100,
      r: Math.random() * 720 - 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
    }));
    setConfetti(pieces);
  }, [stage]);

  return (
    <div className="relative flex flex-col items-center justify-center py-20 select-none">
      {/* ─── IDLE: CTA button ─── */}
      <AnimatePresence>
        {stage === "idle" && (
          <motion.button
            key="cta"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={advance}
            className="group relative flex items-center gap-4 bg-chili-yellow text-chili-black
              font-heading font-extrabold uppercase tracking-[0.15em] text-lg
              px-10 py-5 overflow-hidden
              hover:bg-chili-yellow-dim transition-colors duration-200 cursor-pointer"
          >
            {/* Shine sweep */}
            <span className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            {/* Wax seal icon */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1l2.5 7.5H22l-6.2 4.5 2.4 7.4L12 16 5.8 20.4l2.4-7.4L2 8.5h7.5z" />
            </svg>
            Åbn din gave
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── ENVELOPE ─── */}
      <AnimatePresence>
        {stage !== "idle" && (
          <motion.div
            key="envelope"
            initial={{ y: reduced ? 0 : -100, opacity: 0, rotate: -3 }}
            animate={{ y: 0, opacity: 1, rotate: -2 }}
            transition={{ duration: 0.6, ease: [0.34, 1.2, 0.64, 1] }}
            className="relative flex flex-col items-center"
          >
            {/* Envelope body */}
            <div className="relative w-72 md:w-96 bg-amber-50 shadow-2xl" style={{ perspective: "600px" }}>
              {/* Envelope flap */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0 border-l-[calc(9rem)] border-r-[calc(9rem)] border-b-[calc(5rem)] md:border-l-[calc(12rem)] md:border-r-[calc(12rem)] md:border-b-[calc(6.5rem)] border-l-transparent border-r-transparent border-b-amber-100 z-10 origin-top"
                initial={{ rotateX: 0 }}
                animate={stage === "revealed" || stage === "complete" ? { rotateX: -160 } : { rotateX: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              />

              {/* Envelope bottom triangle */}
              <div className="absolute bottom-0 left-0 right-0 h-0 border-l-[calc(9rem)] border-r-[calc(9rem)] border-t-[calc(5rem)] md:border-l-[calc(12rem)] md:border-r-[calc(12rem)] md:border-t-[calc(6.5rem)] border-l-transparent border-r-transparent border-t-amber-200 z-10" />

              {/* Envelope interior */}
              <div className="relative px-6 pt-14 pb-12 min-h-[180px] md:min-h-[220px]">
                {/* Card rising from envelope */}
                <AnimatePresence>
                  {(stage === "revealed" || stage === "complete") && (
                    <motion.div
                      key="card"
                      initial={{ y: reduced ? 0 : 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-white text-stone-800 p-5 shadow-xl relative z-20"
                    >
                      {/* Red GODKENDT stamp */}
                      <div
                        className="absolute -top-3 -right-3 rotate-12 border-2 border-chili-red px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.2em] text-chili-red uppercase"
                      >
                        GODKENDT
                      </div>

                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">
                        STABILISERINGSPAKKE 2026
                      </p>

                      {/* Amount */}
                      <AnimatePresence>
                        {stage === "complete" && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="font-heading text-5xl md:text-6xl font-extrabold text-stone-800 leading-none mb-1"
                          >
                            {amount.toLocaleString("da-DK")} kr.
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {stage === "complete" && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5, duration: 0.6 }}
                          className="mt-3 space-y-1"
                        >
                          <p className="font-mono text-[11px] text-stone-500 leading-relaxed">
                            Autoriseret nødinjektionskapital.<br />
                            Til fordeling efter eget skøn.<br />
                            Anbefales ikke brugt på skins.
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Wax seal on envelope */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30">
              <div className="w-12 h-12 rounded-full bg-chili-red border-2 border-red-800/30 shadow-lg flex items-center justify-center">
                <span className="font-heading text-white font-extrabold text-sm">C</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── CONFETTI ─── */}
      <AnimatePresence>
        {stage === "complete" && !reduced && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {confetti.map((p) => (
              <motion.div
                key={p.id}
                initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                animate={{ x: p.x, y: p.y, opacity: 0, rotate: p.r, scale: 0.3 }}
                transition={{ duration: 1.8, delay: Math.random() * 0.4, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  borderRadius: Math.random() > 0.5 ? "50%" : "0",
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
