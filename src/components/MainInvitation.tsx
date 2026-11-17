'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { invitationConfig } from '@/config/invitation';
import { GoldDivider, LotusMotif, CornerOrnament, TempleArchHeader } from './OrnamentalBorders';

export function MainInvitation() {
  const { bride, groom, event } = invitationConfig;

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-16 text-center select-none">
      {/* Royal Invitation Card Frame */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative bg-emerald-card rounded-3xl p-6 sm:p-10 md:p-12 border border-[#B99A51]/40 gold-box-shadow overflow-hidden"
      >
        {/* Subtle Background Mandala Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,154,81,0.08)_0%,transparent_70%)] pointer-events-none" />

        {/* Ornate Corner Flourishes */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Temple Arch Header */}
        <TempleArchHeader />

        {/* Auspicious Invocation Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-4"
        >
          <p className="font-serif tracking-[0.25em] text-xs sm:text-sm uppercase gold-text-antique font-semibold">
            Together with the blessings of our families
          </p>
          <p className="mt-2 font-serif text-sm sm:text-base text-[#F5EBD5]/90 italic max-w-lg mx-auto">
            We joyfully invite you to celebrate the engagement ceremony of
          </p>
        </motion.div>

        {/* Gold Divider */}
        <GoldDivider className="my-5" />

        {/* Prominent Couple Names Section */}
        <div className="my-6 sm:my-8 flex flex-col items-center justify-center">
          {/* Bride Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-[0.14em] font-normal gold-text-bright drop-shadow-md uppercase">
              {bride.firstName}
            </h2>
            {bride.tagline && (
              <span className="font-script text-lg sm:text-xl text-[#E8CF8C]/80 mt-1">
                {bride.tagline}
              </span>
            )}
          </motion.div>

          {/* Elegant '&' Ampersand with Golden Glow */}
          <motion.div
            initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative my-2 sm:my-4 flex items-center justify-center"
          >
            <div className="absolute w-12 h-12 rounded-full bg-[#B99A51]/15 blur-md" />
            <span className="relative font-script text-4xl sm:text-5xl md:text-6xl text-[#E8CF8C] drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">
              &
            </span>
          </motion.div>

          {/* Groom Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-[0.14em] font-normal gold-text-bright drop-shadow-md uppercase">
              {groom.firstName}
            </h2>
            {groom.tagline && (
              <span className="font-script text-lg sm:text-xl text-[#E8CF8C]/80 mt-1">
                {groom.tagline}
              </span>
            )}
          </motion.div>
        </div>

        {/* Gold Divider */}
        <GoldDivider className="my-5" />

        {/* Poetic Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-4 flex flex-col items-center"
        >
          <p className="font-serif italic text-base sm:text-lg md:text-xl gold-text-antique font-normal">
            &ldquo;{event.subtitle}&rdquo;
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#B99A51]/40" />
            <LotusMotif className="w-5 h-4" />
            <span className="w-8 h-[1px] bg-[#B99A51]/40" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
