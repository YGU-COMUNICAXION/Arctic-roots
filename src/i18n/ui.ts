import es from "./es";
import en from "./en";

export const languages = {
  en: "English",
  es: "Español",
} as const;

export const defaultLang = "es" as const;

export const showDefaultLang = false;

export const ui = {
  es,
  en,
} as const;

type UILanguages = typeof ui;
export type UILang = keyof UILanguages;
