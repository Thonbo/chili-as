"use client";
import Image from "next/image";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import ScrollGallery from "@/components/ui/ScrollGallery";
import KPICard from "@/components/ui/KPICard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoBlock from "@/components/ui/VideoBlock";
import CarBudgetDiagram from "@/components/ui/CarBudgetDiagram";
import { transportKPI } from "@/lib/kpi-data";
import { Zap, MapPin } from "lucide-react";

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
      src: "/images/kukirin/g4-1.jpg",
      alt: "KuKirin G4 — produkt",
      caption: "KuKirin G4. Den nuværende flagship.",
      orientation: "landscape" as const,
    },
    {
      src: "/images/kukirin/g4-2.jpg",
      alt: "KuKirin G4 — detalje",
      caption: "2000W. 70 km/t. Strategisk anskaffelse.",
      orientation: "landscape" as const,
    },
    {
      src: "/images/transport/IMG20240720195453_01.jpg",
      alt: "Transport 2024",
      caption: "Motoriseret frihed. Hornslet–overalt.",
      orientation: "landscape" as const,
    },
    {
      src: "/images/kukirin/g4-3.jpg",
      alt: "KuKirin G4 — spec",
      caption: "Specifikationer: imponerende. Budget: tilsvarende.",
      orientation: "landscape" as const,
    },
  ];

  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-black overflow-hidden"
    >
      {/* Header */}
      <div className="pt-section px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)] max-w-editorial mx-auto pb-10">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} />

        {/* KPI grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {transportKPI.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <KPICard item={item} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mb-4 max-w-narrow">
          <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
            Williams transportportefølje er en mesterklasse i{" "}
            <em>strategisk flådeoptimering</em>. 5 scootere. 0 bibeholdt. Kun KuKirin G4
            har overlevet restruktureringen.
          </p>
        </ScrollReveal>

        {/* KuKirin G4 spotlight */}
        <ScrollReveal delay={0.15} className="mb-6">
          <div className="border border-chili-yellow/20 bg-chili-yellow-faint p-5">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-chili-yellow" />
              <span className="font-mono text-label uppercase tracking-widest text-chili-yellow">
                Aktuel flagship — KuKirin G4
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Motor", value: "2000W" },
                { label: "Tophastighed", value: "70 km/t" },
                { label: "Rækkevidde", value: "75 km" },
                { label: "Dæk", value: "11\" vacuum" },
              ].map((spec) => (
                <div key={spec.label}>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-chili-text-secondary">{spec.label}</p>
                  <p className="font-heading text-xl font-extrabold text-chili-text-primary">{spec.value}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 mt-3 pt-3 border-t border-chili-yellow/10">
              <MapPin className="w-3 h-3 text-chili-text-secondary" />
              <p className="font-mono text-caption text-chili-text-secondary">
                Primær transportmiddel. Hornslet og omegn.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll-driven gallery — full width */}
      <ScrollGallery items={galleryItems} heightPerItem={0.7} />

      {/* Video + budget */}
      <div className="px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)] max-w-editorial mx-auto pt-12 pb-chapter space-y-12">

        {/* G4 portrait video */}
        <ScrollReveal className="flex gap-6 flex-wrap">
          <div className="flex-none">
            <p className="font-mono text-label uppercase tracking-widest text-chili-text-secondary mb-3">
              Arkiv-optagelse
            </p>
            <VideoBlock
              src="/videos/YouCut_20220808_212235453.mp4"
              poster="/images/transport/IMG20220715135852.jpg"
              loop
              caption="Transportafdeling i fuldt operationelt stade."
              ratio="9/16"
            />
          </div>
          <div className="flex-1 min-w-[200px] flex flex-col justify-end pb-4">
            <ScrollReveal delay={0.2}>
              <p className="font-mono text-caption text-chili-text-secondary leading-relaxed">
                Analytikere bemærker at dirt bike-projektet har opnået en historisk lav
                færdiggørelsesprocent. Tidslinje forbliver åben.
                Optimisme bibeholdes uændret.
              </p>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* KuKirin G4 product image full width */}
        <ScrollReveal direction="none">
          <div className="relative w-full aspect-[16/7] overflow-hidden bg-chili-matte">
            <Image
              src="/images/kukirin/g4-2.jpg"
              alt="KuKirin G4 — stort format"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-chili-black/80 via-transparent to-chili-black/40" />
            <div className="absolute bottom-6 left-6">
              <span className="font-mono text-label uppercase tracking-widest text-chili-yellow">
                KuKirin G4 · Aktiv enhed
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Car budget diagram */}
        <ScrollReveal delay={0.1}>
          <CarBudgetDiagram />
        </ScrollReveal>
      </div>
    </section>
  );
}
