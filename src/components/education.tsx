import Image from "next/image";
import {
  doctor,
  fullProfileSections,
  images,
  publicationDetails,
  socialInitiatives,
} from "@/content/site";
import { CountUp } from "@/components/count-up";
import { ExpandablePanel } from "@/components/expandable-panel";
import { Reveal } from "@/components/reveal";
import {
  IconBook,
  IconFacebook,
  IconGeneral,
  IconHeart,
  IconInstagram,
  IconLaparoscopic,
  IconUsers,
} from "@/components/icons";

const timelineIcons = [IconBook, IconHeart, IconUsers, IconLaparoscopic] as const;

const isMajorAchievement = (item: string) =>
  item.includes("Overall University Topper") ||
  item.includes("Gold Medalist") ||
  item.includes("1st Rank") ||
  item.includes("2nd Rank");

export function Education() {
  return (
    <section
      className="living-section education-editorial section-pad"
      aria-labelledby="education-heading"
    >
      <div className="education-timeline-chapter">
        <div className="container-site">
          <Reveal className="education-timeline-head">
            <p className="eyebrow">Education & accomplishments</p>
            <h2 id="education-heading" className="heading-display heading-xl">
              Training, academic distinctions and public work.
            </h2>
          </Reveal>

          <div className="education-timeline" aria-label="Education and accomplishments timeline">
            {fullProfileSections.map((section, index) => {
              const Icon = timelineIcons[index] ?? IconGeneral;

              return (
                <Reveal
                  key={section.title}
                  as="article"
                  delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
                  className="education-timeline__group"
                >
                  <div className="education-timeline__marker">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <div className="education-timeline__content">
                    <p className="education-timeline__label">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3>{section.title}</h3>
                    <ul>
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className={isMajorAchievement(item) ? "is-major-achievement" : undefined}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <div className="education-public-impact-chapter">
        <div className="container-site education-editorial__grid">
          <Reveal delay={2} className="education-editorial__copy section-head">
            <div className="white-army-mark">
              <Image
                src={images.whiteArmy.src}
                alt={images.whiteArmy.alt}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>

            <div>
              <p className="eyebrow">Medical education & public impact</p>
              <h2 id="white-army-heading" className="heading-display heading-xl">
                Founder and Chief of The White Army
              </h2>
              <p className="lede">
                Founder and Chief of The White Army - Free Online Medical Education platform
                for more than 3 Lakh members all over the country and abroad.
              </p>
            </div>

            <div className="education-proof">
              <span className="education-proof__icon">
                <IconUsers className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p>
                  <CountUp value={3} suffix="Lakh+" decimals={0} />
                </p>
                <span>members all over the country and abroad on The White Army.</span>
              </div>
            </div>

            <p className="education-public-impact-copy">
              As a Career Counsellor and Motivational Mentor, he also guides students under the
              public education identity{" "}
              <span>{doctor.social.handle}</span>,
              a name used only in this educational and social-media context.
            </p>

            <ExpandablePanel
              className="mt-2"
              controlsClassName="expandable-trigger--on-dark"
              label="Know more"
            >
              <div className="education-profile-panel">
                <h3 className="text-base font-semibold">
                  Education, mentoring and social presence
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  The White Army supports free medical education. Dr. Kishan Rao also gives
                  motivational, career counseling and exam preparation guidance talks in
                  various schools and colleges.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={doctor.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <IconInstagram className="social-icon-motion h-4 w-4" aria-hidden />
                    Instagram
                  </a>
                  <a
                    href={doctor.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <IconFacebook className="social-icon-motion h-4 w-4" aria-hidden />
                    Facebook
                  </a>
                </div>

                <div className="education-detail-grid">
                  <div>
                    <h4 className="text-sm font-semibold">Publication details</h4>
                    <ul className="mt-3 grid gap-2">
                      {publicationDetails.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Social initiatives</h4>
                    <div className="mt-3 grid gap-3">
                      {socialInitiatives.map((item) => (
                        <div key={item.name}>
                          <p className="text-sm font-semibold">{item.name}</p>
                          <p className="mt-1 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ExpandablePanel>
          </Reveal>

          <Reveal variant="image" className="education-editorial__media">
            <figure className="education-portrait-field">
              <Image
                src={images.education.src}
                alt=""
                fill
                sizes="(max-width: 1024px) 92vw, 38vw"
                quality={75}
                className="education-portrait-field__backdrop"
                aria-hidden
              />
              <Image
                src={images.education.src}
                alt={images.education.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 38vw"
                quality={90}
                className="education-portrait-field__image"
              />
              <figcaption>
                <span>Educator - Mentor - Author</span>
                <strong>{doctor.name}</strong>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
