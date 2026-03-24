"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  hue: number; // 0=yellow, small variance
}

interface GradientField {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  strength: number;
  phase: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    let animId: number;
    let mouseX = -9999, mouseY = -9999;
    let t = 0;

    const PARTICLE_COUNT = 90;
    const particles: Particle[] = [];
    const fields: GradientField[] = [];

    function resize() {
      W = canvas!.width  = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const baseOp = 0.15 + Math.random() * 0.45;
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: 1 + Math.random() * 2.5,
          opacity: baseOp,
          baseOpacity: baseOp,
          hue: 48 + (Math.random() - 0.5) * 12, // yellow ± 6deg
        });
      }
    }

    function initFields() {
      fields.length = 0;
      for (let i = 0; i < 5; i++) {
        fields.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: 180 + Math.random() * 220,
          strength: 0.012 + Math.random() * 0.018,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    resize();
    initParticles();
    initFields();

    const ro = new ResizeObserver(() => { resize(); initParticles(); initFields(); });
    ro.observe(canvas);

    const onMouse = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMouse);

    function drawField(field: GradientField) {
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.4 + field.phase);
      const alpha = 0.025 + 0.018 * pulse;
      const grd = ctx!.createRadialGradient(
        field.x, field.y, 0,
        field.x, field.y, field.radius
      );
      grd.addColorStop(0, `rgba(255,214,0,${alpha})`);
      grd.addColorStop(0.4, `rgba(180,120,0,${alpha * 0.5})`);
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.fillStyle = grd;
      ctx!.beginPath();
      ctx!.arc(field.x, field.y, field.radius, 0, Math.PI * 2);
      ctx!.fill();
    }

    function tick() {
      t += 0.016;
      ctx!.clearRect(0, 0, W, H);

      // ── Draw gradient fields ──
      for (const f of fields) {
        f.phase += 0.008;
        f.x += f.vx + 0.3 * Math.sin(t * 0.2 + f.phase);
        f.y += f.vy + 0.3 * Math.cos(t * 0.25 + f.phase);
        if (f.x < -f.radius)   f.x = W + f.radius;
        if (f.x > W + f.radius) f.x = -f.radius;
        if (f.y < -f.radius)   f.y = H + f.radius;
        if (f.y > H + f.radius) f.y = -f.radius;
        drawField(f);
      }

      // ── Draw particles ──
      for (const p of particles) {
        // Attract toward nearest field
        let fx = 0, fy = 0;
        for (const f of fields) {
          const dx = f.x - p.x;
          const dy = f.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < f.radius && dist > 0) {
            const force = f.strength * (1 - dist / f.radius);
            fx += (dx / dist) * force;
            fy += (dy / dist) * force;
          }
        }

        // Mouse repulsion
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 120 && mdist > 0) {
          const rep = (0.8 * (120 - mdist)) / 120;
          fx += (mdx / mdist) * rep;
          fy += (mdy / mdist) * rep;
          p.opacity = Math.min(1, p.baseOpacity + 0.35 * (1 - mdist / 120));
        } else {
          p.opacity += (p.baseOpacity - p.opacity) * 0.05;
        }

        p.vx = p.vx * 0.96 + fx;
        p.vy = p.vy * 0.96 + fy;
        // Slight drift
        p.vx += (Math.random() - 0.5) * 0.04;
        p.vy += (Math.random() - 0.5) * 0.04;
        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.5) { p.vx *= 1.5 / speed; p.vy *= 1.5 / speed; }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        // Draw particle as soft circle
        const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        grd.addColorStop(0, `hsla(${p.hue},100%,60%,${p.opacity})`);
        grd.addColorStop(1, `hsla(${p.hue},100%,60%,0)`);
        ctx!.fillStyle = grd;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Connection lines — fade in/out based on distance + time pulse
      const CONNECT_DIST = 100;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DIST) {
            // Distance fade + individual pulse per pair
            const distFade = 1 - d / CONNECT_DIST;
            const pulse = 0.5 + 0.5 * Math.sin(t * 1.2 + (i + j) * 0.4);
            const alpha = distFade * pulse * 0.12 * Math.min(particles[i].opacity, particles[j].opacity);
            if (alpha < 0.005) continue;

            // Gradient line: yellow → transparent midpoint → yellow
            const grd = ctx!.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            grd.addColorStop(0,   `rgba(255,214,0,${alpha})`);
            grd.addColorStop(0.5, `rgba(255,180,0,${alpha * 0.5})`);
            grd.addColorStop(1,   `rgba(255,214,0,${alpha})`);

            ctx!.strokeStyle = grd;
            ctx!.lineWidth = 0.6 * distFade;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.65 }}
    />
  );
}
