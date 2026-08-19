"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { doctor } from "@/content/site";
import { IconCalendar, IconPhone, IconWhatsApp } from "@/components/icons";

export function FloatingCta() {
  const [isReadingZoneVisible, setIsReadingZoneVisible] = useState(false);

  useEffect(() => {
    const readingZones = Array.from(
      document.querySelectorAll(
        ".credibility-strip, #services, [aria-labelledby=\"why-choose-heading\"], #about, #testimonials, .education-public-impact-chapter, .books-section, #faqs, .final-consult-cta",
      ),
    );
    if (readingZones.length === 0) return;

    const visibleSections = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target);
          } else {
            visibleSections.delete(entry.target);
          }
        });

        setIsReadingZoneVisible(visibleSections.size > 0);
      },
      {
        rootMargin: "-15% 0px -25% 0px",
        threshold: 0.01,
      },
    );

    readingZones.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`floating-cta ${isReadingZoneVisible ? "floating-cta--hidden" : ""}`}
      aria-label="Quick contact actions"
      aria-hidden={isReadingZoneVisible ? "true" : undefined}
    >
      <a href={`tel:${doctor.phoneTel}`} className="floating-cta__link">
        <IconPhone className="h-4 w-4" aria-hidden />
        <span>Call</span>
      </a>
      <a
        href={doctor.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta__link floating-cta__link--accent"
      >
        <IconWhatsApp className="h-5 w-5" aria-hidden />
        <span>WhatsApp</span>
      </a>
      <Link href="/#consultation" className="floating-cta__link floating-cta__link--primary">
        <IconCalendar className="h-4 w-4" aria-hidden />
        <span>Book</span>
      </Link>
    </div>
  );
}
