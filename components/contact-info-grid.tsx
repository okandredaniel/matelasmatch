import { contactItems } from "@/data/contact"
import type { ContactIcon } from "@/types/contact"
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react"

const iconMap: Record<ContactIcon, LucideIcon> = { mail: Mail, phone: Phone, map: MapPin, clock: Clock }

export function ContactInfoGrid() {
  return (
    <section className="py-8 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactItems.map((info) => {
            const Icon = iconMap[info.icon]
            return (
              <div key={info.id} className="glass-card-enhanced rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h2 className="font-sans text-lg font-semibold text-foreground mb-2">{info.title}</h2>
                <p className="text-foreground font-medium mb-1">{info.content}</p>
                {info.description && <p className="text-sm text-slate-600">{info.description}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
