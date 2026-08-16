import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { conditionPages, getConditionBySlug } from "@/content/conditions";
import { doctor } from "@/content/site";
import { IconArrow, IconCalendar, IconPhone, IconWhatsApp } from "@/components/icons";
import { createBreadcrumbSchema } from "@/lib/schema";
import { defaultOgImage } from "@/lib/seo";

type ConditionPageProps = {
  params: Promise<{ slug: string }>;
};

const conditionSeo: Record<
  string,
  { title: string; description: string; canonical: string }
> = {
  "varicose-veins-evla": {
    title: "Varicose Veins EVLA | Dr. Kishan Rao",
    description:
      "Patient information on varicose veins and EVLA, explaining enlarged leg veins and endovenous laser ablation in simple terms.",
    canonical: "/conditions/varicose-veins",
  },
  "piles-hemorrhoids": {
    title: "Piles and Hemorrhoids | Dr. Kishan Rao",
    description:
      "Simple patient information on piles or hemorrhoids, swollen blood vessels in or around the anus and lower rectum.",
    canonical: "/conditions/piles-hemorrhoids",
  },
  fissure: {
    title: "Anal Fissure | Dr. Kishan Rao",
    description:
      "Simple patient information on anal fissure, a small tear in the skin lining the anal opening.",
    canonical: "/conditions/fissure",
  },
  fistula: {
    title: "Anal Fistula | Dr. Kishan Rao",
    description:
      "Simple patient information on anal fistula, an abnormal tunnel near the anal canal and surrounding skin.",
    canonical: "/conditions/fistula",
  },
  "pilonidal-sinus": {
    title: "Pilonidal Sinus | Dr. Kishan Rao",
    description:
      "Simple patient information on pilonidal sinus, a small tunnel or cavity in the skin near the cleft between the buttocks.",
    canonical: "/conditions/pilonidal-sinus",
  },
  "gallbladder-stones": {
    title: "Gallbladder Stones | Dr. Kishan Rao",
    description:
      "Simple patient information on gallbladder stones, hardened deposits that form inside the gallbladder.",
    canonical: "/conditions/gallbladder-stones",
  },
  appendix: {
    title: "Appendix and Appendicitis | Dr. Kishan Rao",
    description:
      "Simple patient information on appendix-related problems, including inflammation of the appendix known as appendicitis.",
    canonical: "/conditions/appendix",
  },
  hernia: {
    title: "Hernia | Dr. Kishan Rao",
    description:
      "Simple patient information on hernia, a bulge that forms when tissue pushes through a weak area in the surrounding wall.",
    canonical: "/conditions/hernia",
  },
  "hernia-surgery": {
    title: "Hernia Surgery | Dr. Kishan Rao",
    description:
      "Simple patient information on hernia surgery, the procedure used to repair the weak area where a hernia has formed.",
    canonical: "/conditions/hernia",
  },
  "breast-surgery": {
    title: "Breast Surgery | Dr. Kishan Rao",
    description:
      "Simple patient information on breast surgery for procedures involving breast tissue, lumps, infections, wounds or related conditions.",
    canonical: "/conditions/breast-surgery",
  },
  "thyroid-surgery": {
    title: "Thyroid Surgery | Dr. Kishan Rao",
    description:
      "Simple patient information on thyroid surgery for procedures involving the thyroid gland in the front of the neck.",
    canonical: "/conditions/thyroid-surgery",
  },
  circumcision: {
    title: "Circumcision | Dr. Kishan Rao",
    description:
      "Simple patient information on circumcision, a procedure that removes the foreskin from the tip of the penis.",
    canonical: "/conditions/circumcision",
  },
  "diabetic-foot-ulcer-care": {
    title: "Diabetic Foot and Ulcer Care | Dr. Kishan Rao",
    description:
      "Simple patient information on diabetic foot ulcers, open sores or wounds linked to sensation, circulation and skin healing changes.",
    canonical: "/conditions/diabetic-foot-ulcer-care",
  },
  "minor-surgical-procedures": {
    title: "Minor Surgical Procedures | Dr. Kishan Rao",
    description:
      "Simple patient information on minor surgical procedures, smaller operations for limited or local problems.",
    canonical: "/conditions/minor-surgical-procedures",
  },
  "emergency-surgery": {
    title: "Emergency Surgery | Dr. Kishan Rao",
    description:
      "Simple patient information on emergency surgery, an operation performed for a condition that needs urgent medical attention.",
    canonical: "/conditions/emergency-surgery",
  },
  "varicose-veins": {
    title: "Varicose Veins | Dr. Kishan Rao",
    description:
      "Simple patient information on varicose veins, enlarged twisted veins that commonly appear in the legs.",
    canonical: "/conditions/varicose-veins",
  },
};

