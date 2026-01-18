"use client";

import { useRef, useEffect, useState } from 'react';
import { ProductImage } from '@/lib/products';

const getAssetPath = (path: string) => `/LVMH_Hackathon/${path.startsWith('/') ? path.slice(1) : path}`;

interface ProductCarouselProps {
  images: ProductImage[];
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Met à jour l'index des points quand on scroll au doigt
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    const newIndex = Math.round(scrollRef.current.scrollLeft / width);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: index * width,
      behavior: "smooth"
    });
  };

  const goToPrevious = () => {
    if (!images) return;
    const nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    scrollTo(nextIndex);
  };

  const goToNext = () => {
    if (!images) return;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    scrollTo(nextIndex);
  };

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl aspect-square mx-auto group flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }
  
  return (
    <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl aspect-square mx-auto group">
      
      {/* Container de Scroll Horizontal (Gère le tactile et le glissé) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 snap-center flex items-center justify-center">
            <img
              src={getAssetPath(img.src)}
              alt={img.alt}
              className="w-full h-full object-contain select-none pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Cachées sur petit mobile pour laisser la place au geste */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 w-12 h-24 hidden sm:flex items-center justify-center text-black/20 hover:text-black/70 text-4xl transition-all z-10"
        aria-label="Previous"
      >
        ‹
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 w-12 h-24 hidden sm:flex items-center justify-center text-black/20 hover:text-black/70 text-4xl transition-all z-10"
        aria-label="Next"
      >
        ›
      </button>

      {/* Subtle dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-black/40 w-8' : 'bg-black/10 w-2'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
