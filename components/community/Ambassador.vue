<template>
  <section class="px-4 sm:px-6 relative z-10">
    <div
      class="space-gradient before:hidden rounded-3xl max-w-7xl mx-auto px-6 sm:px-12 pt-1 pb-10 sm:pb-20 lg:py-20 lg:flex justify-center items-center lg:space-x-6"
    >
      <div class="lg:w-2/5">
        <img
          src="/images/community/ambassador.svg"
          class="-mt-12 w-64 sm:w-80 lg:w-full mx-auto"
        />
      </div>
      <div class="lg:w-3/5">
        <h2
          class="text-white leading-tight mb-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-center lg:text-left"
        >
          Become an Official Ambassador
        </h2>
        <p class="text-white mx-auto mb-8 sm:text-lg">
          We have created an open community program where every community member
          can join and support the Astar ecosystem. You can collect points and
          receive rewards through dApp staking with valid and useful
          contributions.
        </p>
        <div class="text-center lg:text-left">
          <Button
            variant="outlined"
            size="lg"
            href="https://github.com/AstarNetwork/growth-program"
            target="_blank"
          >
            Ambassador Program
            <ArrowTopRightOnSquareIcon class="w-5 h-5 stroke-2 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
</script>
