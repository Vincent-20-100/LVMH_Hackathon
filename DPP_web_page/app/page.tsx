import { HeroSection } from "@/components/Page-DPP-section-1"
import { ConfidenceSection } from "@/components/Page-DPP-section-2"
import { EmpowermentSection } from "@/components/Page-DPP-section-3"
import { SerenityFooter } from "@/components/Page-DPP-section-4"

export default function DigitalProductPassport() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ConfidenceSection />
      <EmpowermentSection />
      <SerenityFooter />
    </main>
  )
}
