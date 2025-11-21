export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Quiropraxia Matías Ramos</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Centro de bienestar integral especializado en quiropraxia y fisioterapia. Tu salud en manos expertas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicios"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#preguntas"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+54 3878687637</li>
              <li>Carlos Pellegrini 758</li>
              <li>Sede Oran, Salta</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Quiropraxia Matías Ramos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
