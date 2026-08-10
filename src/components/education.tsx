"use client";

import Image from "next/image";
import { useState } from "react";
import { books, doctor, images, publicationDetails, socialInitiatives } from "@/content/site";
import { CountUp } from "@/components/count-up";
import { ExpandablePanel } from "@/components/expandable-panel";
import { Reveal } from "@/components/reveal";
import { IconBook, IconFacebook, IconHeart, IconInstagram, IconUsers } from "@/components/icons";

export function Education() {
  const [openBook, setOpenBook] = useState<string | null>(null);

  return (
    <section
      className="living-section depth-light section-pad"
      aria-labelledby="education-heading"
    >
      <div className="container-site grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
        <Reveal className="order-2 section-head lg:order-1">
          <p className="eyebrow">Medical education & public impact</p>
          <h2 id="education-heading" className="heading-display heading-xl">
            Founder and Chief of The White Army
          </h2>
          <p className="lede">
            Founder and Chief of The White Army - Free Online Medical Education platform
            for more than 3 Lakh members all over the country and abroad.
          </p>
          <div className="motion-card mt-6 rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-soft text-red">
                <IconUsers className="h-5 w-5" />
              </span>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-navy">
                  <CountUp value={3} suffix="Lakh+" decimals={0} />
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  members all over the country and abroad on The White Army.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="relative aspect-square w-full max-w-[13rem] overflow-hidden rounded-full border border-[color:var(--line)] bg-white p-2 shadow-[0_10px_26px_rgba(11,28,51,0.04)] sm:max-w-[14rem]">
              <Image
                src={images.whiteArmy.src}
                alt={images.whiteArmy.alt}
                fill
                sizes="224px"
                className="p-1 object-contain"
              />
            </div>
          </div>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            As a Career Counsellor and Motivational Mentor, he also guides students under the
            public education identity{" "}
            <span className="font-semibold text-navy">{doctor.social.handle}</span>,
            a name used only in this educational and social-media context.
          </p>
          <ExpandablePanel className="mt-6" label="Know more">
            <div className="grid gap-4 rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-5 sm:p-6">
              <div>
                <h3 className="text-base font-semibold text-navy">
                  Education, mentoring and social presence
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  The White Army supports free medical education. Dr. Kishan Rao also gives
                  motivational, career counseling and exam preparation guidance talks in
                  various schools and colleges.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={doctor.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <IconInstagram className="social-icon-motion h-4 w-4" />
                    Instagram
                  </a>
                  <a
                    href={doctor.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <IconFacebook className="social-icon-motion h-4 w-4" />
                    Facebook
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {books.map((book) => {
                  const hasDetails = book.details.length > 0;
                  const actionLabel = "actionLabel" in book ? book.actionLabel : null;
                  const isOpen = openBook === book.title;
                  const detailsId = `education-publication-${book.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

                  return (
                    <article
                      key={book.title}
                      className={`flex h-full flex-col overflow-hidden rounded-[var(--radius-sm)] bg-surface ${
                        "coverPending" in book && book.coverPending ? "p-4" : ""
                      }`}
                    >
                      {hasDetails && actionLabel ? (
                        <>
                          <button
                            type="button"
                            className="group flex h-full cursor-pointer flex-col text-left transition-colors duration-150 hover:bg-blue-soft/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                            aria-expanded={isOpen}
                            aria-controls={detailsId}
                            onClick={() =>
                              setOpenBook((current) =>
                                current === book.title ? null : book.title,
                              )
                            }
                          >
                            <div className="relative aspect-[3/4] bg-navy/5">
                              <Image
                                src={book.coverImage}
                                alt={book.coverAlt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 16rem"
                                className="object-contain"
                                style={{ objectPosition: book.objectPosition }}
                              />
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                              <IconBook className="h-5 w-5 text-blue" aria-hidden />
                              <h4 className="mt-3 text-sm font-semibold text-navy group-hover:text-blue">
                                {book.title}
                              </h4>
                              <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-muted">
                                {book.note}
                              </p>
                              <span className="mt-4 text-sm font-semibold text-blue">
                                {actionLabel}
                              </span>
                            </div>
                          </button>
                          {isOpen ? (
                            <div
                              id={detailsId}
                              className="m-3 mt-0 rounded-[var(--radius-sm)] bg-blue-soft/55 p-3 text-sm leading-relaxed text-ink-muted"
                            >
                              {book.details.map((detail) => (
                                <p key={detail} className="mt-2 first:mt-0">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          ) : null}
                        </>
                      ) : "coverPending" in book && book.coverPending ? (
                        <div className="flex flex-1 flex-col">
                          <IconBook className="h-5 w-5 text-blue" aria-hidden />
                          <h4 className="mt-3 text-sm font-semibold text-navy">{book.title}</h4>
                        </div>
                      ) : (
                        <>
                          <div className="relative aspect-[3/4] bg-navy/5">
                            <Image
                              src={book.coverImage}
                              alt={book.coverAlt}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 16rem"
                              className="object-contain"
                              style={{ objectPosition: book.objectPosition }}
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-4">
                            <IconBook className="h-5 w-5 text-blue" aria-hidden />
                            <h4 className="mt-3 text-sm font-semibold text-navy">{book.title}</h4>
                            <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-muted">
                              {book.note}
                            </p>
                          </div>
                        </>
                      )}
                    </article>
                  );
                })}
              </div>

              <div className="rounded-[var(--radius-sm)] bg-blue-soft/55 p-4">
                <h4 className="text-sm font-semibold text-navy">Publication details</h4>
                <ul className="mt-3 grid gap-2">
                  {publicationDetails.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {socialInitiatives.map((item) => (
                  <article key={item.name} className="rounded-[var(--radius-sm)] bg-red-soft/55 p-4">
                    <IconHeart className="h-5 w-5 text-red" aria-hidden />
                    <h4 className="mt-3 text-sm font-semibold text-navy">{item.name}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                    {item.details.length > 0 ? (
                      <ul className="mt-3 grid gap-2">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </ExpandablePanel>
        </Reveal>

        <Reveal variant="image" delay={2} className="order-1 lg:order-2">
          <div className="image-mask relative mx-auto max-w-md overflow-hidden rounded-[1.25rem] border border-[color:var(--line)] bg-navy shadow-[var(--shadow)] lg:max-w-none">
            <div className="relative aspect-[4/5]">
              <Image
                src={images.education.src}
                alt={images.education.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                quality={90}
                className="object-cover"
                style={{ objectPosition: "center 18%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-sm font-medium text-white/85">Educator · Mentor · Author</p>
              <p className="mt-1 text-lg font-semibold text-white">{doctor.name}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
