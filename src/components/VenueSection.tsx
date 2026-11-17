'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Compass, Info, ExternalLink } from 'lucide-react';
import { invitationConfig } from '@/config/invitation';
import { CornerOrnament, LotusMotif } from './OrnamentalBorders';

export function VenueSection() {
  const { event } = invitationConfig;
  const [showPendingNotice, setShowPendingNotice] = useState(false);

  const hasMapsUrl = Boolean(event.mapsUrl && event.mapsUrl.trim().length > 0 && !event.mapsUrl.includes('search/?api=1'));

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 select-none">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative bg-plum-card rounded-3xl p-6 sm:p-10 md:p-12 border border-[#C49A58]/35 gold-box-shadow overflow-hidden text-center"
      >
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Section Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2 opacity-85">
            <span className="w-8 h-[1px] bg-[#C49A58]/35" />
            <LotusMotif className="w-5 h-4 text-[#C49A58]" />
            <span className="w-8 h-[1px] bg-[#C49A58]/35" />
          </div>
          <span className="text-xs uppercase font-serif tracking-[0.24em] gold-text-antique font-semibold">
            Sacred Destination
          </span>
          <h3 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-serif gold-text-champagne font-normal">
            {event.venueName}
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-serif text-[#D9B77B]/80 italic">
            {event.venueSubtext}
          </p>
        </div>

        {/* Venue Information Card */}
        <div className="max-w-md mx-auto my-4 p-4 rounded-2xl bg-black/30 border border-[#C49A58]/25 flex flex-col items-center">
          <div className="flex items-center gap-2 text-[#D9B77B] mb-1">
            <MapPin className="w-4 h-4" />
            <span className="font-serif text-sm font-semibold tracking-wider uppercase">
              Venue Location
            </span>
          </div>
          <p className="font-serif text-base text-[#F7EBDD]">
            {event.venueName}
          </p>
          {event.address ? (
            <p className="font-serif text-xs sm:text-sm text-[#F7EBDD]/70 mt-0.5">
              {event.address}
            </p>
          ) : (
            <p className="font-serif text-xs text-[#D9B77B]/70 mt-0.5 italic">
              Exact address will be announced prior to the ceremony
            </p>
          )}
        </div>

        {/* Map Placeholder Frame */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden my-6 border border-[#C49A58]/30 shadow-inner bg-[#1A071A] flex flex-col items-center justify-center p-6 text-center">
          {hasMapsUrl ? (
            <iframe
              title="Venue Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(event.venueName)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full filter contrast-[0.95] opacity-90"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-[#D9B77B]/80">
              <Compass className="w-8 h-8 text-[#C49A58] opacity-75" />
              <p className="font-serif text-sm gold-text-muted">
                Neelamkulagara Devi Temple
              </p>
              <p className="text-xs text-[#F7EBDD]/60 max-w-xs font-serif">
                Interactive Google Maps navigation link will be enabled once the exact pin is finalized.
              </p>
            </div>
          )}

          {/* Corner Badge */}
          <div className="absolute top-2 left-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-xs border border-[#C49A58]/30 flex items-center gap-1.5 text-[11px] font-serif text-[#D9B77B]">
            <Compass className="w-3.5 h-3.5 text-[#C49A58]" />
            <span>Devi Sannidhi</span>
          </div>
        </div>

        {/* Directions Action */}
        <div className="mt-4 flex flex-col items-center justify-center">
          {hasMapsUrl ? (
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D9B77B] via-[#C49A58] to-[#8B672B] hover:brightness-105 text-[#260C26] font-serif text-sm tracking-widest uppercase font-semibold transition-all duration-300 shadow-md cursor-pointer border border-[#F7EBDD]/50 active:scale-98"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowPendingNotice(!showPendingNotice)}
                className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#34112F]/80 hover:bg-[#34112F] text-[#D9B77B] font-serif text-sm tracking-widest uppercase font-medium transition-all duration-300 shadow-xs cursor-pointer border border-[#C49A58]/40 active:scale-98"
              >
                <Navigation className="w-4 h-4 text-[#C49A58]" />
                <span>Get Directions (Pending Location)</span>
              </button>

              <AnimatePresence>
                {showPendingNotice && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 bg-[#1A071A] text-[#F7EBDD] rounded-2xl shadow-xl border border-[#C49A58]/60 p-3 z-30 text-xs font-serif text-center flex flex-col items-center gap-1"
                  >
                    <div className="flex items-center gap-1.5 text-[#D9B77B] font-medium">
                      <Info className="w-3.5 h-3.5" />
                      <span>Google Maps Location</span>
                    </div>
                    <p className="text-[11px] text-[#F7EBDD]/80 leading-relaxed">
                      The official location URL will be provided closer to the event date.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
