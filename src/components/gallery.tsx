import Image from "next/image";
import { galleryItems } from "@/content/site";
import { Reveal } from "@/components/reveal";

export function Gallery() {
  return (
    <section id="gallery" className="living-section section-pad" aria-labelledby="gallery-heading">
      <div className="container-site">
        <Reveal className="section-head">
          <p className="eyebrow">Gallery</p>
          <h2 id="gallery-heading" className="heading-display heading-xl">
            A closer look at clinical and professional life
          </h2>
          <p className="lede">
            A preview selection from the client-provided portrait set. The full gallery page
            will follow later. Patient-consultation imagery is held pending consent
            confirmation.
          </p>
        </Reveal>

        <div className="section-content grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.src}
              as="figure"
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
              className={`gallery-depth group relative overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-navy ${
                index === 0 ? "col-span-2 aspect-[16/10] lg:col-span-2 lg:aspect-[16/11]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-sm font-medium text-white sm:p-4">
                {item.label}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
