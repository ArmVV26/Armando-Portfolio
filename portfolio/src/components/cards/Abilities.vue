<template>
  <section id="abilities" data-aos="flip-down" class="mx-5 mt-60 md:mx-20">
    <h1 class="font-raleway text-principal mb-6 text-center text-2xl font-bold sm:text-4xl">
      {{ $t("skills.title") }}
    </h1>

    <section class="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="(group, index) in skills" :key="index">
        <h1 class="text-decoration mb-2 text-lg font-bold sm:text-xl">{{ group.category }}</h1>
        <ul>
          <li v-for="(skill, i) in group.items" :key="i">
            <div class="mx-2 flex justify-between">
              <p class="text-principal">{{ skill.name }}</p>
              <p class="text-principal">{{ skill.percent }} %</p>
            </div>
            <div class="bg-secondary mb-4 h-3 w-full rounded">
              <div
                class="bg-decoration h-full rounded"
                :style="{ width: skill.percent + '%' }"
              ></div>
            </div>
          </li>
        </ul>
      </article>
    </section>
  </section>
</template>

<script setup>
// VARIABLES
const skills = [
  {
    category: "Front-End",
    items: [
      { name: "HTML / CSS", percent: 100 },
      { name: "JavaScript", percent: 80 },
      { name: "SCSS", percent: 100 },
      { name: "TailwindCSS", percent: 80 },
      { name: "Vue.js", percent: 85 },
      { name: "React.js", percent: 65 },
    ],
  },
  {
    category: "Back-End",
    items: [
      { name: "Java", percent: 65 },
      { name: "PHP", percent: 70 },
      { name: "Python", percent: 80 },
      { name: "Node.js", percent: 90 },
      { name: "Django", percent: 85 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Docker", percent: 75 },
      { name: "Git", percent: 70 },
      { name: "Linux", percent: 85 },
    ],
  },
];
</script>

<style scoped></style>
