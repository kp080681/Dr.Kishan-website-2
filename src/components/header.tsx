"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconClose, IconMenu, IconWhatsApp } from "@/components/icons";
import { doctor, images, navItems } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/#home");
  const heroHeader = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      if (window.location.pathname !== "/") {
        setActiveHref(window.location.pathname);
        return;
      }

      let currentHref = "/#home";
      let currentDistance = Number.POSITIVE_INFINITY;
      const anchorLine = Math.min(window.innerHeight * 0.35, 320);

      for (const item of navItems) {
        if (!item.href.startsWith("/#")) continue;
        const node = document.getElementById(item.href.replace("/#", ""));
        if (!node) continue;

        const rect = node.getBoundingClientRect();
        const isVisibleSection = rect.top <= anchorLine && rect.bottom >= 140;
        const distance = Math.abs(rect.top - 140);

        if (isVisibleSection && distance < currentDistance) {
          currentHref = item.href;
          currentDistance = distance;
        }
      }

      setActiveHref(currentHref);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-hero={heroHeader ? "true" : "false"}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-200 ${
        scrolled || open
          ? "border-[color:var(--line)] bg-[color:rgba(251,250,248,0.94)] shadow-[0_8px_28px_rgba(11,28,51,0.08)] backdrop-blur-md"
          : "border-white/10 bg-[color:rgba(4,13,35,0.62)] backdrop-blur-md"
      }`}
      style={{ height: "var(--header-h)" }}
    >
      <div className="container-site flex h-full items-center gap-3 min-[1200px]:gap-12">
        <Link
          href="/#home"
          className="flex min-w-0 flex-1 items-center gap-3.5 rounded-[var(--radius-sm)] py-1.5 pr-2 min-[1200px]:flex-none min-[1200px]:gap-4 min-[1200px]:pr-0"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-[54px] w-[54px] shrink-0 overflow-hidden rounded-full border border-[color:rgba(216,166,79,0.42)] bg-navy p-1.5 shadow-[0_8px_20px_rgba(11,28,51,0.12)] sm:h-[58px] sm:w-[58px] md:h-[62px] md:w-[62px]">
            <Image
              src={images.logo.src}
              alt={images.logo.alt}
              fill
              sizes="62px"
              priority
              className="object-contain p-0.5"
            />
          </span>
          <span className="min-w-0 leading-none">
            <span
              className={`block whitespace-nowrap text-[0.76rem] font-semibold leading-tight min-[360px]:text-[0.84rem] sm:text-base ${
                heroHeader ? "text-white" : "text-navy"
              }`}
            >
              {doctor.brandName}
            </span>
            <span
              className={`mt-1 block whitespace-nowrap text-[0.48rem] font-medium leading-tight min-[360px]:text-[0.56rem] sm:text-[0.72rem] md:text-[0.76rem] xl:text-[0.8rem] ${
                heroHeader ? "text-white/72" : "text-ink-muted"
              }`}
            >
              {doctor.primaryRole}
            </span>
          </span>
        </Link>

        <nav
          className="ml-auto hidden min-w-0 flex-1 items-center justify-between gap-4 min-[1200px]:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={activeHref === item.href}
              className="nav-link-motion rounded-[var(--radius-sm)] px-2 py-2 text-[0.8125rem] font-medium text-navy-soft transition-colors hover:bg-blue-soft hover:text-blue 2xl:px-2.5 2xl:text-[0.875rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center min-[1200px]:hidden">
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border min-[1200px]:hidden ${
              heroHeader
                ? "border-white/25 text-white"
                : "border-[color:var(--line-strong)] text-navy"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        data-open={open ? "true" : "false"}
        className="mobile-menu-panel absolute inset-x-0 top-full border-b border-[color:var(--line)] bg-[color:rgba(251,250,248,0.98)] backdrop-blur-md min-[1200px]:hidden"
      >
        <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium text-navy hover:bg-blue-soft"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-1 gap-2 border-t border-[color:var(--line)] pt-4 sm:grid-cols-2">
            <a
              href={doctor.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              onClick={() => setOpen(false)}
            >
              <IconWhatsApp className="h-5 w-5 shrink-0" aria-hidden />
              WhatsApp
            </a>
            <Link
              href="/#consultation"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
