"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCarousel from "./product-carousel"
import {StickyHeader} from "./sticky-header"


const complementaryProducts = [                                         // <-- COMPLEMENTARY PRODUCTS IMAGES PATHS --<
  { name: "Zippy Wallet", 
    category: "Small Leather Goods", 
    image: "zippy--1.png",
    url: "https://us.louisvuitton.com/eng-us/products/zippy-wallet-monogram-013178/M42616" },
  { name: "Sarah Wallet", 
    category: "Small Leather Goods", 
    image: "sarah--1.png",
    url: "https://us.louisvuitton.com/eng-us/products/sarah-wallet-monogram-007824/M62236" },
  { name: "Victorine Wallet", 
    category: "Small Leather Goods", 
    image: "victorine--2.png",
    url: "https://us.louisvuitton.com/eng-us/products/victorine-wallet-monogram-013217/M41938" },
  { name: "The LV Square Sunglasses", 
    category: "Accessories", image: "lv-square-sunglasses--1.png",
    url: "https://us.louisvuitton.com/eng-us/products/the-lv-square-sunglasses-s00-nvprod7170011v/Z2996W"},
  { name: "Monogram Silhouette BB Bandeau", 
    category: "Accessories", image: "louis-vuitton-bandeau-bb-monogram-silhouette--M97169_PM1_Detail view.avif",
    url: "https://us.louisvuitton.com/eng-us/products/mng-silhouette-bb-bandeau-s00-nvprod6520152v/M97169"}
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
      <StickyHeader />

      {/* Thin divider */}
      <div className="h-px bg-divider mx-6 md:mx-12 lg:mx-20" />

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col lg:flex-row">  {/* ← CETTE LIGNE ÉTAIT MANQUANTE */}
        {/* Product Image - Left Side */}
        <div className="lg:w-3/5 flex items-center justify-center p-8 md:p-12 lg:p-20">
          <ProductCarousel />
        </div>

        {/* Product Info - Right Side */}
        <div className="lg:w-2/5 flex flex-col justify-center px-6 pb-12 md:px-12 lg:px-16 lg:pr-20">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Leather Goods</p>
              <h1 className="luxury-brand text-l md:text-5xl lg:text-6xl tracking-tight text-balance">
                <a 
                  href="https://fr.louisvuitton.com/fra-fr/produits/sac-again-monogram-nvprod6550038v/M25877" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  Again Bag
                </a>
              </h1>
            </div>

            <div className="h-px w-16 bg-gold" />

            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-divider pb-3">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Reference</span>
                <span className="text-sm tracking-wide">M25877</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-divider pb-3">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Model</span>
                <span className="text-sm tracking-wide">Monogram</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-divider pb-3">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Size</span>
                <span className="text-sm tracking-wide">45 x 33 x 13 cm</span>
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
            <a 
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-40 group cursor-pointer"
            >
              <div className="aspect-[1/1] bg-secondary mb-4 overflow-hidden">
                <img
                  src={product.image || "placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1">{product.category}</p>
              <p className="text-sm tracking-wide">{product.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
