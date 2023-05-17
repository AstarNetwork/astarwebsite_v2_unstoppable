<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6">
    <div
      class="border border-white/50 rounded-3xl p-12 flex space-x-4 items-center bg-space-gray-dark"
    >
      <div class="flex-1">
        <h2 class="gradient-text font-bold text-3xl">
          <span>Don't miss a beat.</span>
        </h2>
        <p>
          Sign-up for our newsletter to stay up-to-date and learn about the
          latest developments.
        </p>
      </div>
      <Button size="lg" class="shrink-0">E-mail Sign-up</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [{ src: "//embed.typeform.com/next/embed.js" }],
});
</script>
