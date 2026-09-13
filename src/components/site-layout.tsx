import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HiringBanner } from "@/components/hiring-banner";
import { HoursStatusBar } from "@/components/hours-status";
import { MobileDock } from "@/components/mobile-dock";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      <div className="sticky top-0 z-40">
        <HiringBanner />
        <HoursStatusBar />
        <Header />
      </div>
      <div className="pb-[5.75rem] md:pb-0">{children}</div>
      <Footer />
      <MobileDock />
    </div>
  );
}
