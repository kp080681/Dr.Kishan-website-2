"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { IconArrow, IconClose } from "@/components/icons";

const reviewScreenshots = [
  {
    title: "Geetha Shetty Google review",
    src: "/images/testimonials/google-review-geetha-shetty.png",
    width: 833,
    height: 320,
  },
  {
    title: "Deepika Harish Google review",
    src: "/images/testimonials/google-review-deepika-harish.png",
    width: 845,
    height: 280,
  },
  {
    title: "Deepak Anchan Google review",
    src: "/images/testimonials/google-review-deepak-anchan.png",
    width: 837,
    height: 246,
  },
  {
    title: "Pratham Google review",
    src: "/images/testimonials/google-review-pratham.png",
    width: 858,
    height: 272,
  },
  {
    title: "Shruthi gs Google review",
    src: "/images/testimonials/google-review-shruthi-gs.png",
    width: 835,
    height: 343,
  },
  {
    title: "Zilani Zilani Google review",
    src: "/images/testimonials/google-review-zilani-zilani.png",
    width: 864,
    height: 441,
  },
  {
    title: "Deepak Anchan recent Google review",
    src: "/images/testimonials/google-review-deepak-anchan-august.png",
    width: 843,
    height: 242,
  },
  {
    title: "Pratham recent Google review",
    src: "/images/testimonials/google-review-pratham-august.png",
    width: 853,
    height: 264,
  },
  {
    title: "Sadik Bareppadi Google review",
    src: "/images/testimonials/google-review-sadik-bareppadi.png",
    width: 860,
    height: 522,
  },
  {
    title: "Narayan Putran Google review",
    src: "/images/testimonials/google-review-narayan-putran.png",
    width: 837,
    height: 317,
  },
  {
    title: "Shivu Pal Google review",
    src: "/images/testimonials/google-review-shivu-pal.png",
    width: 854,
    height: 218,
  },
  {
    title: "PP Venu Google review",
    src: "/images/testimonials/google-review-pp-venu.png",
    width: 866,
    height: 593,
  },
] as const;

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeReview = activeIndex === null ? null : reviewScreenshots[activeIndex];
  const activePosition = activeIndex ?? 0;

  const scrollToReview = (index: number) => {
    const nextIndex = (index + reviewScreenshots.length) % reviewScreenshots.length;
    const viewport = carouselRef.current;
    const nextSlide = viewport?.querySelector<HTMLElement>(
      `[data-review-index="${nextIndex}"]`,
    );

    setCarouselIndex(nextIndex);
    nextSlide?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  useEffect(() => {
    const viewport = carouselRef.current;
    if (!viewport) return;

    let frame = 0;
    const updateActiveSlide = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const slides = Array.from(
          viewport.querySelectorAll<HTMLElement>("[data-review-index]"),
        );
        const viewportLeft = viewport.getBoundingClientRect().left;
        const closest = slides.reduce(
          (match, slide) => {
            const distance = Math.abs(slide.getBoundingClientRect().left - viewportLeft);
            return distance < match.distance
              ? { distance, index: Number(slide.dataset.reviewIndex) }
              : match;
          },
          { distance: Number.POSITIVE_INFINITY, index: 0 },
        );

        setCarouselIndex(closest.index);
      });
    };

    updateActiveSlide();
    viewport.addEventListener("scroll", updateActiveSlide, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      viewport.removeEventListener("scroll", updateActiveSlide);
    };
  }, []);

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

        <div className="section-content review-carousel" aria-label="Google review screenshots">
          <div className="review-carousel__controls" aria-label="Review carousel controls">
            <button
              type="button"
              className="review-carousel__button"
              onClick={() => scrollToReview(carouselIndex - 1)}
              aria-label="Show previous Google review"
            >
              <IconArrow className="h-4 w-4 rotate-180" aria-hidden />
            </button>
            <button
              type="button"
              className="review-carousel__button"
              onClick={() => scrollToReview(carouselIndex + 1)}
              aria-label="Show next Google review"
            >
              <IconArrow className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <div
            ref={carouselRef}
            className="review-carousel__viewport"
            tabIndex={0}
            role="region"
            aria-label="Swipe or use arrow buttons to browse Google review screenshots"
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollToReview(carouselIndex - 1);
              }

              if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollToReview(carouselIndex + 1);
              }
            }}
          >
            <div className="review-carousel__track">
              {reviewScreenshots.map((review, index) => (
                <Reveal
                  key={review.src}
                  as="article"
                  variant="soft-left"
                  delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
                  className="review-carousel__slide testimonial-motion motion-card"
                >
                  <button
                    type="button"
                    className="review-carousel__card"
                    data-review-index={index}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Open larger ${review.title}, ${index + 1} of ${reviewScreenshots.length}`}
                  >
                    <span className="review-carousel__image-frame">
                      <Image
                        src={review.src}
                        alt={review.title}
                        width={review.width}
                        height={review.height}
                        sizes="(max-width: 767px) 88vw, (max-width: 1023px) 44vw, 27vw"
                        className="review-carousel__image"
                        loading="eager"
                      />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="review-carousel__dots" aria-label="Choose a Google review">
            {reviewScreenshots.map((review, index) => (
              <button
                key={review.src}
                type="button"
                className="review-carousel__dot"
                data-active={carouselIndex === index}
                onClick={() => scrollToReview(index)}
                aria-label={`Show ${review.title}`}
                aria-current={carouselIndex === index ? "true" : undefined}
              />
            ))}
          </div>
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
