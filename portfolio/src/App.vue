<template>
  <div class="bg-general relative flex min-h-screen flex-col transition-all duration-500">
    <!-- Background Animation -->
    <vue-particles id="tsparticles" class="absolute z-10" :options="particlesOptions" />

    <Header />
    <main class="relative z-10 flex-1">
      <Home />
      <AboutMe />
      <Abilities />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// IMPORTS
import { onMounted } from "vue";
import { initLenis } from "@/composables/useLenis";

import Header from "@/components/static/Header.vue";
import Footer from "@/components/static/Footer.vue";
import Home from "@/components/cards/Home.vue";
import AboutMe from "@/components/cards/AboutMe.vue";
import Abilities from "./components/cards/Abilities.vue";

// VARIABLES
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
onMounted(() => {
  initLenis();
});

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
</script>

<style scoped></style>
