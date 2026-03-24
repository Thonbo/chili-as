"use client";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import HorizontalGallery from "@/components/ui/HorizontalGallery";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StampBadge from "@/components/ui/StampBadge";

const ch = chapters[1];

export default function Ch02BliverChili() {
  const galleryItems = [
    {
      src: "/images/graffiti/IMG20220808185129.jpg",
      alt: "Graffiti væg — Chili",
      caption: "Bogstavet lever på væggen.",
      orientation: "landscape" as const,
    },
    {
      src: "/images/graffiti/IMG20220808191023.jpg",
      alt: "Graffiti session 2022",
      caption: "August 2022.",
      orientation: "landscape" as const,
    },
    {
      src: "/images/chili-identity/FB_IMG_1766958222002.jpg",
      alt: "William — identitetsportræt",
      caption: "Writer. Son. Hornslet.",
      orientation: "portrait" as const,
    },
  ];

  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-gray pt-section pb-chapter overflow-hidden"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)] mb-12">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} />

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          <ScrollReveal>
            <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
              Nogen vokser op og får et kælenavn. William voksede op og fik et{" "}
              <em>writernavn</em>.
            </p>
            <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed mt-5">
              <span className="text-chili-yellow font-semibold">Chili</span> — kortfattet, presist og umuligt at overse på en væg.
              Samme egenskaber gælder i virkeligheden.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex justify-center lg:justify-end">
            <div className="relative inline-block">
              <StampBadge
                text="CHILI"
                subText="WRITERNAVN · ANDEN GENERATION · HORNSLET"
                color="yellow"
                rotation={-6}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Horizontal gallery — full width */}
      <ScrollReveal direction="none">
        <HorizontalGallery items={galleryItems} />
      </ScrollReveal>

      <div className="max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)] mt-12">
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-caption text-chili-text-secondary max-w-narrow">
            Stærk branding siden før budgettet kollapsede. Writernavn etableret med
            solid markedsposition i det lokale Hornslet-marked.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
