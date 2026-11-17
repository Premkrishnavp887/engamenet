'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import { invitationConfig } from '@/config/invitation';
import { CornerOrnament, LotusMotif, GoldDivider } from './OrnamentalBorders';

export function VenueSection() {
  const { event } = invitationConfig;

  // Encoded search term for Google Maps embed or external link
  const encodedQuery = encodeURIComponent(event.venueName + ' ' + event.address + ' ' + event.city);
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

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
          <span className="text-xs uppercase font-serif tracking-[0.25em] gold-text-antique font-semibold">
            Sacred Destination
          </span>
          <h3 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-serif gold-text-bright font-normal">
            {event.venueName}
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-serif text-[#E8CF8C]/80 italic">
            {event.venueSubtext}
          </p>
        </div>

        {/* Address Card */}
        <div className="max-w-md mx-auto my-4 p-4 rounded-2xl bg-black/25 border border-[#B99A51]/30 flex flex-col items-center">
          <div className="flex items-center gap-2 text-[#E8CF8C] mb-1">
            <MapPin className="w-4 h-4" />
            <span className="font-serif text-sm font-semibold tracking-wider uppercase">
              Location &amp; Address
            </span>
          </div>
          <p className="font-serif text-base text-[#FAF5EA]">
            {event.venueName}
          </p>
          <p className="font-serif text-xs sm:text-sm text-[#F5EBD5]/70 mt-0.5">
            {event.city}, {event.state}
          </p>
        </div>

        {/* Interactive Map Embed / Frame */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden my-6 border border-[#B99A51]/50 shadow-inner bg-[#092D23]">
          <iframe
            title="Venue Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={mapsEmbedUrl}
            className="w-full h-full filter contrast-[0.95] opacity-90"
            loading="lazy"
          />

          {/* Golden Corner Accents on Map Frame */}
          <div className="absolute top-2 left-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-xs border border-[#B99A51]/40 flex items-center gap-1.5 text-[11px] font-serif text-[#E8CF8C]">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Neelamkulagara Devi Temple</span>
          </div>
        </div>

        {/* Directions Action */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#B99A51] to-[#8A6D2B] hover:brightness-110 text-[#092D23] font-serif text-sm tracking-widest uppercase font-semibold transition-all duration-300 shadow-md cursor-pointer border border-[#FAF5EA]/50 active:scale-98"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
