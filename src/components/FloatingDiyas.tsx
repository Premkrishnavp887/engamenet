'use client';

import React from 'react';

export function DiyaLamp({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const scaleMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };

  return (
    <div className={`relative flex flex-col items-center justify-end select-none ${scaleMap[size]} ${className}`}>
      {/* Volumetric Warm Glow behind flame */}
      <div className="absolute -top-3 w-8 h-8 rounded-full bg-amber-400/25 blur-md pointer-events-none" />

      {/* Flickering Flame */}
      <div className="relative -mb-1 z-10 animate-flame">
        <svg viewBox="0 0 24 36" fill="none" className="w-5 h-8">
          <defs>
            <linearGradient id="flameGradPlum" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="25%" stopColor="#FFE066" />
              <stop offset="60%" stopColor="#FF9900" />
              <stop offset="100%" stopColor="#CC3300" />
            </linearGradient>
            <radialGradient id="innerFlameCorePlum" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#FFF275" />
              <stop offset="100%" stopColor="#FF8800" />
            </radialGradient>
          </defs>
          <path
            d="M12 2 C16 10 21 16 21 24 C21 29.5 17 34 12 34 C7 34 3 29.5 3 24 C3 16 8 10 12 2 Z"
            fill="url(#flameGradPlum)"
            opacity="0.95"
          />
          <path
            d="M12 12 C14.5 17 17 21 17 26 C17 29 14.8 31.5 12 31.5 C9.2 31.5 7 29 7 26 C7 21 9.5 17 12 12 Z"
            fill="url(#innerFlameCorePlum)"
          />
        </svg>
      </div>

      {/* Brass Diya Vessel */}
      <div className="relative z-0 w-full">
        <svg viewBox="0 0 70 36" fill="none" className="w-full h-auto">
          <defs>
            <linearGradient id="antiqueBrassMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7EBDD" />
              <stop offset="30%" stopColor="#D9B77B" />
              <stop offset="65%" stopColor="#C49A58" />
              <stop offset="90%" stopColor="#8B672B" />
              <stop offset="100%" stopColor="#F7EBDD" />
            </linearGradient>
            <linearGradient id="antiqueBrassBase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C49A58" />
              <stop offset="100%" stopColor="#3E2B10" />
            </linearGradient>
          </defs>
          <ellipse cx="35" cy="14" rx="30" ry="8" fill="url(#antiqueBrassMetallic)" />
          <ellipse cx="35" cy="13" rx="26" ry="6" fill="#36220E" />
          <path
            d="M5 14 C5 26 22 28 35 28 C48 28 65 26 65 14 Z"
            fill="url(#antiqueBrassMetallic)"
          />
          <path
            d="M26 26 H44 L48 34 H22 Z"
            fill="url(#antiqueBrassBase)"
          />
          <ellipse cx="35" cy="14" rx="20" ry="4" fill="#FFAA00" opacity="0.25" />
        </svg>
      </div>

      {/* Soft floor reflection on plum surface */}
      <div className="w-12 h-2 rounded-full bg-amber-500/15 blur-sm -mt-0.5" />
    </div>
  );
}

export function DiyasRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between w-full max-w-lg px-6 ${className}`}>
      <DiyaLamp size="md" />
      <div className="h-[1px] flex-1 mx-4 bg-gradient-to-r from-transparent via-[#C49A58]/30 to-transparent" />
      <DiyaLamp size="md" />
    </div>
  );
}
