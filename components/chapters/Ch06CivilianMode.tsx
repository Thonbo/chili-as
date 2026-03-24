"use client";
import Image from "next/image";
import { User, Eye } from "lucide-react";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import ScrollReveal from "@/components/ui/ScrollReveal";
import KPICard from "@/components/ui/KPICard";
import { kpiData } from "@/lib/kpi-data";

const ch = chapters[5];

const portraits = [
  { src: "/images/civilian/IMG20240426080030.jpg", alt: "Civilian mode 2024", year: "2024" },
  { src: "/images/civilian/IMG20240725101518.jpg", alt: "Civilian portrait 2024", year: "2024" },
  { src: "/images/civilian/IMG20250624182300.jpg", alt: "Civilian portrait 2025", year: "2025" },
  { src: "/images/civilian/IMG20260309120721.jpg", alt: "March 2026", year: "2026" },
];

// Only the KPIs relevant here
const civilianKPI = [kpiData[4], kpiData[5]]; // kontostabilitet + outfit

export default function Ch06CivilianMode() {
  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-black pt-section pb-chapter overflow-hidden"
    >
      {/* Full-bleed background faint portrait */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/civilian/IMG20250624182300.jpg"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-chili-black via-chili-black/60 to-chili-black" />

      <div className="relative z-10 max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)]">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} light icon={<User className="w-5 h-5" />} />

        {/* Portrait grid — 2x2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {portraits.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative aspect-[3/4] overflow-hidden bg-chili-matte group">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Year label */}
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-label text-chili-yellow bg-chili-black/60 px-2 py-0.5 rounded">
                    {p.year}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Text + KPI */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <ScrollReveal>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                I dagligdagen ser William ud som om han har styr på det hele. Spejlet
                viser en ung mand med stil, holdning og selvtillid.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Tallene fortæller en mere nuanceret historie. Men det er en separat
                analyse.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="font-mono text-caption text-chili-text-secondary">
                Kilde: Spejl-selfier, sociale medier, far&apos;s subjektive vurdering.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} className="grid grid-cols-1 gap-3">
            {civilianKPI.map((item, i) => (
              <KPICard key={i} item={item} />
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
