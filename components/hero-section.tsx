import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { MapPin } from "lucide-react"


export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/professional-chiropractor-treating-patient-in-mode.jpg" alt="Quiropraxia profesional" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Salud En Movimiento</h1>
        <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
          Quiropraxia y Fisioterapia Personalizada para una Vida Plena
        </p>

        <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed flex items-center justify-center gap-2">
          <MapPin className="w-6 h-6 text-white-500" />
          Orán, Salta
        </p>

        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto"
          asChild
        >
          <a href="#contacto" className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Agenda tu Evaluación
          </a>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}
