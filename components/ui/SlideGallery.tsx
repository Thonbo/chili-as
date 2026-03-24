"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

// How many pixels wide each card is (in the track)
const cardWidthMap: Record<string, number> = {
  portrait:  280,
  landscape: 420,
  square:    340,
};

const GAP = 16; // px between cards

export default function SlideGallery({ items, className = "" }: Props) {
  const [offset, setOffset]     = useState(0);  // px translate
  const [isAnimating, setAnim]  = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Total track width
  const trackWidth = items.reduce((sum, item) => {
    const w = cardWidthMap[item.orientation ?? "landscape"];
    return sum + w + GAP;
  }, -GAP);

  // Viewport width (approximate — updated via CSS)
  const slideBy = useCallback((dir: "left" | "right") => {
    if (isAnimating) return;
    const viewport = trackRef.current?.parentElement?.clientWidth ?? 800;
    const step = Math.max(viewport * 0.6, 320);
    const maxOffset = Math.max(0, trackWidth - viewport + GAP * 2);

    setAnim(true);
    setOffset((prev) => {
      const next = dir === "right"
        ? Math.min(prev + step, maxOffset)
        : Math.max(prev - step, 0);
      return next;
    });
    setTimeout(() => setAnim(false), 500);
  }, [isAnimating, trackWidth]);

  const atStart = offset <= 0;
  const atEnd   = (() => {
    const viewport = trackRef.current?.parentElement?.clientWidth ?? 800;
    return offset >= Math.max(0, trackWidth - viewport + GAP * 2);
  })();

  return (
    <div className={`relative ${className}`}>
      {/* Track wrapper — clips overflow */}
      <div className="overflow-hidden px-0">
        <div
          ref={trackRef}
          className="flex items-end gap-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {items.map((item, i) => {
            const orient = item.orientation ?? "landscape";
            const w = cardWidthMap[orient];

            return (
              <div
                key={i}
                className="flex-none flex flex-col"
                style={{ width: `${w}px` }}
              >
                {/* Index */}
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-chili-text-secondary mb-2 pl-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Image */}
                <div className={`relative w-full overflow-hidden bg-chili-matte ${aspectClass[orient]}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes={`${w}px`}
                  />
                </div>
                {/* Caption */}
                {item.caption && (
                  <p className="mt-2 font-mono text-caption text-chili-text-secondary pl-1">
                    — {item.caption}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-5 px-1">
        <button
          onClick={() => slideBy("left")}
          disabled={atStart}
          aria-label="Forrige"
          className={`flex items-center justify-center w-10 h-10 border transition-all duration-200
            ${atStart
              ? "border-chili-gray-mid text-chili-gray-mid cursor-not-allowed opacity-40"
              : "border-chili-yellow text-chili-yellow hover:bg-chili-yellow hover:text-chili-black cursor-pointer"
            }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => slideBy("right")}
          disabled={atEnd}
          aria-label="Næste"
          className={`flex items-center justify-center w-10 h-10 border transition-all duration-200
            ${atEnd
              ? "border-chili-gray-mid text-chili-gray-mid cursor-not-allowed opacity-40"
              : "border-chili-yellow text-chili-yellow hover:bg-chili-yellow hover:text-chili-black cursor-pointer"
            }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Item counter */}
        <span className="font-mono text-caption text-chili-text-secondary ml-2">
          {items.length} billeder
        </span>
      </div>
    </div>
  );
}
