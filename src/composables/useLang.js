import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

export const useLang = () => {
  const { locale } = useI18n();
  const currentLang = ref(localStorage.getItem("lang") || "es");

  const toggleLanguage = () => {
    currentLang.value = currentLang.value === "es" ? "en" : "es";
  };

  watch(
    currentLang,
    (newLang) => {
      locale.value = newLang;
      localStorage.setItem("lang", newLang);
    },
    { immediate: true },
  );

  return {
    currentLang,
    toggleLanguage,
  };
};
