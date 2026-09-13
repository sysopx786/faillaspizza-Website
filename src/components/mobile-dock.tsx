import { Phone } from "lucide-react";
import { LangCircles } from "@/components/lang-switch";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function MobileDock() {
  const { t } = useI18n();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-center gap-3">
        <LangCircles />
        <a
          href={site.phoneHref}
          aria-label={`${t.call} ${site.phone}`}
          className="inline-flex size-14 items-center justify-center rounded-full bg-[#2ea44f] text-white shadow-sm hover:bg-[#249344]"
        >
          <Phone className="size-7" />
        </a>
      </div>
    </div>
  );
}
