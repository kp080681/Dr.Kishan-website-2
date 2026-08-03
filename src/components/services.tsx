import { services } from "@/content/site";
import { Reveal } from "@/components/reveal";
import {
  IconArrow,
  IconGeneral,
  IconLaparoscopic,
  IconLaser,
  IconVascular,
} from "@/components/icons";

const icons = {
  general: IconGeneral,
  laparoscopic: IconLaparoscopic,
  laser: IconLaser,
  vascular: IconVascular,
} as const;

export function Services() {
  return (
    <section
      id="services"
      className="living-section depth-light section-pad bg-[linear-gradient(180deg,rgba(232,240,248,0.55)_0%,rgba(247,245,242,0.2)_100%)]"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        <Reveal className="section-head">
          <p className="eyebrow">Core services</p>
          <h2 id="services-heading" className="heading-display heading-xl max-w-3xl">
            Surgical care organised around clear clinical pathways
          </h2>
          <p className="lede">
            Four primary service areas help patients understand where to begin. Detailed
            service pages will follow in a later phase.
          </p>
        </Reveal>

        <div className="section-content grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.id as keyof typeof icons];
            return (
              <Reveal
                key={service.id}
                as="article"
                delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | undefined}
                className="motion-card group flex h-full flex-col rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-6 shadow-[0_12px_32px_rgba(11,28,51,0.04)] transition-shadow duration-200 hover:shadow-[0_18px_40px_rgba(11,28,51,0.08)]"
              >
                <div className="flex items-start gap-4">
                  <span className="service-icon-motion inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="heading-display heading-card">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {service.procedures.map((item) => (
                    <li
                      key={item}
                      className="rounded-[var(--radius-sm)] bg-surface px-3 py-2 text-sm text-navy-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue">
                    Explore Service
                    <IconArrow className="motion-link-arrow h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    <span className="sr-only">
                      (page coming soon for {service.title})
                    </span>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
