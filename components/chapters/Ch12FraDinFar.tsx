"use client";
import { Mail, HeartHandshake } from "lucide-react";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoBlock from "@/components/ui/VideoBlock";
import GiftReveal from "@/components/ui/GiftReveal";

const ch = chapters[11];

const letter = [
  "Denne side er selvfølgelig en joke.",
  "Men det er også sandt, at jeg er stolt af dig.",
  "Du arbejder. Du lever dit liv. Du forfølger de ting du holder af, og du finder din egen vej.",
  "Også selvom din økonomi ser ud som en CT-runde der gik galt.",
  "Derfor er dette både et roast og et kærlighedsbrev.",
  "Tillykke med de 17, Chili.",
];

export default function Ch12FraDinFar() {
  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-gray pt-section pb-chapter overflow-hidden"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)]">
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} icon={<HeartHandshake className="w-5 h-5" />} />

        {/* ElevenLabs video — tribute moment */}
        <ScrollReveal direction="none" className="mb-12">
          <VideoBlock
            src="/videos/elevenlabs.mp4"
            poster="/images/civilian/IMG20260309120721.jpg"
            loop={false}
            caption="En hilsen. Fra din far."
            ratio="16/9"
            className="max-w-2xl mx-auto"
          />
        </ScrollReveal>

        {/* Father's letter */}
        <div className="max-w-narrow mx-auto mb-16 space-y-5">
          {letter.map((line, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <p
                className={`font-body leading-relaxed ${
                  i === 0 || i === letter.length - 1
                    ? "text-body-lg text-chili-text-primary font-medium"
                    : "text-body-lg text-chili-text-primary/75"
                }`}
              >
                {line}
              </p>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.8}>
            <p className="font-heading text-display-md font-extrabold text-chili-yellow pt-4">
              Fra din far
            </p>
          </ScrollReveal>
        </div>

        {/* Gift reveal */}
        <ScrollReveal delay={0.2} direction="none">
          <div className="border-t border-chili-gray-mid pt-16">
            <div className="text-center mb-8">
              <p className="font-mono text-label uppercase tracking-[0.2em] text-chili-text-secondary">
                § Officiel meddelelse · CHILI A/S · Bestyrelsen
              </p>
              <p className="font-body text-body-lg text-chili-text-primary/80 mt-3 max-w-md mx-auto">
                Og fordi enhver ustabil ung mand fortjener lidt finansiel støtte:
              </p>
            </div>
            <GiftReveal />
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={0.1} className="mt-20 pt-10 border-t border-chili-gray-mid text-center">
          <p className="font-heading text-sm font-bold tracking-[0.2em] text-chili-yellow uppercase mb-2">
            CHILI A/S
          </p>
          <p className="font-mono text-caption text-chili-text-secondary">
            Årsrapport 2026 · Hornslet, Danmark · Anden generation. Høj profil. Lav likviditet.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
