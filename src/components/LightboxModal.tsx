'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '@/config/invitation';
import { CornerOrnament, LotusMotif } from './OrnamentalBorders';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function LightboxModal({ photos, currentIndex, onClose, onNavigate }: LightboxModalProps) {
  const isOpen = currentIndex !== null;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex !== null) {
        onNavigate((currentIndex + 1) % photos.length);
      }
      if (e.key === 'ArrowLeft' && currentIndex !== null) {
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      }
    },
    [isOpen, currentIndex, photos.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && currentPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md select-none"
          onClick={onClose}
        >
          {/* Top Bar Controls */}
          <div
            className="absolute top-4 right-4 z-60 flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-serif text-xs tracking-widest text-[#E3C995] uppercase px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-[#C5A16A]/30">
              {(currentIndex ?? 0) + 1} / {photos.length}
            </span>
            <button
              onClick={onClose}
              aria-label="Close Lightbox"
              className="p-2.5 rounded-full bg-black/60 hover:bg-[#58172A] text-[#E3C995] border border-[#C5A16A]/40 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(((currentIndex ?? 0) - 1 + photos.length) % photos.length);
            }}
            aria-label="Previous Photo"
            className="absolute left-2 sm:left-6 z-60 p-3 rounded-full bg-black/60 hover:bg-[#58172A] text-[#E3C995] border border-[#C5A16A]/40 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(((currentIndex ?? 0) + 1) % photos.length);
            }}
            aria-label="Next Photo"
            className="absolute right-2 sm:right-6 z-60 p-3 rounded-full bg-black/60 hover:bg-[#58172A] text-[#E3C995] border border-[#C5A16A]/40 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Photo Card */}
          <motion.div
            key={currentPhoto.id}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full max-h-[85vh] flex flex-col items-center rounded-3xl overflow-hidden bg-burgundy-card border border-[#C5A16A]/70 shadow-[0_25px_60px_rgba(24,6,17,0.9)]"
          >
            <CornerOrnament position="top-left" />
            <CornerOrnament position="top-right" />

            {/* Photo Container */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black/60 overflow-hidden flex items-center justify-center">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 95vw, 600px"
              />
            </div>

            {/* Caption Footer */}
            <div className="w-full p-4 sm:p-5 bg-gradient-to-t from-[#240611] to-[#390D1C] text-center border-t border-[#C5A16A]/30">
              <div className="flex items-center justify-center gap-2 mb-1">
                <LotusMotif className="w-4 h-3 text-[#C5A16A]" />
                <h4 className="font-serif text-base sm:text-lg gold-text-muted font-medium">
                  {currentPhoto.caption}
                </h4>
                <LotusMotif className="w-4 h-3 text-[#C5A16A]" />
              </div>
              <p className="text-xs font-serif text-[#F2E5D1]/75 italic">
                {currentPhoto.alt}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
