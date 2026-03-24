"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Props {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  strength?: number; // 0–1, default 0.12
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  priority = false,
  strength = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yPct = strength * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`-${yPct}%`, `${yPct}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={reduced ? {} : { y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
}
