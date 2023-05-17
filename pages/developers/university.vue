<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
        />
        <div
          class="min-h-[50vh] sm:min-h-[60vh] flex items-center justify-start"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div class="text-center">
              <h1
                class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow"
              >
                Astar University
              </h1>
              <p class="sm:text-xl lg:text-2xl">
                Online training to gain web3 programming skills
              </p>
              <p>
                Hands-on training to put you on the fast track to a web3 career.
                Solidity. Rust. And Polkadot.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        University
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

useHead({
  script: [{ src: "//embed.typeform.com/next/embed.js" }],
});

const route = useRoute();
import { meta } from "@/content/meta";
const seoTitle = `Astar University | ${meta.siteName} - ${meta.tagline}`;
const seoDescription = "Online training to gain web3 programming skills";
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}university.png`;

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => seoImage,
  ogImageUrl: () => seoImage,
  ogType: () => "website",
  ogUrl: () => seoUrl,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => seoImage,
});

definePageMeta({
  layout: false,
});
</script>

<style lang="postcss" scoped>
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}
</style>
