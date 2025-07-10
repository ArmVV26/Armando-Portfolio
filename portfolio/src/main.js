import "@/assets/styles/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";

import { createApp } from "vue";
import App from "@/App.vue";
import { i18n } from "@/i18n/messages";

import { MotionPlugin } from "@vueuse/motion";
import AOS from "aos";
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

const app = createApp(App);

app.use(i18n);
app.use(MotionPlugin);
app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine);
  },
});

app.mount("#app");

AOS.init({
  delay: 0,
  duration: 600,
  once: false,
  mirror: true,
  easing: "ease-in-out",
  startEvent: "DOMContentLoaded",
});
