import { ref, onMounted, watch } from "vue";

export const useTheme = () => {
  const darkMode = ref(true);

  const applyTheme = () => {
    const html = document.documentElement;
    if (darkMode.value) {
      html.classList.remove("light");
    } else {
      html.classList.add("light");
    }
    localStorage.setItem("dark-mode", darkMode.value);
  };

  onMounted(() => {
    darkMode.value = localStorage.getItem("dark-mode") !== "false";
    applyTheme();
  });

  watch(darkMode, applyTheme);

  const toggleDark = () => {
    darkMode.value = !darkMode.value;
  };

  return {
    darkMode,
    toggleDark,
  };
};
