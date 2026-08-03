import Image from "next/image";
import { aboutMilestones, doctor, images } from "@/content/site";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="living-section section-pad" aria-labelledby="about-heading">
      <div className="container-site grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
        <Reveal variant="image" className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="image-mask relative overflow-hidden rounded-[1.25rem] border border-[color:var(--line)] bg-blue-deep shadow-[var(--shadow)]">
            <div className="relative aspect-[3/4]">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover object-[center_12%]"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal className="section-head">
            <p className="eyebrow">About</p>
            <h2 id="about-heading" className="heading-display heading-xl">
              A surgeon patients can talk to — and trust with careful decisions
            </h2>
            <p className="text-[length:var(--text-support)] font-semibold text-red">
              {doctor.credentials}
            </p>
            <p className="lede">
              Dr. Kishan Rao is a General, Laparoscopic and LASER Surgeon practising across
              Mangalore and Dakshina Kannada. Patients meet a clinician who listens first,
              explains clearly, and recommends surgery only when it is appropriate.
            </p>
            <p className="support-text">
              His training path includes Bangalore Medical College, where he received the Best
              Outgoing Student Award, and an MS in General Surgery completed as university
              topper and Gold Medalist. Further cardiovascular training at AIIMS, New Delhi,
              paediatric cardiac surgery training at Sree Chitra Tirunal Institute, and
              specialised work in laparoscopy, endoscopy, robotic surgery and LASER care shape
              the depth he brings to everyday patient decisions.
            </p>
          </Reveal>

          <div className="credentials-timeline section-content grid gap-3 sm:grid-cols-2">
            {aboutMilestones.map((item, index) => (
              <Reveal
                key={item.title}
                as="article"
                delay={(Math.min(index % 3, 2) + 1) as 1 | 2 | 3}
                className="motion-card rounded-[var(--radius)] border border-[color:var(--line)] bg-white px-4 py-4"
              >
                <h3 className="text-sm font-semibold text-navy sm:text-[0.95rem]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
