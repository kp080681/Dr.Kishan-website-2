import Image from "next/image";
import {
  aboutMilestones,
  doctor,
  fullProfileSections,
  images,
  philosophyPoints,
} from "@/content/site";
import { ExpandablePanel } from "@/components/expandable-panel";
import { IconBook, IconHeart, IconLaparoscopic, IconUsers } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const whyChooseIcons = [IconLaparoscopic, IconHeart, IconUsers, IconBook] as const;

export function About() {
  return (
    <section id="about" className="living-section about-chapter" aria-labelledby="about-heading">
      <div className="about-chapter__navy">
        <div className="container-site about-editorial">
          <div className="about-editorial__grid">
          <Reveal className="about-editorial__copy section-head">
            <div>
              <p className="eyebrow">About Dr. Kishan Rao</p>
              <h2 id="about-heading" className="heading-display heading-xl">
                Surgical training, clinical clarity and patient-friendly communication.
              </h2>
              <p className="text-[length:var(--text-support)] font-semibold text-red">
                {doctor.credentials}
              </p>
              <p className="lede">
                Dr. Kishan Rao is a highly experienced and respected surgeon with more than
                7 years of experience in the surgical field.
              </p>
              <p className="lede">
                He is extremely empathetic to his patients, treating them like family, and
                always has the highest professional integrity and ethical standards.
              </p>
              <p className="lede">
                He specializes in General Surgery, Laparoscopy and Emergency Surgery and
                performs a variety of basic and advanced surgeries. He has a strong interest
                in utilizing the latest technology and advancements in surgical care to provide
                the best outcomes for his patients.
              </p>
              <p className="lede">
                He is passionate about teaching and is a faculty member at the medical college.
                Dr. Rao is a dedicated and skilled surgeon who is highly regarded for his
                unwavering commitment to providing the highest quality care to his patients.
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

          <Reveal className="about-milestones" aria-label="Training and accomplishments">
            {aboutMilestones.map((item) => (
              <article key={item.title} className="about-milestone">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </Reveal>
          </div>
        </div>
      </div>

      <div className="about-chapter__ivory">
        <Reveal className="container-site why-choose-editorial">
          <div>
            <p className="eyebrow">Why choose Dr. Kishan Rao</p>
            <h3 className="heading-display heading-lg mt-3">
              Care built around diagnosis, explanation and ethical decision-making.
            </h3>
          </div>
          <div className="why-choose-editorial__list">
            {philosophyPoints.slice(0, 4).map((point, index) => (
              <article key={point.title} className="why-choose-item">
                <span className="why-choose-item__icon" aria-hidden>
                  {(() => {
                    const Icon = whyChooseIcons[index] ?? IconHeart;
                    return <Icon className="h-8 w-8" />;
                  })()}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-navy">{point.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
