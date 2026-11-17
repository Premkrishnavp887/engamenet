'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OpeningExperience } from '@/components/OpeningExperience';
import { MainInvitation } from '@/components/MainInvitation';
import { EngagementDetails } from '@/components/EngagementDetails';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FamilyMessage } from '@/components/FamilyMessage';
import { PhotoGallery } from '@/components/PhotoGallery';
import { VenueSection } from '@/components/VenueSection';
import { ClosingSection } from '@/components/ClosingSection';
import { AudioPlayer } from '@/components/AudioPlayer';
import { GoldenParticles } from '@/components/GoldenParticles';
import { LotusMotif } from '@/components/OrnamentalBorders';

export default function EngagementPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [audioTriggered, setAudioTriggered] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
  };

  const handleAudioStart = () => {
    setAudioTriggered(true);
  };

  const handleReplayOpening = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen w-full bg-royal-emerald overflow-x-hidden selection:bg-[#B99A51]/40">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="opening-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            <OpeningExperience
              onOpen={handleOpenInvitation}
              onAudioStart={handleAudioStart}
            />
          </motion.div>
        ) : (
          <motion.div
            key="main-invitation-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative w-full min-h-screen flex flex-col items-center justify-start"
          >
            {/* Ambient Background Gold Particles */}
            <GoldenParticles count={25} className="fixed inset-0 pointer-events-none" />

            {/* Top Replay Opening Bar */}
            <header className="w-full max-w-3xl mx-auto pt-6 px-4 flex items-center justify-between z-30 select-none">
              <button
                onClick={handleReplayOpening}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 hover:bg-[#B99A51]/20 border border-[#B99A51]/30 text-xs font-serif tracking-widest text-[#E8CF8C] transition-colors cursor-pointer"
              >
                <LotusMotif className="w-4 h-3" />
                <span>Blessings of Ganesha</span>
              </button>

              <div className="flex items-center gap-1.5 text-xs font-serif text-[#E8CF8C]/70 tracking-widest uppercase">
                <span>22 Nov 2026</span>
              </div>
            </header>

            {/* Main Ceremonial Invitation Section */}
            <MainInvitation />

            {/* Ceremonial Details (Ivory Card + Antique Gold Border) */}
            <EngagementDetails />

            {/* Real-time Countdown Timer to 22 November 2026 */}
            <CountdownTimer />

            {/* Family Invitation & Elders' Blessings */}
            <FamilyMessage />

            {/* Couple Photo Gallery with Lightbox */}
            <PhotoGallery />

            {/* Sacred Venue Section (Neelamkulagara Devi Temple) */}
            <VenueSection />

            {/* Closing Section & Auspicious Seal */}
            <ClosingSection />

            {/* Floating Audio Controller */}
            <AudioPlayer autoTriggered={audioTriggered} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
