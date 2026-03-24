"use client";
import { useEffect } from "react";
import { useChapterStore } from "@/store/chapterStore";
import { chapters } from "@/lib/chapters";

export function useActiveChapter() {
  const setActiveChapter = useChapterStore((s) => s.setActiveChapter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with greatest intersection ratio that is intersecting
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!best || entry.intersectionRatio > best.intersectionRatio)
          ) {
            best = entry;
          }
        }
        if (best) {
          setActiveChapter((best.target as HTMLElement).id);
        }
      },
      { threshold: [0.15, 0.3, 0.5] }
    );

    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveChapter]);
}
