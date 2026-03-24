"use client";
import Image from "next/image";
import { useState } from "react";
import { Fish, UserCircle2 } from "lucide-react";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TapedNote from "@/components/ui/TapedNote";

const ch = chapters[8];

export default function Ch09IvanAksen() {
  const [ivanMissing, setIvanMissing] = useState(false);

  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-black pt-section pb-chapter overflow-hidden"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)]">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} light icon={<Fish className="w-5 h-5" />} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Ivan portrait */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] overflow-hidden bg-chili-gray">
              {ivanMissing ? (
                /* Placeholder until photo is uploaded */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-chili-matte border border-chili-gray-mid">
                  <UserCircle2 className="w-16 h-16 text-chili-yellow/25" />
                  <div className="text-center px-6">
                    <p className="font-mono text-label uppercase tracking-widest text-chili-text-secondary mb-2">
                      Manglende foto
                    </p>
                    <p className="font-mono text-caption text-chili-text-secondary leading-relaxed">
                      Drop et billede af Ivan her:
                    </p>
                    <code className="block font-mono text-[10px] text-chili-yellow mt-1">
                      public/images/ivan/ivan.jpg
                    </code>
                  </div>
                </div>
              ) : (
                <Image
                  src="/images/ivan/ivan.jpg"
                  alt="Ivan — den gamle mand"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={() => setIvanMissing(true)}
                />
              )}
              {!ivanMissing && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-chili-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-mono text-label text-chili-yellow/80 uppercase tracking-widest">Ivan</span>
                  </div>
                </>
              )}
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="space-y-6">
            <ScrollReveal>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Ivan er Williams pap-morfar — en mand med ro, tålmodighed og hænder
                der ved hvad de skal bruges til.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Fiskeri. Jagt. Natur. Det modsatte af pixels og ping. Og alligevel
                noget William er vendt tilbage til igen og igen.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Ivan har lært ham at sidde stille. At vente. At mærke en bid på krogen.
                Det er mere end de fleste voksne kan.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <TapedNote
                text="En anden mandlig påvirkning. Stille. Stærk. Tilstede."
                rotation={-2}
                alwaysVisible
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom pull quote */}
        <ScrollReveal delay={0.2} className="mt-16 text-center">
          <p className="font-heading text-display-lg font-extrabold text-chili-yellow/20 leading-none select-none">
            RO
          </p>
          <p className="font-mono text-label uppercase tracking-[0.2em] text-chili-text-secondary -mt-4">
            — erhvervet i felten
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
