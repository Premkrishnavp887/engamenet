'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { invitationConfig } from '@/config/invitation';
import { GoldDivider, LotusMotif, CornerOrnament } from './OrnamentalBorders';

export function FamilyMessage() {
  const { bride, groom, familyBlessing } = invitationConfig;

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 select-none">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative bg-emerald-card rounded-3xl p-6 sm:p-10 md:p-12 border border-[#B99A51]/40 gold-box-shadow overflow-hidden text-center"
      >
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Section Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#B99A51]/40" />
            <LotusMotif className="w-5 h-4" />
            <span className="w-8 h-[1px] bg-[#B99A51]/40" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl gold-text-bright font-normal tracking-wide">
            {familyBlessing.heading}
          </h3>
        </div>

        {/* Warm Elders' Invitation Message */}
        <div className="max-w-xl mx-auto space-y-4 font-serif text-base sm:text-lg leading-relaxed text-[#F5EBD5]/90">
          <p className="italic">
            &ldquo;{familyBlessing.messageParagraph1}&rdquo;
          </p>
          <p className="italic text-sm sm:text-base text-[#E8CF8C]/90 font-light">
            &ldquo;{familyBlessing.messageParagraph2}&rdquo;
          </p>
        </div>

        <GoldDivider className="my-8" />

        {/* Configurable Family Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-center">
          {/* Bride's Parents Column */}
          <div className="p-5 rounded-2xl bg-black/20 border border-[#B99A51]/25 flex flex-col items-center">
            <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#E8CF8C]/80 font-medium">
              Bride&apos;s Family
            </span>
            <p className="mt-2 text-lg sm:text-xl font-serif font-medium gold-text-antique">
              {bride.parents.names}
            </p>
            <span className="text-xs text-[#F5EBD5]/70 font-serif mt-1">
              {bride.parents.relation} <strong className="text-[#E8CF8C]">{bride.firstName}</strong>
            </span>
            {bride.parents.residence && (
              <span className="text-[11px] text-[#B99A51]/80 mt-1 uppercase tracking-wider font-light">
                {bride.parents.residence}
              </span>
            )}
          </div>

          {/* Groom's Parents Column */}
          <div className="p-5 rounded-2xl bg-black/20 border border-[#B99A51]/25 flex flex-col items-center">
            <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#E8CF8C]/80 font-medium">
              Groom&apos;s Family
            </span>
            <p className="mt-2 text-lg sm:text-xl font-serif font-medium gold-text-antique">
              {groom.parents.names}
            </p>
            <span className="text-xs text-[#F5EBD5]/70 font-serif mt-1">
              {groom.parents.relation} <strong className="text-[#E8CF8C]">{groom.firstName}</strong>
            </span>
            {groom.parents.residence && (
              <span className="text-[11px] text-[#B99A51]/80 mt-1 uppercase tracking-wider font-light">
                {groom.parents.residence}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
