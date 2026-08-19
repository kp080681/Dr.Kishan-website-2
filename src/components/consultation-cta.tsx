import Link from "next/link";
import { doctor } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { IconCalendar, IconPhone, IconWhatsApp } from "@/components/icons";

export function ConsultationCta() {
  return (
    <section className="living-section section-pad final-consult-cta" aria-labelledby="cta-heading">
      <div className="container-site">
        <Reveal className="surface-dark final-consult-cta__panel overflow-hidden rounded-[1.35rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,#0b1c33_0%,#14386c_55%,#1d4f91_100%)] shadow-[var(--shadow)]">
          <div className="final-consult-cta__inner p-[var(--card-pad)]">
            <div className="hero-sequence max-w-3xl">
              <div className="section-head">
              <p className="eyebrow">Ready to consult</p>
              <h2 id="cta-heading" className="heading-display heading-xl">
                Need to consult Dr. Kishan Rao?
              </h2>
              <p className="lede max-w-xl">
                Call or WhatsApp to schedule an appointment.
              </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${doctor.phoneTel}`} className="btn btn-accent">
                  <IconPhone className="h-4 w-4" aria-hidden />
                  Call
                </a>
                <a
                  href={doctor.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <IconWhatsApp className="h-5 w-5" aria-hidden />
                  WhatsApp
                </a>
                <Link href="/#consultation" className="btn btn-ghost">
                  <IconCalendar className="h-4 w-4" aria-hidden />
                  View Consultation Locations
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
