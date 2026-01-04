"use client"

import { useState, useEffect } from 'react'

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white z-50 px-6 py-6 md:py-8 md:px-12 lg:px-20 border-b border-divider transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between relative min-h-[40px]">
        
        {/* TEXTE GAUCHE */}
        <span className="hidden md:block text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Digital Product Passport
        </span>

        {/* BLOC CENTRAL : Devenu un lien vers la homepage LV */}
        <a 
          href="https://eu.louisvuitton.com/eng-e1/homepage" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 text-center w-full max-w-[max-content] hover:opacity-60 transition-opacity cursor-pointer"
        >
          <div className="text-xl md:text-2xl tracking-[0.1em] luxury-brand font-bold whitespace-nowrap">
            LOUIS VUITTON
          </div>
          
          {/* Sous-titre : Uniquement mobile */}
          <span className="block md:hidden text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
            Digital Product Passport
          </span>
        </a>

        {/* TEXTE DROITE (PARIS) */}
        <span className="hidden md:block text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Paris
        </span>

      </div>
    </header>
  )
}