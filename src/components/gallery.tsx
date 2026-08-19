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
      className={`gallery-editorial-tile gallery-editorial-tile--${getGalleryVariant(index)} group`}
    >
      <button
        type="button"
        className="gallery-tile-button gallery-editorial-tile__button relative block w-full shrink-0"
        onClick={() => openAt(item)}
        aria-label={`Open gallery image: ${item.label}`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={sizes}
          quality={92}
          className="gallery-editorial-tile__image transition-transform duration-500 group-hover:scale-[1.025]"
          style={{ objectPosition: item.objectPosition }}
        />
      </button>
      <figcaption className="gallery-editorial-tile__caption">
        {item.label}
      </figcaption>
    </Reveal>
  );

  return (
    <section
      id="gallery"
      className="gallery-editorial-section section-pad"
      aria-labelledby="gallery-heading"
    >
      <div className="container-site">
        <Reveal className="section-head gallery-editorial-head">
          <p className="eyebrow">Gallery</p>
          <h2 id="gallery-heading" className="heading-display heading-xl">
            A surgeon&apos;s journey
          </h2>
          <p className="lede">
            Clinical Practice &middot; Medical Education &middot; Community
          </p>
        </Reveal>

        <div className="section-content gallery-editorial-grid">
          {visibleItems.map((item, index) =>
            renderTile(
              item,
              index,
              "(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 28rem",
            ),
          )}
        </div>

        <div className="gallery-editorial-actions">
          {hasMoreItems ? (
            <button
              type="button"
              className="expandable-trigger expandable-trigger--on-dark"
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
              className="expandable-trigger expandable-trigger--on-dark"
              onClick={() => setVisibleCount(INITIAL_GALLERY_COUNT)}
            >
              <span>Show fewer</span>
              <span className="expandable-trigger__mark" aria-hidden>
                -
              </span>
            </button>
          ) : null}
          <p className="text-sm font-medium text-white/60" aria-live="polite">
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

function getGalleryVariant(index: number) {
  const variants = ["feature", "wide", "tall", "wide", "compact", "compact", "wide", "compact"];
  return variants[index % variants.length];
}
