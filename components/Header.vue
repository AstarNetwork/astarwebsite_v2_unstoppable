<template>
  <div class="absolute z-10 w-full">
    <div class="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <NuxtLink :to="localePath('/')" class="flex">
        <span class="sr-only">Astar Network</span>
        <img
          class="h-10 w-auto sm:h-14"
          src="/images/common/logo.svg"
          alt="Astar Network"
          width="188"
          height="60"
          data-not-lazy
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>
