"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/images/civilian/IMG20260309120721.jpg",  alt: "William 2026" },
  { src: "/images/civilian/IMG20250624182300.jpg",  alt: "William 2025" },
  { src: "/images/graffiti/IMG20220808185129.jpg",  alt: "Graffiti 2022" },
  { src: "/images/barndom/IMG_20200818_191957_380.jpg", alt: "Barndom" },
  { src: "/images/civilian/IMG20240426080030.jpg",  alt: "William 2024" },
];

// Each image gets a random Ken Burns animation variant
const KB_VARIANTS = [
  { from: "scale-110 translate-x-4",   to: "scale-100 translate-x-0" },
  { from: "scale-110 -translate-x-4",  to: "scale-100 translate-x-0" },
  { from: "scale-105 translate-y-4",   to: "scale-100 translate-y-0" },
  { from: "scale-100 translate-x-0",   to: "scale-110 -translate-x-4" },
  { from: "scale-105 -translate-y-2",  to: "scale-110 translate-y-2" },
];

const DURATION = 6000;  // ms per image
const FADE     = 1200;  // ms crossfade

export default function KenBurnsHero() {
  const [index, setIndex]   = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % IMAGES.length);
        setFading(false);
      }, FADE);
    }, DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {IMAGES.map((img, i) => {
        const isActive = i === index;
        const variant  = KB_VARIANTS[i % KB_VARIANTS.length];
        return (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity"
            style={{
              opacity: isActive ? (fading ? 0 : 1) : 0,
              transitionDuration: `${FADE}ms`,
              transitionTimingFunction: "ease-in-out",
            }}
          >
            <div
              className={`absolute inset-0 transition-transform ${
                isActive ? `duration-[${DURATION}ms] ease-linear ${variant.to}` : variant.from
              }`}
              style={{ transitionDuration: isActive ? `${DURATION}ms` : "0ms" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top"
                style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.75)" }}
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
