"use client";
import Image from "next/image";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import ScrollReveal from "@/components/ui/ScrollReveal";
import KPICard from "@/components/ui/KPICard";
import TapedNote from "@/components/ui/TapedNote";
import { cs2KPI } from "@/lib/kpi-data";

const ch = chapters[6];

export default function Ch07CS2Division() {
  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-matte pt-section pb-chapter overflow-hidden"
    >
      {/* Dark-treated background */}
      <div className="absolute inset-0">
        <Image
          src="/images/chili-identity/Snapchat-129044246.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-chili-matte via-chili-matte/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)]">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Portrait */}
          <ScrollReveal direction="left">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden bg-chili-gray">
                <Image
                  src="/images/chili-identity/Snapchat-129044246.jpg"
                  alt="CS2 portræt"
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden bg-chili-gray mt-8">
                <Image
                  src="/images/chili-identity/Snapchat-2046032997.jpg"
                  alt="CS2 portræt 2"
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="space-y-6">
            <ScrollReveal>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Counter-Strike 2. Masser af timer. Dyre skins. Et RTX 5070 dedikeret
                til formålet.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Storebror spiller på et markant højere niveau. Det motiverer. Det
                irriterer. Begge dele er produktive.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <TapedNote
                text="Logitech Pro mouse. RTX 5070. Fordi frames vinder argumenter."
                rotation={-2}
                alwaysVisible
              />
            </ScrollReveal>
          </div>
        </div>

        {/* KPI cards */}
        <ScrollReveal direction="none">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {cs2KPI.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <KPICard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
