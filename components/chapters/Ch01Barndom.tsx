"use client";
import { Baby } from "lucide-react";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import ParallaxImage from "@/components/ui/ParallaxImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TapedNote from "@/components/ui/TapedNote";

const ch = chapters[0];

export default function Ch01Barndom() {
  return (
    <section
      id={ch.id}
      className="chapter-anchor relative min-h-screen bg-chili-black pt-24 pb-chapter overflow-hidden"
    >
      {/* Full-bleed hero image */}
      <ParallaxImage
        src="/images/barndom/IMG_20200818_191957_380.jpg"
        alt="William som barn"
        className="absolute inset-0 w-full h-full opacity-40"
        priority
        strength={0.08}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-chili-black via-transparent to-chili-black" />

      {/* Content */}
      <div className="relative z-10 max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)]">
        <ChapterIntro
          number={ch.number}
          title={ch.title}
          tagline={ch.tagline}
          light
          icon={<Baby className="w-5 h-5" />}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mt-section">
          {/* Left: image panel */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <ParallaxImage
                  src="/images/barndom/IMG_20200818_191957_380.jpg"
                  alt="William som lille dreng"
                  className="w-full h-full"
                  priority
                />
              </div>
              {/* Taped note overlay */}
              <div className="absolute -bottom-6 -right-4 z-10">
                <TapedNote
                  text="Sommer 2020. Han vidste allerede hvad han ville."
                  rotation={3}
                  alwaysVisible
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: text */}
          <div className="space-y-8">
            <ScrollReveal delay={0.15}>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Inden scooterne. Inden skinne-inventaret. Inden Netto-lønssedlerne og
                de dyre mus.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Dengang var han bare en dreng med store øjne og endnu større planer.
                Hornslet. Danmark. Verden.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Ikke en eneste analytiker kunne have forudset, hvad han ville udvikle sig til.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="border-l-2 border-chili-yellow pl-5 mt-8">
                <p className="font-heading text-display-md font-extrabold text-chili-text-primary italic leading-tight">
                  "Anden generation."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
