import { PageDPPSection1 } from "@/components/page-dpp-section-1"
import { PageDPPSection2 } from "@/components/page-dpp-section-2"
import { PageDPPSection3 } from "@/components/page-dpp-section-3"
import { PageDPPSection4 } from "@/components/page-dpp-section-4"

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
