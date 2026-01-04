"use client"

import { useState } from "react"
import { Play, MapPin, Calendar, ChevronRight } from "lucide-react"

const getAssetPath = (path: string) => `/LVMH_Hackathon/${path.startsWith('/') ? path.slice(1) : path}`;

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
        <div className="text-center mb-12 md:mb-16 lg:mb-24">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground">The Art of Care</span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-3 md:mt-4 tracking-tight">Aftercare & Longevity</h2>
          <div className="h-px w-12 md:w-16 bg-gold mx-auto mt-6 md:mt-8" />
        </div>

        {/* Video Section */}
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-16 md:mb-20 lg:mb-24">
          <div
            className="relative aspect-video bg-charcoal cursor-pointer group overflow-hidden"
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          >
            <img
              src={getAssetPath("artisan-hands-crafting-leather-luxury-workshop-cin.jpg")}
              alt="Leather Care Savoir-Faire"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-background/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-background fill-background ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 bg-gradient-to-t from-charcoal/80 to-transparent">
              <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-background/70">Savoir-Faire</p>
              <p className="text-background font-serif text-base md:text-lg lg:text-xl mt-1">The Art of Leather Care</p>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground text-center mt-4 md:mt-6 max-w-lg md:max-w-xl mx-auto px-4">
            Discover the time-honored techniques our artisans use to preserve and restore the beauty of your leather
            goods, passed down through generations of craftsmen.
          </p>
        </div>    

        {/* Thin divider */}
        <div className="h-px bg-divider mb-24" />

        {/* Service Ledger */}
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6 md:mb-8">
            <h3 className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground">Service Ledger</h3>
            <span className="text-[10px] md:text-xs text-muted-foreground">Last updated: Sept 2024</span>
          </div>

          <div className="space-y-px bg-divider">
            {serviceLedger.map((entry, index) => (
              <div
                key={index}
                className="bg-background p-5 md:p-6 lg:p-7 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 lg:gap-8 hover:bg-background/80 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2 md:gap-3 md:w-28 lg:w-32">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                  <span className="text-xs md:text-sm text-muted-foreground">{entry.date}</span>
                </div>
                <div className="flex-1">
                  <p className="font-serif text-base md:text-lg">{entry.service}</p>
                  <div className="flex items-center gap-1.5 md:gap-2 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[11px] md:text-xs text-muted-foreground">{entry.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <span
                    className={`text-[10px] md:text-xs tracking-[0.1em] uppercase px-2.5 md:px-3 py-1 whitespace-nowrap ${
                      entry.status === "Completed"
                        ? "bg-foreground text-background"
                        : entry.status === "Recommended"
                          ? "bg-gold/20 text-gold border border-gold"
                          : "border border-divider text-muted-foreground"
                    }`}
                  >
                    {entry.status}
                  </span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Find Artisan CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <button className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 border border-foreground text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors duration-300 group">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>Find a Certified Artisan</span>
            <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
