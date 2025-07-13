<template>
  <section
    id="home"
    class="relative flex min-h-screen flex-col items-center justify-center px-1 sm:px-6"
  >
    <!-- Hi and Name -->
    <h1 class="font-raleway text-secondary text-xl font-semibold sm:text-2xl">
      {{ $t("home.hi") }}
    </h1>
    <h1 class="font-raleway text-principal mb-2 text-2xl font-bold sm:text-4xl">
      {{ $t("home.iam") }}
    </h1>

    <!-- Typed Text -->
    <h2 class="text-decoration mb-15 h-2 font-mono text-lg sm:text-2xl">
      <span ref="typedText" />
    </h2>

    <!-- Description -->
    <p class="text-principal mx-auto mb-6 max-w-xl text-center">
      {{ $t("home.description") }}
    </p>

    <!-- Base Links -->
    <section class="mb-10 flex justify-center gap-1 sm:gap-4">
      <a
        href="#"
        @click.prevent="scrollToSection('#about')"
        class="bg-decoration rounded-xl px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
      >
        {{ $t("nav.about") }}
      </a>
      <a
        href="#"
        @click.prevent="scrollToSection('#projects')"
        class="bg-decoration rounded-xl px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
      >
        {{ $t("nav.projects") }}
      </a>
      <a
        href="#"
        @click.prevent="scrollToSection('#contact')"
        class="bg-decoration rounded-xl px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
      >
        {{ $t("nav.contact") }}
      </a>
    </section>

    <!-- Image About Me -->
    <figure class="flex justify-center">
      <img
        src="/img-personal/img-armando.jpeg"
        alt="Imagen representativa del dueño del portfolio"
        class="border-decoration h-50 w-50 rounded-full border-4 object-cover shadow-lg"
      />
    </figure>
  </section>
</template>

<script setup>
// IMPORTS
import { ref, onMounted, watch } from "vue";
import { useLang } from "@/composables/useLang";
import { useI18n } from "vue-i18n";
import { getLenis } from "@/composables/useLenis";
import Typed from "typed.js";

// VARIABLES
const typedText = ref(null);
const { tm, locale } = useI18n();
let typedInstance;
useLang();

// METODOS
// Funcion que permite hacer el scroll-smooth entre secciones de la pagina
function scrollToSection(id) {
  const target = document.querySelector(id);
  const lenis = getLenis();
  if (target && lenis) {
    lenis.scrollTo(target, { offset: -80 });
  }
}

// Funcion que regenere el texto del Typed
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
