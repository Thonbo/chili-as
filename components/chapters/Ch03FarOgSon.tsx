"use client";
import Image from "next/image";
import { Users, Paintbrush } from "lucide-react";
import { chapters } from "@/lib/chapters";
import ChapterIntro from "@/components/ui/ChapterIntro";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VideoBlock from "@/components/ui/VideoBlock";
import TapedNote from "@/components/ui/TapedNote";

const ch = chapters[2];

export default function Ch03FarOgSon() {
  return (
    <section
      id={ch.id}
      className="chapter-anchor relative bg-chili-matte pt-section pb-chapter overflow-hidden"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-gutter-lg lg:ml-[var(--nav-width)]">
        <ChapterIntro
          number={ch.number}
          title={ch.title}
          tagline={ch.tagline}
          icon={<Users className="w-5 h-5" />}
        />

        {/* Main layout: 9:16 video + image grid side-by-side */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-start">
          {/* 9:16 portrait video */}
          <ScrollReveal direction="left" className="flex-none">
            <VideoBlock
              src="/videos/YouCut_20220808_212235453.mp4"
              poster="/images/graffiti/IMG20220808185129.jpg"
              loop
              caption="August 2022. Far og søn maler. Kameraet fangede det for evigt."
              ratio="9/16"
            />
          </ScrollReveal>

          {/* Image grid alongside */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { src: "/images/graffiti/IMG20220808185129.jpg", alt: "Graffiti session 1" },
                { src: "/images/graffiti/IMG20220808191023.jpg", alt: "Graffiti session 2" },
                { src: "/images/graffiti/IMG20220808191037.jpg", alt: "Graffiti session 3" },
                { src: "/images/chili-identity/FB_IMG_1766958222002.jpg", alt: "Chili identity" },
              ].map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.08} direction="up">
                  <div className="relative aspect-[4/3] overflow-hidden bg-chili-gray">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 30vw"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Text + notes */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <ScrollReveal>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                Far er old-school graffitimaler. Sønnen er anden generation. De malede
                væg sammen — og det er den slags minder, der ikke kan sælges eller
                restruktureres væk.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-body-lg text-chili-text-primary/80 leading-relaxed">
                William arvede ikke bare et writernavn. Han arvede en måde at se verden
                på — som noget der kan bygges om, males over og gøres bedre.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} className="relative">
            <div className="relative inline-block mt-8 lg:mt-0">
              <TapedNote
                text="Far skruede. Sønnen visionerede. Begge havde ret."
                rotation={-3}
                alwaysVisible
              />
            </div>
            <div className="mt-8">
              <TapedNote
                text="Den gamle skole er ikke fortidens — den er fundamentet."
                rotation={2}
                alwaysVisible
                tapeColor="bg-yellow-200/60"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
