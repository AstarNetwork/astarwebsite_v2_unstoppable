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
        <VisionSpaceStation
          v-on:showDetails="clickAction"
          class="w-full h-auto"
        />
      </div>

      <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-20" @close="open = false">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div
              class="fixed inset-0 bg-gray-900 bg-opacity-90 transition-opacity"
            />
          </TransitionChild>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-2 sm:p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 translate-y-0 sm:scale-100"
                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel
                  class="relative transform overflow-hidden rounded-3xl bg-space-gray-dark px-4 py-8 text-left shadow-xl transition-all sm:w-full lg:p-12 sm:max-w-7xl"
                >
                  <div
                    class="flex items-center flex-col-reverse lg:flex-row space-x-12"
                  >
                    <div class="">
                      <DialogTitle
                        as="h3"
                        class="text-xl sm:text-3xl font-bold text-white leading-tight mb-6"
                      >
                        {{ visions[visionId]["title"] }}
                      </DialogTitle>
                      <p class="text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                    <div
                      class="shrink-0 ml-2 w-96 h-96 flex items-center justify-center"
                    >
                      image
                      <!-- <img
                        class=""
                        :src="
                          '/images/starmap/' + discoveries[discoveryId]['image']
                        "
                        :alt="discoveries[discoveryId]['title']"
                        width="580"
                        height="480"
                      /> -->
                    </div>
                  </div>

                  <button
                    type="button"
                    class="text-gray-500 transition cursor-pointer p-3 hover:bg-space-gray hover:text-gray-400 rounded-full outline-none absolute right-0 top-0 sm:right-3 sm:top-3"
                    @click="open = false"
                  >
                    <XMarkIcon class="w-8 h-8 sm:w-12 sm:h-12" />
                  </button>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
const open = ref(false);
const visionId = ref("staking");

const clickAction = (vision: string) => {
  visionId.value = vision;
  open.value = true;
};

interface Vision {
  title: string;
}

const visions: { [index: string]: Vision } = {
  staking: {
    title: "dApps Staking",
  },
  startale: {
    title: "Startale",
  },
  tokenomics: {
    title: "Tokenomics",
  },
  foundation: {
    title: "Astar Foundation",
  },
  dao: {
    title: "Astar DAO",
  },
  link: {
    title: "Astar Link",
  },
};

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

<style lang="postcss">
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}
.vision-button {
  @apply hover:cursor-pointer transition hover:brightness-150;
}
</style>
