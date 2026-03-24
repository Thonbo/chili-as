"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const SRC = "/audio/Chili_AS_2026-03-24T173422.mp3";

export default function FloatingPlayer() {
  const audioRef   = useRef<HTMLAudioElement>(null);
  const [playing,  setPlaying]  = useState(false);
  const [muted,    setMuted]    = useState(false);
  const [progress, setProgress] = useState(0); // 0–1
  const [ready,    setReady]    = useState(false);

  // Autoplay on mount (browsers require a user gesture — we try silently,
  // the button is always visible so the user can tap to start)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {
        // Blocked by browser autoplay policy — user can press the button
      });
    };

    audio.addEventListener("canplaythrough", () => {
      setReady(true);
      tryPlay();
    }, { once: true });

    const onTime = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };
    const onEnded = () => { setPlaying(false); setProgress(0); };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(!muted);
  };

  // Arc progress for the ring
  const r = 18;
  const circ = 2 * Math.PI * r;
  const dash = circ * progress;

  return (
    <>
      <audio ref={audioRef} src={SRC} preload="auto" loop={false} />

      <div className="fixed bottom-5 right-5 z-[200] flex items-center gap-2">

        {/* Mute toggle — tiny, appears when playing */}
        <button
          onClick={toggleMute}
          title={muted ? "Slå lyd til" : "Slå lyd fra"}
          className={`flex items-center justify-center w-7 h-7 rounded-full bg-chili-matte border border-chili-gray-mid
            text-chili-text-secondary hover:text-chili-yellow hover:border-chili-yellow/40
            transition-all duration-300 cursor-pointer
            ${playing ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {muted
            ? <VolumeX className="w-3 h-3" />
            : <Volume2 className="w-3 h-3" />
          }
        </button>

        {/* Main play/pause button with progress ring */}
        <button
          onClick={toggle}
          title={playing ? "Pause" : "Afspil — CHILI A/S 2026"}
          className="relative flex items-center justify-center w-11 h-11 cursor-pointer group"
        >
          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 44 44"
          >
            {/* Track */}
            <circle
              cx="22" cy="22" r={r}
              fill="none"
              stroke="rgba(255,214,0,0.12)"
              strokeWidth="2"
            />
            {/* Progress */}
            <circle
              cx="22" cy="22" r={r}
              fill="none"
              stroke="#FFD600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circ}`}
              className="transition-all duration-300"
            />
          </svg>

          {/* Button face */}
          <span className={`
            relative z-10 flex items-center justify-center w-9 h-9 rounded-full
            border transition-all duration-200
            ${playing
              ? "bg-chili-yellow border-chili-yellow text-chili-black group-hover:bg-chili-yellow-dim"
              : "bg-chili-matte border-chili-gray-mid text-chili-yellow group-hover:border-chili-yellow/60"}
          `}>
            {playing
              ? <Pause  className="w-3.5 h-3.5" />
              : <Play   className="w-3.5 h-3.5 ml-0.5" />
            }
          </span>
        </button>

        {/* Label — fades in when playing */}
        <div className={`
          absolute right-14 bottom-1 whitespace-nowrap pointer-events-none
          transition-all duration-300
          ${playing ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
        `}>
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-chili-text-secondary bg-chili-black/80 px-2 py-1 rounded">
            CHILI A/S · 2026
          </span>
        </div>
      </div>
    </>
  );
}
