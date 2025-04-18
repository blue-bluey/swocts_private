import NavbarMenu from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import SponsorsSection from "@/components/sponsors-section"
import AgendaSection from "@/components/agenda-section"
import WhyAttendSection from "@/components/why-attend-section"
import LocationMissionSection from "@/components/location-mission-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarMenu />
      <HeroSection />
      <SponsorsSection />
      <AgendaSection />
      <WhyAttendSection />
      <LocationMissionSection />
      <CTASection />
      <Footer />
    </main>
  )
}
