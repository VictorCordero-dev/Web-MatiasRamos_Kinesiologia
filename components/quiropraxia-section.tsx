import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function QuiropraxiaSection() {
  return (
    <section id="quiropraxia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Quiropraxia</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tratamiento especializado para el cuidado de tu columna vertebral y sistema nervioso
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left: Description */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">¿Qué es la Quiropraxia?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  La quiropraxia es una disciplina de la salud que se enfoca en el diagnóstico, tratamiento y prevención
                  de los trastornos del sistema neuromusculoesquelético, especialmente de la columna vertebral.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Beneficios del Tratamiento</h3>
                <ul className="space-y-3">
                  {[
                    "Alivio del dolor de espalda y cuello",
                    "Mejora de la postura corporal",
                    "Reducción de dolores de cabeza y migrañas",
                    "Mayor movilidad articular",
                    "Prevención de lesiones futuras",
                    "Mejora del rendimiento deportivo",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Image/Video Placeholder */}
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                    <video
                      src="/quirovideo.mp4"
                      controls
                      className="object-contain w-full h-full bg-black"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Conditions Treated */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Condiciones que Tratamos</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Dolor lumbar y ciática",
                "Cervicalgia y tortícolis",
                "Hernias discales",
              ].map((condition, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <p className="text-foreground font-medium">{condition}</p>
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
                      src={`/chiropractic-treatment-technique-${i}.jpg?height=400&width=400&query=chiropractic treatment technique ${i}`}
                      alt={`Técnica quiropráctica ${i}`}
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
                Agendar Consulta de Quiropraxia
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
