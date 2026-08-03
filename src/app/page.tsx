import { About } from "@/components/about";
import { Blogs } from "@/components/blogs";
import { Books } from "@/components/books";
import { ConsultationCta } from "@/components/consultation-cta";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Locations } from "@/components/locations";
import { Philosophy } from "@/components/philosophy";
import { Services } from "@/components/services";
import { SocialInitiatives } from "@/components/social-initiatives";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Locations />
        <Services />
        <About />
        <Philosophy />
        <Education />
        <Books />
        <SocialInitiatives />
        <Testimonials />
        <Gallery />
        <Blogs />
        <ConsultationCta />
      </main>
      <Footer />
    </>
  );
}
