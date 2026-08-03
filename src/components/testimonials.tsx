import { testimonials } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { IconQuote } from "@/components/icons";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="living-section section-pad bg-[linear-gradient(180deg,#eef3f8_0%,#f7f5f2_100%)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        <Reveal className="section-head">
          <p className="eyebrow">Testimonials</p>
          <h2 id="testimonials-heading" className="heading-display heading-xl">
            What patients have shared
          </h2>
          <p className="lede">
            These reviews were previously published on surgeonkishan.com and are reused here
            for the first homepage prototype. No stock portraits are used.
          </p>
        </Reveal>

        <div className="section-content grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              as="article"
              variant="soft-left"
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
              className="testimonial-motion motion-card flex h-full flex-col rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-6"
            >
              <IconQuote className="h-7 w-7 text-blue/70" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-navy-soft">
                “{item.quote}”
              </blockquote>
              <div className="mt-6 border-t border-[color:var(--line)] pt-4">
                <p className="font-semibold text-navy">{item.name}</p>
                <p className="mt-1 text-xs text-ink-muted">{item.source}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