const relatedArticleByConditionSlug: Partial<
  Record<(typeof conditionPages)[number]["slug"], { href: string; label: string }>
> = {
  "varicose-veins": {
    href: "/blogs/laser-treatment-varicose-veins",
    label: "Read patient article on laser treatment for varicose veins",
  },
  "varicose-veins-evla": {
    href: "/blogs/laser-treatment-varicose-veins",
    label: "Read patient article on laser treatment for varicose veins",
  },
  "piles-hemorrhoids": {
    href: "/blogs/how-to-prevent-hemorrhoids",
    label: "Read patient article on hemorrhoid prevention",
  },
  hernia: {
    href: "/blogs/how-to-manage-a-hernia",
    label: "Read patient article on managing a hernia",
  },
  "hernia-surgery": {
    href: "/blogs/how-to-manage-a-hernia",
    label: "Read patient article on managing a hernia",
  },
};

export function generateStaticParams() {
  return conditionPages.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({ params }: ConditionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    return {};
  }

  const seo = conditionSeo[condition.slug] ?? {
    title: `${condition.name} | Dr. Kishan Rao`,
    description: condition.definition,
    canonical: `/conditions/${condition.slug}`,
  };

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      type: "article",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary",
      title: seo.title,
      description: seo.description,
      images: [defaultOgImage.url],
    },
  };
}

export default async function ConditionPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: condition.name, item: `/conditions/${condition.slug}` },
  ]);
  const relatedArticle = relatedArticleByConditionSlug[condition.slug];

  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema} />
      <section className="section-pad pt-[calc(var(--header-h)+2rem)]" aria-labelledby="condition-heading">
        <div className="container-site">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue"
          >
            <IconArrow className="h-4 w-4 rotate-180" aria-hidden />
            Back to services
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)] lg:gap-12">
            <div>
              <p className="eyebrow">{condition.category}</p>
              <h1 id="condition-heading" className="heading-display heading-hero mt-3">
                {condition.name}
              </h1>
              <p className="lede mt-5">{condition.definition}</p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted">
                This page explains what the term means. It is not a diagnosis, treatment
                recommendation or substitute for an individual medical consultation.
              </p>
              {relatedArticle ? (
                <Link
                  href={relatedArticle.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
                >
                  {relatedArticle.label}
                  <IconArrow className="h-4 w-4" aria-hidden />
                </Link>
              ) : null}
            </div>

            <aside className="rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-5 shadow-[0_10px_30px_rgba(11,28,51,0.04)]">
              <h2 className="text-base font-semibold text-navy">Consultation</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Patients can consult Dr. Kishan Rao with prior appointment.
              </p>
              <div className="mt-5 grid gap-3">
                <a href={`tel:${doctor.phoneTel}`} className="btn btn-primary">
                  <IconPhone className="h-4 w-4" aria-hidden />
                  Call
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
                <Link href="/#consultation" className="btn btn-secondary">
                  <IconCalendar className="h-4 w-4" aria-hidden />
                  View locations
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
