<template>
  <div class="bg-general relative flex min-h-screen flex-col transition-all duration-500">
    <!-- Background Animation -->
    <vue-particles id="tsparticles" class="absolute z-10" :options="particlesOptions" />

    <Header />
    <main class="relative z-10 flex-1">
      <Home />
      <AboutMe />
      <Abilities />
      <Projects />
      <Contact />
    </main>
    <Footer />

    <!-- Scroll Top Button -->
    <Transition name="scroll-button">
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        aria-label="Scroll to top"
        title="Back to top"
        class="bg-decoration fixed right-6 bottom-6 z-50 cursor-pointer rounded-full px-5 py-3.5 text-white shadow-xl transition-all duration-300 hover:scale-105"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
    </Transition>
  </div>
</template>

<script setup>
// IMPORTS
import { onMounted, onUnmounted, ref } from "vue";
import { initLenis, getLenis } from "@/composables/useLenis";

import Header from "@/components/static/Header.vue";
import Footer from "@/components/static/Footer.vue";
import Home from "@/components/cards/Home.vue";
import AboutMe from "@/components/cards/AboutMe.vue";
import Abilities from "./components/cards/Abilities.vue";
import Projects from "./components/cards/Projects.vue";
import Contact from "./components/cards/Contact.vue";

// VARIABLES
const showScrollTop = ref(false);

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
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 200;
};

onMounted(() => {
  initLenis();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function scrollToTop() {
  const lenis = getLenis();
  lenis?.scrollTo(0);
}

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
</script>

<style scoped>
.scroll-button-enter-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.scroll-button-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.scroll-button-enter-from {
  opacity: 0;
  transform: translateY(50px) scale(0.8);
}

.scroll-button-leave-to {
  opacity: 0;
  transform: translateY(-50px) scale(0.8);
}
</style>
