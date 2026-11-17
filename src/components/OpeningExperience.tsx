'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MandalaBackground } from './MandalaBackground';
import { GoldenParticles } from './GoldenParticles';
import { DiyaLamp } from './FloatingDiyas';
import { LotusMotif } from './OrnamentalBorders';
import { invitationConfig } from '@/config/invitation';
import { ambientAudio } from '@/utils/audio';
import { Sparkles } from 'lucide-react';

interface OpeningExperienceProps {
  onOpen: () => void;
  onAudioStart?: () => void;
}

export function OpeningExperience({ onOpen, onAudioStart }: OpeningExperienceProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    try {
      ambientAudio.play();
      if (onAudioStart) {
        onAudioStart();
      }
    } catch {
      // Audio autoplay gracefully handled
    }

    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col items-center justify-between overflow-hidden bg-royal-burgundy select-none px-4 py-6 sm:py-8">
      {/* Ambient Deep Burgundy Velvet Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(88,23,42,0.45)_0%,rgba(57,13,28,0.95)_75%,#240611_100%)] pointer-events-none" />

      {/* Subtle Floating Golden Particles */}
      <GoldenParticles count={32} burst={isOpening} />

      {/* 1. Sanskrit Invocation Header */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        className="relative z-30 pt-2 sm:pt-4 text-center max-w-lg mx-auto flex flex-col items-center"
      >
        <div className="flex items-center gap-2 mb-1.5 opacity-80">
          <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-[#C5A16A]" />
          <LotusMotif className="w-5 h-4 text-[#C5A16A]" />
          <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-[#C5A16A]" />
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-[0.25em] gold-text-muted font-normal drop-shadow-sm">
          {invitationConfig.familyBlessing.invocationSanskrit}
        </h1>
      </motion.header>

      {/* 2. Hero Centerpiece: 3D Golden Lord Ganesha Artwork with Subtle Burgundy Transition */}
      <div className="relative flex-1 w-full max-w-2xl flex items-center justify-center my-auto z-20 py-2 sm:py-4">
        {/* Separate SVG Mandala Layer BEHIND the artwork (artwork mandala does not rotate) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <MandalaBackground
            size={typeof window !== 'undefined' && window.innerWidth < 640 ? 340 : 500}
            isOpening={isOpening}
            intensity="radiant"
          />
        </div>

        {/* Golden Central Radiance Flare on Opening */}
        <AnimatePresence>
          {isOpening && (
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: [0.5, 3.8], opacity: [0.9, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-[#F2E5D1] via-[#E3C995] to-transparent blur-3xl pointer-events-none z-30"
            />
          )}
        </AnimatePresence>

        {/* Ganesha Artwork Frame: Uncropped, preserved exactly, with subtle burgundy background blending */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={
            isOpening
              ? { scale: 1.08, opacity: 0, filter: 'brightness(1.5) blur(5px)' }
              : { opacity: 1, y: 0, scale: 1, filter: 'brightness(1) blur(0px)' }
          }
          transition={{
            duration: isOpening ? 1.3 : 1.6,
            ease: isOpening ? 'easeInOut' : 'easeOut',
            delay: isOpening ? 0 : 0.4,
          }}
          className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[560px] aspect-[1024/682] flex items-center justify-center"
        >
          {/* Soft ambient warm burgundy lighting behind artwork */}
          <div className="absolute inset-3 rounded-full bg-gradient-to-b from-[#E3C995]/15 via-[#58172A]/35 to-transparent blur-2xl pointer-events-none" />

          {/* Delicate Fine Antique Gold Border Container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden p-0.5 border border-[#C5A16A]/35 shadow-[0_20px_50px_rgba(24,6,17,0.7)] backdrop-blur-xs">
            <div className="relative w-full h-full rounded-[14px] overflow-hidden">
              <Image
                src="/images/ganesha-hero.png"
                alt="3D Golden Lord Ganesha on Lotus Throne"
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 640px) 340px, (max-width: 768px) 440px, 560px"
              />

              {/* Subtle perimeter burgundy transition feathering into background canvas */}
              <div className="absolute inset-0 ring-1 ring-inset ring-[#C5A16A]/20 rounded-[14px] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#390D1C]/45 via-transparent to-[#390D1C]/25 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Bottom Action: Diyas & Refined "OPEN INVITATION" Button */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="relative z-30 pb-3 sm:pb-6 w-full flex flex-col items-center"
      >
        {/* Subtle Diya Accents */}
        <div className="w-full max-w-xs flex items-center justify-between mb-4 px-2 opacity-85">
          <DiyaLamp size="sm" />
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="w-1 h-1 rounded-full bg-[#E3C995]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A16A]" />
            <span className="w-1 h-1 rounded-full bg-[#E3C995]" />
          </div>
          <DiyaLamp size="sm" />
        </div>

        {/* Refined "OPEN INVITATION" Button with transparent burgundy background & thin antique-gold border */}
        <motion.button
          onClick={handleOpenClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={isOpening}
          className="relative group px-8 sm:px-11 py-3.5 sm:py-4 rounded-full overflow-hidden transition-all duration-300 cursor-pointer disabled:cursor-default"
          style={{
            background: 'rgba(57, 13, 28, 0.7)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 30px rgba(24, 6, 17, 0.5), inset 0 0 12px rgba(197, 161, 106, 0.15)',
          }}
        >
          {/* Thin Muted Antique-Gold Border */}
          <span className="absolute inset-0 rounded-full border border-[#C5A16A]/70 group-hover:border-[#E3C995] transition-colors duration-300" />
          <span className="absolute -inset-[1px] rounded-full border border-[#C5A16A]/20 opacity-40 blur-[1px]" />

          {/* Subtle gold shimmer sweep */}
          <span className="absolute inset-0 gold-shimmer-sweep pointer-events-none opacity-25 group-hover:opacity-50 transition-opacity" />

          {/* Button Text & Motif */}
          <div className="relative z-10 flex items-center justify-center gap-3">
            <LotusMotif className="w-4 h-3.5 text-[#E3C995]" />
            <span className="font-serif tracking-[0.24em] text-xs sm:text-sm font-semibold gold-text-muted uppercase">
              {isOpening ? 'Opening Invitation...' : 'Open Invitation'}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#E3C995] group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </motion.button>
      </motion.footer>
    </div>
  );
}
