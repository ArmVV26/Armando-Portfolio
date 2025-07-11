<template>
  <section
    id="projects"
    data-aos="fade-down"
    class="mx-auto mt-60 max-w-screen-xl px-2 sm:px-6 xl:px-0"
  >
    <h1 class="font-raleway text-principal mb-6 text-center text-2xl font-bold sm:text-4xl">
      {{ $t("projects.title") }}
    </h1>

    <!-- Project Card Container -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <!-- Project Card -->
      <article
        v-for="(project, index) in $tm('projects.projects')"
        :key="index"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        class="bg-base border-decoration flex flex-col justify-between rounded-2xl border-t-4 px-6 shadow-2xl"
      >
        <!-- Title -->
        <h1 class="font-raleway text-principal my-4 text-center text-xl font-bold sm:text-2xl">
          {{ project.title }}
        </h1>

        <!-- Img -->
        <figure
          class="border-decoration mx-auto mb-4 h-60 w-full overflow-hidden rounded-xl border-2"
        >
          <img :src="project.image" alt="Imagen del Proyecto" class="h-full w-full object-cover" />
        </figure>

        <!-- Description -->
        <p class="text-principal mt-2 mb-4 min-h-[96px] indent-6 text-sm leading-relaxed">
          {{ project.description }}
        </p>

        <!-- Tags -->
        <div class="mb-6 flex flex-wrap gap-2">
          <p
            v-for="(tag, index) in project.tag"
            :key="index"
            class="border-decoration bg-decoration/20 text-decoration rounded border px-2 py-1 text-xs"
          >
            # {{ tag }}
          </p>
        </div>

        <!-- Links -->
        <div class="mx-2 mt-auto flex justify-between">
          <a
            :href="project.github.link"
            target="_blank"
            class="bg-decoration mb-6 rounded-xl px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            {{ project.github.title }}
          </a>

          <a
            :href="project.demo.link"
            target="_blank"
            class="bg-decoration mb-6 rounded-xl px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            {{ project.demo.title }}
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
