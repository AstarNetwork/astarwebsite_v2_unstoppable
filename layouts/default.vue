<template>
  <div class="overflow-hidden">
    <Header />
    <slot name="space" />
  </div>

  <div class="fixed left-0 bottom-0 z-50 px-2 lg:px-6 pb-2 lg:pb-6">
    <Gdpr />
  </div>
</template>

<style lang="postcss">
body {
  @apply text-gray-200 bg-space-gray-dark;
}
</style>
