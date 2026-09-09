import { useId } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function FacebookLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        fill="#fff"
        d="M16.67 15.3 17.2 12h-3.16v-2.14c0-.9.44-1.78 1.86-1.78H17.4V5.08s-1.36-.23-2.66-.23c-2.72 0-4.5 1.65-4.5 4.63V12H7.4v3.3h2.84V22h3.8v-6.7h2.63Z"
      />
    </svg>
  );
}

function InstagramLogo({ className }: { className?: string }) {
  const raw = useId();
  const id = `ig-${raw.replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <radialGradient id={id} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${id})`} />
      <rect
        x="5.2"
        y="5.2"
        width="13.6"
        height="13.6"
        rx="4"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.15" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="16.35" cy="7.65" r="0.95" fill="#fff" />
    </svg>
  );
}

function TikTokLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="6" fill="#111" />
      <path
        fill="#25F4EE"
        d="M14.35 4.2c.18 1.42.9 2.62 2.05 3.32.62.38 1.32.58 2.05.62v2.12c-1.12-.04-2.18-.34-3.12-.88-.4-.23-.76-.5-1.1-.8v5.9a4.92 4.92 0 1 1-4.92-4.92c.28 0 .55.03.82.08v2.22a2.72 2.72 0 1 0 1.88 2.6V4.2h2.34Z"
      />
      <path
        fill="#fff"
        d="M13.95 3.85c.18 1.42.9 2.62 2.05 3.32.62.38 1.32.58 2.05.62v2.12c-1.12-.04-2.18-.34-3.12-.88-.4-.23-.76-.5-1.1-.8v5.9a4.92 4.92 0 1 1-4.92-4.92c.28 0 .55.03.82.08v2.22a2.72 2.72 0 1 0 1.88 2.6V3.85h2.34Z"
      />
    </svg>
  );
}

const profiles = [
  { href: site.facebookUrl, label: "Facebook", icon: FacebookLogo },
  { href: site.instagramUrl, label: "Instagram", icon: InstagramLogo },
  { href: site.tiktokUrl, label: "TikTok", icon: TikTokLogo },
] as const;

export function SocialLinks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className="flex gap-3">
      {profiles.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className={cn(
            "inline-flex size-11 items-center justify-center overflow-hidden rounded-md",
            tone === "dark"
              ? "ring-1 ring-white/15 hover:ring-gold-soft"
              : "ring-1 ring-line hover:ring-tomato/40",
          )}
        >
          <item.icon className="size-11" />
        </a>
      ))}
    </div>
  );
}
