import { createContext, useContext, useLayoutEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_HOURS_LABELS, type HoursLabels } from "@/lib/hours";

export type Lang = "en" | "es" | "pt";

export const STORAGE_KEY = "faillas-lang";

export function htmlLangAttr(lang: Lang) {
  return lang === "pt" ? "pt-BR" : lang;
}

export function readStoredLang(): Lang | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en" || stored === "pt") return stored;
  } catch {
    /* private mode */
  }
  try {
    const match = document.cookie.match(/(?:^|; )faillas-lang=([^;]*)/);
    const cookie = match ? decodeURIComponent(match[1]) : "";
    if (cookie === "es" || cookie === "en" || cookie === "pt") return cookie;
  } catch {
    /* ignore */
  }
  return null;
}

function persistLang(next: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* private mode */
  }
  try {
    document.cookie = `${STORAGE_KEY}=${next};path=/;max-age=31536000;samesite=lax`;
  } catch {
    /* ignore */
  }
}

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  return readStoredLang() ?? "en";
}
