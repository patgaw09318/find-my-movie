import i18next from "i18next";
import Dictionary from "./dictionary";
i18next.init({
  lng: "english",
  resources: Dictionary
});

let Translation = i18next;
export default Translation;
