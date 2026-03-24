"use client";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import HorizontalGallery from "@/components/ui/HorizontalGallery";
import KPICard from "@/components/ui/KPICard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoBlock from "@/components/ui/VideoBlock";
import { transportKPI } from "@/lib/kpi-data";

const ch = chapters[3];

export default function Ch04Transportportefolje() {
  const galleryItems = [
    {
      src: "/images/transport/IMG20220715135852.jpg",
      alt: "Sommer 2022 — scooter-æraen",
      caption: "Sommeren 2022. Peak scooter-optimisme.",
      orientation: "landscape" as const,
    },
    {
      src: "/images/transport/IMG20240720195453_01.jpg",
      alt: "2024 transport-portræt",
      caption: "KuKirin G4 entrer scenen.",
      orientation: "landscape" as const,
    },
    {
      src: "/images/transport/VID20240720163354.jpg",
      alt: "Video stillframe — transport",
      caption: "Motoriseret frihed.",
      orientation: "landscape" as const,
    },
  ];

  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-black pt-section pb-chapter overflow-hidden"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)]">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} />

        {/* KPI grid */}
        <ScrollReveal direction="none" className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {transportKPI.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <KPICard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Intro text */}
        <ScrollReveal className="mb-10 max-w-narrow">
          <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
            Williams transportportefølje er en mesterklasse i{" "}
            <em>strategisk flådeoptimering</em>. Scooter erhverves. Scooter tuning
            påbegyndes. Scooter sælges. Cyklussen gentages. Kun KuKirin G4 har
            overlevet restruktureringen.
          </p>
        </ScrollReveal>

        {/* Horizontal gallery */}
        <HorizontalGallery items={galleryItems} className="mb-10" />

        {/* Small video moment — riding clip */}
        <ScrollReveal delay={0.1} className="mt-8 max-w-xl">
          <VideoBlock
            src="/videos/YouCut_20220808_212235453.mp4"
            poster="/images/transport/IMG20220715135852.jpg"
            loop
            caption="Arkivoptagelse. Transportafdeling i fuldt operationelt stade."
            ratio="16/9"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10">
          <p className="font-mono text-caption text-chili-text-secondary max-w-narrow">
            Analytikere bemærker at dirt bike-projektet har opnået en historisk
            lav færdiggørelsesprocent. Tidslinje forbliver åben. Optimisme bibeholdes.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
