<template>
  <NuxtLink
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLink"
    class="text-white text-tiny xl:text-base hover:text-space-cyan-light"
  >
    <GlobeAltIcon class="w-6 h-6 inline-block" />
    {{ locale.name }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { GlobeAltIcon } from "@heroicons/vue/24/outline";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

let switchLink = switchLocalePath(locale.code);
if (switchLocalePath(locale.code) === "") {
  if (locale.code === "ja") {
    switchLink = "/ja/blog";
  } else {
    switchLink = "/blog";
  }
}

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
