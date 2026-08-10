"use client";

import Image from "next/image";
import { useState } from "react";
import { books } from "@/content/site";
import { Reveal } from "@/components/reveal";

function BookCover({ book }: { book: (typeof books)[number] }) {
  return (
    <div className="image-mask relative aspect-[3/4] overflow-hidden bg-navy text-white">
      <Image
        src={book.coverImage}
        alt={book.coverAlt}
        fill
        sizes="(max-width: 768px) 90vw, 30vw"
        className="object-contain"
        style={{ objectPosition: book.objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
    </div>
  );
}

export function Books() {
  const [openBook, setOpenBook] = useState<string | null>(null);

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
            Dr. Kishan Rao&apos;s educational publications support students and healthcare
            communication.
          </p>
        </Reveal>

        <div className="section-content grid gap-5 md:grid-cols-3">
          {books.map((book, index) => {
            const hasDetails = book.details.length > 0;
            const actionLabel = "actionLabel" in book ? book.actionLabel : null;
            const isOpen = openBook === book.title;
            const detailsId = `publication-${book.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

            return (
              <Reveal
                key={book.title}
                as="article"
                delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
                className="motion-card flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white shadow-[0_12px_30px_rgba(11,28,51,0.04)]"
              >
                {hasDetails && actionLabel ? (
                  <>
                    <button
                      type="button"
                      className="group flex flex-1 cursor-pointer flex-col text-left transition-colors duration-150 hover:bg-blue-soft/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                      aria-expanded={isOpen}
                      aria-controls={detailsId}
                      onClick={() =>
                        setOpenBook((current) => (current === book.title ? null : book.title))
                      }
                    >
                      <BookCover book={book} />
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="heading-display heading-card group-hover:text-blue">
                          {book.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                          {book.note}
                        </p>
                        <span className="mt-auto pt-4 text-sm font-semibold text-blue">
                          {actionLabel}
                        </span>
                      </div>
                    </button>

                    {isOpen ? (
                      <div
                        id={detailsId}
                        className="mx-5 mb-5 rounded-[var(--radius-sm)] bg-blue-soft/55 p-4 text-sm leading-relaxed text-ink-muted"
                      >
                        {book.details.map((detail) => (
                          <p key={detail} className="mt-2 first:mt-0">
                            {detail}
                          </p>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <>
                    <BookCover book={book} />
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="heading-display heading-card">{book.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{book.note}</p>
                    </div>
                  </>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
