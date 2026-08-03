import Image from "next/image";
import { books } from "@/content/site";
import { Reveal } from "@/components/reveal";

export function Books() {
  return (
    <section
      className="living-section section-pad bg-[linear-gradient(180deg,rgba(232,240,248,0.45)_0%,transparent_100%)]"
      aria-labelledby="books-heading"
    >
      <div className="container-site">
        <Reveal className="section-head">
          <p className="eyebrow">Books & publications</p>
          <h2 id="books-heading" className="heading-display heading-xl">
            Written for learners who want clarity
          </h2>
          <p className="lede">
            Dr. Kishan Rao is the author and publisher of three educational titles. Professional
            photographs are used as temporary covers until final artwork is supplied.
          </p>
        </Reveal>

        <div className="section-content grid gap-5 md:grid-cols-3">
          {books.map((book, index) => (
            <Reveal
              key={book.title}
              as="article"
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
              className="motion-card flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white shadow-[0_12px_30px_rgba(11,28,51,0.04)]"
            >
              <div className="image-mask relative aspect-[3/4] overflow-hidden bg-navy text-white">
                <Image
                  src={book.coverImage}
                  alt={book.coverAlt}
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/78 via-navy/14 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/75">
                    Temporary cover
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug sm:text-xl">
                    {book.title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-relaxed text-ink-muted">{book.note}</p>
                <p className="mt-auto pt-4 text-xs text-ink-muted">
                  Final cover artwork pending client supply.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
