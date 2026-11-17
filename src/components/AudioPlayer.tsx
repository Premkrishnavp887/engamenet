'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ambientAudio } from '@/utils/audio';
import { invitationConfig } from '@/config/invitation';

interface AudioPlayerProps {
  autoTriggered?: boolean;
}

export function AudioPlayer({ autoTriggered = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (autoTriggered && !isPlaying) {
      handleToggleAudio();
    }
  }, [autoTriggered]);

  const handleToggleAudio = async () => {
    if (isPlaying) {
      ambientAudio.stop();
      setIsPlaying(false);
    } else {
      const started = await ambientAudio.play();
      if (started) {
        setIsPlaying(true);
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 4000);
      }
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 select-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-3 px-3 py-1.5 rounded-full bg-emerald-card border border-[#B99A51] shadow-lg text-[11px] font-serif tracking-wider text-[#E8CF8C] whitespace-nowrap flex items-center gap-1.5"
          >
            <Music className="w-3 h-3 text-[#D4AF37]" />
            <span>{invitationConfig.audio.title}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleToggleAudio}
        aria-label={isPlaying ? 'Mute Background Audio' : 'Play Background Audio'}
        className="relative group p-3.5 rounded-full bg-emerald-card border-2 border-[#B99A51]/70 hover:border-[#E8CF8C] text-[#E8CF8C] shadow-[0_8px_25px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 active:scale-95 flex items-center justify-center"
      >
        {/* Glow when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full bg-[#D4AF37]/25 blur-sm animate-pulse" />
        )}

        {/* Icon & Soundwave bars */}
        <div className="relative z-10 flex items-center gap-1.5">
          {isPlaying ? (
            <>
              <Volume2 className="w-5 h-5 text-[#FAF5EA]" />
              <div className="flex items-end gap-0.5 h-3.5">
                <span className="w-0.5 h-3 bg-[#E8CF8C] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-0.5 h-2 bg-[#E8CF8C] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-0.5 h-3.5 bg-[#E8CF8C] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </>
          ) : (
            <>
              <VolumeX className="w-5 h-5 text-[#E8CF8C]/70" />
            </>
          )}
        </div>
      </button>
    </div>
  );
}
