import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { FloatingCta } from "@/components/floating-cta";
import { Header } from "@/components/header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingCta />
    </>
  );
}
