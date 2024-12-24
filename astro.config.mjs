import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  site: "https://lanrebd.github.io",
  //base: "/minimalist-portfolio-json",
});
