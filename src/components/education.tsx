import Image from "next/image";
import { doctor, images } from "@/content/site";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { IconFacebook, IconInstagram, IconUsers } from "@/components/icons";

export function Education() {
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
            Beyond the clinic, Dr. Kishan Rao leads a free online medical education platform
            that supports learners and young clinicians across the world.
          </p>
          <div className="motion-card mt-6 rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-soft text-red">
                <IconUsers className="h-5 w-5" />
              </span>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-navy">
                  <CountUp value={3.5} suffix="lakh+" />
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  members worldwide on The White Army, a free medical education community.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            As a Career Counsellor and Motivational Mentor, he also guides students under the
            public education identity{" "}
            <span className="font-semibold text-navy">{doctor.social.handle}</span> —
            a name used only in this educational and social-media context.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
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
        </Reveal>

        <Reveal variant="image" delay={2} className="order-1 lg:order-2">
          <div className="image-mask relative mx-auto max-w-md overflow-hidden rounded-[1.25rem] border border-[color:var(--line)] bg-navy shadow-[var(--shadow)] lg:max-w-none">
            <div className="relative aspect-[4/5]">
              <Image
                src={images.education.src}
                alt={images.education.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-[center_15%]"
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
