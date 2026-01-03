"use client"

import { useState } from "react"
import { Play, MapPin, Calendar, ChevronRight } from "lucide-react"

const serviceLedger = [
  { date: "Sept 2024", service: "Initial Quality Inspection", status: "Completed", location: "Paris Atelier" },
  { date: "—", service: "First Leather Conditioning", status: "Recommended", location: "Schedule service" },
  { date: "—", service: "Hardware Polishing", status: "Available", location: "Any LV Boutique" },
  { date: "—", service: "Stitching Inspection", status: "Available", location: "Certified Artisan" },
]

export function EmpowermentSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">The Art of Care</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 tracking-tight">Aftercare & Longevity</h2>
          <div className="h-px w-16 bg-gold mx-auto mt-8" />
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div
            className="relative aspect-video bg-charcoal cursor-pointer group overflow-hidden"
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          >
            <img
              src="artisan-hands-crafting-leather-luxury-workshop-cin.jpg"
              alt="Leather Care Savoir-Faire"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-background/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-background fill-background ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
              <p className="text-xs tracking-[0.2em] uppercase text-background/70">Savoir-Faire</p>
              <p className="text-background font-serif text-xl mt-1">The Art of Leather Care</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6 max-w-xl mx-auto">
            Discover the time-honored techniques our artisans use to preserve and restore the beauty of your leather
            goods, passed down through generations of craftsmen.
          </p>
        </div>    

        {/* Thin divider */}
        <div className="h-px bg-divider mb-24" />

        {/* Service Ledger */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Service Ledger</h3>
            <span className="text-xs text-muted-foreground">Last updated: Sept 2024</span>
          </div>

          <div className="space-y-px bg-divider">
            {serviceLedger.map((entry, index) => (
              <div
                key={index}
                className="bg-background p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:bg-background/80 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3 md:w-32">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{entry.date}</span>
                </div>
                <div className="flex-1">
                  <p className="font-serif text-lg">{entry.service}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{entry.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs tracking-[0.1em] uppercase px-3 py-1 ${
                      entry.status === "Completed"
                        ? "bg-foreground text-background"
                        : entry.status === "Recommended"
                          ? "bg-gold/20 text-gold border border-gold"
                          : "border border-divider text-muted-foreground"
                    }`}
                  >
                    {entry.status}
                  </span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Find Artisan CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 border border-foreground text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors duration-300 group">
            <MapPin className="w-4 h-4" />
            <span>Find a Certified Artisan</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
