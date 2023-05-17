<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6">
    <h2 class="title text-center mb-12">
      <span>Curriculum Overview</span>
    </h2>
    <ol
      class="space-y-6 relative before:content-[''] before:w-[1px] before:bg-white/20 before:h-full before:block before:left-1.5 before:absolute before:-z-10"
    >
      <li
        v-for="(item, index) in curriculum"
        class="flex before:content-[''] before:w-3 before:h-3 before:block before:rounded-full before:bg-space-pink before:shrink-0 before:mt-12"
      >
        <div class="bg-space-gray rounded-2xl p-8 sm:p-10 flex-1 ml-4 sm:ml-10">
          <p class="gradient-text font-medium text-lg">
            <span>Module {{ index }}</span>
          </p>
          <h3 class="font-bold text-xl sm:text-2xl mb-2 leading-tight">
            {{ item.title }}
          </h3>
          <p class="text-gray-300">{{ item.description }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
const curriculum = [
  {
    title: "Introduction to Astar Network",
    description:
      "A non-technical overview of Astar Network and its capabilities. Designed for business professionals and anyone new to Astar.",
  },
  {
    title: "Astar and Polkadot",
    description:
      "Learn about the pillars of Astar Network by building projects on testnet and understand how blockchain supports developer activity. We will overview the complex relationship between Polkadot and Astar Network.",
  },
  {
    title: "WebAssembly and Wasm Smart Contracts",
    description:
      "Discover why WebAssembly (Wasm) has changed how developers build a blockchain. Understand how to build a contract with Solidity and Rust programming for Wasm format. You’ll learn through coding assignments and hands-on projects.",
  },
  {
    title: "Interoperability and Infrastructure",
    description:
      "Astar projects and smart contracts communicate by exchanging messages across networks and environments. Learn how Astar securely communicates with XCM and enables multilingual smart contracts through XVM messaging. You’ll build a smart contract from scratch.",
  },
];
</script>
