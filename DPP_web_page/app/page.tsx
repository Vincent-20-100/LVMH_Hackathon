import { HeroSection } from "@/components/hero-section"
import { ConfidenceSection } from "@/components/confidence-section"
import { EmpowermentSection } from "@/components/empowerment-section"
import { SerenityFooter } from "@/components/serenity-footer"

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
