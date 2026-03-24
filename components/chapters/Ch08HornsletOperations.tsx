"use client";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import HorizontalGallery from "@/components/ui/HorizontalGallery";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoBlock from "@/components/ui/VideoBlock";

const ch = chapters[7];

export default function Ch08HornsletOperations() {
  const galleryItems = [
    {
      src: "/images/hornslet/IMG20250730122926.jpg",
      alt: "Hornslet liv 2025",
      caption: "Lokal scene.",
      orientation: "portrait" as const,
    },
    {
      src: "/images/hornslet/IMG20251025195146.jpg",
      alt: "Oktober 2025",
      caption: "Efterår i Hornslet.",
      orientation: "landscape" as const,
    },
    {
      src: "/images/hornslet/IMG20251121114818_01.jpg",
      alt: "November 2025 — stort format",
      caption: "Bevægelse. Venner.",
      orientation: "landscape" as const,
    },
  ];

  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-gray pt-section pb-chapter overflow-hidden"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)] mb-12">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} />

        <ScrollReveal className="mb-10 max-w-narrow">
          <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
            Hornslet. En by. En scene. Venner der kender hinanden for godt og stadig
            hænger ud. Bevægelse på løbehjul, i biler og på fortov.
          </p>
          <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed mt-5">
            Det er hvad 17 ser ud som, i virkelighed. Ikke et filter. Et liv.
          </p>
        </ScrollReveal>
      </div>

      {/* Horizontal gallery */}
      <HorizontalGallery items={galleryItems} className="mb-12" />

      {/* Video moment */}
      <div className="max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)]">
        <ScrollReveal delay={0.1} className="max-w-2xl">
          <VideoBlock
            src="/videos/elevenlabs.mp4"
            poster="/images/hornslet/IMG20251025195146.jpg"
            loop={false}
            caption="Hornslet. Det er et sted. Det er hans sted."
            ratio="16/9"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10">
          <blockquote className="border-l-2 border-chili-yellow pl-6 max-w-narrow">
            <p className="font-heading text-display-md font-extrabold text-chili-text-primary/70 leading-tight italic">
              "Bag kaosset bygger han sit eget liv."
            </p>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
