export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://surgeonkishan.com");

export const siteName = "Dr. Kishan Rao";

export const defaultOgImage = {
  url: "/images/brand/dr-kishan-rao-icon-192.png",
  width: 192,
  height: 192,
  alt: "Dr. Kishan Rao logo",
};

export function canonicalPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path: string) {
  return new URL(canonicalPath(path), siteUrl).toString();
}
