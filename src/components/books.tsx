"use client";

import Image from "next/image";
import { useState } from "react";
import { books } from "@/content/site";
import { Reveal } from "@/components/reveal";

function BookCover({ book }: { book: (typeof books)[number] }) {
  return (
    <div className="book-publication__cover">
      <Image
        src={book.coverImage}
        alt={book.coverAlt}
        fill
        sizes="(max-width: 768px) 90vw, 30vw"
        className="book-publication__image"
        style={{ objectPosition: book.objectPosition }}
      />
    </div>
  );
}

export function Books() {
  const [openBook, setOpenBook] = useState<string | null>(null);

  return (
    <section
      className="living-section books-section section-pad"
      aria-labelledby="books-heading"
    >
      <div className="container-site">
        <Reveal className="section-head books-section__head">
          <p className="eyebrow">Books & publications</p>
          <h2 id="books-heading" className="heading-display heading-xl">
            Medical education beyond the consultation room
          </h2>
          <p className="lede">
            Books and healthcare communication work connected to Dr. Kishan Rao&apos;s teaching
            and public education initiatives.
          </p>
        </Reveal>

        <div className="section-content books-editorial-list">
          {books.map((book, index) => {
            const hasDetails = book.details.length > 0;
            const actionLabel = "actionLabel" in book ? book.actionLabel : null;
            const pdfHref = "pdfHref" in book ? book.pdfHref : null;
            const isOpen = openBook === book.title;
            const detailsId = `publication-${book.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

            return (
              <Reveal
                key={book.title}
                as="article"
                delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
                className={`book-publication ${index === 0 ? "book-publication--featured" : ""}`}
              >
                {pdfHref && actionLabel ? (
                  <a
                    href={pdfHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-publication__button"
                  >
                    <BookCover book={book} />
                    <div className="book-publication__body">
                      <h3 className="heading-display heading-card">{book.title}</h3>
                      <p>{book.note}</p>
                      <span>{actionLabel}</span>
                    </div>
                  </a>
                ) : hasDetails && actionLabel ? (
                  <>
                    <button
                      type="button"
                      className="book-publication__button"
                      aria-expanded={isOpen}
                      aria-controls={detailsId}
                      onClick={() =>
                        setOpenBook((current) => (current === book.title ? null : book.title))
                      }
                    >
                      <BookCover book={book} />
                      <div className="book-publication__body">
                        <h3 className="heading-display heading-card">{book.title}</h3>
                        <p>{book.note}</p>
                        <span>{actionLabel}</span>
                      </div>
                    </button>

                    {isOpen ? (
                      <div
                        id={detailsId}
                        className="book-publication__details"
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
                    <div className="book-publication__body">
                      <h3 className="heading-display heading-card">{book.title}</h3>
                      <p>{book.note}</p>
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
