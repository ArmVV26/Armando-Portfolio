<template>
  <footer
    class="bg-base border-decoration z-10 mt-20 flex flex-col items-center justify-center gap-4 border-t-2 py-6"
  >
    <!-- Links -->
    <div class="flex gap-6">
      <a
        href="https://github.com/ArmVV26"
        target="_blank"
        class="text-principal hover:text-decoration text-2xl transition duration-300 hover:scale-115"
      >
        <i class="fab fa-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/armandovaquero/"
        target="_blank"
        class="text-principal hover:text-decoration text-2xl transition duration-300 hover:scale-115"
      >
        <i class="fab fa-linkedin"></i>
      </a>
    </div>

    <!-- Copy Text -->
    <div class="text-principal flex gap-2 text-sm">
      <p class="text-decoration">&copy;</p>
      <p>{{ new Date().getFullYear() }}</p>
      <p class="text-decoration">Armando Vaquero Vargas</p>
      <p>|</p>
      <p>{{ $t("footer.rights") }}</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
