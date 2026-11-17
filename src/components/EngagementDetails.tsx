'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Check, ExternalLink } from 'lucide-react';
import { invitationConfig } from '@/config/invitation';
import { getGoogleCalendarUrl, downloadIcsFile } from '@/utils/calendar';
import { CornerOrnament, LotusMotif } from './OrnamentalBorders';

export function EngagementDetails() {
  const { event } = invitationConfig;
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadIcs = () => {
    downloadIcsFile();
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setCalendarMenuOpen(false);
    }, 2000);
  };

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 select-none">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative bg-ivory-card text-[#173B2D] rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-2 border-[#B99A51] overflow-hidden"
      >
        {/* Subtle Watermark Mandala inside ivory card */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,154,81,0.06)_0%,transparent_75%)] pointer-events-none" />

        {/* Ornate Gold Corner Ornaments */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Header Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#173B2D]/10 border border-[#B99A51]/40 text-xs sm:text-sm font-serif tracking-[0.2em] uppercase font-semibold text-[#173B2D]">
            <LotusMotif className="w-4 h-3" />
            Ceremonial Details
            <LotusMotif className="w-4 h-3" />
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-serif text-[#064B38] font-medium tracking-wide">
            {event.title}
          </h3>
          <p className="text-xs sm:text-sm font-serif text-[#8A6D2B] tracking-widest uppercase mt-1">
            {event.muhurtham}
          </p>
        </div>

        {/* Ceremonial Details Grid: Date, Day & Time, Venue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {/* Date Card */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 border border-[#B99A51]/30 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#064B38]/10 flex items-center justify-center mb-2">
              <Calendar className="w-5 h-5 text-[#064B38]" />
            </div>
            <span className="text-xs tracking-wider uppercase text-[#8A6D2B] font-semibold">Date</span>
            <p className="mt-1 text-2xl font-serif font-bold text-[#064B38]">22 Nov 2026</p>
            <span className="text-xs text-[#173B2D]/75 font-serif mt-0.5">{event.dayOfWeek}</span>
          </div>

          {/* Time Card */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 border border-[#B99A51]/30 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#064B38]/10 flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-[#064B38]" />
            </div>
            <span className="text-xs tracking-wider uppercase text-[#8A6D2B] font-semibold">Auspicious Time</span>
            <p className="mt-1 text-2xl font-serif font-bold text-[#064B38]">11:45 AM</p>
            <span className="text-xs text-[#173B2D]/75 font-serif mt-0.5">Muhurtham Ceremony</span>
          </div>

          {/* Venue Card */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 border border-[#B99A51]/30 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#064B38]/10 flex items-center justify-center mb-2">
              <MapPin className="w-5 h-5 text-[#064B38]" />
            </div>
            <span className="text-xs tracking-wider uppercase text-[#8A6D2B] font-semibold">Sacred Venue</span>
            <p className="mt-1 text-base sm:text-lg font-serif font-bold text-[#064B38] leading-tight">
              {event.venueName}
            </p>
            <span className="text-xs text-[#173B2D]/75 font-serif mt-0.5">{event.state}</span>
          </div>
        </div>

        {/* Action Buttons: Add to Calendar & Get Directions */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Add to Calendar Button with Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#064B38] hover:bg-[#173B2D] text-[#FAF5EA] font-serif text-sm tracking-widest uppercase transition-all duration-300 shadow-md cursor-pointer border border-[#B99A51]/50 active:scale-98"
            >
              <CalendarPlus className="w-4 h-4 text-[#E8CF8C]" />
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
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 bg-[#FAF5EA] rounded-2xl shadow-xl border border-[#B99A51] p-2 z-30 flex flex-col gap-1 text-left"
                >
                  <a
                    href={getGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setCalendarMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#E8CF8C]/25 text-[#064B38] font-serif text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>Google Calendar</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>

                  <button
                    onClick={handleDownloadIcs}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#E8CF8C]/25 text-[#064B38] font-serif text-xs sm:text-sm font-medium transition-colors cursor-pointer text-left"
                  >
                    <span>Apple / Outlook (.ics)</span>
                    {downloadSuccess ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <span className="text-[10px] text-[#8A6D2B] font-sans uppercase">Download</span>
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Get Directions Button */}
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#B99A51] to-[#8A6D2B] hover:brightness-110 text-[#092D23] font-serif text-sm tracking-widest uppercase font-semibold transition-all duration-300 shadow-md cursor-pointer border border-[#FAF5EA]/50 active:scale-98"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
