import { socialInitiatives } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { IconHeart } from "@/components/icons";

export function SocialInitiatives() {
  return (
    <section className="section-pad" aria-labelledby="social-heading">
      <div className="container-site">
        <Reveal className="section-head">
          <p className="eyebrow">Social initiatives</p>
          <h2 id="social-heading" className="heading-display heading-xl">
            Service beyond the operating theatre
          </h2>
          <p className="lede">
            Two community initiatives reflect a broader commitment to people and public good.
            Impact figures will be added only when verified.
          </p>
        </Reveal>

        <div className="section-content grid gap-5 md:grid-cols-2">
          {socialInitiatives.map((item, index) => (
            <Reveal
              key={item.name}
              as="article"
              delay={(index + 1) as 1 | 2}
              className="rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-soft text-red">
                <IconHeart className="h-5 w-5" />
              </span>
              <h3 className="heading-display heading-card mt-4">{item.name}</h3>
              <p className="mt-2 support-text">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
