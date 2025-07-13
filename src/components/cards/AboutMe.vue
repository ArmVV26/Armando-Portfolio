<template>
  <section id="about" class="flex flex-col items-center justify-center">
    <!-- Title and Subtitle -->
    <div data-aos="fade-top" class="flex flex-col items-center justify-center">
      <h1 class="font-raleway text-principal text-2xl font-bold sm:text-4xl">
        {{ $t("about.title") }}
      </h1>
      <h2 class="font-raleway text-decoration mb-6 text-xl font-bold sm:text-2xl">
        {{ $t("about.subtitle") }}
      </h2>

      <!-- Description -->
      <p class="text-principal mx-2 mb-4 max-w-xl text-center sm:mx-auto">
        {{ $t("about.description") }}
      </p>

      <!-- CV Download -->
      <a
        href="/cv/ArmandoVaqueroVargas_CV.pdf"
        download
        class="bg-decoration mb-6 rounded-xl px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
      >
        <i class="fas fa-download"></i>
        {{ $t("about.downloadCV") }}
      </a>

      <article class="mb-10 grid max-w-5xl grid-cols-1 gap-2 px-4 sm:grid-cols-2 sm:gap-8">
        <div class="flex gap-4">
          <i class="fa-solid fa-earth-asia bg-decoration mb-2 rounded-full p-4 text-white"></i>
          <div class="flex flex-col justify-center">
            <p
              v-for="language in $tm('about.language')"
              :key="language"
              class="text-principal text-sm"
            >
              {{ language }}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center gap-4">
          <i
            class="fa-solid fa-location-dot bg-decoration mb-2 rounded-full px-4.5 py-4 text-white"
          ></i>
          <p class="text-principal text-sm">{{ $t("about.location") }}</p>
        </div>
      </article>
    </div>

    <!-- Section Education and Experience -->
    <div class="grid max-w-5xl grid-cols-1 gap-8 px-4 sm:grid-cols-2">
      <!-- Education -->
      <article data-aos="fade-right">
        <h1 class="font-raleway text-principal mb-4 text-center text-xl font-bold sm:text-2xl">
          {{ $t("about.education") }}
        </h1>
        <div
          v-for="(study, index) in $tm('about.studies')"
          :key="index"
          class="border-decoration bg-base mb-4 rounded-lg border-l-4 p-4 shadow-md"
        >
          <div class="flex items-center gap-2">
            <i class="fas fa-graduation-cap bg-decoration mb-2 rounded-full p-4 text-white"></i>
            <h1 class="text-decoration font-semibold">{{ study.name }}</h1>
          </div>
          <p class="text-secondary text-sm">{{ study.school }} - {{ study.year }}</p>
          <p v-if="study.text" class="text-principal mt-2 mb-4 indent-5 text-sm">
            {{ study.text }}
          </p>
          <p class="text-principal mt-1 text-right text-sm italic">{{ study.average }}</p>
        </div>
      </article>

      <!-- Experience -->
      <article data-aos="fade-left">
        <h1 class="font-raleway text-principal mb-4 text-center text-xl font-bold sm:text-2xl">
          {{ $t("about.experience") }}
        </h1>
        <div
          v-for="(work, index) in $tm('about.works')"
          :key="index"
          class="border-decoration bg-base mb-4 rounded-lg border-l-4 p-4 shadow-md"
        >
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-suitcase bg-decoration mb-2 rounded-full p-4 text-white"></i>
            <h1 class="text-decoration font-semibold">{{ work.company }}</h1>
          </div>
          <p class="text-secondary text-sm">{{ work.time }}</p>
          <ul>
            <li
              v-for="description in work.text"
              :key="description"
              class="text-principal mx-4 my-2 list-disc text-sm"
            >
              {{ description }}
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
