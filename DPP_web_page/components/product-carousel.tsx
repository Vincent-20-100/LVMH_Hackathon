"use client"

import { useState } from 'react';

const getAssetPath = (path: string) => `/LVMH_Hackathon/${path.startsWith('/') ? path.slice(1) : path}`;

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: getAssetPath("louis-vuitton-sac-again--M25877_PM2_Front view.avif"),
      alt: "Sac Again - Face"
    },
    {
      src: getAssetPath("louis-vuitton-sac-again--M25877_PM1_Side view.avif"),
      alt: "Sac Again - Side"
    },
    {
      src: getAssetPath("louis-vuitton-sac-again--M25877_PM1_Interior view.avif"),
      alt: "Sac Again - Interior"
    },
    {
      src: getAssetPath("louis-vuitton-sac-again--M25877_PM1_Detail view.avif"),
      alt: "Sac Again - Detail"
    },
    {
      src: getAssetPath("louis-vuitton-sac-again--M25877_PM1_Back view.avif"),
      alt: "Sac Again - Back"
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-lg aspect-square group">
      {/* Main Image - Sans lien */}
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-full object-contain transition-opacity duration-500"
      />

      {/* Navigation Arrows - Always visible */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-3xl opacity-30 hover:opacity-70 transition-opacity duration-300"
        aria-label="Previous"
      >
        ‹
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-3xl opacity-30 hover:opacity-70 transition-opacity duration-300"
        aria-label="Next"
      >
        ›
      </button>

      {/* Subtle dots - Bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-black w-6'
                : 'bg-black/40 hover:bg-black/60'
            }`}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}