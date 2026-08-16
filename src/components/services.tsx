import Image from "next/image";
import Link from "next/link";
import { getConditionByName } from "@/content/conditions";
import { services } from "@/content/site";
import { Reveal } from "@/components/reveal";
import {
  IconArrow,
  IconGeneral,
  IconLaparoscopic,
  IconLaser,
  IconVascular,
} from "@/components/icons";

type ConditionIconVariant =
  | "leg-vein"
  | "vein"
  | "colorectal"
  | "fissure"
  | "fistula"
  | "sacral"
  | "gallbladder"
  | "appendix"
  | "hernia"
  | "hernia-surgery"
  | "breast"
  | "thyroid"
  | "circumcision"
  | "foot"
  | "procedure"
  | "emergency";

const icons = {
  general: IconGeneral,
  laparoscopic: IconLaparoscopic,
  laser: IconLaser,
  varicose: IconVascular,
} as const;

type ProcedureName = (typeof services)[number]["procedures"][number];

const conditionIconMap: Record<ProcedureName, ConditionIconVariant> = {
  "Varicose Veins (EVLA)": "leg-vein",
  "Piles (Hemorrhoids)": "colorectal",
  Fissure: "fissure",
  Fistula: "fistula",
  "Pilonidal Sinus": "sacral",
  "Gallbladder Stones": "gallbladder",
  Appendix: "appendix",
  Hernia: "hernia",
  "Hernia Surgery": "hernia-surgery",
  "Breast Surgery": "breast",
  "Thyroid Surgery": "thyroid",
  Circumcision: "circumcision",
  "Diabetic Foot & Ulcer Care": "foot",
  "Minor Surgical Procedures": "procedure",
  "Emergency Surgery": "emergency",
  "Varicose Veins": "vein",
};

