<template>
  <div class="space-gradient relative">
    <img
      class="absolute z-[1] mix-blend-overlay portrait:h-screen landscape:w-screen object-cover"
      src="/images/common/space-cloud.webp"
      alt=""
      width="1728"
      height="1281"
      data-not-lazy
    />
    <img
      class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
      src="/images/common/space-stars.svg"
      alt=""
      width="1728"
      height="1728"
      data-not-lazy
    />
    <div class="pt-24 lg:pt-40 pb-24 lg:pb-36 flex items-center justify-start">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
