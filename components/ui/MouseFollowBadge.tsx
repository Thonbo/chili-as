"use client";
import { useEffect, useRef, useCallback } from "react";
import StampBadge from "./StampBadge";

interface Props {
  text: string;
  subText?: string;
  color?: "yellow" | "red" | "white";
}

export default function MouseFollowBadge({ text, subText, color = "yellow" }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const posRef  = useRef({ x: 0, y: 0 });   // current (lerped) position
  const targetRef = useRef({ x: 0, y: 0 }); // mouse target
  const rafRef  = useRef<number | null>(null);
  const mountedRef = useRef(false);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    const el = wrapRef.current;
    if (!el) return;

    posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.07);
    posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.07);

    el.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) rotate(-4deg)`;
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    mountedRef.current = true;

    const onMove = (e: MouseEvent) => {
      // Offset relative to viewport centre so badge orbits the cursor
      targetRef.current.x = (e.clientX - window.innerWidth / 2) * 0.06;
      targetRef.current.y = (e.clientY - window.innerHeight / 2) * 0.06;
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      mountedRef.current = false;
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div className="relative inline-block" style={{ willChange: "transform" }}>
      <div ref={wrapRef} style={{ display: "inline-block" }}>
        <StampBadge text={text} subText={subText} color={color} rotation={0} />
      </div>
    </div>
  );
}
