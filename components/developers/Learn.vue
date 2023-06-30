<template>
  <div class="px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-12 sm:mb-24">
      <span>Learn Basics</span>
    </h2>
    <div
      class="max-w-7xl mx-auto lg:flex items-center lg:space-x-12 space-y-16 lg:space-y-0"
    >
      <div
        class="space-gradient before:hidden rounded-3xl px-6 pt-1 pb-16 lg:w-1/2"
      >
        <img
          src="/images/developers/university.svg"
          class="mx-auto max-w-[440px] mb-6 sm:mb-6 -mt-6 sm:-mt-16 w-full"
        />
        <h3 class="leading-tight mb-4 text-center">
          <span class="text-3xl sm:text-4xl lg:text-5xl font-extrabold block">
            Astar University
          </span>
          <small class="block text-lg sm:text-2xl"
            >Online training to gain web3 programming skills</small
          >
        </h3>
        <p class="mx-auto max-w-2xl mb-8 sm:text-lg lg:text-center">
          Hands-on training to put you on the fast track to a web3 career.
          Solidity. Rust. And Polkadot.
        </p>
        <div class="text-center">
          <Button
            variant="outlined"
            size="lg"
            href="/developers/university"
            class="w-72"
          >
            Astar University ->
          </Button>
        </div>
      </div>
      <div class="lg:w-1/2">
        <h3
          class="font-extrabold text-3xl lg:text-4xl mb-6 text-center sm:text-left"
        >
          Documentation
        </h3>
        <ul class="space-y-6">
          <li v-for="item in docs">
            <h4>
              <NuxtLink
                :to="item.href"
                target="_blank"
                class="text-space-cyan hover:underline hover:text-space-cyan-lighter font-semibold text-lg lg:text-xl"
              >
                {{ item.title }} <span class="whitespace-nowrap">-></span>
              </NuxtLink>
            </h4>
            <p class="text-tiny lg:text-base">{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const docs = [
  {
    title: "Build",
    description:
      "Find all the resources you need in order to start testing, deploying, and interacting with smart contracts on the network.",
    href: "https://docs.astar.network/docs/build/",
  },
  {
    title: "Run A Node",
    description:
      "Explain how to run full nodes, collators, indexers, and everything you need to know related to infrastructure.",
    href: "https://docs.astar.network/docs/nodes/",
  },
  {
    title: "Learn Cross-Chain Message (XCM)",
    description:
      "Explain how XCM is used in Astar and how developers can use it to interact with the rest of the Polkadot network.",
    href: "https://docs.astar.network/docs/xcm/",
  },
  {
    title: "Integrate Toolings",
    description:
      "Provide relevant information about the wallets, bridges, indexers, and oracles that are integrated with the network.",
    href: "https://docs.astar.network/docs/integrations/",
  },
];
</script>
