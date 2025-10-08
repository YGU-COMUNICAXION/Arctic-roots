import { defineMiddleware } from "astro:middleware";

import { defaultLang, languages, type UILang } from "@i18n/ui";

const supportedLocales = new Set(Object.keys(languages) as UILang[]);

export const onRequest = defineMiddleware((context, next) => {
  const { url, preferredLocale } = context;

  if (
    url.pathname === "/" &&
    preferredLocale &&
    supportedLocales.has(preferredLocale as UILang) &&
    preferredLocale !== defaultLang
  ) {
    const redirectURL = new URL(url);
    redirectURL.pathname = `/${preferredLocale}/`;

    return context.redirect(`${redirectURL.pathname}${redirectURL.search}`);
  }

  return next();
});
