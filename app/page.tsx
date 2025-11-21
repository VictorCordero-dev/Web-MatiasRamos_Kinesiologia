import { HeroSection } from "@/components/hero-section"
import { ServicesNavigation } from "@/components/services-navigation"
import { QuiropraxiaSection } from "@/components/quiropraxia-section"
import { FisioterapiaSection } from "@/components/fisioterapia-section"
import { PlantillasSection } from "@/components/plantillas-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesNavigation />
      <QuiropraxiaSection />
      <FisioterapiaSection />
      <PlantillasSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
