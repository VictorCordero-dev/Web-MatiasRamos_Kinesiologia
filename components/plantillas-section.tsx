import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PlantillasSection() {
  return (
    <section id="plantillas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Plantillas Ortopédicas Personalizadas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnología Europie para el cuidado integral de tus pies
            </p>
          </div>

          {/* Baropodometry Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Estudios de Baropodometría</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nuestras pruebas de diagnóstico brindan información precisa sobre tu situación postural,
                  permitiéndonos ofrecer soluciones individuales para prevenir y tratar posibles patologías y lesiones
                  del pie.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro sistema de plantillas fue desarrollado por un grupo de especialistas que investigaron la
                  correcta postura y biomecánica del cuerpo y pie, para otorgar un correcto soporte al arco interno y al
                  metatarso.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] bg-muted">
                    <Image
                      src="/baropodometry-foot-pressure-analysis-digital-scan-.jpg"
                      alt="Estudio de baropodometría"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Airfeet Manufacturing */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4 order-2 md:order-1">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                    <video
                      src="/baropodometria.mp4"
                      controls
                      className="object-contain w-full h-full bg-black"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Fabricación Airfeet</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cada una de las plantillas se fabrican en nuestra sede productiva y proveedora a nivel país, Airfeet.
                  Nuestras órtesis son totalmente personalizadas y responden a las necesidades específicas del paciente,
                  brindando seguridad y confort ante las dolencias musculares y/o articulares.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Su diseño está pensado para distribuir uniformemente el peso sobre el pie, siendo un gran soporte
                  tanto para niños, jóvenes adultos, adultos mayores como también, deportistas amateurs y/o
                  profesionales.
                </p>
              </div>
            </div>
          </div>

          {/* Types of Insoles */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Tipos de Plantillas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Línea 3/4 Estándar",
                  description: "Plantillas básicas para uso diario",
                },
                {
                  title: "Línea 3/4 Forradas",
                  description: "Mayor confort con forro adicional",
                },
                {
                  title: "Calzado Anatómico Deportivo",
                  description: "Diseñadas para actividad física",
                },
                {
                  title: "Personas Diabéticas",
                  description: "Cuidado especial para pies sensibles",
                },
                {
                  title: "Running o Crossfit",
                  description: "Alto rendimiento deportivo",
                },
                {
                  title: "Líneas Específicas",
                  description: "Artesanales para patologías específicas",
                },
              ].map((type, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Images Grid for Different Insole Types */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square bg-muted">
                    <Image
                      src={`/custom-orthopedic-insole-type-${i}.jpg?height=400&width=400&query=custom orthopedic insole type ${i}`}
                      alt={`Tipo de plantilla ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Warranty and Personalization */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Garantía</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Nuestras plantillas poseen{" "}
                  <strong className="text-foreground">garantía de fábrica por 10 meses</strong> desde su entrega y una{" "}
                  <strong className="text-foreground">vida útil de 2 años</strong> aproximadamente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Plantillas Personalizadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Desarrollamos una plantilla dinámica totalmente personalizada que le permitirá al paciente alinear los
                  huesos de sus pies y tobillos, restaurar su movimiento adecuado. Mediante estímulos de cadenas
                  musculares, alcanzar la mejoría deseada y prevenir futuras patologías.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300 rounded-xl shadow-sm">
              <a href="#contacto" rel="noopener noreferrer">
                Consultar por Plantillas Ortopédicas
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
