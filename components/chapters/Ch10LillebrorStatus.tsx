"use client";
import Image from "next/image";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TapedNote from "@/components/ui/TapedNote";
import StampBadge from "@/components/ui/StampBadge";

const ch = chapters[9];

export default function Ch10LillebrorStatus() {
  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-matte pt-section pb-chapter overflow-hidden"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)]">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} />

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Image */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-chili-gray">
              <Image
                src="/images/lillebror/IMG20251130131725.jpg"
                alt="Lillebror november 2025"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chili-matte/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-mono text-caption text-chili-text-primary/80">
                  — November 2025. Broderlig rapport: positiv.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column: text + stamp */}
          <div className="space-y-8">
            <ScrollReveal>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Lillebror er ankommet. William elsker ham. Det er åbenlyst.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Operationel ansvarlighed er dog fortsat et åbent spørgsmål. Analytikere
                forventer løbende forhandlinger om skiftende bleer og aftenrutiner.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <TapedNote
                text="Elsker sin lillebror. Begrænset driftslyst."
                rotation={3}
                alwaysVisible
              />
            </ScrollReveal>

            <ScrollReveal delay={0.35} className="flex justify-center">
              <StampBadge
                text="GODKENDT"
                subText="SOM STOREBROR · CHILI A/S · 2026"
                color="yellow"
                rotation={5}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
