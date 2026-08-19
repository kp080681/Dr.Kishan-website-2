import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { createGlobalSchema } from "@/lib/schema";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Dr. Kishan Rao | Laparoscopic Surgeon in Mangalore",
    template: "%s | Dr. Kishan Rao",
  },
  description:
    "Consult Dr. Kishan Rao for general, laparoscopic and Advanced LASER surgical care across Mangalore, Puttur, Sullia and Dakshina Kannada.",
  keywords: [
    "Dr. Kishan Rao",
    "General Surgeon Mangalore",
    "Laparoscopic Surgeon",
    "LASER Surgery",
    "AJ Hospital",
    "Puttur",
  ],
  authors: [{ name: "Dr. Kishan Rao" }],
  openGraph: {
    title: "Dr. Kishan Rao | Laparoscopic Surgeon in Mangalore",
    description:
      "General, laparoscopic and LASER surgical consultations across Mangaluru, Mangalore and Dakshina Kannada.",
    siteName,
    type: "website",
    locale: "en_IN",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary",
    title: "Dr. Kishan Rao | Laparoscopic Surgeon in Mangalore",
    description:
      "General, laparoscopic and LASER surgical consultations across Mangaluru, Mangalore and Dakshina Kannada.",
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/brand/dr-kishan-rao-favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/images/brand/dr-kishan-rao-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/images/brand/dr-kishan-rao-apple-touch.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = createGlobalSchema();

  return (
    <html
      lang="en-IN"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("motion-ready");}}catch(e){}})();',
          }}
        />
        <JsonLd data={globalSchema} />
        {children}
      </body>
    </html>
  );
}
