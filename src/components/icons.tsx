import Image, { type ImageProps } from "next/image";
import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function BaseIcon({ title, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function IconGeneral(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 3h6v4H9z" />
      <path d="M11 7v14M13 7v14" />
      <path d="M7 11h10" />
      <path d="M8 21h8" />
    </BaseIcon>
  );
}

export function IconLaparoscopic(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v3.2M12 17.8V21M3 12h3.2M17.8 12H21" />
      <path d="m5.4 5.4 2.3 2.3M16.3 16.3l2.3 2.3M18.6 5.4l-2.3 2.3M7.7 16.3l-2.3 2.3" />
    </BaseIcon>
  );
}

export function IconLaser(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3v8" />
      <path d="m8.5 7.5 3.5 3.5 3.5-3.5" />
      <path d="M7 14h10" />
      <path d="M9 17h6" />
      <path d="M10.5 21h3" />
    </BaseIcon>
  );
}

export function IconVascular(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 14c3-6 5-8 8-8s5 2 8 8" />
      <path d="M4 18c3-4 5-5.5 8-5.5s5 1.5 8 5.5" />
      <path d="M12 6v3" />
    </BaseIcon>
  );
}

type WhatsAppIconProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  alt?: string;
  title?: string;
};

export function IconWhatsApp({ title, alt, ...props }: WhatsAppIconProps) {
  return (
    <Image
      src="/images/brand/whatsapp-icon.svg"
      width={24}
      height={24}
      alt={alt ?? title ?? ""}
      aria-hidden={title || alt ? undefined : true}
      {...props}
    />
  );
}

export function IconPhone(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7.2 3.8h2.4l1.1 3.1-1.5 1a11.5 11.5 0 0 0 5.4 5.4l1-1.5 3.1 1.1v2.4c0 .9-.7 1.7-1.6 1.7A13.7 13.7 0 0 1 3.5 5.4c0-.9.8-1.6 1.7-1.6Z" />
    </BaseIcon>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M8 3.5V7M16 3.5V7M3.5 10h17" />
    </BaseIcon>
  );
}

export function IconPin(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.8 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </BaseIcon>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </BaseIcon>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </BaseIcon>
  );
}

export function IconClose(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </BaseIcon>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 8h2.5V4.8H14c-2.3 0-3.8 1.4-3.8 3.9V11H8v3.2h2.2V20H14v-5.8h2.4l.5-3.2H14V9.2c0-.7.2-1.2 1-1.2Z" />
    </BaseIcon>
  );
}

export function IconYouTube(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M21 8.4a3 3 0 0 0-2.1-2.1C17 5.8 12 5.8 12 5.8s-5 0-6.9.5A3 3 0 0 0 3 8.4a31.2 31.2 0 0 0 0 7.2 3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31.2 31.2 0 0 0 0-7.2Z" />
      <path d="m10.2 9.4 4.8 2.6-4.8 2.6Z" />
    </BaseIcon>
  );
}

export function IconBook(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16.5H7.5A2.5 2.5 0 0 0 5 22" />
      <path d="M5 5.5v16.5" />
      <path d="M9 7h7M9 11h7" />
    </BaseIcon>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 20s-7-4.4-7-9.2A3.9 3.9 0 0 1 12 7.8 3.9 3.9 0 0 1 19 10.8C19 15.6 12 20 12 20Z" />
    </BaseIcon>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M15.2 19a4.4 4.4 0 0 1 5.3-3.4" />
    </BaseIcon>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8.5 17H5.2A3.2 3.2 0 0 1 5 13.6V11h4.5v2.8H7.2A2.2 2.2 0 0 0 9 16.2V17Z" />
      <path d="M18.5 17h-3.3A3.2 3.2 0 0 1 15 13.6V11h4.5v2.8h-2.3A2.2 2.2 0 0 0 19 16.2V17Z" />
    </BaseIcon>
  );
}

export function IconMail(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </BaseIcon>
  );
}
