import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

const counters = [
  { value: 10, suffix: "+", label: "Years of Surgical Experience", icon: "shield" },
  { value: 1000, suffix: "+", label: "Surgeries", icon: "scalpel" },
  { value: 5000, suffix: "+", label: "Happy Patients", icon: "patients" },
  { value: 3000, suffix: "+", label: "Hours of Surgery", icon: "clock" },
] as const;

function CounterIcon({ type }: { type: (typeof counters)[number]["icon"] }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="credibility-metric__icon"
      aria-hidden
    >
      {type === "shield" ? (
        <>
          <path d="M24 5 9 11v11c0 10 6 17 15 21 9-4 15-11 15-21V11L24 5Z" />
          <path d="M18 25h12M24 19v12" />
        </>
      ) : null}
      {type === "scalpel" ? (
        <>
          <path d="m30 6 12 12-22 22H8v-12L30 6Z" />
          <path d="m25 11 12 12" />
          <path d="M8 40h12" />
        </>
      ) : null}
      {type === "patients" ? (
        <>
          <circle cx="18" cy="18" r="6" />
          <path d="M7 40c2-7 7-11 11-11s9 4 11 11" />
          <circle cx="33" cy="20" r="4" />
          <path d="M30 31c5 1 8 4 10 9" />
        </>
      ) : null}
      {type === "clock" ? (
        <>
          <circle cx="24" cy="24" r="17" />
          <path d="M24 13v12l8 5" />
        </>
      ) : null}
    </svg>
  );
}

export function CredibilityCounters() {
  return (
    <section className="credibility-strip" aria-label="Dr. Kishan Rao experience highlights">
      <div className="container-site">
        <Reveal className="credibility-strip__inner">
          {counters.map((item, index) => (
            <div key={item.label} className="credibility-metric">
              <CounterIcon type={item.icon} />
              <p className="credibility-metric__number">
                <CountUp value={item.value} suffix={item.suffix} decimals={0} />
              </p>
              <p className="credibility-metric__label">{item.label}</p>
              {index < counters.length - 1 ? (
                <span className="credibility-metric__divider" aria-hidden />
              ) : null}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
