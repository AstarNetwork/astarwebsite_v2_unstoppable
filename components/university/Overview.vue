<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <h2 class="title text-center mb-12">
      <span>Overview</span>
    </h2>
    <ul class="grid grid-cols-1 sm:grid-cols-3 gap-16">
      <li v-for="item in overview" class="text-center">
        <img :src="item.image" class="mx-auto" />
        <h3 class="text-2xl sm:text-3xl font-bold leading-tight mb-4 mt-8">
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
    title: "Any Software Programmer",
    description: "Learn new skills to become a confident web3 developer.",
    image: "/images/university/overview-graduation.svg",
  },
  {
    title: "Self-Paced Study",
    description: "Complete your course with flexible study, over for 9 weeks.",
    image: "/images/university/overview-self-paced.svg",
  },
  {
    title: "Learn to Build",
    description: "Boost your skills with coaching and building projects.",
    image: "/images/university/overview-build.svg",
  },
];
</script>
