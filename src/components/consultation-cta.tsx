import Link from "next/link";
import { doctor, locations } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { IconCalendar, IconPhone, IconWhatsApp } from "@/components/icons";

export function ConsultationCta() {
  const summary = locations.filter((item) => item.status === "scheduled");

  return (
    <section className="living-section section-pad" aria-labelledby="cta-heading">
      <div className="container-site">
        <Reveal className="surface-dark overflow-hidden rounded-[1.35rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,#0b1c33_0%,#14386c_55%,#1d4f91_100%)] shadow-[var(--shadow)]">
          <div className="grid gap-8 p-[var(--card-pad)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
            <div className="hero-sequence">
              <div className="section-head">
              <p className="eyebrow">Ready to consult</p>
              <h2 id="cta-heading" className="heading-display heading-xl">
                Book a consultation with Dr. Kishan Rao
              </h2>
              <p className="lede max-w-xl">
                Call or WhatsApp to schedule an appointment. Prior booking is required, and
                visiting hospital availability should be confirmed before travel.
              </p>
              </div>
              <p className="mt-4 text-lg font-semibold text-white">{doctor.phoneDisplay}</p>
              <p className="mt-1 text-sm text-white/75">{doctor.email}</p>
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
                  Book Consultation
                </Link>
              </div>
            </div>

            <div className="motion-card rounded-[var(--radius)] bg-white/8 p-5 ring-1 ring-white/15 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">Regular clinic summary</p>
              <ul className="mt-4 space-y-3">
                {summary.map((item) => (
                  <li
                    key={item.id}
                    className="border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="text-sm text-white/70">{item.place}</p>
                    <p className="mt-1 text-sm text-white/85">{item.schedule}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
