import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  site: "https://diegobernal17.github.io",
  //base: "/minimalist-portfolio-json",
});
