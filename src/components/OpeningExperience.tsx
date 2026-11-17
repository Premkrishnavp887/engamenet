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
import { Sparkles, Bell } from 'lucide-react';

interface OpeningExperienceProps {
  onOpen: () => void;
  onAudioStart?: () => void;
}

export function OpeningExperience({ onOpen, onAudioStart }: OpeningExperienceProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [audioPromptShown, setAudioPromptShown] = useState(false);

  const handleOpenClick = async () => {
    if (isOpening) return;
    setIsOpening(true);

    // Play subtle auspicious temple chime
    try {
      ambientAudio.playTempleChime();
      if (onAudioStart) {
        onAudioStart();
      }
    } catch {
      // Audio autoplay restrictions gracefully handled
    }

    // Allow cinematic mandala burst & radiance animation to play
    setTimeout(() => {
      onOpen();
    }, 1600);
  };

  return (
    <div className="relative w-full min-h-screen h-[100dvh] flex flex-col items-center justify-between overflow-hidden bg-royal-emerald select-none">
      {/* Deep Emerald Ambient Vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-80" />

      {/* Floating Golden Particles */}
      <GoldenParticles count={38} burst={isOpening} />

      {/* Hanging Golden Temple Bells at Top Corners */}
      <div className="absolute top-0 left-4 md:left-12 z-20 pointer-events-none flex flex-col items-center">
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center origin-top"
        >
          <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-[#B99A51]/20 to-[#E8CF8C]" />
          <Bell className="w-5 h-5 md:w-6 md:h-6 text-[#E8CF8C] drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)]" />
        </motion.div>
      </div>

      <div className="absolute top-0 right-4 md:right-12 z-20 pointer-events-none flex flex-col items-center">
        <motion.div
          animate={{ rotate: [2, -2, 2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center origin-top"
        >
          <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#B99A51]/20 to-[#E8CF8C]" />
          <Bell className="w-5 h-5 md:w-6 md:h-6 text-[#E8CF8C] drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)]" />
        </motion.div>
      </div>

      {/* Top Sacred Devanagari Invocation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
        className="relative z-30 pt-8 md:pt-12 px-4 text-center max-w-xl mx-auto flex flex-col items-center"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#B99A51]" />
          <LotusMotif className="w-5 h-4" />
          <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#B99A51]" />
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-[0.25em] gold-text-bright font-medium drop-shadow-md">
          {invitationConfig.familyBlessing.invocationSanskrit}
        </h1>

        <p className="mt-1 text-xs sm:text-sm md:text-base font-serif tracking-[0.2em] uppercase text-[#E8CF8C]/90 font-light">
          {invitationConfig.familyBlessing.invocationEnglish}
        </p>
      </motion.header>

      {/* Centerpiece Hero: 3D Golden Lord Ganesha in front of Ornate Mandala */}
      <div className="relative flex-1 w-full flex items-center justify-center my-auto z-20 px-4">
        {/* Hypnotic Rotating Golden Mandala behind Ganesha */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <MandalaBackground
            size={typeof window !== 'undefined' && window.innerWidth < 640 ? 360 : 540}
            isOpening={isOpening}
            intensity="radiant"
          />
        </div>

        {/* Golden Central Radiance Flare on Opening */}
        <AnimatePresence>
          {isOpening && (
            <motion.div
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: [0.5, 4], opacity: [1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#FFF6D6] via-[#D4AF37] to-transparent blur-3xl pointer-events-none z-30"
            />
          )}
        </AnimatePresence>

        {/* 3D Golden Ganesha Hero Idol Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={
            isOpening
              ? { scale: 1.15, opacity: 0, filter: 'brightness(1.8) blur(6px)' }
              : { opacity: 1, scale: 1, filter: 'brightness(1) blur(0px)' }
          }
          transition={{
            duration: isOpening ? 1.4 : 1.8,
            ease: isOpening ? 'easeInOut' : 'easeOut',
            delay: isOpening ? 0 : 0.4,
          }}
          className="relative max-w-[340px] sm:max-w-[420px] md:max-w-[500px] w-full aspect-[4/3] flex items-center justify-center"
        >
          {/* Volumetric Soft Golden Glow behind idol */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-b from-[#D4AF37]/30 via-[#B99A51]/20 to-transparent blur-2xl pointer-events-none" />

          {/* Golden Arch / Sacred Frame around Idol */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden p-1 shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-[#B99A51]/40 backdrop-blur-xs">
            {/* Fine Inner Border */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#E8CF8C]/30">
              <Image
                src="/images/ganesha-hero.jpg"
                alt="3D Golden Lord Ganesha on Lotus Throne"
                fill
                priority
                className="object-cover object-center transform transition-transform duration-1000 ease-out hover:scale-105"
                sizes="(max-width: 640px) 340px, (max-width: 768px) 420px, 500px"
              />

              {/* Seamless Vignette overlay to blend image borders into emerald canvas */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#092D23]/70 via-transparent to-[#064B38]/40 pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(6,75,56,0.8)] pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Traditional Glowing Diyas + Signature "Open Invitation" Button */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="relative z-30 pb-10 md:pb-14 w-full flex flex-col items-center px-4"
      >
        {/* Diyas Flanking Center */}
        <div className="w-full max-w-sm flex items-center justify-between mb-6 px-4">
          <DiyaLamp size="sm" />
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="w-1 h-1 rounded-full bg-[#E8CF8C]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="w-1 h-1 rounded-full bg-[#E8CF8C]" />
          </div>
          <DiyaLamp size="sm" />
        </div>

        {/* The Signature "Open Invitation" Button */}
        <motion.button
          onClick={handleOpenClick}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          disabled={isOpening}
          className="relative group px-8 sm:px-10 py-3.5 sm:py-4 rounded-full overflow-hidden transition-all duration-300 cursor-pointer disabled:cursor-default"
          style={{
            background: 'linear-gradient(135deg, rgba(23, 59, 45, 0.95) 0%, rgba(6, 75, 56, 0.98) 100%)',
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.35), inset 0 0 15px rgba(232, 207, 140, 0.2)',
          }}
        >
          {/* Glowing Animated Gold Border */}
          <span className="absolute inset-0 rounded-full border border-[#D4AF37]/80 group-hover:border-[#FFF2C8] transition-colors duration-300" />
          <span className="absolute -inset-[1px] rounded-full border border-[#B99A51]/40 opacity-50 blur-[2px]" />

          {/* Shimmer sweep effect across button */}
          <span className="absolute inset-0 gold-shimmer-sweep pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity" />

          {/* Button Text & Icons */}
          <div className="relative z-10 flex items-center justify-center gap-3">
            <LotusMotif className="w-5 h-4 text-[#E8CF8C]" />
            <span className="font-serif tracking-[0.22em] text-sm sm:text-base font-semibold gold-text-bright uppercase">
              {isOpening ? 'Opening Invitation...' : 'Open Invitation'}
            </span>
            <Sparkles className="w-4 h-4 text-[#E8CF8C] group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </motion.button>

        {/* Subtext Prompt */}
        <p className="mt-3 text-[11px] sm:text-xs tracking-[0.18em] text-[#E8CF8C]/70 uppercase font-light">
          Tap to enter the sacred celebration
        </p>
      </motion.footer>
    </div>
  );
}
