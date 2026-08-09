import { doctor, locations } from "@/content/site";
import { ExpandablePanel } from "@/components/expandable-panel";
import { Reveal } from "@/components/reveal";
import { IconCalendar, IconPhone, IconWhatsApp } from "@/components/icons";

export function Locations() {
  const scheduled = locations.filter((item) => item.status === "scheduled");
  const visiting = locations.filter((item) => item.status === "visiting");

  return (
    <section
      id="consultation"
      className="living-section section-pad relative scroll-mt-[var(--header-h)]"
      aria-labelledby="locations-heading"
    >
      <div className="container-site">
        <Reveal className="section-head">
          <p className="eyebrow">Consultation</p>
          <h2 id="locations-heading" className="heading-display heading-xl max-w-3xl">
            Locations and timings
          </h2>
          <p className="lede">
            Consultation is by prior appointment. Please call or WhatsApp to confirm
            availability before travelling, especially for visiting hospital clinics.
          </p>
        </Reveal>

        <div className="section-content grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {scheduled.map((item, index) => (
            <Reveal
              key={item.id}
              as="article"
              delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | undefined}
              className="motion-card rounded-[var(--radius)] border border-[color:var(--line)] bg-white p-[var(--card-pad)] shadow-[0_10px_30px_rgba(11,28,51,0.04)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue">
                Regular clinic
              </p>
              <h3 className="heading-display heading-card mt-2">{item.name}</h3>
              <p className="mt-1 text-sm text-ink-muted">{item.place}</p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-navy-soft">
                {item.schedule}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <ExpandablePanel label="View all locations & timings">
            <div className="motion-card rounded-[var(--radius)] border border-dashed border-[color:var(--line-strong)] bg-blue-soft/50 p-5 sm:p-6">
              <h3 className="text-base font-semibold text-navy">Visiting consultations</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Availability varies. Confirm before planning a visit.
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {visiting.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-[var(--radius-sm)] bg-white/80 px-4 py-3 transition-colors duration-200 hover:bg-white"
                  >
                    <p className="font-semibold text-navy">{item.name}</p>
                    <p className="text-sm text-ink-muted">{item.place}</p>
                    <p className="mt-1 text-sm text-blue">{item.schedule}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ExpandablePanel>
        </Reveal>

        <Reveal className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={`tel:${doctor.phoneTel}`} className="btn btn-primary">
            <IconPhone className="h-4 w-4" />
            Call {doctor.phoneDisplay}
          </a>
          <a
            href={doctor.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            <IconWhatsApp className="h-5 w-5" aria-hidden />
            WhatsApp for appointment
          </a>
          <a href={`mailto:${doctor.email}`} className="btn btn-secondary">
            <IconCalendar className="h-4 w-4" />
            Email {doctor.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
