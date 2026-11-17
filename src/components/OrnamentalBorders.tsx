import React from 'react';

// Delicate Muted Antique Gold & Plum Lotus Motif
export function LotusMotif({ className = 'w-8 h-8 text-[#C49A58]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="antiqueGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7EBDD" />
          <stop offset="35%" stopColor="#D9B77B" />
          <stop offset="70%" stopColor="#C49A58" />
          <stop offset="100%" stopColor="#8B672B" />
        </linearGradient>
        <linearGradient id="plumPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D9B77B" />
          <stop offset="30%" stopColor="#8A2B68" />
          <stop offset="100%" stopColor="#34112F" />
        </linearGradient>
      </defs>
      {/* Center Golden/Plum Petal */}
      <path
        d="M50 5C45 20 40 38 50 55C60 38 55 20 50 5Z"
        fill="url(#antiqueGoldGrad)"
        opacity="0.95"
      />
      {/* Inner Petals with plum tint */}
      <path
        d="M50 55C40 40 25 32 15 35C20 45 35 52 50 55Z"
        fill="url(#antiqueGoldGrad)"
        opacity="0.85"
      />
      <path
        d="M50 55C60 40 75 32 85 35C80 45 65 52 50 55Z"
        fill="url(#antiqueGoldGrad)"
        opacity="0.85"
      />
      {/* Outer Petals */}
      <path
        d="M50 55C35 48 18 42 5 50C12 56 30 57 50 55Z"
        fill="url(#antiqueGoldGrad)"
        opacity="0.7"
      />
      <path
        d="M50 55C65 48 82 42 95 50C88 56 70 57 50 55Z"
        fill="url(#antiqueGoldGrad)"
        opacity="0.7"
      />
      <circle cx="50" cy="53" r="2.5" fill="#F7EBDD" />
    </svg>
  );
}

// Ornate Traditional Gold Filigree Divider
export function GoldDivider({ className = 'my-6' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-md mx-auto ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C49A58] to-[#D9B77B]" />
      <div className="flex items-center gap-1.5 px-1">
        <span className="w-1.5 h-1.5 rotate-45 bg-[#C49A58]" />
        <LotusMotif className="w-7 h-5" />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#C49A58]" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C49A58] to-[#D9B77B]" />
    </div>
  );
}

// Simple Fine Gold Line Divider
export function SimpleGoldLine({ className = 'my-4' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-full max-w-xs mx-auto ${className}`}>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C49A58]/70 to-transparent" />
    </div>
  );
}

// Fine Ornate Corner Flourish for Cards and Frames
export function CornerOrnament({ position = 'top-left' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const getTransforms = () => {
    switch (position) {
      case 'top-right':
        return 'top-2 right-2 rotate-90';
      case 'bottom-right':
        return 'bottom-2 right-2 rotate-180';
      case 'bottom-left':
        return 'bottom-2 left-2 -rotate-90';
      case 'top-left':
      default:
        return 'top-2 left-2';
    }
  };

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute w-7 h-7 pointer-events-none ${getTransforms()}`}
    >
      <defs>
        <linearGradient id="cornerAntiqueGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7EBDD" />
          <stop offset="50%" stopColor="#D9B77B" />
          <stop offset="100%" stopColor="#8B672B" />
        </linearGradient>
      </defs>
      <path
        d="M2 38V12C2 6.47715 6.47715 2 12 2H38"
        stroke="url(#cornerAntiqueGold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6 34V14C6 9.58172 9.58172 6 14 6H34"
        stroke="url(#cornerAntiqueGold)"
        strokeWidth="0.8"
        strokeOpacity="0.7"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2" fill="#C49A58" />
      <path
        d="M12 20C12 16 16 12 20 12"
        stroke="url(#cornerAntiqueGold)"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Traditional Temple Arch Header Motif
export function TempleArchHeader() {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-4">
      <svg viewBox="0 0 300 40" fill="none" className="w-64 max-w-full h-8">
        <defs>
          <linearGradient id="archAntiqueGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="25%" stopColor="#C49A58" />
            <stop offset="50%" stopColor="#F7EBDD" />
            <stop offset="75%" stopColor="#C49A58" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M10 35 Q75 10 150 10 Q225 10 290 35"
          stroke="url(#archAntiqueGold)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M20 38 Q80 16 150 16 Q220 16 280 38"
          stroke="url(#archAntiqueGold)"
          strokeWidth="0.7"
          strokeDasharray="2 3"
          fill="none"
          opacity="0.8"
        />
        <circle cx="150" cy="9" r="2.5" fill="#D9B77B" />
      </svg>
    </div>
  );
}
