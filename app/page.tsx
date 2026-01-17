import { PageDPPSection1 } from "@/components/Page-DPP-section-1"
import { PageDPPSection2 } from "@/components/Page-DPP-section-2"
import { PageDPPSection3 } from "@/components/Page-DPP-section-3"
import { PageDPPSection4 } from "@/components/Page-DPP-section-4"

export default function DigitalProductPassport() {
  return (
    <main className="min-h-screen bg-background">
      <PageDPPSection1 />
      <PageDPPSection2 />
      <PageDPPSection3 />
      <PageDPPSection4 />
    </main>
  )
}
