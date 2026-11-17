'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Check, ExternalLink, Info } from 'lucide-react';
import { invitationConfig } from '@/config/invitation';
import { getGoogleCalendarUrl, downloadIcsFile } from '@/utils/calendar';
import { CornerOrnament, LotusMotif } from './OrnamentalBorders';

export function EngagementDetails() {
  const { event } = invitationConfig;
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showDirectionsPending, setShowDirectionsPending] = useState(false);

  const handleDownloadIcs = () => {
    downloadIcsFile();
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setCalendarMenuOpen(false);
    }, 2000);
  };

  const hasMapsUrl = Boolean(event.mapsUrl && event.mapsUrl.trim().length > 0 && !event.mapsUrl.includes('search/?api=1'));

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 select-none">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative bg-ivory-card text-[#390D1C] rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(24,6,17,0.4)] border border-[#C5A16A]/70 overflow-hidden"
      >
        {/* Subtle Watermark Mandala inside ivory card */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,161,106,0.06)_0%,transparent_75%)] pointer-events-none" />

        {/* Fine Antique Gold Corner Ornaments */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Header Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#390D1C]/10 border border-[#C5A16A]/35 text-xs sm:text-sm font-serif tracking-[0.2em] uppercase font-semibold text-[#390D1C]">
            <LotusMotif className="w-4 h-3 text-[#C5A16A]" />
            Ceremonial Details
            <LotusMotif className="w-4 h-3 text-[#C5A16A]" />
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-serif text-[#390D1C] font-medium tracking-wide">
            {event.title}
          </h3>
          <p className="text-xs sm:text-sm font-serif text-[#8A6830] tracking-widest uppercase mt-1">
            {event.muhurtham}
          </p>
        </div>

        {/* Ceremonial Details Grid: Date, Day & Time, Venue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {/* Date Card */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/70 border border-[#C5A16A]/25 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#390D1C]/10 flex items-center justify-center mb-2">
              <Calendar className="w-5 h-5 text-[#390D1C]" />
            </div>
            <span className="text-xs tracking-wider uppercase text-[#8A6830] font-semibold">Date</span>
            <p className="mt-1 text-2xl font-serif font-bold text-[#390D1C]">22 Nov 2026</p>
            <span className="text-xs text-[#390D1C]/75 font-serif mt-0.5">{event.dayOfWeek}</span>
          </div>

          {/* Time Card */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/70 border border-[#C5A16A]/25 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#390D1C]/10 flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-[#390D1C]" />
            </div>
            <span className="text-xs tracking-wider uppercase text-[#8A6830] font-semibold">Auspicious Time</span>
            <p className="mt-1 text-2xl font-serif font-bold text-[#390D1C]">11:45 AM</p>
            <span className="text-xs text-[#390D1C]/75 font-serif mt-0.5">Muhurtham Ceremony</span>
          </div>

          {/* Venue Card */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/70 border border-[#C5A16A]/25 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#390D1C]/10 flex items-center justify-center mb-2">
              <MapPin className="w-5 h-5 text-[#390D1C]" />
            </div>
            <span className="text-xs tracking-wider uppercase text-[#8A6830] font-semibold">Sacred Venue</span>
            <p className="mt-1 text-base sm:text-lg font-serif font-bold text-[#390D1C] leading-tight">
              {event.venueName}
            </p>
            <span className="text-xs text-[#390D1C]/75 font-serif mt-0.5">Devi Sannidhi</span>
          </div>
        </div>

        {/* Action Buttons: Add to Calendar & Get Directions */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Add to Calendar Button with Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#390D1C] hover:bg-[#58172A] text-[#F2E5D1] font-serif text-sm tracking-widest uppercase transition-all duration-300 shadow-sm cursor-pointer border border-[#C5A16A]/40 active:scale-98"
            >
              <CalendarPlus className="w-4 h-4 text-[#E3C995]" />
              <span>Add to Calendar</span>
            </button>

            {/* Calendar Options Dropdown */}
            <AnimatePresence>
              {calendarMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 bg-[#FAF2E6] rounded-2xl shadow-xl border border-[#C5A16A]/50 p-2 z-30 flex flex-col gap-1 text-left"
                >
                  <a
                    href={getGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setCalendarMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#E3C995]/20 text-[#390D1C] font-serif text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>Google Calendar</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>

                  <button
                    onClick={handleDownloadIcs}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#E3C995]/20 text-[#390D1C] font-serif text-xs sm:text-sm font-medium transition-colors cursor-pointer text-left"
                  >
                    <span>Apple / Outlook (.ics)</span>
                    {downloadSuccess ? (
                      <Check className="w-4 h-4 text-[#390D1C]" />
                    ) : (
                      <span className="text-[10px] text-[#8A6830] font-sans uppercase">Download</span>
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Get Directions Button - Clearly marked as pending or configured */}
          <div className="relative w-full sm:w-auto">
            {hasMapsUrl ? (
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#E3C995] via-[#C5A16A] to-[#8A6830] hover:brightness-105 text-[#390D1C] font-serif text-sm tracking-widest uppercase font-semibold transition-all duration-300 shadow-sm cursor-pointer border border-[#F2E5D1]/50 active:scale-98"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            ) : (
              <button
                onClick={() => setShowDirectionsPending(!showDirectionsPending)}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#E8D6BE] hover:bg-[#DFC8AC] text-[#390D1C] font-serif text-sm tracking-widest uppercase font-medium transition-all duration-300 shadow-xs cursor-pointer border border-[#C5A16A]/35 active:scale-98"
              >
                <Navigation className="w-4 h-4 text-[#C5A16A]" />
                <span>Directions (Pending)</span>
              </button>
            )}

            {/* Directions Pending Notice Tooltip */}
            <AnimatePresence>
              {showDirectionsPending && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 bg-[#240611] text-[#F2E5D1] rounded-2xl shadow-xl border border-[#C5A16A]/60 p-3 z-30 text-xs font-serif text-center flex flex-col items-center gap-1"
                >
                  <div className="flex items-center gap-1.5 text-[#E3C995] font-medium">
                    <Info className="w-3.5 h-3.5" />
                    <span>Exact Map Location</span>
                  </div>
                  <p className="text-[11px] text-[#F2E5D1]/80 leading-relaxed">
                    The exact Google Maps pin for Neelamkulagara Devi Temple will be updated closer to the ceremony.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
