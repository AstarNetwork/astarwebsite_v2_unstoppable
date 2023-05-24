<template>
  <div class="space-gradient before:hidden">
    <div
      class="text-center py-24 sm:py-36 bg-[url(/images/common/space-stars.svg)]"
    >
      <div class="px-4 sm:px-6">
        <h2
          class="max-w-4xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        >
          Start your web3 career through hands-on learning!
        </h2>
        <p class="text-base sm:text-xl max-w-2xl mx-auto mb-12">
          Join the first group of builders and quickly find new opportunities in
          blockchain with Astar University.
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  application: {
    type: String,
    default: "",
  },
});
</script>
