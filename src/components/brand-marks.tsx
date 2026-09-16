export function GoogleG({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.9Z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7 12.9 19.6C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7Z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.3 0 10.1-2 13.8-5.3l-6.4-5.4C29.3 34.9 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44Z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.4l.1.1 6.4 5.4C39.2 37.3 44 32 44 24c0-1.3-.1-2.7-.4-3.9Z"
      />
    </svg>
  );
}

export function TripAdvisorOwl({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#00aa6c" />
      <circle cx="8.2" cy="11" r="3.1" fill="#fff" />
      <circle cx="15.8" cy="11" r="3.1" fill="#fff" />
      <circle cx="8.2" cy="11" r="1.35" fill="#004f32" />
      <circle cx="15.8" cy="11" r="1.35" fill="#004f32" />
      <path fill="#fff" d="M10.6 16.2c.4.7 1 .9 1.4.9s1-.2 1.4-.9c-1.1.35-1.7.35-2.8 0Z" />
    </svg>
  );
}

export function YelpBurst({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M12.16 11.4c.2-.54.7-.62 1.12-.18l6.5 6.86c.44.46.34 1.12-.22 1.36l-2.3.96c-.46.2-.98 0-1.2-.44l-4.3-8.12c-.2-.38-.02-.82.4-.44Zm1.7-1.86c.5.1.86-.2.82-.72L14.3 2.4c-.06-.62-.58-1-1.18-.84L10.7 2.1c-.52.14-.8.64-.62 1.14l3.16 6.02c.16.32.62.4.62.28Zm-2.08.08c-.18-.52-.7-.62-1.14-.22L4.3 14.9c-.46.42-.4 1.1.14 1.38l2.22 1.12c.46.24 1.02.08 1.28-.36l3.7-7.2c.22-.4.08-.84-.36-.22Zm.08 2.34c-.5-.16-.92.12-.92.64v8.16c0 .64.48 1.1 1.12 1.04h.08c.62 0 1.08-.46 1.08-1.1v-7.7c0-.5-.4-.82-.86-.72l-.5-.32Z"
      />
    </svg>
  );
}

export function FacebookMark({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M14.2 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4H17V5.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8.4v2.8h2.7V21h3.1Z"
      />
    </svg>
  );
}

export function InstagramMark({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function ChargingBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1f8a3b] px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-white shadow">
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
        <rect
          x="7"
          y="4"
          width="10"
          height="16"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect x="10" y="2.2" width="4" height="2" rx="0.6" fill="currentColor" />
        <path fill="currentColor" d="M13.1 8.2 10 13h2.2l-1.4 4.6 4.3-6.4h-2.4Z" />
      </svg>
      {label}
    </span>
  );
}