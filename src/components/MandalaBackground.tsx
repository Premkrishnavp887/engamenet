'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MandalaProps {
  className?: string;
  size?: number | string;
  isOpening?: boolean;
  intensity?: 'soft' | 'radiant';
}

export function OrnateMandalaSvg({ size = 500 }: { size?: number | string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-none select-none pointer-events-none"
    >
      <defs>
        <linearGradient id="mandalaGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2C8" />
          <stop offset="25%" stopColor="#E2C172" />
          <stop offset="60%" stopColor="#B99A51" />
          <stop offset="85%" stopColor="#8A6D2B" />
          <stop offset="100%" stopColor="#FAF2D2" />
        </linearGradient>

        <linearGradient id="mandalaGoldAccent" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F5EBD5" />
          <stop offset="100%" stopColor="#8A6D2B" />
        </linearGradient>

        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#B99A51" stopOpacity="0.4" />
          <stop offset="80%" stopColor="#064B38" stopOpacity="0.1" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>

        <filter id="mandalaGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Central Radiance Glow */}
      <circle cx="300" cy="300" r="280" fill="url(#centerGlow)" opacity="0.6" />

      {/* Outer Ring with Beaded Dots */}
      <circle
        cx="300"
        cy="300"
        r="285"
        stroke="url(#mandalaGoldMain)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        opacity="0.75"
      />
      <circle
        cx="300"
        cy="300"
        r="275"
        stroke="url(#mandalaGoldAccent)"
        strokeWidth="2"
        opacity="0.85"
      />

      {/* Outer 24 Petal Flame Crown */}
      <g stroke="url(#mandalaGoldMain)" strokeWidth="1.2" opacity="0.8">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <g key={`outer-petal-${i}`} transform={`rotate(${angle} 300 300)`}>
              <path
                d="M300 25 Q290 60 300 80 Q310 60 300 25"
                fill="url(#mandalaGoldAccent)"
                fillOpacity="0.2"
              />
              <circle cx="300" cy="24" r="2" fill="#FAF5EA" />
            </g>
          );
        })}
      </g>

      {/* Concentric Decorative Ring 2 */}
      <circle
        cx="300"
        cy="300"
        r="220"
        stroke="url(#mandalaGoldMain)"
        strokeWidth="1"
        strokeDasharray="3 5"
        opacity="0.9"
      />
      <circle
        cx="300"
        cy="300"
        r="212"
        stroke="url(#mandalaGoldAccent)"
        strokeWidth="1.75"
        opacity="0.85"
      />

      {/* 16 Scalloped Petals with Floral Inserts */}
      <g stroke="url(#mandalaGoldMain)" strokeWidth="1.5" opacity="0.9">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <g key={`mid-petal-${i}`} transform={`rotate(${angle} 300 300)`}>
              <path
                d="M300 88 C275 125 275 160 300 185 C325 160 325 125 300 88 Z"
                fill="url(#mandalaGoldMain)"
                fillOpacity="0.15"
              />
              <path
                d="M300 115 C285 140 285 160 300 175 C315 160 315 140 300 115 Z"
                fill="url(#mandalaGoldAccent)"
                fillOpacity="0.3"
              />
              <circle cx="300" cy="88" r="3" fill="#D4AF37" />
            </g>
          );
        })}
      </g>

      {/* Concentric Decorative Ring 3 */}
      <circle
        cx="300"
        cy="300"
        r="145"
        stroke="url(#mandalaGoldAccent)"
        strokeWidth="1.5"
        strokeDasharray="2 4"
        opacity="0.85"
      />
      <circle
        cx="300"
        cy="300"
        r="135"
        stroke="url(#mandalaGoldMain)"
        strokeWidth="2"
        opacity="0.95"
      />

      {/* 12 Traditional Indian Lotus Core Petals */}
      <g stroke="url(#mandalaGoldAccent)" strokeWidth="1.5" opacity="0.95">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <g key={`core-petal-${i}`} transform={`rotate(${angle} 300 300)`}>
              <path
                d="M300 165 C280 200 280 230 300 250 C320 230 320 200 300 165 Z"
                fill="url(#mandalaGoldMain)"
                fillOpacity="0.35"
              />
              <line x1="300" y1="165" x2="300" y2="245" stroke="#FFF2C8" strokeWidth="0.75" />
            </g>
          );
        })}
      </g>

      {/* Inner Central Sun / Bindu Ring */}
      <circle cx="300" cy="300" r="50" fill="url(#centerGlow)" />
      <circle cx="300" cy="300" r="50" stroke="url(#mandalaGoldMain)" strokeWidth="2" />
      <circle cx="300" cy="300" r="38" stroke="url(#mandalaGoldAccent)" strokeWidth="1" strokeDasharray="2 3" />
      <circle cx="300" cy="300" r="16" fill="#D4AF37" opacity="0.85" />
      <circle cx="300" cy="300" r="7" fill="#FAF5EA" />
    </svg>
  );
}

export function MandalaBackground({
  className = '',
  size = 650,
  isOpening = false,
  intensity = 'soft',
}: MandalaProps) {
  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Soft Ambient Golden Halo Behind Mandala */}
      <div
        className={`absolute rounded-full transition-all duration-1000 ${
          intensity === 'radiant'
            ? 'w-[420px] h-[420px] bg-gradient-to-tr from-[#D4AF37]/35 via-[#B99A51]/20 to-transparent blur-3xl'
            : 'w-[320px] h-[320px] bg-gradient-to-tr from-[#B99A51]/20 to-transparent blur-2xl'
        }`}
      />

      {/* Counter-rotating Outer Layer */}
      <motion.div
        animate={{
          rotate: isOpening ? [0, 180] : [0, 360],
          scale: isOpening ? [1, 2.5] : [1, 1.02, 1],
          opacity: isOpening ? [0.9, 0] : [0.75, 0.9, 0.75],
        }}
        transition={{
          rotate: {
            duration: isOpening ? 2 : 120,
            repeat: isOpening ? 0 : Infinity,
            ease: isOpening ? 'easeInOut' : 'linear',
          },
          scale: {
            duration: isOpening ? 1.8 : 8,
            repeat: isOpening ? 0 : Infinity,
            ease: isOpening ? 'easeOut' : 'easeInOut',
          },
          opacity: {
            duration: isOpening ? 1.6 : 6,
            repeat: isOpening ? 0 : Infinity,
            ease: 'easeInOut',
          },
        }}
        className="flex items-center justify-center"
      >
        <OrnateMandalaSvg size={size} />
      </motion.div>
    </div>
  );
}
