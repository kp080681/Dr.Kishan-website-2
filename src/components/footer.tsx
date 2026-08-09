import { BrandLogo } from "@/components/brand-logo";
import {
  IconFacebook,
  IconInstagram,
  IconMail,
  IconPhone,
  IconWhatsApp,
  IconYouTube,
} from "@/components/icons";
import { doctor, navItems } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-navy text-white">
      <div className="container-site py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)_minmax(0,0.9fr)]">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/[0.04] p-1.5 sm:h-[64px] sm:w-[64px]">
                <span className="block h-full w-full">
                  <BrandLogo sizes="96px" />
                </span>
              </span>
              <div>
                <p className="text-lg font-semibold">{doctor.name}</p>
                <p className="mt-1 text-sm text-white/75">{doctor.primaryRole}</p>
                <p className="mt-2 text-sm text-white/65">{doctor.credentials}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/55">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${doctor.phoneTel}`}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <IconPhone className="h-4 w-4" aria-hidden />
                  {doctor.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={doctor.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <IconWhatsApp className="h-5 w-5 shrink-0" aria-hidden />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${doctor.email}`}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <IconMail className="h-4 w-4" aria-hidden />
                  {doctor.email}
                </a>
              </li>
              <li>
                <a
                  href={doctor.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <IconInstagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={doctor.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <IconFacebook className="h-4 w-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={doctor.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <IconYouTube className="h-4 w-4" aria-hidden />
                  YouTube — The White Army
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/55">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/85 hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <p className="max-w-4xl text-xs leading-relaxed text-white/55 sm:text-sm">
            Medical disclaimer: Information on this website is for general education and
            appointment guidance only. It is not a substitute for personal medical advice,
            diagnosis or treatment. Always consult a qualified clinician for individual care
            decisions. Surgical suitability and outcomes vary by patient.
          </p>
          <p className="mt-4 text-xs text-white/45">
            © {new Date().getFullYear()} {doctor.name}. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-white/40">
            Developed by{" "}
            <a
              href="https://dealup.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-white/70 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              DealUp Strategies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
