<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6">
    <h2 class="title text-center mb-12">
      <span>FAQs</span>
    </h2>
    <dl
      class="space-y-6 sm:space-y-10 divide-y divide-white/20 border-t border-b border-white/20 pb-6 sm:pb-10"
    >
      <Disclosure
        as="div"
        v-for="faq in faqs"
        :key="faq.question"
        v-slot="{ open }"
      >
        <dt class="pt-6 sm:pt-10">
          <DisclosureButton
            class="flex w-full items-start justify-between text-left text-white"
          >
            <span class="text-base sm:text-xl font-medium">
              {{ faq.question }}
            </span>
            <span class="ml-6 flex h-7 items-center">
              <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
              <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-6 pr-12 university-faqs__answer">
          <p
            v-html="faq.answer"
            class="text-base sm:text-lg text-gray-300 whitespace-pre-wrap"
          />
        </DisclosurePanel>
      </Disclosure>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const faqs = [
  {
    question: "What is Astar Network?",
    answer:
      "Astar is Japan's most popular smart contract platform supporting both EVM and WebAssembly (Wasm) environments, and interoperability between them using a Cross-Virtual Machine. Our innovative Build2Earn program allows developers to earn incentives for building decentralized apps.",
  },
  {
    question: "What is the goal of Astar University?",
    answer:
      "By educating developers through hands-on training, we open the path for software programmers to quickly become web3 developers. We'll teach you how to build your own decentralized project and enter the high-growth field of blockchain development.",
  },
  {
    question: "How do I start?",
    answer:
      "Start your career in web3 by completing this <a href='https://astar.getlearnworlds.com/?msg=signup' target='_blank'>application form</a>. \n\nIf you are an experienced developer, visit our <a href='/developers'>Developer Page</a> to start building or running a node.",
  },
  {
    question: "Who can apply?",
    answer:
      "Software developers who have some experience programming in any language. You will need to pass a selection process with basic software programming questions.",
  },
  {
    question: "Do you need to know Solidity or Rust programming?",
    answer:
      "No. Experience with programming language is fine; python, C++, javascript, or any other popular language. We love both Solidity and Rust programming and will teach you how to begin building with both languages.",
  },
  {
    question: "How long is the program?",
    answer:
      "The program runs 9 weeks, beginning June 12, with an introductory course for anyone. Modules are flexible and self-paced, requiring # of hours per week to complete. Deadline to apply is June 05.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Our courses are affordable. A holding fee is required and will be returned to you upon finishing the course. Please complete your application form for details. \n\nExceptional circumstances will be made for interested candidates who cannot afford the holding fee. After completing your application, please contact admissions for details.",
  },
  {
    question: "Where does it take place?",
    answer:
      "This course is online only. You will complete challenging modules at your own pace and always have access to coaching through a private Live FAQ. At the end of the course we'll have a private graduation ceremony to celebrate your achievement and meet the Astar team.",
  },
];
</script>

<style lang="postcss">
.university-faqs__answer a {
  @apply text-space-cyan hover:underline hover:text-space-cyan-lighter;
}
</style>
