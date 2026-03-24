"use client";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import SlideGallery from "@/components/ui/SlideGallery";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MouseFollowBadge from "@/components/ui/MouseFollowBadge";
import { Palette, Tag } from "lucide-react";

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
    {
      src: "/images/graffiti/IMG20220808191037.jpg",
      alt: "Graffiti close-up",
      caption: "Detaljen tæller.",
      orientation: "landscape" as const,
    },
  ];

  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-gray"
    >
      {/* Header block — normal scroll */}
      <div className="pt-section px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)] max-w-editorial mx-auto pb-10">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} icon={<Palette className="w-5 h-5" />} />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal>
            <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
              Nogen vokser op og får et kælenavn. William voksede op og fik et{" "}
              <em>writernavn</em>.
            </p>
            <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed mt-5">
              <span className="text-chili-yellow font-semibold">Chili</span> — kortfattet,
              presist og umuligt at overse på en væg. Samme egenskaber gælder i virkeligheden.
            </p>
          </ScrollReveal>

          {/* Mouse-following stamp badge */}
          <ScrollReveal delay={0.2} className="flex justify-center lg:justify-end">
            <MouseFollowBadge
              text="CHILI"
              subText="WRITERNAVN · ANDEN GENERATION · HORNSLET"
              color="yellow"
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll-driven horizontal gallery */}
      <SlideGallery items={galleryItems} className="px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)] mb-6" />

      <div className="px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)] max-w-editorial mx-auto pb-chapter">
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
