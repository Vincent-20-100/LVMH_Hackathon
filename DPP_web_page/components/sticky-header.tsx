"use client"

import { useState, useEffect } from 'react'

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Si on est tout en haut, toujours visible
      if (currentScrollY < 10) {
        setIsVisible(true)
      }
      // Si on scroll vers le haut, montrer le header
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      // Si on scroll vers le bas, cacher le header
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white z-50 px-6 py-8 md:px-12 lg:px-20 border-b border-divider transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Digital Product Passport
        </span>
        <div className="text-2xl tracking-[0.1em] luxury-brand font-bold absolute left-1/2 -translate-x-1/2">
          LOUIS VUITTON
        </div>
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Paris
        </span>
      </div>
    </header>
  )
}