<template>
  <Motion
    :initial="{ opacity: 0, y: 50, scale: 0.95 }"
    :enter="{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 14 },
    }"
    :delay="200"
  >
    <section
      id="home"
      class="relative flex min-h-screen flex-col items-center justify-center px-1 sm:px-6"
    >
      <vue-particles id="tsparticles" class="absolute inset-0 -z-10" :options="particlesOptions" />

      <h1 class="font-raleway text-secondary text-xl font-semibold sm:text-3xl">
        {{ $t("home.hi") }}
      </h1>
      <h1 class="font-raleway text-principal mb-2 text-2xl font-bold sm:text-4xl">
        {{ $t("home.iam") }}
      </h1>

      <h2 class="text-decoration mb-15 h-2 font-mono text-lg sm:text-2xl">
        <span ref="typedText" />
      </h2>

      <p class="text-principal mx-auto mb-6 max-w-xl text-center">
        {{ $t("home.description") }}
      </p>

      <section class="mb-10 flex justify-center gap-1 sm:gap-4">
        <a
          href="#about"
          class="bg-decoration rounded-xl px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
        >
          {{ $t("nav.about") }}
        </a>
        <a
          href="#projects"
          class="bg-decoration rounded-xl px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
        >
          {{ $t("nav.projects") }}
        </a>
        <a
          href="#contact"
          class="bg-decoration rounded-xl px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
        >
          {{ $t("nav.contact") }}
        </a>
      </section>

      <figure class="flex justify-center">
        <img
          src="/img-armando.jpeg"
          alt="Imagen representativa del dueño del portfolio"
          class="border-decoration h-50 w-50 rounded-full border-4 object-cover shadow-lg"
        />
      </figure>
    </section>
  </Motion>
</template>

<script setup>
// IMPORTS
import { ref, onMounted, watch } from "vue";
import { useLang } from "@/composables/useLang";
import { useI18n } from "vue-i18n";
import Typed from "typed.js";

// VARIABLES
const typedText = ref(null);
const { tm, locale } = useI18n();
let typedInstance;
useLang();

const particlesOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
      },
      onHover: {
        enable: true,
        mode: ["connect", "grab"],
      },
    },
  },
  particles: {
    color: {
      value: "#999999",
    },
    links: {
      color: "#999999",
      distance: 120,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 2, max: 6 },
    },
  },
  detectRetina: true,
};

// METODOS
const initTyped = () => {
  if (typedInstance) typedInstance.destroy();

  const strings = tm("home.developer", {}, { returnObjects: true });

  typedInstance = new Typed(typedText.value, {
    strings,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
};

onMounted(() => {
  initTyped();
});

watch(locale, () => {
  initTyped();
});
</script>

<style scoped></style>
