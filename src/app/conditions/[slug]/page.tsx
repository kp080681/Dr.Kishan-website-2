import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { conditionPages, getConditionBySlug } from "@/content/conditions";
import { doctor } from "@/content/site";
import { IconArrow, IconCalendar, IconPhone, IconWhatsApp } from "@/components/icons";

type ConditionPageProps = {
  params: Promise<{ slug: string }>;
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

  return {
    title: `${condition.name} | Dr. Kishan Rao`,
    description: `Simple patient information about ${condition.name}.`,
  };
}

export default async function ConditionPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    notFound();
  }

  return (
    <SiteShell>
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
