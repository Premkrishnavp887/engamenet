'use client';

import React, { useEffect, useRef } from 'react';

interface GoldenParticlesProps {
  burst?: boolean;
  count?: number;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  targetOpacity: number;
  pulseSpeed: number;
  goldenTone: string;
}

export function GoldenParticles({ burst = false, count = 45, className = '' }: GoldenParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(255, 242, 200, ', // Light Champagne Gold
      'rgba(232, 207, 140, ', // Antique Gold Light
      'rgba(212, 175, 55, ',  // Bright Metallic Gold
      'rgba(185, 154, 81, ',  // Deep Antique Gold
    ];

    const particles: Particle[] = [];
    const particleCount = burst ? count * 2.5 : count;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.45 + 0.15),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.7 + 0.2,
        targetOpacity: Math.random() * 0.8 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        goldenTone: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Burst mode expansion
    if (burst) {
      particles.forEach((p) => {
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 4 + 2;
        p.speedX = Math.cos(angle) * velocity;
        p.speedY = Math.sin(angle) * velocity;
        p.size = Math.random() * 3.5 + 1.2;
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        // Subtle glow pulse
        p.opacity += p.pulseSpeed;
        if (p.opacity > 0.85 || p.opacity < 0.2) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // Wrap around boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle with gentle gold radial glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        glow.addColorStop(0, `${p.goldenTone}${p.opacity})`);
        glow.addColorStop(0.5, `${p.goldenTone}${p.opacity * 0.5})`);
        glow.addColorStop(1, `${p.goldenTone}0)`);

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Bright particle core
        ctx.fillStyle = `rgba(255, 255, 240, ${p.opacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [burst, count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-10 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
