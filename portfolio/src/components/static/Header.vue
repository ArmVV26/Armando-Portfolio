<template>
  <header
    :class="[
      'fixed z-50 flex w-full items-center justify-between px-5 py-5 backdrop-blur transition-all duration-300 sm:px-15',
      scrolled ? 'bg-base shadow-lg' : '',
    ]"
  >
    <h1
      class="font-raleway text-decoration from-principal to-decoration bg-gradient-to-r bg-clip-text text-3xl font-bold transition duration-500 hover:cursor-default hover:text-transparent"
    >
      Armando
    </h1>

    <!-- Navegation Menu -->
    <nav class="hidden md:block">
      <ul class="text-secondary flex gap-3 text-lg font-semibold lg:gap-6">
        <li v-for="item in navItems" :key="item.text">
          <a
            :href="item.href"
            class="text-secondary group hover:text-decoration relative py-1 transition-colors"
          >
            {{ $t(item.text) }}
            <span
              class="bg-decoration absolute bottom-0 left-1/2 h-[2px] w-0 transition-all duration-300 group-hover:left-0 group-hover:w-full"
            ></span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Language Selector, Dark Mode Switcher and Hamburguer Menu -->
    <section class="flex items-center gap-4 text-xl">
      <Motion
        :key="currentLang"
        tag="button"
        :title="$t('nav.change')"
        @click="toggleLanguage"
        class="text-secondary hover:text-decoration w-5 font-bold transition-all hover:cursor-pointer"
        :initial="{ y: -20, opacity: 0 }"
        :enter="{ y: 0, opacity: 1 }"
        :leave="{ y: 20, opacity: 0 }"
        :delay="200"
        :duration="200"
        transition="{ type: 'spring', stiffness: 300 }"
      >
        {{ currentLang === "es" ? "ES" : "EN" }}
      </Motion>
      <ThemeToggle class="border-decoration border-2" @toggle="toggleDark" />
      <button
        @click="menuOpen = true"
        class="text-secondary hover:text-decoration text-3xl transition-all duration-500 hover:scale-80 hover:cursor-pointer md:hidden"
      >
        <i class="fas fa-bars"></i>
      </button>
    </section>

    <!-- Mobile Menu -->
    <Motion
      v-if="menuOpen"
      tag="section"
      :initial="{ x: 300, opacity: 0 }"
      :enter="{ x: 0, opacity: 1 }"
      :leave="{ x: 300, opacity: 0 }"
      transition="{ type: 'spring', stiffness: 250 }"
      class="bg-general border-decoration fixed top-0 right-0 z-50 block w-64 rounded-bl-xl border-b-2 border-l-2 pt-3 pb-5 shadow-2xl md:hidden"
    >
      <div class="border-decoration mb-6 flex items-center justify-between border-b-1 px-6">
        <span class="text-decoration text-xl font-bold">Menu</span>
        <button
          @click="menuOpen = false"
          class="text-secondary hover:text-decoration text-2xl transition-all duration-500 hover:scale-90 hover:rotate-90 hover:cursor-pointer"
        >
          <i class="fas fa-xmark"></i>
        </button>
      </div>

      <ul class="text-secondary flex flex-col gap-3 px-6 text-lg font-semibold lg:gap-6">
        <li v-for="item in navItems" :key="locale">
          <a :href="item.href" class="group hover:text-decoration relative py-1 transition-colors">
            {{ $t(item.text) }}
            <span
              class="bg-decoration absolute bottom-0 left-1/2 h-[2px] w-0 transition-all duration-300 group-hover:left-0 group-hover:w-full"
            ></span>
          </a>
        </li>
      </ul>
    </Motion>
  </header>
</template>

<script setup>
// IMPORTS
import { ref, onMounted, onUnmounted } from "vue";
import { useLang } from "@/composables/useLang";
import { useTheme } from "@/composables/useTheme";
import ThemeToggle from "@/components/buttons/ThemeToggle.vue";

// VARIABLES
const menuOpen = ref(false);
const scrolled = ref(false);

const { currentLang, toggleLanguage } = useLang();
const { darkMode, toggleDark } = useTheme();

const navItems = [
  { text: "nav.home", href: "#home" },
  { text: "nav.about", href: "#about" },
  { text: "nav.abilities", href: "#abilities" },
  { text: "nav.projects", href: "#projects" },
  { text: "nav.contact", href: "#contact" },
];

// METODOS
// Funcion que detecta el scroll
const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

// Detecta el tema y pone el que este cargado
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Al cambiar de pagina se quita el listener del scroll
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