function ConditionIcon({ variant }: { variant: ConditionIconVariant }) {
  const common = {
    viewBox: "0 0 96 96",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  return (
    <svg {...common} className="condition-icon__svg">
      {variant === "leg-vein" ? (
        <>
          <path className="condition-icon__fill" d="M33 9c-6 14-7 25-3 34 5 12 3 24-6 38h17c9-14 11-27 6-40-4-9-3-20 4-32H33Z" />
          <path className="condition-icon__fill condition-icon__fill--strong" d="M56 9c7 13 8 25 4 36-4 12-2 24 8 36H51c-9-13-11-26-6-39 4-10 3-21-5-33h16Z" />
          <path d="M35 14c-6 13-7 24-2 34 5 12 3 22-6 31" />
          <path d="M55 14c7 12 8 23 3 34-5 12-2 23 8 31" />
          <path d="M34 39c10 0 17-5 23-15" />
          <path d="M58 55c-11 1-18 6-23 16" />
          <path d="M43 22c6 10 6 20 0 30" />
        </>
      ) : null}
      {variant === "vein" ? (
        <>
          <path className="condition-icon__fill" d="M32 12h32c-10 11-12 22-7 34 4 11 2 24-7 38H30c9-13 11-26 7-38-5-13-3-24-5-34Z" />
          <path d="M38 16c-5 13-4 24 2 34 6 11 5 22-3 31" />
          <path d="M58 16c6 13 5 24-1 34-6 11-4 22 5 31" />
          <path d="M39 36c9 0 16-5 20-14" />
          <path d="M57 59c-9 0-15 5-19 14" />
          <circle cx="48" cy="48" r="5" />
        </>
      ) : null}
      {variant === "colorectal" ? (
        <>
          <path className="condition-icon__fill" d="M25 18c-9 9-13 21-10 36 3 17 16 27 33 27s30-10 33-27c3-15-1-27-10-36-8 10-8 28 0 39-6 8-14 12-23 12s-17-4-23-12c8-11 8-29 0-39Z" />
          <path d="M25 18c-9 9-13 21-10 36 3 17 16 27 33 27s30-10 33-27c3-15-1-27-10-36" />
          <path d="M35 26c-7 13-6 33 4 40 6 4 12 4 18 0 10-7 11-27 4-40" />
          <circle cx="48" cy="57" r="9" />
          <path d="M48 66v16" />
        </>
      ) : null}
      {variant === "fissure" ? (
        <>
          <path className="condition-icon__fill" d="M26 18c-9 10-13 23-11 38 3 16 15 26 33 26s30-10 33-26c2-15-2-28-11-38-8 12-8 29 0 42-6 6-13 9-22 9s-16-3-22-9c8-13 8-30 0-42Z" />
          <path d="M26 18c-9 10-13 23-11 38 3 16 15 26 33 26s30-10 33-26c2-15-2-28-11-38" />
          <path d="M48 26v43" />
          <path d="M39 49 57 34" />
          <path d="M39 63 58 47" />
          <path d="M35 37c8 7 17 7 26 0" />
        </>
      ) : null}
      {variant === "fistula" ? (
        <>
          <circle className="condition-icon__fill" cx="43" cy="48" r="18" />
          <circle cx="43" cy="48" r="17" />
          <path d="M43 48c13-16 27-21 42-14" />
          <path d="M43 48C30 56 21 66 16 80" />
          <path d="M55 36c4 11 1 20-8 27" />
          <circle className="condition-icon__fill condition-icon__fill--strong" cx="83" cy="33" r="6" />
          <circle cx="83" cy="33" r="6" />
          <circle cx="16" cy="80" r="5" />
        </>
      ) : null}
      {variant === "sacral" ? (
        <>
          <path className="condition-icon__fill" d="M31 12c12 7 22 7 34 0 6 22 0 45-17 70C31 57 25 34 31 12Z" />
          <path d="M31 12c12 7 22 7 34 0 6 22 0 45-17 70C31 57 25 34 31 12Z" />
          <path d="M38 44c8-4 15-4 22 0" />
          <path d="M40 58c6-3 11-3 16 0" />
          <circle cx="49" cy="52" r="5" />
          <path d="M43 27c5 3 9 3 13 0" />
        </>
      ) : null}
      {variant === "gallbladder" ? (
        <>
          <path className="condition-icon__fill" d="M55 10c-12 13-14 27-6 42 5 10 2 20-8 31 22 7 39-4 39-25 0-18-8-33-25-48Z" />
          <path d="M55 10c-12 13-14 27-6 42 5 10 2 20-8 31" />
          <path d="M60 24c15 10 22 24 20 40-2 16-18 24-37 18" />
          <path d="M58 35c8 6 11 14 9 23" />
          <circle cx="64" cy="59" r="6" />
          <circle cx="51" cy="69" r="4" />
          <circle cx="67" cy="74" r="3.2" />
        </>
      ) : null}
      {variant === "appendix" ? (
        <>
          <path className="condition-icon__fill" d="M22 18c18 0 32 13 32 29v12c0 10 9 15 18 10 1 10-10 18-21 12-8-4-13-12-13-22V48c0-8-7-15-16-15V18Z" />
          <path d="M22 18c18 0 32 13 32 29v12c0 10 9 15 18 10" />
          <path d="M22 32h20" />
          <path d="M22 45h23" />
          <path d="M63 68c-5-6-5-12 0-18" />
          <circle cx="70" cy="69" r="5" />
        </>
      ) : null}
      {variant === "hernia" ? (
        <>
          <path className="condition-icon__fill" d="M27 15c-11 18-11 47 0 66h42c11-19 11-48 0-66-8 13-11 27-8 43H35c3-16 0-30-8-43Z" />
          <path d="M27 15c-11 18-11 47 0 66" />
          <path d="M69 15c11 18 11 47 0 66" />
          <circle cx="48" cy="54" r="14" />
          <path d="M34 54h28" />
          <path d="M40 45c6 5 12 5 18 0" />
        </>
      ) : null}
      {variant === "hernia-surgery" ? (
        <>
          <path className="condition-icon__fill" d="M27 15c-10 18-10 46 0 66h42c10-20 10-48 0-66-8 13-10 27-7 42H34c3-15 1-29-7-42Z" />
          <path d="M27 15c-10 18-10 46 0 66" />
          <path d="M69 15c10 18 10 46 0 66" />
          <circle cx="48" cy="50" r="13" />
          <path d="M36 72c8 5 16 5 24 0" />
          <path d="M35 36h26" />
          <path d="M28 83 67 44" />
          <path d="M68 83 29 44" />
        </>
      ) : null}
      {variant === "breast" ? (
        <>
          <path className="condition-icon__fill" d="M18 60c9 17 25 23 43 16 13-5 19-15 17-31-2-13-10-23-23-29-20 3-34 20-37 44Z" />
          <path d="M18 60c9 17 25 23 43 16 13-5 19-15 17-31" />
          <path d="M25 60c-2-20 11-40 30-44 13 5 21 15 23 29" />
          <path d="M36 47c8 5 16 5 24 1" />
          <circle cx="57" cy="54" r="5" />
        </>
      ) : null}
      {variant === "thyroid" ? (
        <>
          <path className="condition-icon__fill" d="M31 38c0-12 8-20 17-20s17 8 17 20-6 23-17 34C37 61 31 50 31 38Z" />
          <path d="M40 10v20" />
          <path d="M56 10v20" />
          <path d="M48 30v16" />
          <path d="M31 38c0-12 8-20 17-20s17 8 17 20-6 23-17 34C37 61 31 50 31 38Z" />
          <path d="M37 46c8-5 15-5 22 0" />
          <path d="M40 58c6-3 11-3 16 0" />
        </>
      ) : null}
      {variant === "circumcision" ? (
        <>
          <path className="condition-icon__fill" d="M48 13v42c-9 3-15 10-15 19 0 8 6 14 15 18 9-4 15-10 15-18 0-9-6-16-15-19Z" />
          <path d="M48 13v42" />
          <path d="M34 58c9 7 19 7 28 0" />
          <path d="M33 72c0 8 6 15 15 19 9-4 15-11 15-19" />
          <path d="M35 72c8 4 17 4 26 0" />
          <path d="M69 33l12-12" />
          <path d="M81 33 69 21" />
        </>
      ) : null}
      {variant === "foot" ? (
        <>
          <path className="condition-icon__fill" d="M56 10c-9 18-8 32 4 43 8 7 6 17-4 25-13 10-33 5-41-9 11 4 25 2 35-5" />
          <path d="M56 10c-9 18-8 32 4 43 8 7 6 17-4 25-13 10-33 5-41-9" />
          <path d="M24 71c10 4 24 2 36-6" />
          <circle cx="29" cy="61" r="5" />
          <circle cx="41" cy="69" r="4" />
          <path d="M69 30h12M75 24v12" />
          <path d="M65 42c8 3 15 1 21-5" />
        </>
      ) : null}
      {variant === "procedure" ? (
        <>
          <rect className="condition-icon__fill" x="20" y="12" width="42" height="64" rx="9" />
          <rect x="20" y="12" width="42" height="64" rx="9" />
          <path d="M32 29h19M32 43h24M32 57h16" />
          <path d="M60 67l14 14" />
          <path d="M70 59l11-11" />
          <path d="M71 72l14-14" />
        </>
      ) : null}
      {variant === "emergency" ? (
        <>
          <circle className="condition-icon__fill" cx="48" cy="50" r="30" />
          <circle cx="48" cy="50" r="30" />
          <path d="M48 24v52" />
          <path d="M22 50h52" />
          <path d="M32 34l32 32" />
          <path d="M64 34 32 66" />
          <path d="M75 12l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z" />
        </>
      ) : null}
    </svg>
  );
}

function ProcedureDefinitionItem({
  item,
}: {
  item: ProcedureName;
}) {
  const condition = getConditionByName(item);

  return (
    <li className="service-term service-term--open">
      <div className="service-term__button">
        <span className="condition-icon" aria-hidden>
          <ConditionIcon variant={conditionIconMap[item]} />
        </span>
        <span className="service-term__name">{item}</span>
      </div>
      <div className="service-term__definition">
        <p>{condition?.definition}</p>
        {condition ? (
          <Link href={`/conditions/${condition.slug}`} className="service-term__link">
            Open condition page
            <IconArrow className="h-4 w-4" aria-hidden />
          </Link>
        ) : null}
      </div>
    </li>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="living-section treatments-section section-pad"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        <Reveal className="section-head treatments-section__head">
          <p className="eyebrow">Treatments</p>
          <h2 id="services-heading" className="heading-display heading-xl max-w-3xl">
            Surgical concerns explained clearly before the next step
          </h2>
          <p className="lede">
            The main services are listed in plain language so patients can identify the
            broad area of concern before booking a consultation.
          </p>
        </Reveal>

        <div className="section-content treatments-journey">
          {services.map((service, index) => (
            <ServicePanel
              key={service.id}
              service={service}
              featured={index === 0}
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
              flip={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePanel({
  service,
  featured = false,
  delay,
  flip = false,
}: {
  service: (typeof services)[number];
  featured?: boolean;
  delay?: 1 | 2 | 3;
  flip?: boolean;
}) {
  const Icon = icons[service.id as keyof typeof icons];

  return (
    <Reveal
      as="article"
      delay={delay}
      className={`motion-card service-panel service-panel--${service.id} ${
        featured ? "service-panel--featured" : ""
      } ${
        flip ? "service-panel--reverse" : ""
      }`}
    >
      <div className="service-panel__intro">
        <div className="flex items-start gap-4">
          <span className="service-icon-motion service-panel__icon">
            <Icon className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue">
              Treatment area
            </p>
            <h3 className="heading-display heading-card mt-1">{service.title}</h3>
          </div>
        </div>
      </div>

      <div className="service-panel__media">
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={service.imageWidth}
          height={service.imageHeight}
          sizes="(max-width: 768px) 92vw, 58rem"
          quality={90}
          className="service-panel__image"
          style={{ objectPosition: service.imagePosition }}
        />
      </div>

      <div className="service-panel__conditions">
        <ul className="mt-5 grid gap-2">
          {service.procedures.map((item) => (
            <ProcedureDefinitionItem key={item} item={item} />
          ))}
        </ul>

        {service.href && service.href !== "/#services" ? (
          <Link
            href={service.href}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue"
          >
            Read patient information
            <IconArrow className="motion-link-arrow h-4 w-4" aria-hidden />
          </Link>
        ) : null}
      </div>
    </Reveal>
  );
}
