import type { Metadata } from "next";
import { About } from "@/components/about";
import { Blogs } from "@/components/blogs";
import { Books } from "@/components/books";
import { ConsultationCta } from "@/components/consultation-cta";
import { CredibilityCounters } from "@/components/credibility-counters";
import { Education } from "@/components/education";
import { Faqs } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { FloatingCta } from "@/components/floating-cta";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Locations } from "@/components/locations";
import { Services } from "@/components/services";
import { defaultOgImage } from "@/lib/seo";
import { Testimonials } from "@/components/testimonials";
import { WhyChoose } from "@/components/why-choose";

const homeDescription =
  "Consult Dr. Kishan Rao for general, laparoscopic and Advanced LASER surgical care across Mangalore, Puttur, Sullia and Dakshina Kannada.";

export const metadata: Metadata = {
  title: {
    absolute: "Dr. Kishan Rao | Laparoscopic Surgeon in Mangalore",
  },
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Kishan Rao | Laparoscopic Surgeon in Mangalore",
    description: homeDescription,
    url: "/",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary",
    title: "Dr. Kishan Rao | Laparoscopic Surgeon in Mangalore",
    description: homeDescription,
    images: [defaultOgImage.url],
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredibilityCounters />
        <Services />
        <About />
        <WhyChoose />
        <Locations />
        <Education />
        <Testimonials />
        <Books />
        <Gallery />
        <Faqs />
        <Blogs />
        <ConsultationCta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
