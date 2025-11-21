import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FisioterapiaSection() {
  return (
    <section id="fisioterapia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Fisioterapia</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Rehabilitación y recuperación funcional para mejorar tu calidad de vida
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left: Image/Video Placeholder */}
            <div className="space-y-4 order-2 md:order-1">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                    <video
                      src="/VIDEOFISIO.mp4"
                      controls
                      className="object-contain w-full h-full bg-black"
                    />
                  </div>
                </CardContent>
              </Card>

              
            </div>

            {/* Right: Description */}
            <div className="space-y-6 order-1 md:order-2">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">¿Qué es la Fisioterapia?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  La fisioterapia es una disciplina de la salud que ofrece tratamientos terapéuticos y de rehabilitación
                  no farmacológica para diagnosticar, prevenir y tratar síntomas de múltiples dolencias.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Beneficios del Tratamiento</h3>
                <ul className="space-y-3">
                  {[
                    "Recuperación post-operatoria",
                    "Rehabilitación de lesiones deportivas",
                    "Mejora de la movilidad y flexibilidad",
                    "Reducción del dolor crónico",
                    "Fortalecimiento muscular",
                    "Prevención de futuras lesiones",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Treatment Techniques */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Técnicas de Tratamiento</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Terapia manual",
                "Ejercicios terapéuticos",
                "Electroterapia",
                "Ultrasonido terapéutico",
                "Masaje deportivo",
                "Rehabilitación funcional",
              ].map((technique, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <p className="text-foreground font-medium">{technique}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Images Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square bg-muted">
                    <Image
                      src={`/FISIO_${i}.jpg?height=400&width=400&query=physiotherapy treatment technique ${i}`}
                      alt={`Técnica de fisioterapia ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-white-500 border border-gray-300 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300 rounded-xl shadow-sm">
              <a href="#contacto" rel="noopener noreferrer">
                Agendar Consulta de Fisioterapia
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
