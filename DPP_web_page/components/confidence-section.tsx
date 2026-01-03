"use client"

import { useState } from "react"
import { Shield, Check } from "lucide-react"

const traceabilityData = [
  { label: "Origin", value: "France", detail: "Asnières-sur-Seine Atelier" },
  { label: "Material", value: "Natural Cowhide Leather", detail: "Full-grain Taurillon" },
  { label: "Hardware", value: "Gold-tone Metal", detail: "Palladium-finished brass" },
  { label: "Lining", value: "Lambskin Leather", detail: "Naturally tanned" },
  { label: "Crafted", value: "September 2024", detail: "Handmade by Master Artisan" },
  { label: "Serial", value: "LV•2024•09•48864", detail: "Blockchain verified" },
]

export function ConfidenceSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      {/* Certificate Registration Banner */}
      <div
        className="relative border border-foreground p-8 md:p-12 lg:p-16 mb-24 cursor-pointer group overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute inset-0 bg-foreground transition-transform duration-700 ease-out ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield
                className={`w-5 h-5 transition-colors duration-500 ${isHovered ? "text-background" : "text-gold"}`}
              />
              <span
                className={`text-xs tracking-[0.25em] uppercase transition-colors duration-500 ${isHovered ? "text-background/70" : "text-muted-foreground"}`}
              >
                Exclusive Membership
              </span>
            </div>
            <h2
              className={`font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight max-w-xl transition-colors duration-500 ${isHovered ? "text-background" : "text-foreground"}`}
            >
              Register your product to unlock your Certificate of Authenticity
            </h2>
            <p
              className={`text-sm max-w-md transition-colors duration-500 ${isHovered ? "text-background/70" : "text-muted-foreground"}`}
            >
              Join the Louis Vuitton community and gain access to exclusive services, care recommendations, and a
              digitally secured proof of ownership.
            </p>
          </div>

          <button
            className={`px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-500 border ${
              isHovered
                ? "bg-background text-foreground border-background hover:bg-gold hover:text-foreground hover:border-gold"
                : "bg-gold text-foreground border-gold hover:bg-foreground hover:text-background hover:border-foreground"
            }`}
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-divider" />
        <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Traceability & Provenance</h3>
        <div className="h-px flex-1 bg-divider" />
      </div>

      {/* Traceability Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider">
        {traceabilityData.map((item, index) => (
          <div key={index} className="bg-background p-8 group hover:bg-secondary transition-colors duration-300">
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{item.label}</span>
              <Check className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="font-serif text-xl md:text-2xl mb-2">{item.value}</p>
            <p className="text-xs text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Verification Badge */}
      <div className="mt-16 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 border border-divider">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Blockchain Verified</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border border-divider">
          <Shield className="w-3 h-3 text-gold" />
          <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Authentic Product</span>
        </div>
      </div>
    </section>
  )
}
