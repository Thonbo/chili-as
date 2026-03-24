"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

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

export default function HorizontalGallery({ items, className = "" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const widthClass: Record<string, string> = {
    portrait:  "w-[60vw] sm:w-[45vw] lg:w-[28vw]",
    landscape: "w-[80vw] sm:w-[65vw] lg:w-[44vw]",
    square:    "w-[70vw] sm:w-[55vw] lg:w-[36vw]",
  };

  const aspectClass: Record<string, string> = {
    portrait:  "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    square:    "aspect-square",
  };

  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.querySelectorAll("[data-gallery-item]");
    let closest = 0;
    let minDist = Infinity;
    items.forEach((el, i) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      const dist = Math.abs(rect.left - track.getBoundingClientRect().left);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateActive, { passive: true });
    return () => track.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelectorAll("[data-gallery-item]")[i] as HTMLElement;
    if (item) {
      track.scrollTo({ left: item.offsetLeft - 24, behavior: "smooth" });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scrollToIndex(Math.min(activeIndex + 1, items.length - 1));
      if (e.key === "ArrowLeft")  scrollToIndex(Math.max(activeIndex - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, items.length]);

  return (
    <div className={className}>
      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pl-6 lg:pl-[calc(var(--nav-width)+1.5rem)] pr-6 pb-2"
      >
        {items.map((item, i) => {
          const orient = item.orientation ?? "landscape";
          return (
            <div
              key={i}
              data-gallery-item
              className={`flex-none snap-start ${widthClass[orient]}`}
            >
              <div className={`relative w-full ${aspectClass[orient]} overflow-hidden bg-chili-matte`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 35vw"
                />
              </div>
              {item.caption && (
                <p className="mt-2 font-mono text-caption text-chili-text-secondary">
                  — {item.caption}
                </p>
              )}
            </div>
          );
        })}
        {/* Trailing spacer */}
        <div className="flex-none w-6" />
      </div>

      {/* Navigation dots */}
      <div className="flex gap-2 justify-center mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`rounded-full transition-all duration-300 ease-editorial ${
              i === activeIndex
                ? "w-6 h-2 bg-chili-yellow"
                : "w-2 h-2 bg-chili-gray-light hover:bg-chili-text-secondary"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
