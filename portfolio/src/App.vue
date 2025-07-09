<template>
  <div class="bg-general relative flex min-h-screen flex-col transition-all duration-500">
    <Header />
    <main class="relative z-10 flex-1">
      <Home />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// IMPORTS
import { onMounted } from "vue";

import Header from "@/components/static/Header.vue";
import Footer from "@/components/static/Footer.vue";
import Home from "./components/cards/Home.vue";

import Lenis from "@studio-freight/lenis";

// METODOS
onMounted(() => {
  const lenis = new Lenis();

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
});
</script>

<style scoped></style>
