"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Hola! Mi nombre es ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/543878525806?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contacto" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Comencemos tu Camino al Bienestar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y agenda tu evaluación
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/543878525806"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-lg"
                    >
                      +54 3878687637
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Respuesta rápida por WhatsApp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ubicación</h3>
                    <p className="text-muted-foreground">Carlos Pellegrini 758</p>
                    <p className="text-sm text-muted-foreground mt-1">Sede Oran, Salta</p>
                    <p className="text-muted-foreground">--------------------</p>
                    <p className="text-sm text-muted-foreground mt-1">Embarcacion, Salta</p>
                    <p className="text-muted-foreground">--------------------</p>
                    <p className="text-sm text-muted-foreground mt-1">Tartagal, Salta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Horarios</h3>
                    <p className="text-muted-foreground">Lunes a Viernes: 8:00 - 20:00 HS</p>
                    <p className="text-muted-foreground">Sábados: 8:00 - 14:00 HS</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="pt-4">
              <h3 className="font-semibold mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/quiropraxiamatiasramos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-red-500" />
                </a>
                <a
                  href="https://facebook.com/matias.ramos1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-blue-500" />
                </a>
                <a
                  href="https://tiktok.com/@quiropraxiamatiasramos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900/20 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#25D366] hover:bg-accent/90 text-accent-foreground">
                  <Phone className="w-5 h-5 mr-2" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
