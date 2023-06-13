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
        <div class="flex items-center justify-start pt-48 pb-40">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div class="text-center">
              <h1 class="">
                <img
                  class="mx-auto w-full mb-12 drop-shadow max-w-[800px]"
                  src="/images/vision/title.svg"
                  alt="Astar 2.0 Building the Unstoppable"
                />
              </h1>
              <p class="sm:text-xl lg:text-xl uppercase">
                A scalable network powering a global web3 vision for all.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-lg mb-44 leading-loose"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <img
          class="mx-auto w-full mb-12 drop-shadow"
          src="/images/vision/concept.svg"
          alt="Astar 2.0 Building the Unstoppable"
        />
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
import { meta } from "@/content/meta";
const { t } = useI18n();
const seoTitle = `${t("vision.title")} | ${meta.siteName} - ${t(
  "meta.tagline"
)}`;
const seoDescription = t("vision.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}common.png`;

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
