import { locations } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { IconArrow, IconPin } from "@/components/icons";

function directionsUrl(location: (typeof locations)[number]) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${location.name}, ${location.address}`,
  )}`;
}

export function Locations() {
  return (
    <section
      id="consultation"
      className="living-section section-pad relative scroll-mt-[var(--header-h)]"
      aria-labelledby="locations-heading"
    >
      <div className="container-site">
        <Reveal className="section-head consultation-head">
          <p className="eyebrow">Consultation</p>
          <h2 id="locations-heading" className="heading-display heading-xl max-w-3xl">
            Where patients can consult Dr. Kishan Rao
          </h2>
        </Reveal>

        <div className="section-content consultation-list">
          {locations.map((item, index) => (
            <Reveal
              key={item.id}
              as="article"
              delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | undefined}
              className="location-row"
            >
              <div className="location-row__icon" aria-hidden>
                <IconPin className="h-5 w-5" />
              </div>
              <div className="location-row__place">
                <h3 className="heading-display heading-card">{item.name}</h3>
                <p>{item.address}</p>
              </div>
              <div className="location-row__timing">
                <p>Timing</p>
                <strong>{item.schedule}</strong>
              </div>
              <div className="location-row__actions">
                <a
                  href={directionsUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Directions
                  <IconArrow className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
