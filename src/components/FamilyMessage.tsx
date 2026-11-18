'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { invitationConfig } from '@/config/invitation';
import { GoldDivider, LotusMotif, CornerOrnament } from './OrnamentalBorders';

export function FamilyMessage() {
  const { bride, groom, familyBlessing } = invitationConfig;

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 select-none">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative bg-burgundy-card rounded-3xl p-6 sm:p-10 md:p-12 border border-[#C5A16A]/35 gold-box-shadow overflow-hidden text-center"
      >
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Section Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2 opacity-85">
            <span className="w-8 h-[1px] bg-[#C5A16A]/35" />
            <LotusMotif className="w-5 h-4 text-[#C5A16A]" />
            <span className="w-8 h-[1px] bg-[#C5A16A]/35" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl gold-text-muted font-normal tracking-wide">
            {familyBlessing.heading}
          </h3>
        </div>

        {/* Warm Elders' Invitation Message */}
        <div className="max-w-xl mx-auto space-y-4 font-serif text-base sm:text-lg leading-relaxed text-[#F2E5D1]/90">
          <p className="italic">
            &ldquo;{familyBlessing.messageParagraph1}&rdquo;
          </p>
          <p className="italic text-sm sm:text-base text-[#E3C995]/90 font-light">
            &ldquo;{familyBlessing.messageParagraph2}&rdquo;
          </p>
        </div>

        <GoldDivider className="my-8" />

        {/* Section Title: "With the blessings of" */}
        <div className="mb-6 flex flex-col items-center">
          <span className="text-xs sm:text-sm uppercase font-serif tracking-[0.25em] gold-text-antique font-semibold">
            {familyBlessing.blessingSubheading}
          </span>
        </div>

        {/* Symmetrical Family Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-center">
          {/* Bride's Family Card */}
          <div className="p-6 rounded-2xl bg-black/30 border border-[#C5A16A]/30 flex flex-col items-center justify-between shadow-inner">
            <div className="w-full flex flex-col items-center">
              <span className="text-xs uppercase font-serif tracking-[0.22em] text-[#E3C995]/85 font-medium pb-2 border-b border-[#C5A16A]/20 w-full">
                Bride&apos;s Family
              </span>

              {/* Bride Name & Relation */}
              <div className="mt-4 mb-2 flex flex-col items-center">
                <p className="text-xl sm:text-2xl font-serif font-semibold text-[#E3C995] tracking-wide">
                  {bride.firstName}
                </p>
                <span className="text-xs italic text-[#F2E5D1]/75 font-serif mt-0.5">
                  {bride.parents.relation}
                </span>
              </div>

              {/* Parents Names */}
              <div className="my-2 space-y-1">
                <p className="text-lg sm:text-xl font-serif font-medium gold-text-champagne leading-snug">
                  {bride.parents.father}
                </p>
                <span className="text-xs font-script text-[#E3C995]/70 block">&amp;</span>
                <p className="text-lg sm:text-xl font-serif font-medium gold-text-champagne leading-snug">
                  {bride.parents.mother}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="w-full mt-4 pt-3 border-t border-[#C5A16A]/20">
              <p className="text-xs sm:text-[13px] font-serif text-[#F2E5D1]/85 leading-relaxed">
                Vellimattom (H),<br />
                Mattoor, Kalady.
              </p>
            </div>
          </div>

          {/* Groom's Family Card */}
          <div className="p-6 rounded-2xl bg-black/30 border border-[#C5A16A]/30 flex flex-col items-center justify-between shadow-inner">
            <div className="w-full flex flex-col items-center">
              <span className="text-xs uppercase font-serif tracking-[0.22em] text-[#E3C995]/85 font-medium pb-2 border-b border-[#C5A16A]/20 w-full">
                Groom&apos;s Family
              </span>

              {/* Groom Name & Relation */}
              <div className="mt-4 mb-2 flex flex-col items-center">
                <p className="text-xl sm:text-2xl font-serif font-semibold text-[#E3C995] tracking-wide">
                  {groom.firstName}
                </p>
                <span className="text-xs italic text-[#F2E5D1]/75 font-serif mt-0.5">
                  {groom.parents.relation}
                </span>
              </div>

              {/* Parents Names */}
              <div className="my-2 space-y-1">
                <p className="text-lg sm:text-xl font-serif font-medium gold-text-champagne leading-snug">
                  {groom.parents.father}
                </p>
                <span className="text-xs font-script text-[#E3C995]/70 block">&amp;</span>
                <p className="text-lg sm:text-xl font-serif font-medium gold-text-champagne leading-snug">
                  {groom.parents.mother}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="w-full mt-4 pt-3 border-t border-[#C5A16A]/20">
              <p className="text-xs sm:text-[13px] font-serif text-[#F2E5D1]/85 leading-relaxed">
                Puthenpurakkal House,<br />
                Maliankara P O, 683516.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
