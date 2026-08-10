"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/content/site";
import { Reveal } from "@/components/reveal";
import {
  IconGeneral,
  IconLaparoscopic,
  IconLaser,
  IconVascular,
} from "@/components/icons";

const icons = {
  general: IconGeneral,
  laparoscopic: IconLaparoscopic,
  laser: IconLaser,
  vascular: IconVascular,
} as const;

const procedureDefinitions = {
  "Varicose Veins (EVLA)":
    "Varicose veins are enlarged, twisted veins that commonly appear in the legs. EVLA stands for endovenous laser ablation, a term for using laser energy inside a vein.",
  "Piles (Hemorrhoids)":
    "Piles, also called hemorrhoids, are swollen blood vessels in or around the anus and lower rectum. They may be internal or external depending on where they form.",
  Fissure:
    "An anal fissure is a small tear in the skin lining the anal opening. It is commonly associated with pain during bowel movements and sometimes bleeding.",
  Fistula:
    "An anal fistula is an abnormal tunnel that can form between the anal canal and the skin near the anus. It often develops after infection in a nearby anal gland.",
  "Pilonidal Sinus":
    "A pilonidal sinus is a small tunnel or cavity in the skin, usually near the cleft between the buttocks. It may contain hair and skin debris.",
  "Gallbladder Stones":
    "Gallbladder stones, also called gallstones, are hardened deposits that form inside the gallbladder. The gallbladder is a small organ that stores bile, a fluid used in digestion.",
  Appendix:
    "The appendix is a small pouch attached to the first part of the large intestine. Appendix-related problems commonly refer to inflammation of this organ, known as appendicitis.",
  Hernia:
    "A hernia is a bulge that forms when tissue or an organ pushes through a weak area in the surrounding muscle or wall. Hernias commonly occur in the abdomen or groin.",
  "Diagnostic Laparoscopy":
    "Diagnostic laparoscopy is a minimally invasive procedure used to look inside the abdomen or pelvis with a small camera. The term describes the use of small openings and a camera for visual assessment.",
  "Hernia Surgery":
    "Hernia surgery is a procedure that repairs the weak area where a hernia has formed. The term describes the operation used to close or reinforce that weakness.",
  "Breast Surgery":
    "Breast surgery refers to surgical procedures involving breast tissue. The term may relate to breast lumps, infections, wounds, or other breast conditions.",
  "Thyroid Surgery":
    "Thyroid surgery refers to surgical procedures involving the thyroid gland. The thyroid is a gland in the front of the neck that helps regulate body metabolism.",
  Circumcision:
    "Circumcision is a procedure that removes the foreskin from the tip of the penis. The term refers to the removal of this fold of skin.",
  "Diabetic Foot & Ulcer Care":
    "A diabetic foot ulcer is an open sore or wound that can occur on the foot in people with diabetes. These wounds are linked to changes in sensation, circulation, and skin healing.",
  "Minor Surgical Procedures":
    "Minor surgical procedures are smaller operations usually performed for limited or local problems. The term describes the size and scope of the procedure, not a single condition.",
  "Emergency Surgery":
    "Emergency surgery refers to an operation performed for a condition that needs urgent medical attention. The term describes the urgency and timing of care, not one specific operation.",
  "Varicose Veins":
    "Varicose veins are enlarged, twisted veins that commonly appear in the legs. They develop when valves inside the veins do not allow blood to flow efficiently back toward the heart.",
  "Venous Ulcers":
    "Venous ulcers are open wounds that usually occur on the lower leg. They are linked to poor blood flow in the leg veins over time.",
  Sclerotherapy:
    "Sclerotherapy is a procedure in which a solution is injected into a vein. The term refers to the injection method used to close or shrink selected veins.",
  "Peripheral Arterial Disease (PAD)":
    "Peripheral arterial disease, or PAD, is a condition in which narrowed arteries reduce blood flow to the limbs. It most commonly affects the legs.",
} as const;

type ProcedureName = keyof typeof procedureDefinitions;

function ProcedureDefinitionItem({
  item,
  isOpen,
  onToggle,
  className = "",
}: {
  item: ProcedureName;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}) {
  const contentId = `service-definition-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <li
      className={`rounded-[var(--radius-sm)] bg-surface text-sm leading-relaxed text-ink-muted ring-1 ring-[color:var(--line)] ${className}`}
    >
      <button
        type="button"
        className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 px-3 py-2 text-left font-medium text-navy-soft transition-colors duration-150 hover:bg-blue-soft/55 hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
      >
        <span>{item}</span>
        <span className="shrink-0 text-xs font-semibold text-blue" aria-hidden>
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen ? (
        <p id={contentId} className="border-t border-[color:var(--line)] px-3 py-3 text-sm leading-relaxed text-ink-muted">
          {procedureDefinitions[item]}
        </p>
      ) : null}
    </li>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="living-section depth-light section-pad bg-[linear-gradient(180deg,rgba(232,240,248,0.55)_0%,rgba(247,245,242,0.2)_100%)]"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        <Reveal className="section-head">
          <p className="eyebrow">Core services</p>
          <h2 id="services-heading" className="heading-display heading-xl max-w-3xl">
            Surgical care organised around clear clinical pathways
          </h2>
          <p className="lede">
            Explore Dr. Kishan Rao&apos;s areas of surgical care.
          </p>
        </Reveal>

        <div className="section-content grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.id as keyof typeof icons];
            const previewItems = service.procedures.slice(0, service.previewCount);
            const hiddenCount = service.procedures.length - previewItems.length;
            return (
              <ServiceCard
                key={service.id}
                service={service}
                Icon={Icon}
                previewItems={previewItems}
                hiddenCount={hiddenCount}
                delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | undefined}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  Icon,
  previewItems,
  hiddenCount,
  delay,
}: {
  service: (typeof services)[number];
  Icon: (typeof icons)[keyof typeof icons];
  previewItems: readonly string[];
  hiddenCount: number;
  delay: 1 | 2 | 3 | undefined;
}) {
  const [openProcedure, setOpenProcedure] = useState<ProcedureName | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleItems = (showAll ? service.procedures : previewItems) as readonly ProcedureName[];

  return (
    <Reveal
      as="article"
      delay={delay}
      className="motion-card group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-[color:var(--line)] bg-white shadow-[0_12px_32px_rgba(11,28,51,0.04)] transition-shadow duration-200 hover:shadow-[0_18px_40px_rgba(11,28,51,0.08)]"
    >
      <div className="image-mask relative aspect-[16/10] bg-navy">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 92vw, 38rem"
          quality={90}
          className="object-cover"
          style={{ objectPosition: service.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/62 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <span className="service-icon-motion inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <h3 className="heading-display heading-card">{service.title}</h3>
          </div>
        </div>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {visibleItems.map((item) => (
            <ProcedureDefinitionItem
              key={item}
              item={item}
              isOpen={openProcedure === item}
              onToggle={() => setOpenProcedure((current) => (current === item ? null : item))}
              className="bg-surface"
            />
          ))}
          {hiddenCount > 0 ? (
            <li>
              <button
                type="button"
                className="flex min-h-11 w-full cursor-pointer items-center justify-center rounded-[var(--radius-sm)] bg-blue-soft px-3 py-2 text-sm font-semibold text-blue transition-colors duration-150 hover:bg-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                aria-expanded={showAll}
                onClick={() => {
                  setShowAll((current) => !current);
                  setOpenProcedure(null);
                }}
              >
                {showAll ? "Show less" : `+${hiddenCount} more`}
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </Reveal>
  );
}
