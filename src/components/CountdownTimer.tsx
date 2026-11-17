'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { invitationConfig } from '@/config/invitation';
import { LotusMotif } from './OrnamentalBorders';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export function CountdownTimer() {
  const targetDateStr = invitationConfig.event.timestamp; // '2026-11-22T11:45:00+05:30' (Asia/Kolkata)

  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(targetDateStr).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isComplete: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
      if (updated.isComplete) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <LotusMotif className="w-5 h-4 text-[#C5A16A]" />
          <span className="font-serif tracking-[0.24em] text-xs sm:text-sm uppercase gold-text-antique font-semibold">
            Counting Down To The Sacred Moment
          </span>
          <LotusMotif className="w-5 h-4 text-[#C5A16A]" />
        </div>

        <p className="font-serif italic text-sm sm:text-base text-[#F2E5D1]/80 mb-8">
          Every second brings us closer to a lifetime of togetherness
        </p>

        {/* Countdown Digits Grid on Deep Burgundy Card */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 max-w-xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-burgundy-card border border-[#C5A16A]/35 shadow-[0_10px_25px_rgba(24,6,17,0.6)] overflow-hidden group"
            >
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-radial from-[#C5A16A]/08 to-transparent pointer-events-none" />

              {/* Large Gold Number */}
              <div className="relative font-serif text-2xl sm:text-4xl md:text-5xl font-bold gold-text-champagne tracking-tight min-w-[2ch]">
                {mounted ? String(unit.value).padStart(2, '0') : '--'}
              </div>

              {/* Unit Label */}
              <span className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-serif uppercase tracking-[0.2em] text-[#E3C995]/85 font-medium">
                {unit.label}
              </span>

              {/* Fine Corner Accents */}
              <span className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-[#C5A16A]/40" />
              <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#C5A16A]/40" />
            </motion.div>
          ))}
        </div>

        {timeLeft.isComplete && mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-lg font-serif gold-text-champagne"
          >
            The Auspicious Muhurtham Has Arrived!
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
