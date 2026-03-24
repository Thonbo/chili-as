"use client";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import ParallaxImage from "@/components/ui/ParallaxImage";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ch = chapters[10];

export default function Ch11_24Marts() {
  return (
    <section
      id={ch.id}
      className="chapter-anchor relative min-h-[80vh] bg-chili-black pt-section pb-chapter overflow-hidden flex flex-col justify-center"
    >
      {/* Full-bleed background */}
      <ParallaxImage
        src="/images/civilian/IMG20260309120721.jpg"
        alt="March 2026"
        className="absolute inset-0 w-full h-full opacity-30"
        strength={0.1}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-chili-black via-transparent to-chili-black" />

      <div className="relative z-10 max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)]">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} light />

        <div className="max-w-narrow space-y-8">
          <ScrollReveal>
            <p className="font-body text-body-lg text-chili-text-primary/90 leading-relaxed">
              24. marts. Williamdag. Og morfars dag. To generationer deler en dato.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
              Det er ikke en tilfældighed — det er et mønster. Familiens evne til at
              fylde rum, efterlade indtryk og skabe minder på præcis den dag, hvert år.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
              I dag er William 17. Næste år 18. Derefter kører livet for alvor.
            </p>
          </ScrollReveal>

          {/* Big date display */}
          <ScrollReveal delay={0.35} direction="none">
            <div className="mt-12 border-t border-chili-gray-mid pt-8">
              <p className="font-heading text-chapter-num font-extrabold text-chili-yellow/15 leading-none select-none">
                17
              </p>
              <p className="font-mono text-label uppercase tracking-[0.3em] text-chili-text-secondary -mt-4">
                ÅR · 24. MARTS 2026 · HORNSLET
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
