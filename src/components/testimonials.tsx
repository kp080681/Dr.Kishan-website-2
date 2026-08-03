"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { IconArrow, IconClose } from "@/components/icons";

const reviewScreenshots = [
  {
    title: "Geetha Shetty Google review",
    src: "/images/testimonials/google-review-geetha-shetty.png",
    width: 833,
    height: 320,
    featured: true,
  },
  {
    title: "Deepika Harish Google review",
    src: "/images/testimonials/google-review-deepika-harish.png",
    width: 845,
    height: 280,
    featured: false,
  },
  {
    title: "Deepak Anchan Google review",
    src: "/images/testimonials/google-review-deepak-anchan.png",
    width: 837,
    height: 246,
    featured: false,
  },
  {
    title: "Pratham Google review",
    src: "/images/testimonials/google-review-pratham.png",
    width: 858,
    height: 272,
    featured: false,
  },
] as const;

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeReview = activeIndex === null ? null : reviewScreenshots[activeIndex];
  const activePosition = activeIndex ?? 0;

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % reviewScreenshots.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? current
            : (current - 1 + reviewScreenshots.length) % reviewScreenshots.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <section
      id="testimonials"
      className="living-section section-pad bg-[linear-gradient(180deg,#eef3f8_0%,#f7f5f2_100%)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        <Reveal className="section-head">
          <p className="eyebrow">Testimonials</p>
          <h2 id="testimonials-heading" className="heading-display heading-xl">
            What patients and families say
          </h2>
          <p className="lede">Original reviews shared by patients and their families.</p>
        </Reveal>

        <div className="section-content grid gap-5 md:grid-cols-2">
          {reviewScreenshots.map((review, index) => (
            <Reveal
              key={review.src}
              as="article"
              variant="soft-left"
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
              className={`testimonial-motion motion-card overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-3 shadow-[0_12px_30px_rgba(11,28,51,0.05)] sm:p-4 ${
                review.featured ? "md:col-span-2" : ""
              }`}
            >
              <button
                type="button"
                className="group block w-full rounded-[calc(var(--radius)-4px)] bg-[#111] p-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open larger ${review.title}`}
              >
                <span
                  className="relative block w-full overflow-hidden rounded-[calc(var(--radius)-4px)]"
                  style={{ aspectRatio: `${review.width} / ${review.height}` }}
                >
                  <Image
                    src={review.src}
                    alt={review.title}
                    fill
                    sizes={review.featured ? "(max-width: 768px) 92vw, 72rem" : "(max-width: 768px) 92vw, 36rem"}
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeReview ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/88 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeReview.title}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-[var(--radius)] bg-white p-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line-strong)] bg-white text-navy hover:bg-blue-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              onClick={() => setActiveIndex(null)}
              aria-label="Close review"
            >
              <IconClose className="h-5 w-5" aria-hidden />
            </button>

            <div className="w-full overflow-x-auto rounded-[calc(var(--radius)-4px)] bg-[#111]">
              <div
                className="relative mx-auto w-full overflow-hidden"
                style={{ aspectRatio: `${activeReview.width} / ${activeReview.height}` }}
              >
                <Image
                  src={activeReview.src}
                  alt={activeReview.title}
                  fill
                  sizes="(max-width: 768px) 96vw, 64rem"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <button
                type="button"
                className="btn btn-secondary min-w-0"
                onClick={() =>
                  setActiveIndex(
                    (activePosition - 1 + reviewScreenshots.length) % reviewScreenshots.length,
                  )
                }
              >
                <IconArrow className="h-4 w-4 rotate-180" aria-hidden />
                Previous
              </button>
              <p className="text-center text-sm font-medium text-ink-muted">
                {activePosition + 1} / {reviewScreenshots.length}
              </p>
              <button
                type="button"
                className="btn btn-primary min-w-0"
                onClick={() => setActiveIndex((activePosition + 1) % reviewScreenshots.length)}
              >
                Next
                <IconArrow className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <a
              href={activeReview.src}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-[var(--radius-sm)] border border-[color:var(--line-strong)] px-4 py-2 text-center text-sm font-semibold text-navy hover:bg-blue-soft md:hidden"
            >
              Open full-size review
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}
