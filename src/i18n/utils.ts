import { ui, defaultLang, showDefaultLang, type UILang } from "./ui";

export function getLangFromUrl(url: URL): UILang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as UILang;
  return defaultLang;
}

function getNestedValue(obj: any, key: string): any {
  return key.split(".").reduce((acc, part) => acc?.[part], obj);
}

export function useTranslations(lang: UILang) {
  return function t(key: string): any {
    return (
      getNestedValue(ui[lang], key) ??
      getNestedValue(ui[defaultLang], key) ??
      key
    );
  };
}

export function useTranslatedPath(lang: UILang) {
  return function translatePath(path: string, l: UILang = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
