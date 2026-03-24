"use client";
import { useChapterStore } from "@/store/chapterStore";
import { chapters } from "@/lib/chapters";

export default function MobileProgressDots() {
  const activeChapter = useChapterStore((s) => s.activeChapter);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] lg:hidden flex items-center gap-2 bg-chili-matte/80 backdrop-blur-sm px-4 py-2 rounded-full border border-chili-gray-mid">
      {chapters.map((ch) => {
        const isActive = activeChapter === ch.id;
        return (
          <button
            key={ch.id}
            onClick={() => scrollTo(ch.id)}
            title={ch.title}
            className="relative"
          >
            <span
              className={`block rounded-full transition-all duration-300 ease-editorial ${
                isActive
                  ? "w-4 h-2 bg-chili-yellow"
                  : "w-1.5 h-1.5 bg-chili-gray-light hover:bg-chili-text-secondary"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
