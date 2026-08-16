export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://surgeonkishan.com");

export const siteName = "Dr. Kishan Rao Balila";

export const defaultOgImage = {
  url: "/images/brand/dr-kishan-rao-balila-icon-192.png",
  width: 192,
  height: 192,
  alt: "Dr. Kishan Rao Balila logo",
};

export function canonicalPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path: string) {
  return new URL(canonicalPath(path), siteUrl).toString();
}
