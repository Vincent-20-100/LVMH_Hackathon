"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Leaf, FileText, Scale } from "lucide-react"

interface AccordionItem {
  id: string
  icon: React.ReactNode
  title: string
  content: React.ReactNode
}

const complianceData: AccordionItem[] = [
  {
    id: "carbon",
    icon: <Leaf className="w-4 h-4" />,
    title: "Carbon Footprint",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground mb-1">Total CO₂e</p>
            <p className="font-serif text-lg">12.4 kg</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Transport</p>
            <p className="font-serif text-lg">2.1 kg</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Manufacturing</p>
            <p className="font-serif text-lg">8.2 kg</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Raw Materials</p>
            <p className="font-serif text-lg">2.1 kg</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Calculated according to ISO 14067:2018 standards. This product is part of our carbon offset program supporting
          reforestation initiatives in the Amazon basin.
        </p>
      </div>
    ),
  },
  {
    id: "material",
    icon: <FileText className="w-4 h-4" />,
    title: "Material Composition",
    content: (
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Taurillon Leather (Body)</span>
            <span className="text-sm text-muted-foreground">78%</span>
          </div>
          <div className="h-1 bg-divider">
            <div className="h-full bg-foreground" style={{ width: "78%" }} />
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Lambskin Leather (Lining)</span>
            <span className="text-sm text-muted-foreground">15%</span>
          </div>
          <div className="h-1 bg-divider">
            <div className="h-full bg-foreground" style={{ width: "15%" }} />
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Metal Hardware</span>
            <span className="text-sm text-muted-foreground">7%</span>
          </div>
          <div className="h-1 bg-divider">
            <div className="h-full bg-foreground" style={{ width: "7%" }} />
          </div>
        </div>
        <p className="text-xs text-muted-foreground pt-2">
          All leather sourced from LWG Gold-rated tanneries. Hardware is nickel-free and hypoallergenic.
        </p>
      </div>
    ),
  },
  {
    id: "compliance",
    icon: <Scale className="w-4 h-4" />,
    title: "EU Regulatory Compliance",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-divider">
            <span>ESPR Compliance</span>
            <span className="text-xs px-2 py-1 bg-foreground text-background">Verified</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-divider">
            <span>DPP Regulation (EU) 2024/1781</span>
            <span className="text-xs px-2 py-1 bg-foreground text-background">Compliant</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-divider">
            <span>REACH Regulation</span>
            <span className="text-xs px-2 py-1 bg-foreground text-background">Certified</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span>Supply Chain Due Diligence</span>
            <span className="text-xs px-2 py-1 bg-foreground text-background">Audited</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          This Digital Product Passport complies with EU Ecodesign for Sustainable Products Regulation (ESPR)
          requirements effective 2027.
        </p>
      </div>
    ),
  },
]

export function SerenityFooter() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-background">
      {/* Thin divider */}
      <div className="h-px bg-divider mb-16" />

      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Transparency & Compliance</span>
      </div>

      {/* Accordions */}
      <div className="max-w-2xl mx-auto space-y-px bg-divider">
        {complianceData.map((item) => (
          <div key={item.id} className="bg-background">
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary transition-colors"
              aria-expanded={openAccordion === item.id}
            >
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">{item.icon}</span>
                <span className="text-sm tracking-wide">{item.title}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                  openAccordion === item.id ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openAccordion === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 pt-2">{item.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Thin divider */}
      <div className="h-px bg-divider my-16" />

      {/* Footer Links */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-muted-foreground">
        <div className="flex items-center gap-8">
          <span className="tracking-[0.15em] uppercase hover:text-foreground cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="tracking-[0.15em] uppercase hover:text-foreground cursor-pointer transition-colors">
            Terms of Use
          </span>
          <span className="tracking-[0.15em] uppercase hover:text-foreground cursor-pointer transition-colors">
            Contact
          </span>
        </div>
        <div className="text-center md:text-right">
          <p className="font-serif text-sm text-foreground mb-1">LOUIS VUITTON</p>
          <p>© 2026 Louis Vuitton Malletier</p>
        </div>
      </div>

      {/* DPP ID */}
      <div className="mt-12 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60">
          DPP ID: LV-DPP-2024-M48864-FR-001
        </p>
      </div>
    </footer>
  )
}
