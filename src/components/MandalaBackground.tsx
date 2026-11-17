'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MandalaProps {
  className?: string;
  size?: number | string;
  isOpening?: boolean;
  intensity?: 'soft' | 'radiant';
}

export function OrnateMandalaSvg({ size = 520 }: { size?: number | string }) {
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
        <linearGradient id="plumGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7EBDD" />
          <stop offset="30%" stopColor="#D9B77B" />
          <stop offset="70%" stopColor="#C49A58" />
          <stop offset="100%" stopColor="#8B672B" />
        </linearGradient>

        <linearGradient id="plumGoldAccent" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EFE1CF" />
          <stop offset="50%" stopColor="#D9B77B" />
          <stop offset="100%" stopColor="#8B672B" />
        </linearGradient>

        <radialGradient id="plumMandalaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D9B77B" stopOpacity="0.4" />
          <stop offset="45%" stopColor="#461B43" stopOpacity="0.3" />
          <stop offset="80%" stopColor="#260C26" stopOpacity="0.1" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Radiance Glow */}
      <circle cx="300" cy="300" r="280" fill="url(#plumMandalaGlow)" opacity="0.7" />

      {/* Outer Crown: 24 Traditional Radiating Teardrop / Paisley Flames matching reference image */}
      <g stroke="url(#plumGoldMain)" strokeWidth="1.2" opacity="0.85">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <g key={`teardrop-petal-${i}`} transform={`rotate(${angle} 300 300)`}>
              {/* Teardrop loop */}
              <path
                d="M300 18 C288 38 286 65 300 82 C314 65 312 38 300 18 Z"
                fill="url(#plumGoldAccent)"
                fillOpacity="0.18"
              />
              <path
                d="M300 30 C293 45 292 62 300 74 C308 62 307 45 300 30 Z"
                stroke="url(#plumGoldMain)"
                strokeWidth="0.8"
                fill="none"
              />
              {/* Crown bead tip */}
              <circle cx="300" cy="14" r="2.5" fill="#F7EBDD" />
            </g>
          );
        })}
      </g>

      {/* Outer Beaded Concentric Ring */}
      <circle
        cx="300"
        cy="300"
        r="215"
        stroke="url(#plumGoldMain)"
        strokeWidth="1.2"
        strokeDasharray="3 5"
        opacity="0.85"
      />
      <circle
        cx="300"
        cy="300"
        r="205"
        stroke="url(#plumGoldAccent)"
        strokeWidth="1.5"
        opacity="0.9"
      />

      {/* 24 Scalloped Arcs Ring */}
      <g stroke="url(#plumGoldMain)" strokeWidth="1" opacity="0.8">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <g key={`scallop-${i}`} transform={`rotate(${angle} 300 300)`}>
              <path
                d="M288 100 Q300 88 312 100"
                fill="none"
              />
              <circle cx="300" cy="94" r="1.5" fill="#D9B77B" />
            </g>
          );
        })}
      </g>

      {/* Middle Concentric Ring */}
      <circle
        cx="300"
        cy="300"
        r="165"
        stroke="url(#plumGoldMain)"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <circle
        cx="300"
        cy="300"
        r="158"
        stroke="url(#plumGoldAccent)"
        strokeWidth="1"
        strokeDasharray="2 4"
        opacity="0.85"
      />

      {/* 16 Traditional Lotus Petals */}
      <g stroke="url(#plumGoldMain)" strokeWidth="1.2" opacity="0.9">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <g key={`mid-petal-${i}`} transform={`rotate(${angle} 300 300)`}>
              <path
                d="M300 142 C285 168 285 195 300 215 C315 195 315 168 300 142 Z"
                fill="url(#plumGoldMain)"
                fillOpacity="0.2"
              />
              <line x1="300" y1="145" x2="300" y2="210" stroke="#F7EBDD" strokeWidth="0.6" opacity="0.7" />
              <circle cx="300" cy="142" r="2" fill="#D9B77B" />
            </g>
          );
        })}
      </g>

      {/* Inner Central Sun / Bindu Ring */}
      <circle cx="300" cy="300" r="75" stroke="url(#plumGoldMain)" strokeWidth="1.5" />
      <circle cx="300" cy="300" r="68" stroke="url(#plumGoldAccent)" strokeWidth="1" strokeDasharray="2 3" opacity="0.8" />
      <circle cx="300" cy="300" r="28" fill="url(#plumMandalaGlow)" />
      <circle cx="300" cy="300" r="12" fill="#D9B77B" opacity="0.7" />
      <circle cx="300" cy="300" r="5" fill="#F7EBDD" />
    </svg>
  );
}

export function MandalaBackground({
  className = '',
  size = 560,
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
            ? 'w-[380px] h-[380px] bg-gradient-to-tr from-[#D9B77B]/25 via-[#C49A58]/15 to-transparent blur-3xl'
            : 'w-[280px] h-[280px] bg-gradient-to-tr from-[#C49A58]/15 to-transparent blur-2xl'
        }`}
      />

      {/* Gentle Rotating SVG Mandala layer behind artwork */}
      <motion.div
        animate={{
          rotate: isOpening ? [0, 90] : [0, 360],
          scale: isOpening ? [1, 2.6] : [1, 1.015, 1],
          opacity: isOpening ? [0.85, 0] : [0.75, 0.9, 0.75],
        }}
        transition={{
          rotate: {
            duration: isOpening ? 1.8 : 140,
            repeat: isOpening ? 0 : Infinity,
            ease: isOpening ? 'easeInOut' : 'linear',
          },
          scale: {
            duration: isOpening ? 1.6 : 8,
            repeat: isOpening ? 0 : Infinity,
            ease: isOpening ? 'easeOut' : 'easeInOut',
          },
          opacity: {
            duration: isOpening ? 1.4 : 6,
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
