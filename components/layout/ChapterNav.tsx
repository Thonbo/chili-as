"use client";
import { useChapterStore } from "@/store/chapterStore";
import { chapters } from "@/lib/chapters";
import { useActiveChapter } from "@/hooks/useActiveChapter";

export default function ChapterNav() {
  useActiveChapter();
  const activeChapter = useChapterStore((s) => s.activeChapter);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed left-0 top-0 bottom-0 z-[80] hidden lg:flex flex-col justify-center pl-5 gap-1 w-[72px]">
      {chapters.map((ch) => {
        const isActive = activeChapter === ch.id;
        return (
          <button
            key={ch.id}
            onClick={() => scrollTo(ch.id)}
            title={ch.title}
            className="group flex items-center gap-3 py-1 text-left"
          >
            {/* Indicator line */}
            <span
              className={`block h-px transition-all duration-300 ease-editorial ${
                isActive
                  ? "w-8 bg-chili-yellow"
                  : "w-3 bg-chili-gray-light group-hover:w-5 group-hover:bg-chili-text-secondary"
              }`}
            />
            {/* Chapter number */}
            <span
              className={`font-mono text-[10px] tabular-nums transition-all duration-300 ${
                isActive
                  ? "text-chili-yellow"
                  : "text-chili-gray-light group-hover:text-chili-text-secondary"
              }`}
            >
              {ch.number}
            </span>
            {/* Chapter title on hover — tooltip style */}
            <span
              className={`
                absolute left-[72px] font-mono text-[10px] uppercase tracking-widest
                bg-chili-matte px-2 py-1 rounded whitespace-nowrap pointer-events-none
                transition-all duration-200
                ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}
              `}
            >
              {ch.title}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
