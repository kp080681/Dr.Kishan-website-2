import Image from "next/image";
import { fullProfileSections, images } from "@/content/site";
import { ExpandablePanel } from "@/components/expandable-panel";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="living-section about-chapter" aria-labelledby="about-heading">
      <div className="about-chapter__navy">
        <div className="container-site about-editorial">
          <div className="about-editorial__grid">
          <Reveal className="about-editorial__copy about-editorial__copy--intro section-head">
            <div>
              <p className="eyebrow">About Dr. Kishan Rao</p>
              <h2 id="about-heading" className="heading-display heading-xl">
                About Dr. Kishan Rao
              </h2>
              <p className="about-editorial__statement">
                Surgery guided by experience, empathy and responsibility.
              </p>
              <p className="lede">
                Dr. Kishan Rao is a highly experienced and respected surgeon with more than
                10 years of experience in the surgical field.
              </p>
              <p className="lede">
                He is extremely empathetic to his patients, treating them like family, and
                always maintains high professional integrity and ethical standards.
              </p>
            </div>
          </Reveal>

          <Reveal variant="image" className="about-editorial__media">
            <div className="about-portrait-frame">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                quality={90}
                className="about-portrait-image"
              />
            </div>
          </Reveal>

          <Reveal className="about-editorial__copy about-editorial__copy--detail">
            <div className="about-editorial__detail-copy">
              <p className="lede">
                He specializes in General Surgery, Laparoscopic Surgery and Advanced LASER
                Surgery, and performs a wide range of basic and advanced surgical procedures.
                He has a strong interest in using newer technology and advances in surgical
                care to support safe, appropriate treatment for his patients.
              </p>
              <p className="lede">
                He is passionate about teaching and is a faculty member at the medical college.
              </p>
              <p className="lede">
                Dr. Kishan Rao is a dedicated surgeon committed to providing high-quality care
                with clarity, compassion and responsible clinical decision-making.
              </p>
              <p className="text-[length:var(--text-support)] font-semibold text-red">
                Dr. Kishan Rao MBBS, MS, FMAS, DMAS Consultant General, Laparoscopic &amp;
                LASER Surgeon Assistant Professor at AJ Medical College, Mangalore.
              </p>
            </div>

            <ExpandablePanel className="mt-5" label="Read full profile">
              <div className="about-profile-panel">
                <div className="grid gap-4">
                  {fullProfileSections.map((section) => (
                    <section
                      key={section.title}
                      className="about-profile-panel__section"
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
          </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
