'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { invitationConfig } from '@/config/invitation';
import { LightboxModal } from './LightboxModal';
import { CornerOrnament, LotusMotif } from './OrnamentalBorders';

export function PhotoGallery() {
  const { gallery } = invitationConfig;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 select-none">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <LotusMotif className="w-5 h-4" />
          <span className="font-serif tracking-[0.25em] text-xs sm:text-sm uppercase gold-text-antique font-semibold">
            Cherished Memories
          </span>
          <LotusMotif className="w-5 h-4" />
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif gold-text-bright font-normal tracking-wide">
          Moments Of Grace
        </h3>
        <p className="mt-2 font-serif italic text-xs sm:text-sm text-[#F5EBD5]/80 max-w-md mx-auto">
          A glimpse into the warmth, devotion and joy leading to this sacred union
        </p>
      </div>

      {/* 2x2 Responsive Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {gallery.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            onClick={() => setSelectedPhotoIndex(index)}
            className="group relative rounded-2xl p-2.5 sm:p-3 bg-emerald-card border-2 border-[#B99A51]/60 shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer overflow-hidden transition-all duration-300 hover:border-[#E8CF8C] hover:shadow-[0_20px_45px_rgba(212,175,55,0.25)]"
          >
            {/* Ornate Corner Flourishes */}
            <CornerOrnament position="top-left" />
            <CornerOrnament position="top-right" />
            <CornerOrnament position="bottom-left" />
            <CornerOrnament position="bottom-right" />

            {/* Inner Gold Inset Frame */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black/40 border border-[#E8CF8C]/30">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 450px"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#092D23]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

              {/* View Fullscreen Pill Button */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xs text-[#E8CF8C] border border-[#B99A51]/40 text-xs font-serif">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Full</span>
              </div>
            </div>

            {/* Photo Caption Label */}
            <div className="mt-3 text-center px-2">
              <p className="font-serif text-sm sm:text-base gold-text-bright font-medium">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photos={gallery}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNavigate={(newIndex) => setSelectedPhotoIndex(newIndex)}
      />
    </section>
  );
}
