import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface Props {
  number: string;
  title: string;
  tagline: string;
  light?: boolean;
  icon?: ReactNode;
}

export default function ChapterIntro({ number, title, tagline, light = false, icon }: Props) {
  return (
    <div className="mb-16 md:mb-24">
      {/* Chapter number — large ghost text */}
      <ScrollReveal direction="none" delay={0}>
        <span
          className={`font-heading text-chapter-num font-extrabold leading-none select-none
            ${light ? "text-white/5" : "text-chili-yellow/10"}`}
        >
          {number}
        </span>
      </ScrollReveal>

      {/* Icon + Title + tagline */}
      <ScrollReveal delay={0.1}>
        <div className="-mt-6 md:-mt-10">
          {icon && (
            <div className="flex items-center gap-2 mb-3 text-chili-yellow">
              {icon}
            </div>
          )}
          <h2 className="font-heading text-display-md font-extrabold text-chili-text-primary uppercase tracking-tight leading-tight mb-3">
            {title}
          </h2>
          <p className="font-mono text-label uppercase tracking-[0.15em] text-chili-text-secondary">
            — {tagline}
          </p>
        </div>
      </ScrollReveal>

      {/* Divider line */}
      <ScrollReveal delay={0.2} direction="left">
        <div className="mt-8 h-px w-full bg-gradient-to-r from-chili-yellow via-chili-gray-mid to-transparent" />
      </ScrollReveal>
    </div>
  );
}
