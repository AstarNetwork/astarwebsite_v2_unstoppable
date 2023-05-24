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
      "By educating developers through hands-on training, we open the path for software programmers to quickly become web3 developers. You'll learn how to build your own decentralized project and get ready to the high-growth field of blockchain development.",
  },
  {
    question: "How do I start?",
    answer:
      "Start your career in web3 by completing this <a href='https://docs.google.com/forms/d/1702E8rt-_QdjgUVArLpUwMvq-cPheBw4VJvMRghaVsc/edit' target='_blank'>application form</a>.",
  },
  {
    question: "Who can apply?",
    answer:
      "Software developers who have some experience programming in any language. There will be a small test with basic software programming questions, ideally add a time frame like 10 minutes or less.",
  },
  {
    question: "Do I need to know Rust or Solidity programming?",
    answer:
      "No. All that is required is experience with any programming language such as python, C++, javascript, or any other popular language. We love both Rust and Solidity programming. Throughout our course you'll gain the skills to begin building with both languages.",
  },
  {
    question: "How long is the program?",
    answer:
      "The program runs 9 weeks, beginning June 18, with an introductory course for anyone. Modules are flexible and self-paced. Deadline to apply is June 11.",
  },
  {
    question: "How much does it cost?",
    answer: "Our courses are totally free.",
  },
  {
    question: "Where does it take place?",
    answer:
      "This course is online only. You will complete challenging modules at your own pace and always have access to coaching with our developer team. At the end of the course we'll have a private graduation ceremony to celebrate your achievement and meet the Astar team.",
  },
];
</script>

<style lang="postcss">
.university-faqs__answer a {
  @apply text-space-cyan hover:underline hover:text-space-cyan-lighter;
}
</style>
