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
        <div class="pt-44 sm:pt-60 flex items-center justify-start">
          <div class="relative z-10 w-full">
            <div class="text-center mb-12 sm:mb-24 px-4 sm:px-6">
              <h1
                class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow leading-none mb-6"
              >
                Astar University
              </h1>
              <p class="text-xl lg:text-3xl mb-2">
                Gain Web3 Programming Skills
              </p>
              <p class="mb-16">
                Hands-on training to put you on the fast track to a web3 career.
                <br />Rust. Solidity. And Polkadot.
              </p>
              <Button
                :href="application"
                target="_blank"
                variant="outlined"
                size="xl"
              >
                Join the University
                <ArrowTopRightOnSquareIcon class="w-6 h-6 ml-1 stroke-2" />
              </Button>
            </div>

            <div class="max-w-5xl mx-auto px-4 sm:px-6 w-full">
              <video
                controls
                preload="auto"
                poster="/videos/astar_uni_teaser_v2.webp"
                class="w-full"
              >
                <source
                  src="/videos/astar_uni_teaser_v2.mp4"
                  type="video/mp4"
                />
              </video>
              <div class="text-center text-xl mt-6 sm:mt-12">
                <p class="gradient-text font-semibold text-xl sm:text-2xl">
                  <span>Software Developers:</span>
                </p>
                <p class="text-lg sm:text-xl">
                  Start or advance your career by learning with industry
                  leaders.<br />
                  Build EVM contracts and work with cutting-edge web3
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative z-10">
        <UniversityOverview class="py-60" />
        <UniversityCurriculum class="py-24" />
        <DevelopersTestimonials class="py-24" title="Why learn about Astar?" />
        <UniversityFAQs class="py-24" :application="application" />
        <UniversityCTA class="my-24" :application="application" />
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const application = "https://forms.gle/4fnF1fWS3GRdDxtL6";

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
