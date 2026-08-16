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
import { Philosophy } from "@/components/philosophy";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredibilityCounters />
        <Services />
        <Locations />
        <About />
        <Philosophy />
        <Education />
        <Books />
        <Testimonials />
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
