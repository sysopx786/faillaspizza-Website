import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { hiringOpen } from "@/lib/site";

export function HiringBanner() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("faillas-hiring-dismissed") === "1") {
      setHidden(true);
    }
  }, []);

  if (!hiringOpen || hidden) return null;

  return (
    <div className="bg-tomato text-cream">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 text-sm sm:px-6">
        <p className="flex-1 text-pretty">
          We're hiring — join the Failla's team.{" "}
          <Link to="/jobs" className="font-semibold underline underline-offset-2">
            See open roles
          </Link>
        </p>
        <button
          type="button"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-md hover:bg-black/10"
          aria-label="Dismiss hiring banner"
          onClick={() => {
            sessionStorage.setItem("faillas-hiring-dismissed", "1");
            setHidden(true);
          }}
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
