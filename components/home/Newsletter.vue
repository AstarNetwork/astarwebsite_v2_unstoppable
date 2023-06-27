<template>
  <div class="max-w-4xl w-full mx-auto px-4 sm:px-6 relative z-10">
    <div class="gradient-outlined-box">
      <div
        class="p-8 sm:p-12 sm:flex items-center space-y-6 sm:space-y-0 sm:space-x-8"
      >
        <div class="flex-1">
          <h2
            class="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3 text-center sm:text-left"
          >
            <span>{{ $t("home.newsletter.title") }}</span>
          </h2>
          <p>
            {{ $t("home.newsletter.description") }}
          </p>
        </div>
        <div class="shrink-0 text-center">
          <Button size="lg" @click="newsletterOpen = true">
            {{ $t("home.newsletter.signup") }}
          </Button>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot as="template" :show="newsletterOpen">
    <Dialog as="div" class="relative z-50" @close="newsletterOpen = false">
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
              class="relative transform overflow-hidden rounded-3xl bg-space-gray-dark shadow-xl transition-all w-full sm:max-w-2xl"
            >
              <iframe
                class="w-full h-[600px]"
                src="https://cdn.forms-content.sg-form.com/429c438b-0fe0-11ee-8fa4-6a66fcc72380"
              />
              <button
                type="button"
                class="text-gray-500 transition cursor-pointer p-3 hover:bg-space-gray hover:text-gray-400 rounded-full outline-none absolute right-0 top-0 sm:right-3 sm:top-3"
                @click="newsletterOpen = false"
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

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
const newsletterOpen = ref(false);
</script>
