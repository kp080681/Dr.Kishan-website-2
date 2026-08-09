"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryItems } from "@/content/site";
import { IconArrow, IconClose } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const INITIAL_GALLERY_COUNT = 8;
const GALLERY_BATCH_SIZE = 8;

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_GALLERY_COUNT);
  const visibleItems = galleryItems.slice(0, visibleCount);
  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];
  const hasMoreItems = visibleCount < galleryItems.length;

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null ? index : (index - 1 + galleryItems.length) % galleryItems.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % galleryItems.length));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const openAt = (item: (typeof galleryItems)[number]) => {
    const index = galleryItems.findIndex((galleryItem) => galleryItem.src === item.src);
    setActiveIndex(index >= 0 ? index : 0);
  };

  const renderTile = (
    item: (typeof galleryItems)[number],
    index: number,
    sizes: string,
  ) => (
    <Reveal
      key={item.src}
      as="figure"
      delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
      className="gallery-depth group flex h-full min-h-0 flex-col overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white"
    >
      <button
        type="button"
        className="gallery-tile-button image-mask relative block aspect-[4/3] w-full shrink-0 bg-navy"
        onClick={() => openAt(item)}
        aria-label={`Open gallery image: ${item.label}`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={sizes}
          quality={92}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
          style={{ objectPosition: item.objectPosition }}
        />
      </button>
      <figcaption className="flex min-h-[4.25rem] items-center px-4 py-3 text-sm font-semibold leading-snug text-navy sm:px-5">
        {item.label}
      </figcaption>
    </Reveal>
  );

  return (
    <section id="gallery" className="living-section section-pad" aria-labelledby="gallery-heading">
      <div className="container-site">
        <Reveal className="section-head">
          <p className="eyebrow">Gallery</p>
          <h2 id="gallery-heading" className="heading-display heading-xl">
            A closer look at clinical and professional life
          </h2>
          <p className="lede">
            A curated preview from clinical, teaching and public-service moments, with the
            complete client-supplied archive available in place.
          </p>
        </Reveal>

        <div className="section-content grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) =>
            renderTile(
              item,
              index,
              "(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 28rem",
            ),
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {hasMoreItems ? (
            <button
              type="button"
              className="expandable-trigger"
              onClick={() =>
                setVisibleCount((count) => Math.min(count + GALLERY_BATCH_SIZE, galleryItems.length))
              }
            >
              <span>View more</span>
              <span className="expandable-trigger__mark" aria-hidden>
                +
              </span>
            </button>
          ) : null}
          {visibleCount > INITIAL_GALLERY_COUNT ? (
            <button
              type="button"
              className="expandable-trigger"
              onClick={() => setVisibleCount(INITIAL_GALLERY_COUNT)}
            >
              <span>Show fewer</span>
              <span className="expandable-trigger__mark" aria-hidden>
                -
              </span>
            </button>
          ) : null}
          <p className="text-sm font-medium text-ink-muted" aria-live="polite">
            Showing {visibleItems.length} of {galleryItems.length}
          </p>
        </div>
      </div>

      {activeItem ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            type="button"
            className="gallery-lightbox__backdrop"
            aria-label="Close gallery image viewer"
            onClick={() => setActiveIndex(null)}
          />
          <div className="gallery-lightbox__panel">
            <button
              type="button"
              className="gallery-lightbox__close"
              aria-label="Close gallery image viewer"
              onClick={() => setActiveIndex(null)}
            >
              <IconClose className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              aria-label="Previous gallery image"
              onClick={() =>
                setActiveIndex((index) =>
                  index === null ? index : (index - 1 + galleryItems.length) % galleryItems.length,
                )
              }
            >
              <IconArrow className="h-5 w-5 rotate-180" aria-hidden />
            </button>
            <figure>
              <div className="gallery-lightbox__image">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="96vw"
                  quality={96}
                  className="object-contain"
                />
              </div>
              <figcaption className="gallery-lightbox__caption">
                <span>{activeItem.label}</span>
                <span>
                  {(activeIndex ?? 0) + 1} of {galleryItems.length}
                </span>
              </figcaption>
            </figure>
            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              aria-label="Next gallery image"
              onClick={() =>
                setActiveIndex((index) => (index === null ? index : (index + 1) % galleryItems.length))
              }
            >
              <IconArrow className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
