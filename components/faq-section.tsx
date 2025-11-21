import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="preguntas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus dudas sobre quiropraxia y fisioterapia
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Por qué escucho ruido en un ajuste quiropráctico?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                El sonido que escuchas durante un ajuste quiropráctico es completamente natural e inofensivo. Se produce
                por la liberación de burbujas de gas (principalmente nitrógeno) que se encuentran en el líquido sinovial
                de las articulaciones. Este proceso, conocido como cavitación, es similar al sonido que se produce al
                tronar los nudillos. No es el sonido de huesos rozándose o rompiéndose, sino simplemente la liberación
                de gas, lo cual es parte normal del proceso de ajuste.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿A qué edad se puede realizar quiropraxia?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                La quiropraxia es apta para todas las edades, desde recién nacidos hasta adultos mayores. Los
                tratamientos se adaptan específicamente a cada etapa de la vida. En bebés y niños, utilizamos técnicas
                muy suaves para ayudar con cólicos, problemas de sueño y desarrollo. En adultos, tratamos dolores
                crónicos, lesiones deportivas y problemas posturales. En adultos mayores, ayudamos a mantener la
                movilidad y calidad de vida. Cada ajuste es personalizado según la edad, condición física y necesidades
                específicas del paciente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿La quiropraxia mejora el sueño o dolores musculares?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Sí, definitivamente. Al liberar las interferencias en el sistema nervioso mediante ajustes
                quiroprácticos, el cuerpo puede funcionar de manera más eficiente. Muchos pacientes reportan mejoras
                significativas en la calidad del sueño, ya que el sistema nervioso puede relajarse mejor. En cuanto a
                los dolores musculares, la quiropraxia ayuda a reducir la tensión muscular, mejora la circulación y
                permite que el cuerpo se recupere naturalmente. Al restaurar el equilibrio del sistema nervioso, todo el
                organismo funciona mejor, lo que se traduce en mejor descanso y menos dolor.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Cuántas sesiones necesito para ver resultados?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                El número de sesiones varía según cada persona y su condición específica. Algunos pacientes sienten
                alivio desde la primera sesión, mientras que otros con condiciones crónicas pueden necesitar un plan de
                tratamiento más extenso. Durante tu evaluación inicial, desarrollaremos un plan personalizado basado en
                tus necesidades. Nuestro objetivo es no solo aliviar los síntomas, sino también corregir la causa
                subyacente para resultados duraderos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">¿Es segura la quiropraxia?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                La quiropraxia es una de las terapias más seguras cuando es realizada por profesionales capacitados.
                Nuestros kinesiólogos están diplomados en quiropraxia y cuentan con años de experiencia. Antes de
                cualquier tratamiento, realizamos una evaluación completa para asegurar que la quiropraxia es apropiada
                para tu caso. Los efectos secundarios son mínimos y generalmente se limitan a una ligera molestia
                muscular temporal, similar a la que se siente después del ejercicio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
