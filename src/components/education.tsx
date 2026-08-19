import Image from "next/image";
import { images } from "@/content/site";
import { IconBook, IconHeart, IconUsers } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const beyondHighlights = [
  {
    title: "The White Army",
    detail: "3 Lakh+ members",
    icon: IconUsers,
  },
  {
    title: "Author & Publisher",
    detail: "Medical education and healthcare communication",
    icon: IconBook,
  },
  {
    title: "Academic distinction",
    detail: "MS Gold Medalist",
    icon: IconHeart,
  },
] as const;

export function Education() {
  return (
    <section
      id="beyond-operating-room"
      className="living-section education-public-impact-chapter section-pad"
      aria-labelledby="education-heading"
    >
      <div className="container-site beyond-operating-room">
        <Reveal className="beyond-operating-room__copy section-head">
          <p className="eyebrow">Beyond the operating room</p>
          <h2 id="education-heading" className="heading-display heading-xl">
            Surgeon. Educator. Author. Mentor.
          </h2>
          <p className="lede">
            Dr. Kishan Rao is the Founder and Chief of The White Army, a free online medical
            education initiative with more than 3 lakh members across India and abroad.
          </p>
          <p className="lede">
            His work beyond clinical practice includes medical education, publications,
            student mentorship and public initiatives.
          </p>

          <div className="beyond-highlights">
            {beyondHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="beyond-highlight">
                  <span className="beyond-highlight__icon" aria-hidden>
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <a href="#about" className="expandable-trigger expandable-trigger--on-dark">
            <span>Explore his journey</span>
            <span className="expandable-trigger__mark" aria-hidden>
              +
            </span>
          </a>
        </Reveal>

        <Reveal variant="image" className="beyond-operating-room__media">
          <div className="beyond-visual-field">
            <div className="beyond-white-army-mark">
              <Image
                src={images.whiteArmy.src}
                alt={images.whiteArmy.alt}
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
            <Image
              src={images.education.src}
              alt={images.education.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 38vw"
              quality={90}
              className="beyond-visual-field__image"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
