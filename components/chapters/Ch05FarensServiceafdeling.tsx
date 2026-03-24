"use client";
import Image from "next/image";
import { Wrench, Settings } from "lucide-react";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TapedNote from "@/components/ui/TapedNote";

const ch = chapters[4];

const dadNotes = [
  "Forgasserens mål er at blande luft og benzin. Ikke at blive smidt ud.",
  "Rensede bremser. William sagde: 'Fedt'. Solgte scooteren ugen efter.",
  "Ny kæde monteret. Ny padde købt. God sommer. Ukendt skæbne.",
];

export default function Ch05FarensServiceafdeling() {
  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-gray pt-section pb-chapter overflow-hidden"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)]">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} icon={<Wrench className="w-5 h-5" />} />

        {/* Layout: image + sticky notes */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Image */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden bg-chili-matte">
              <Image
                src="/images/transport/IMG20220715135852.jpg"
                alt="Serviceafdelingen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-chili-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-mono text-caption text-chili-text-primary/70">
                  — Serviceafdelingen. Åbent 24/7. Uformelt honorar.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Sticky notes column */}
          <div className="lg:col-span-2 space-y-8 pt-4">
            {dadNotes.map((note, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative pl-4">
                  <TapedNote
                    text={note}
                    rotation={i % 2 === 0 ? -2 : 2}
                    alwaysVisible
                    tapeColor={i === 1 ? "bg-yellow-200/60" : "bg-amber-200/70"}
                  />
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.5}>
              <p className="font-mono text-caption text-chili-text-secondary leading-relaxed mt-6">
                Farens serviceafdeling har samlet, repareret og genoplivet utallige
                motoriserede enheder. Ingen har forladt garagen med en garanti. Alle
                har forladt garagen med en plan.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom quote */}
        <ScrollReveal delay={0.3} className="mt-16 border-t border-chili-gray-mid pt-10">
          <p className="font-heading text-display-md font-extrabold text-chili-yellow/80 max-w-narrow leading-tight">
            "Fikset mange gange.<br />Solgt alligevel."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
