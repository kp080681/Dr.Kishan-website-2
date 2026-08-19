"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { googleReviews } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { IconArrow } from "@/components/icons";

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState<number>();

  const measureReviewHeight = useCallback((slide: HTMLElement, viewport: HTMLElement) => {
    const viewportStyles = window.getComputedStyle(viewport);
    const verticalPadding =
      Number.parseFloat(viewportStyles.paddingTop) +
      Number.parseFloat(viewportStyles.paddingBottom);

    return Math.ceil(slide.getBoundingClientRect().height + verticalPadding + 4);
  }, []);

  const scrollToReview = (index: number) => {
    const nextIndex = (index + googleReviews.length) % googleReviews.length;
    const viewport = carouselRef.current;
    const nextSlide = viewport?.querySelector<HTMLElement>(
      `[data-review-index="${nextIndex}"]`,
    );

    setCarouselIndex(nextIndex);
    if (viewport && nextSlide) {
      setCarouselHeight(measureReviewHeight(nextSlide, viewport));
    }
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
        const activeSlide = slides.find(
          (slide) => Number(slide.dataset.reviewIndex) === closest.index,
        );
        if (activeSlide) {
          setCarouselHeight(measureReviewHeight(activeSlide, viewport));
        }
      });
    };

    updateActiveSlide();
    viewport.addEventListener("scroll", updateActiveSlide, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      viewport.removeEventListener("scroll", updateActiveSlide);
    };
  }, [measureReviewHeight]);

  useEffect(() => {
    const viewport = carouselRef.current;
    const activeSlide = viewport?.querySelector<HTMLElement>(
      `[data-review-index="${carouselIndex}"]`,
    );
    if (!viewport || !activeSlide) return;

    const updateHeight = () => {
      setCarouselHeight(measureReviewHeight(activeSlide, viewport));
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(activeSlide);
    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [carouselIndex, measureReviewHeight]);

  return (
    <section
      id="testimonials"
      className="living-section patient-experience-section section-pad"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        <div className="patient-experience-layout">
          <Reveal className="section-head patient-experience-intro">
            <p className="eyebrow">Testimonials</p>
            <h2 id="testimonials-heading" className="heading-display heading-xl">
              What patients say
            </h2>
            <p className="lede">
              Google reviews and earlier patient feedback shared about Dr. Kishan Rao&apos;s care.
            </p>
          </Reveal>

          <div className="review-carousel" aria-label="Google reviews">
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
              style={
                carouselHeight
                  ? ({ "--review-active-height": `${carouselHeight}px` } as CSSProperties)
                  : undefined
              }
              tabIndex={0}
              role="region"
              aria-label="Swipe or use arrow buttons to browse Google reviews"
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
                {googleReviews.map((review, index) => (
                  <Reveal
                    key={`${review.name}-${index}`}
                    as="article"
                    variant="soft-left"
                    delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
                    className="review-carousel__slide testimonial-motion"
                  >
                    <div
                      className="review-carousel__card"
                      data-review-index={index}
                      data-active={carouselIndex === index ? "true" : undefined}
                    >
                      <span className="review-carousel__quote-mark" aria-hidden>
                        &ldquo;
                      </span>
                      <div className="review-carousel__meta">
                        <p className="review-stars" aria-label={review.ratingLabel}>
                          {"★★★★★"}
                        </p>
                        <p>{review.source}</p>
                      </div>
                      <blockquote>
                        <p className="review-carousel__quote">{review.quote}</p>
                      </blockquote>
                      <p className="review-carousel__name">{review.name}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="review-carousel__dots" aria-label="Choose a Google review">
              {googleReviews.map((review, index) => (
                <button
                  key={`${review.name}-dot-${index}`}
                  type="button"
                  className="review-carousel__dot"
                  data-active={carouselIndex === index}
                  onClick={() => scrollToReview(index)}
                  aria-label={`Show review from ${review.name}`}
                  aria-current={carouselIndex === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
