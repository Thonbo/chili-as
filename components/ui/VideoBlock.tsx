"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  poster?: string;
  loop?: boolean;
  className?: string;
  caption?: string;
  ratio?: "16/9" | "9/16" | "4/3" | "1/1";
}

export default function VideoBlock({
  src,
  poster,
  loop = true,
  className = "",
  caption,
  ratio = "16/9",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef  = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [tapped, setTapped]   = useState(false);

  const paddingMap: Record<string, string> = {
    "16/9": "56.25%",
    "9/16": "177.78%",
    "4/3":  "75%",
    "1/1":  "100%",
  };

  // IntersectionObserver: autoplay when visible, pause when not
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setPlaying(true);
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTap = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
    setTapped(true);
  };

  return (
    <div className={className}>
      <div
        ref={wrapRef}
        className="relative w-full overflow-hidden bg-chili-matte cursor-pointer"
        style={{ paddingTop: paddingMap[ratio] }}
        onClick={handleTap}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          loop={loop}
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Play hint overlay (before first tap on mobile) */}
        {!playing && !tapped && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-chili-black/60 border border-chili-yellow/40 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-5 h-5 text-chili-yellow ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <p className="mt-3 font-mono text-caption text-chili-text-secondary px-1">
          — {caption}
        </p>
      )}
    </div>
  );
}
