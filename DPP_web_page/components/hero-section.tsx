"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const complementaryProducts = [
  { name: "Pochette Félicie", category: "Small Leather Goods", image: "luxury-leather-pochette-wallet-gold-hardware.jpg" },
  { name: "Clochette Key Holder", category: "Accessories", image: "luxury-leather-key-holder-brown.jpg" },
  { name: "Bandoulière Strap", category: "Straps", image: "luxury-leather-bag-strap-monogram.jpg" },
  { name: "Card Holder", category: "Small Leather Goods", image: "luxury-leather-card-holder-minimalist.jpg" },
  { name: "Cosmetic Pouch", category: "Accessories", image: "luxury-leather-cosmetic-pouch.jpg" },
]

export function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 py-8 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Digital Product Passport</span>
          <div className="font-serif text-lg tracking-wide">LOUIS VUITTON</div>
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Paris</span>
        </div>
      </header>

      {/* Thin divider */}
      <div className="h-px bg-divider mx-6 md:mx-12 lg:mx-20" />

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Product Image - Left Side */}
        <div className="lg:w-3/5 flex items-center justify-center p-8 md:p-12 lg:p-20">
          <div className="relative w-full max-w-lg aspect-square">
            <img
              src="luxury-louis-vuitton-capucines-leather-handbag-bro.jpg"
              alt="Capucines MM Leather Handbag"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Product Info - Right Side */}
        <div className="lg:w-2/5 flex flex-col justify-center px-6 pb-12 md:px-12 lg:px-16 lg:pr-20">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Leather Goods</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">Capucines MM</h1>
            </div>

            <div className="h-px w-16 bg-gold" />

            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-divider pb-3">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Reference</span>
                <span className="text-sm tracking-wide">M48864</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-divider pb-3">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Color</span>
                <span className="text-sm tracking-wide">Cognac</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-divider pb-3">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Size</span>
                <span className="text-sm tracking-wide">31.5 × 20 × 11 cm</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              This authentic piece has been verified through our secure blockchain-enabled traceability system. Each
              detail reflects the Maison's commitment to exceptional craftsmanship.
            </p>
          </div>
        </div>
      </div>

      {/* Thin divider */}
      <div className="h-px bg-divider mx-6 md:mx-12 lg:mx-20" />

      {/* Complementary Products Scroll */}
      <div className="px-6 py-12 md:px-12 lg:px-20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Complementary Pieces</h3>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-divider hover:border-foreground transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-divider hover:border-foreground transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {complementaryProducts.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-40 group cursor-pointer">
              <div className="aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1">{product.category}</p>
              <p className="text-sm tracking-wide">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
