<template>
  <section class="px-4 sm:px-6 relative z-10">
    <h2 class="max-w-4xl mx-auto title text-center mb-8 sm:mb-12">
      <span>Build dApps on the Astar Network</span>
    </h2>
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6 lg:pt-24"
    >
      <div
        v-for="item in builders"
        class="border border-white/30 rounded-3xl p-6"
      >
        <img
          :src="'/images/community/' + item.image"
          :alt="item.title"
          class="mx-auto -mt-12 lg:-mt-24"
          width="600"
          height="300"
          data-not-lazy
        />
        <div class="sm:p-12 pt-4">
          <h3
            class="text-white font-bold text-center text-3xl sm:text-4xl mb-4 leading-tight"
          >
            {{ item.title }}
          </h3>
          <p class="mb-8">
            Take a look at who's already building on Astar Network, or visit the
            documentation to dive in yourself.
          </p>
          <div class="text-center">
            <Button
              :href="item.button.href"
              :target="item.button.href.includes('https') ? '_blank' : '_self'"
              class="w-72"
              size="lg"
            >
              {{ item.button.label }}
              <ArrowTopRightOnSquareIcon
                v-if="item.button.href.includes('https')"
                class="w-5 h-5 inline-block stroke-2 ml-1"
              />
              <span v-else class="ml-1">-></span>
            </Button>
          </div>
          <div v-if="item.text_link" class="text-center mt-3">
            <NuxtLink
              :to="item.text_link.href"
              target="_blank"
              class="text-space-cyan hover:underline hover:text-space-cyan-lighter"
            >
              {{ item.text_link.label }}
              <ArrowTopRightOnSquareIcon
                v-if="item.text_link.href.includes('https')"
                class="w-4 h-4 inline-block stroke-2"
              />
              <span v-else>-></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const builders = [
  {
    title: "Ecosystem",
    image: "builders-ecosystem.svg",
    description:
      "Take a look at who's already building on Astar Network, or visit the documentation to dive in yourself.",
    button: {
      label: "Ecosystem",
      href: "/community/ecosystem",
    },
    text_link: {
      label: "Go to documentation",
      href: "https://docs.astar.network/",
    },
  },
  {
    title: "Astar Space Labs",
    image: "builders-space-labs.svg",
    description:
      "Get started building on Astar and become a part of our vibrant ecosystem. Our community leaders will support you along your building journey.",
    button: {
      label: "Astar Space Labs",
      href: "https://astarnetwork.notion.site/Astar-SpaceLabs-bee19d9d13ab41ba8d113347ae56448f",
    },
  },
];
</script>
