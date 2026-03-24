"use client";
import Image from "next/image";
import { Gamepad2, DollarSign, Crosshair } from "lucide-react";
import SteamSkinImage from "@/components/ui/SteamSkinImage";
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
        <ChapterIntro number={ch.number} title={ch.title} tagline={ch.tagline} icon={<Gamepad2 className="w-5 h-5" />} />

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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
            {cs2KPI.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <KPICard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* CS2 Skin portefølje */}
        <ScrollReveal delay={0.15}>
          <div className="border border-chili-yellow/20 bg-chili-yellow-faint p-5">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-4 h-4 text-chili-yellow" />
              <span className="font-mono text-label uppercase tracking-widest text-chili-yellow">
                Skin-portefølje · Flagship asset
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Skin image — tries multiple Steam CDN variants, falls back to glove SVG */}
              <SteamSkinImage
                hash="-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eO0mJWOqOf9PbDummJW4NE_2u3Aooj2i1KwrkNoYW_7dYKXeg9vNVyC_AK-wb_thse9vpmYz3Bn7z5iuy"
                alt="CS2 Gloves — flagship skin"
                skinName="CS2 Gloves · 5.000 kr."
                className="flex-none w-44 h-44 object-contain p-2 bg-chili-black/60 border border-chili-gray-mid"
              />

              {/* Skin details */}
              <div className="flex-1 space-y-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-chili-text-secondary">Estimeret markedsværdi</p>
                  <p className="font-heading text-3xl font-extrabold text-chili-yellow leading-none">5.000 kr.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Crosshair className="w-3.5 h-3.5 text-chili-text-secondary" />
                  <p className="font-mono text-caption text-chili-text-secondary">
                    CS2 · Skin-inventar · Primær statussymbol
                  </p>
                </div>
                <p className="font-mono text-caption text-chili-text-secondary leading-relaxed">
                  Hvert eneste skin købt med penge der alternativt kunne have
                  finansieret transport, mad eller basale fornødenheder.
                  Prioriteten er klar.
                </p>
                <div className="flex items-center gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[10px] text-chili-text-secondary uppercase tracking-widest">
                    Status: aktiv · Ikke til salg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
