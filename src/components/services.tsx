import Image from "next/image";
import { services } from "@/content/site";
import { ExpandablePanel } from "@/components/expandable-panel";
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
            Four primary service areas are shown from Dr. Kishan Rao&apos;s visiting card. Open
            each card to see the complete list in place.
          </p>
        </Reveal>

        <div className="section-content grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.id as keyof typeof icons];
            const previewItems = service.procedures.slice(0, service.previewCount);
            const hiddenCount = service.procedures.length - previewItems.length;
            return (
              <Reveal
                key={service.id}
                as="article"
                delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | undefined}
                className="motion-card group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white shadow-[0_12px_32px_rgba(11,28,51,0.04)] transition-shadow duration-200 hover:shadow-[0_18px_40px_rgba(11,28,51,0.08)]"
              >
                <div className="image-mask relative aspect-[16/10] bg-navy">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 92vw, 38rem"
                    quality={90}
                    className="object-cover"
                    style={{ objectPosition: service.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/62 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
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
                    {previewItems.map((item) => (
                      <li
                        key={item}
                        className="rounded-[var(--radius-sm)] bg-surface px-3 py-2 text-sm text-navy-soft"
                      >
                        {item}
                      </li>
                    ))}
                    {hiddenCount > 0 ? (
                      <li className="rounded-[var(--radius-sm)] bg-blue-soft px-3 py-2 text-sm font-semibold text-blue">
                        +{hiddenCount} more
                      </li>
                    ) : null}
                  </ul>

                  <ExpandablePanel className="mt-auto pt-5" label="Know more">
                    <div className="rounded-[var(--radius-sm)] bg-blue-soft/55 p-4">
                      <p className="text-sm font-semibold text-navy">Complete visiting-card list</p>
                      <ul className="mt-3 grid gap-2">
                        {service.procedures.map((item) => (
                          <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                            <IconArrow className="mt-1 h-3.5 w-3.5 shrink-0 text-blue" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ExpandablePanel>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
