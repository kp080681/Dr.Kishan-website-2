import Image from "next/image";
import { IconHeart, IconLaparoscopic, IconUsers } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const whyChooseItems = [
  {
    title: "Clear diagnosis",
    detail: "Careful assessment before deciding the next step.",
    icon: IconLaparoscopic,
  },
  {
    title: "Clear communication",
    detail:
      "Treatment options explained in language patients and families can understand.",
    icon: IconUsers,
  },
  {
    title: "Responsible care",
    detail: "Guidance that continues through surgery, recovery and follow-up.",
    icon: IconHeart,
  },
] as const;

export function WhyChoose() {
  return (
    <section className="living-section about-chapter__ivory" aria-labelledby="why-choose-heading">
      <Reveal className="container-site why-choose-editorial">
        <div>
          <p className="eyebrow">Why choose Dr. Kishan Rao</p>
          <h2 id="why-choose-heading" className="heading-display heading-lg mt-3">
            Precision in surgical practice. Compassion in every conversation.
          </h2>
          <p className="lede mt-4">
            Surgical decisions begin with careful assessment, clear explanation and an honest
            discussion of the options available. When surgery is appropriate, patients are
            guided through the procedure, recovery and follow-up with clarity and care.
          </p>
        </div>

        <div className="why-choose-editorial__composition">
          <figure className="why-choose-editorial__media">
            <Image
              src="/images/gallery/originals/2026-07-12-clinical-consultation.jpg"
              alt="Dr. Kishan Rao speaking with a patient in a clinical setting"
              fill
              sizes="(max-width: 1024px) 92vw, 34vw"
              quality={88}
              className="why-choose-editorial__image"
            />
          </figure>

          <div className="why-choose-editorial__list why-choose-editorial__list--compact">
            {whyChooseItems.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="why-choose-item">
                  <span className="why-choose-item__icon" aria-hidden>
                    <Icon className="h-8 w-8" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
