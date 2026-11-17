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
    // Listen to real-time audio playback status
    const unsubscribe = ambientAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (autoTriggered && !isPlaying) {
      handleToggleAudio();
    }
  }, [autoTriggered]);

  const handleToggleAudio = async () => {
    if (isPlaying) {
      ambientAudio.pause();
    } else {
      const started = await ambientAudio.play();
      if (started) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3500);
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
            className="absolute bottom-full right-0 mb-3 px-3.5 py-1.5 rounded-full bg-burgundy-card border border-[#C5A16A]/50 shadow-lg text-[11px] font-serif tracking-wider text-[#E3C995] whitespace-nowrap flex items-center gap-1.5"
          >
            <Music className="w-3.5 h-3.5 text-[#C5A16A]" />
            <span>{invitationConfig.audio.title}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleToggleAudio}
        aria-label={isPlaying ? 'Mute Background Audio' : 'Play Background Audio'}
        className="relative group p-3.5 rounded-full bg-[#390D1C]/90 hover:bg-[#58172A] border border-[#C5A16A]/50 hover:border-[#E3C995] text-[#E3C995] shadow-[0_8px_25px_rgba(24,6,17,0.7)] cursor-pointer transition-all duration-300 active:scale-95 flex items-center justify-center backdrop-blur-xs"
      >
        {/* Glow when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full bg-[#C5A16A]/20 blur-sm animate-pulse" />
        )}

        <div className="relative z-10 flex items-center gap-1.5">
          {isPlaying ? (
            <>
              <Volume2 className="w-5 h-5 text-[#F2E5D1]" />
              <div className="flex items-end gap-0.5 h-3.5">
                <span className="w-0.5 h-3 bg-[#E3C995] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-0.5 h-2 bg-[#E3C995] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-0.5 h-3.5 bg-[#E3C995] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </>
          ) : (
            <VolumeX className="w-5 h-5 text-[#E3C995]/70" />
          )}
        </div>
      </button>
    </div>
  );
}
