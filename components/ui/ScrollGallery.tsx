"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  orientation?: "portrait" | "landscape" | "square";
}

interface Props {
  items: GalleryItem[];
  className?: string;
}

const aspectClass: Record<string, string> = {
  portrait:  "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square:    "aspect-square",
};

const widthVw: Record<string, number> = {
  portrait:  38,
  landscape: 52,
  square:    44,
};

export default function ScrollGallery({ items, className = "" }: Props) {
  const reduced    = useReducedMotion();
  const outer      = useRef<HTMLDivElement>(null);

  // Calculate total slide width as sum of item widths + gaps
  const totalVw = items.reduce(
    (sum, item) => sum + (widthVw[item.orientation ?? "landscape"] ?? 52),
    0
  ) + (items.length - 1) * 2; // 2vw gaps

  // Travel = how many vw the track needs to move (stop when last item reaches right edge)
  const travelVw = Math.max(0, totalVw - 88); // leave 6vw margin each side

  // Outer height = 1 viewport + a fraction of travel distance.
  // 0.4 keeps it snappy — less vertical scroll needed to sweep through all slides.
  const scrollHeight = `calc(100vh + ${Math.round(travelVw * 0.4)}vw)`;

  const { scrollYProgress } = useScroll({
    target: outer,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0vw", "0vw"] : ["2vw", `-${travelVw}vw`]
  );

  return (
    <div ref={outer} className={`relative ${className}`} style={{ height: scrollHeight }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Sliding track */}
        <motion.div
          className="flex items-end gap-[2vw] will-change-transform"
          style={{ x }}
        >
          {items.map((item, i) => {
            const orient  = item.orientation ?? "landscape";
            const wVw     = widthVw[orient];

            return (
              <div
                key={i}
                className="flex-none flex flex-col"
                style={{ width: `${wVw}vw` }}
              >
                {/* Number label */}
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-chili-text-secondary mb-2 pl-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className={`relative w-full overflow-hidden bg-chili-matte ${aspectClass[orient]}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes={`${wVw}vw`}
                  />
                </div>

                {item.caption && (
                  <p className="mt-2 font-mono text-caption text-chili-text-secondary pl-1">
                    — {item.caption}
                  </p>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Scroll cue — only visible at start */}
        <motion.div
          className="absolute right-8 bottom-10 hidden md:flex flex-col items-center gap-1"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-chili-text-secondary">
            scroll
          </span>
          <svg className="w-4 h-4 text-chili-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
