"use client"

import { useState } from "react"
import { Shield, Check } from "lucide-react"
import { AuraCertificateCard } from "./aura-certificate-card"


const traceabilityData = [
  { label: "Origin", value: "France", detail: "Asnières-sur-Seine Atelier" },
  { label: "Material", value: "Natural Cowhide Leather", detail: "Full-grain Taurillon" },
  { label: "Hardware", value: "Gold-tone Metal", detail: "Palladium-finished brass" },
  { label: "Lining", value: "Lambskin Leather", detail: "Naturally tanned" },
  { label: "Crafted", value: "September 2024", detail: "Handmade by Master Artisan" },
  { label: "Serial", value: "LV•2024•09•48864", detail: "Blockchain verified" },
]

export function ConfidenceSection() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-background">
      
      {/* 1. Aura 3D Card Display */}
      <div className="mb-16">
        <AuraCertificateCard />
      </div>

      {/* 2. Register Your Product */}
      <div className="mb-24 p-12 bg-[#f6f5f3] border-t border-b border-divider flex flex-col items-center text-center">
        <h3 className="text-xl md:text-4xl font-serif mb-4 tracking-wide text-foreground">
          Register your product to 
          unlock your own Certificate of Authenticity
        </h3>
        <p className="max-w-2xl text-4sm text-muted-foreground leading-relaxed tracking-wide">
          Join the Louis Vuitton community and gain access to exclusive services, 
          care recommendations, and a digitally secured proof of ownership.
        </p>
        <button className="mt-8 px-10 py-3 border border-black text-[10px] tracking-[0.4em] uppercase hover:bg-black hover:text-white transition-all duration-500">
          Register Now
        </button>
      </div>

      {/* Section Header - Traceability */}
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
