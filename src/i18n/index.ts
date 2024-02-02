import spanishCV from "@cv";
import englishCV from "@cv-english";
import spanish from "./es.json";
import english from "./en.json";

const LANG = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const getI18N = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.ENGLISH) return { ...english, cv: englishCV };
  return { ...spanish, cv: spanishCV };
};
