import Image from "next/image";
import { doctor, images, locations } from "@/content/site";
import { IconCalendar, IconPhone, IconPin, IconWhatsApp } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function Hero() {
  const featured = locations.filter((item) => item.status === "scheduled").slice(0, 4);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[calc(var(--header-h)+1.25rem)] pb-10 md:pb-14 lg:pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-red/5 blur-3xl" />
      </div>

      <div className="container-site relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
        <Reveal className="hero-sequence max-w-2xl">
          <p className="eyebrow">Consultations in Mangalore &amp; Dakshina Kannada</p>
          <h1 id="hero-heading" className="heading-display heading-hero mt-3">
            {doctor.name}
          </h1>
          <p className="mt-3 text-[length:var(--text-support)] font-semibold tracking-wide text-red">
            {doctor.credentials}
          </p>
          <p className="mt-2 text-[length:var(--text-body)] font-medium text-blue">
            {doctor.primaryRole}
          </p>
          <p className="heading-display heading-md mt-6 text-navy-soft">
            Surgical care with clear guidance — from first consultation to recovery.
          </p>
          <p className="lede mt-4">
            Patients across Mangalore and nearby towns can consult Dr. Kishan Rao for
            general, laparoscopic, LASER and selected vascular surgical concerns. Appointments
            are by prior booking, with timings confirmed before you travel.
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
            <a href={`tel:${doctor.phoneTel}`} className="btn btn-secondary">
              <IconPhone className="h-4 w-4" aria-hidden />
              Call
            </a>
          </div>

          <div className="motion-card mt-8 rounded-[var(--radius)] border border-[color:var(--line)] bg-white/80 p-4 shadow-[var(--shadow)] sm:p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
                <IconPin className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-navy">Where patients can consult</p>
                <p className="mt-1 text-sm text-ink-muted">
                  Regular clinics in Mangalore, Ayyanakatte and Puttur, with visiting
                  consultations at selected hospitals by confirmation.
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {featured.map((item) => (
                    <li
                      key={item.id}
                      className="rounded-[var(--radius-sm)] bg-surface px-3 py-2.5"
                    >
                      <p className="text-sm font-semibold text-navy">{item.name}</p>
                      <p className="text-xs text-ink-muted">{item.place}</p>
                      <p className="mt-1 text-xs font-medium text-blue">{item.schedule}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href="#consultation"
                  className="mt-3 inline-flex text-sm font-semibold text-blue underline-offset-4 hover:underline"
                >
                  View all locations & timings
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="image" delay={2} className="hero-portrait relative mx-auto w-full max-w-[28rem] lg:max-w-none">
          <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-blue/15 via-transparent to-red/10 blur-sm" />
          <div className="image-mask relative overflow-hidden rounded-[1.25rem] border border-[color:var(--line)] bg-navy shadow-[var(--shadow)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-[center_18%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <p className="text-sm font-medium text-white/90">
                {doctor.primaryRole}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">{doctor.name}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
