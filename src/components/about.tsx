import Image from "next/image";
import { aboutMilestones, doctor, fullProfileSections, images } from "@/content/site";
import { ExpandablePanel } from "@/components/expandable-panel";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="living-section section-pad" aria-labelledby="about-heading">
      <div className="container-site grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
        <Reveal variant="image" className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="image-mask relative overflow-hidden rounded-[1.25rem] border border-[color:var(--line)] bg-blue-deep shadow-[var(--shadow)]">
            <div className="about-portrait-frame relative">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                quality={90}
                className="about-portrait-image object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal className="section-head">
            <p className="eyebrow">About</p>
            <h2 id="about-heading" className="heading-display heading-xl">
              A surgeon patients can talk to - and trust with careful decisions
            </h2>
            <p className="text-[length:var(--text-support)] font-semibold text-red">
              {doctor.credentials}
            </p>
            <p className="lede">
              Dr. Kishan Rao is a General, Laparoscopic and LASER Surgeon practising across
              Mangalore and Dakshina Kannada. Patients meet a clinician who listens first,
              explains clearly, and recommends surgery only when it is appropriate.
            </p>
          </Reveal>

          <div className="section-content grid gap-3 sm:grid-cols-2">
            {aboutMilestones.slice(0, 4).map((item, index) => (
              <Reveal
                key={item.title}
                as="article"
                delay={(Math.min(index % 3, 2) + 1) as 1 | 2 | 3}
                className="motion-card rounded-[var(--radius)] border border-[color:var(--line)] bg-white px-4 py-4"
              >
                <h3 className="text-sm font-semibold text-navy sm:text-[0.95rem]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
              </Reveal>
            ))}
          </div>

          <ExpandablePanel className="mt-5" label="Read full profile">
            <div className="rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-5 sm:p-6">
              <div className="grid gap-4">
                {fullProfileSections.map((section) => (
                  <section
                    key={section.title}
                    className="rounded-[var(--radius-sm)] border border-[color:var(--line)] bg-surface p-4"
                    aria-label={section.title}
                  >
                    <h3 className="text-base font-semibold text-navy">{section.title}</h3>
                    <ul className="mt-3 grid gap-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </ExpandablePanel>
        </div>
      </div>
    </section>
  );
}
