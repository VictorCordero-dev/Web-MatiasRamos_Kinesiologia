"use client"

import { Activity, Heart, Footprints } from "lucide-react"

export function ServicesNavigation() {
  const services = [
    {
      id: "quiropraxia",
      title: "Quiropraxia",
      icon: Activity,
      description: "Ajustes vertebrales",
    },
    {
      id: "fisioterapia",
      title: "Fisioterapia",
      icon: Heart,
      description: "Rehabilitación integral",
    },
    {
      id: "plantillas",
      title: "Plantillas Ortopédicas",
      icon: Footprints,
      description: "Europie personalizadas",
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="servicios" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selecciona el servicio que necesitas para conocer más detalles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className="group relative overflow-hidden rounded-xl border-2 border-primary/20 bg-card p-8 text-center transition-all hover:border-primary hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary">
                    <Icon className="w-8 h-8 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
                <div className="mt-4 text-primary font-semibold text-sm group-hover:underline">Ver más →</div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
