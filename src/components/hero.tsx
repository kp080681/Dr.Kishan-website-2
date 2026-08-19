import Image from "next/image";
import { doctor, images } from "@/content/site";
import { IconCalendar, IconWhatsApp } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-cinematic surface-dark relative overflow-hidden pt-[calc(var(--header-h)+1.25rem)] pb-10 md:pb-14 lg:pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="hero-cinematic__image" aria-hidden>
        <Image
          src={images.hero.src}
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
          quality={92}
          className="object-contain object-right-bottom"
        />
      </div>
      <div className="hero-cinematic__shade" aria-hidden />

      <div className="container-site relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
        <Reveal className="hero-sequence hero-cinematic__content max-w-2xl">
          <p className="eyebrow">Consultations in Mangalore</p>
          <h1 id="hero-heading" className="heading-display heading-hero mt-3">
            {doctor.name}
          </h1>
          <div className="hero-credentials mt-5">
            <p className="hero-credentials__item hero-credentials__item--primary">
              MBBS (BMC) &middot; MS (Gold Medalist) &middot; FMAS &middot; DMAS
            </p>
            <p className="hero-credentials__item">Laparoscopic Surgeon in Mangalore</p>
            <p className="hero-credentials__item hero-credentials__item--accent">
              Advanced LASER Surgery
            </p>
          </div>
          <p className="heading-display heading-md mt-6 text-navy-soft">
            Surgical care with clear guidance from first consultation to recovery.
          </p>
          <p className="lede mt-4">
            Consultations available by prior appointment across Mangalore, Puttur and Sullia.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#consultation" className="btn btn-primary">
              <IconCalendar className="h-4 w-4" aria-hidden />
              Book Consultation
            </a>
            <a
              href={doctor.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              <IconWhatsApp className="h-5 w-5" aria-hidden />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
