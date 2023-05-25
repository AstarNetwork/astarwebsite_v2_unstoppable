<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <h2 class="title text-center mb-12">
      <span>Overview</span>
    </h2>
    <ul class="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
      <li v-for="item in overview" class="text-center">
        <img :src="item.image" class="mx-auto w-48 sm:w-auto" />
        <h3 class="text-xl lg:text-3xl font-bold leading-tight mb-4 mt-8">
          {{ item.title }}
        </h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const overview = [
  {
    title: "Learn to Build",
    description:
      "Boost your skills with amazing mentors and interactive modules.",
    image: "/images/university/overview-build.svg",
  },
  {
    title: "Self-Paced Study",
    description: "Complete your course with flexible study, over for 9 weeks.",
    image: "/images/university/overview-self-paced.svg",
  },
  {
    title: "Unlock Your Potential",
    description: "We'll celebrate your blockchain mastery on Graduation Day!",
    image: "/images/university/overview-graduation.svg",
  },
];
</script>
