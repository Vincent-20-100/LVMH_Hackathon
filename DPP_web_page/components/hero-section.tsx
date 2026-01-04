"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCarousel from "./product-carousel"
import {StickyHeader} from "./sticky-header"

const getAssetPath = (path: string) => `/LVMH_Hackathon/${path.startsWith('/') ? path.slice(1) : path}`;

const complementaryProducts = [                                         // <-- COMPLEMENTARY PRODUCTS IMAGES PATHS --<
  { name: "Zippy Wallet",
    category: "Small Leather Goods",
    image: getAssetPath("zippy--1.png"),
    url: "https://us.louisvuitton.com/eng-us/products/zippy-wallet-monogram-013178/M42616" },
  { name: "Sarah Wallet",
    category: "Small Leather Goods",
    image: getAssetPath("sarah--1.png"),
    url: "https://us.louisvuitton.com/eng-us/products/sarah-wallet-monogram-007824/M62236" },
  { name: "Victorine Wallet",
    category: "Small Leather Goods",
    image: getAssetPath("victorine--2.png"),
    url: "https://us.louisvuitton.com/eng-us/products/victorine-wallet-monogram-013217/M41938" },
  { name: "The LV Square Sunglasses",
    category: "Accessories", image: getAssetPath("lv-square-sunglasses--1.png"),
    url: "https://us.louisvuitton.com/eng-us/products/the-lv-square-sunglasses-s00-nvprod7170011v/Z2996W"},
  { name: "Monogram Silhouette BB Bandeau",
    category: "Accessories", image: getAssetPath("louis-vuitton-bandeau-bb-monogram-silhouette--M97169_PM1_Detail view.avif"),
    url: "https://us.louisvuitton.com/eng-us/products/mng-silhouette-bb-bandeau-s00-nvprod6520152v/M97169"}
]

export function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollAmount, setScrollAmount] = useState(200)

  // Hook pour ajuster le scrollAmount selon la taille de l'écran
  useEffect(() => {
    const updateScrollAmount = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth
        if (width >= 1536) setScrollAmount(280)      // 2xl
        else if (width >= 1280) setScrollAmount(240) // xl
        else if (width >= 1024) setScrollAmount(220) // lg
        else if (width >= 768) setScrollAmount(200)  // md
        else setScrollAmount(160)                    // sm
      }
    }

    updateScrollAmount()
    window.addEventListener('resize', updateScrollAmount)
    return () => window.removeEventListener('resize', updateScrollAmount)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
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
              <h1 className="text-l md:text-2xl tracking-[0.05em] text-balance">
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
      <div className="px-6 py-4 md:px-12 lg:px-20">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h3 className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground">Complementary Pieces</h3>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 md:p-3 border border-divider hover:border-foreground transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 md:p-3 border border-divider hover:border-foreground transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {complementaryProducts.map((product, index) => (
            <a
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-32 sm:w-36 md:w-44 lg:w-52 xl:w-60 group cursor-pointer"
            >
              <div className="aspect-[1/1] bg-secondary mb-3 md:mb-4 overflow-hidden">
                <img
                  src={product.image || "placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[10px] md:text-xs tracking-[0.1em] uppercase text-muted-foreground mb-1">{product.category}</p>
              <p className="text-xs md:text-sm tracking-wide">{product.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
