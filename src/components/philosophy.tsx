import Image from "next/image";
import { images, philosophyPoints } from "@/content/site";
import { Reveal } from "@/components/reveal";

export function Philosophy() {
  return (
    <section
      className="living-section philosophy-section section-pad"
      aria-labelledby="philosophy-heading"
    >
      <div className="container-site">
        <div className="philosophy-editorial">
          <div className="philosophy-editorial__copy">
            <Reveal className="section-head philosophy-editorial__head">
              <p className="eyebrow">Patient philosophy</p>
              <h2 id="philosophy-heading" className="heading-display heading-xl">
                Precision in surgical practice. Compassion in every conversation.
              </h2>
              <p className="lede">
                Good surgical care is not only about technique. It is about honest diagnosis,
                choosing the right path for the patient, and staying present through recovery.
              </p>
            </Reveal>
          </div>

          <Reveal variant="image" delay={2} className="philosophy-editorial__visual">
            <figure className="philosophy-quote-frame">
              <Image
                src={images.quote.src}
                alt=""
                fill
                sizes="(max-width: 1024px) 92vw, 56vw"
                quality={75}
                className="philosophy-quote-frame__backdrop"
                aria-hidden
              />
              <Image
                src={images.quote.src}
                alt={images.quote.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 56vw"
                quality={92}
                className="philosophy-quote-frame__image"
              />
            </figure>
          </Reveal>

          <div className="section-content philosophy-principles">
            {philosophyPoints.map((point, index) => (
              <Reveal
                key={point.title}
                as="article"
                delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
                className="philosophy-principle"
              >
                <h3 className="text-base font-semibold text-navy">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {point.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
