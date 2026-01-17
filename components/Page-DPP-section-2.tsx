"use client"
import { Shield, Check } from "lucide-react"
import { AuraCertificateCard } from "./feature-certificate-card-v2"

const traceabilityData = [
  { label: "Origin", value: "France", detail: "Asnières-sur-Seine Atelier" },
  { label: "Material", value: "Natural Cowhide Leather", detail: "Full-grain Taurillon" },
  { label: "Hardware", value: "Gold-tone Metal", detail: "Palladium-finished brass" },
  { label: "Lining", value: "Lambskin Leather", detail: "Naturally tanned" },
  { label: "Crafted", value: "September 2024", detail: "Handmade by Master Artisan" },
  { label: "Serial", value: "LV•2024•09•48864", detail: "Blockchain verified" },
]

export function PageDPPSection2() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-background">
      
      {/* 1. Aura 3D Card Display with Popup */}
      <div className="mb-16">
        <AuraCertificateCard />
      </div>

      {/* Section Header - Traceability */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-divider" />
        <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Traceability & Provenance</h3>
        <div className="h-px flex-1 bg-divider" />
      </div>

      {/* Traceability Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-divider">
        {traceabilityData.map((item, index) => (
          <div key={index} className="bg-background p-6 md:p-8 lg:p-10 group hover:bg-secondary transition-colors duration-300">
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground">{item.label}</span>
              <Check className="w-3 h-3 md:w-4 md:h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="font-serif text-lg md:text-xl lg:text-2xl mb-2">{item.value}</p>
            <p className="text-[11px] md:text-xs text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Verification Badge */}
      <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
        <div className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 border border-divider">
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground whitespace-nowrap">Blockchain Verified</span>
        </div>
        <div className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 border border-divider">
          <Shield className="w-3 h-3 md:w-4 md:h-4 text-gold" />
          <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground whitespace-nowrap">Authentic Product</span>
        </div>
      </div>
    </section>
  )
}
