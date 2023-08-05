<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead(() => ({
  htmlAttrs: { lang: "en" },
  link: [
    {
      rel: "canonical",
      href: "https://astar.network/astar2",
    },
  ],
}));
</script>
