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
    <footer className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-24 text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative bg-emerald-card rounded-3xl p-8 sm:p-12 md:p-16 border border-[#B99A51]/40 gold-box-shadow overflow-hidden flex flex-col items-center"
      >
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Golden Ganesha Emblem with Rotating Mandala Backdrop */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center my-4">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <MandalaBackground size={220} intensity="soft" />
          </div>

          {/* Ganesha Emblem Badge */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 border-2 border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.4)] overflow-hidden bg-[#064B38]"
          >
            <Image
              src="/images/ganesha-hero.jpg"
              alt="Golden Lord Ganesha Emblem"
              fill
              className="object-cover object-center"
              sizes="128px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#092D23]/50 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Sacred Devanagari Closing Mantras */}
        <p className="font-serif tracking-[0.25em] text-xs sm:text-sm uppercase gold-text-antique font-medium mb-2">
          ॥ ॐ शान्तिः शान्तिः शान्तिः ॥
        </p>

        {/* Main Closing Blessing Text */}
        <h4 className="text-xl sm:text-2xl md:text-3xl font-serif gold-text-bright font-normal max-w-lg mx-auto leading-relaxed">
          &ldquo;{familyBlessing.closingSalutation}&rdquo;
        </h4>

        <GoldDivider className="my-6" />

        {/* Signature */}
        <div className="space-y-1">
          <p className="font-script text-2xl sm:text-3xl text-[#E8CF8C]">
            With love and regards,
          </p>
          <p className="font-serif text-lg sm:text-xl gold-text-antique tracking-widest uppercase font-semibold">
            The Families
          </p>
        </div>

        {/* Bottom Diyas */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <DiyaLamp size="sm" />
          <LotusMotif className="w-6 h-5" />
          <DiyaLamp size="sm" />
        </div>

        <p className="mt-8 text-[11px] font-serif tracking-[0.2em] uppercase text-[#E8CF8C]/50 font-light">
          Jyothi &amp; Mridhul · 22 November 2026 · Neelamkulagara Devi Temple
        </p>
      </motion.div>
    </footer>
  );
}
