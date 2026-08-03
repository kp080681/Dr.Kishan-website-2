import Image from "next/image";
import { images, philosophyPoints } from "@/content/site";
import { Reveal } from "@/components/reveal";

export function Philosophy() {
  return (
    <section
      className="living-section section-pad bg-[linear-gradient(180deg,#f0ece6_0%,#f7f5f2_100%)]"
      aria-labelledby="philosophy-heading"
    >
      <div className="container-site">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div>
            <Reveal className="section-head">
              <p className="eyebrow">Patient philosophy</p>
              <h2 id="philosophy-heading" className="heading-display heading-xl">
                Precision in surgery. Compassion in every conversation.
              </h2>
              <p className="lede">
                Good surgical care is not only about technique. It is about honest diagnosis,
                choosing the right path for the patient, and staying present through recovery.
              </p>
            </Reveal>

            <div className="section-content space-y-4">
              {philosophyPoints.map((point, index) => (
                <Reveal
                  key={point.title}
                  as="article"
                  delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
                  className="accent-line-motion"
                >
                  <h3 className="text-base font-semibold text-navy">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {point.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="image" delay={2} className="relative">
            <figure className="image-mask overflow-hidden rounded-[1.25rem] border border-[color:var(--line)] bg-white shadow-[var(--shadow)]">
              <div className="relative aspect-[3/2]">
                <Image
                  src={images.quote.src}
                  alt={images.quote.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="border-t border-[color:var(--line)] px-5 py-4">
                <p className="text-base font-medium italic leading-relaxed text-navy">
                  “Surgery taught me precision, but life taught me compassion.”
                </p>
                <p className="mt-2 text-sm text-ink-muted">— Dr. Kishan Rao</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
