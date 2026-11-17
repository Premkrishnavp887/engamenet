'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { invitationConfig } from '@/config/invitation';
import { MandalaBackground } from './MandalaBackground';
import { LotusMotif, GoldDivider, CornerOrnament } from './OrnamentalBorders';
import { DiyaLamp } from './FloatingDiyas';

export function ClosingSection() {
  const { familyBlessing } = invitationConfig;

  return (
    <footer className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-20 text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative bg-plum-card rounded-3xl p-8 sm:p-12 md:p-16 border border-[#C49A58]/35 gold-box-shadow overflow-hidden flex flex-col items-center"
      >
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Small Antique-Gold Ganesha Motif with Rotating Mandala Backdrop */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center my-3">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <MandalaBackground size={210} intensity="soft" />
          </div>

          {/* Ganesha Emblem Badge */}
          <motion.div
            animate={{ scale: [1, 1.025, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-0.5 border border-[#C49A58] shadow-[0_0_20px_rgba(196,154,88,0.25)] overflow-hidden bg-[#260C26]"
          >
            <Image
              src="/images/ganesha-hero.png"
              alt="Golden Lord Ganesha Emblem"
              fill
              className="object-cover object-center"
              sizes="112px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A071A]/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Sacred Devanagari Closing Mantras */}
        <p className="font-serif tracking-[0.25em] text-xs sm:text-sm uppercase gold-text-antique font-medium mb-2">
          ॥ ॐ शान्तिः शान्तिः शान्तिः ॥
        </p>

        {/* Main Closing Blessing Text */}
        <h4 className="text-xl sm:text-2xl md:text-3xl font-serif gold-text-muted font-normal max-w-lg mx-auto leading-relaxed">
          &ldquo;{familyBlessing.closingSalutation}&rdquo;
        </h4>

        <GoldDivider className="my-6" />

        {/* Signature */}
        <div className="space-y-1">
          <p className="font-script text-2xl sm:text-3xl text-[#D9B77B]">
            With love and regards,
          </p>
          <p className="font-serif text-lg sm:text-xl gold-text-antique tracking-widest uppercase font-semibold">
            The Families
          </p>
        </div>

        {/* Bottom Diyas & Lotus */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <DiyaLamp size="sm" />
          <LotusMotif className="w-6 h-5 text-[#C49A58]" />
          <DiyaLamp size="sm" />
        </div>

        <p className="mt-8 text-[10px] sm:text-[11px] font-serif tracking-[0.2em] uppercase text-[#D9B77B]/50 font-light">
          Jyothi &amp; Mridhul · 22 November 2026 · Neelamkulagara Devi Temple
        </p>
      </motion.div>
    </footer>
  );
}
