"use client";
import { useState } from "react";
import { Crosshair } from "lucide-react";

const CDN_VARIANTS = (hash: string) => [
  `https://community.akamai.steamstatic.com/economy/image/${hash}/360fx360f`,
  `https://community.cloudflare.steamstatic.com/economy/image/${hash}/360fx360f`,
  `https://steamcommunity-a.akamaihd.net/economy/image/${hash}/360fx360f`,
  `https://community.akamai.steamstatic.com/economy/image/${hash}`,
];

interface Props {
  hash: string;
  alt: string;
  className?: string;
  skinName?: string;
}

export default function SteamSkinImage({ hash, alt, className = "", skinName }: Props) {
  const urls = CDN_VARIANTS(hash);
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (idx + 1 < urls.length) {
      setIdx(idx + 1);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    // Stylised fallback — glove silhouette in brand colours
    return (
      <div className={`flex flex-col items-center justify-center gap-2 bg-chili-black/80 border border-chili-yellow/20 ${className}`}>
        <svg viewBox="0 0 80 80" className="w-16 h-16 opacity-60" fill="none">
          {/* Stylised glove outline */}
          <path
            d="M30 60 L22 40 L18 28 C17 24 19 21 23 21 C25 21 27 22 28 25
               L28 18 C28 14 31 12 34 12 C37 12 40 14 40 18
               L40 14 C40 11 42 9 45 9 C48 9 50 11 50 14
               L50 16 C50 13 52 11 55 11 C58 11 60 13 60 16
               L60 36 L62 38 C64 42 63 47 60 50
               L54 58 L46 62 Z"
            stroke="#FFD600"
            strokeWidth="2"
            fill="rgba(255,214,0,0.08)"
          />
          <circle cx="40" cy="40" r="36" stroke="rgba(255,214,0,0.15)" strokeWidth="1" />
        </svg>
        <span className="font-mono text-[9px] uppercase tracking-widest text-chili-yellow/50 text-center px-2">
          {skinName ?? "CS2 Skin"}
        </span>
        <Crosshair className="w-3 h-3 text-chili-yellow/30" />
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={urls[idx]}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
    />
  );
}
