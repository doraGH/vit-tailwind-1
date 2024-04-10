<template>
  <header class="bg-white">
    <div class="w-full mx-auto flex items-center justify-between p-6">
      <!-- logo -->
      <a href="#" class="flex items-center text-gray-500 m-1.5 p-1.5">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        <span class="ml-3 text-2xl">Your Company</span>
      </a>
      <!-- md menu control icon -->
      <div class="flex items-center p-2 md:hidden">
        <button type="button" class="w-8 h-8 block">
          <span class="sr-only">Open menu</span>
          <span class="relative block w-8 h-0.5 bg-black
          before:content-[''] before:-top-2.5
          before:absolute before:w-8 before:h-0.5
          before:right-0 before:bg-black
          after:content-[''] after:-bottom-2.5
          after:absolute after:w-8 after:h-0.5
          after:right-0 after:bg-black"></span>
        </button>
      </div>
      <!-- menu -->
      <nav>
        <ul class="flex m-2">
          <li class="relative px-6">
            <a href="#" class="text-gray-500 hover:text-gray-900">Solutions</a>
            <transtion
              enter-active-class="transition ease-out duration-200"
              leave-active-class="transition ease-in duration-150"
              enter-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div class="absolute z-10 transform" v-if="solutions">
                <ul class="border-t-2 border-red-600 shadow-lg">
                  <li><a href="#" class="p-4">Item1</a></li>
                  <li><a href="#">Analytics</a></li>
                </ul>
              </div>
            </transtion>
          </li>
          <li class="px-6"><a href="#">Pricing</a></li>
          <li class="px-6"><a href="#">Docs</a></li>

        </ul>
      </nav>

    </div>
  </header>
</template>

<!-- <script setup>
import { ref } from 'vue';
export default {
  const solutions = ref(false),
};
</script> -->
