import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HiringBanner } from "@/components/hiring-banner";
import { LanguageBar } from "@/components/language-bar";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-paper pb-16 text-ink">
      <div className="sticky top-0 z-40">
        <HiringBanner />
        <Header />
      </div>
      <div className="min-w-0 w-full">{children}</div>
      <Footer />
      <LanguageBar />
    </div>
  );
}
