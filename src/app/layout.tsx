import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Kishan Rao | General, Laparoscopic & LASER Surgeon",
    template: "%s | Dr. Kishan Rao",
  },
  description:
    "Consult Dr. Kishan Rao — MBBS (BMC), MS (Gold Medalist), FMAS, DMAS — for general, laparoscopic and LASER surgical care across Mangalore and Dakshina Kannada.",
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
    title: "Dr. Kishan Rao | General, Laparoscopic & LASER Surgeon",
    description:
      "Patient-first surgical consultations in Mangalore, Ayyanakatte and Puttur. Book by call or WhatsApp.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/brand/dr-kishan-rao-balila-favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/images/brand/dr-kishan-rao-balila-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/images/brand/dr-kishan-rao-balila-apple-touch.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {children}
      </body>
    </html>
  );
}
