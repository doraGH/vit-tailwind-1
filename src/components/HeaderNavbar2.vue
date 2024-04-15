<template>
  <header class="bg-blue-600 text-white">
    <div class="container mx-auto px-4 py-2">
      <h1 class="text-2xl font-bold">My Website</h1>
    </div>
  </header>
  <!-- Navbar -->
  <nav class="bg-white shadow">
    <div class="container mx-auto px-4 py-2">
      <!-- Navbar Mobile Toggle -->
      <div class="flex justify-between items-center">
        <!-- Navbar Logo -->
        <div>
          <h1 class="text-xl font-semibold text-gray-800">Logo</h1>
        </div>
        <!-- Navbar Mobile Button -->
        <div class="lg:hidden">
          <button @click="toggleNavbar"
          class="text-gray-500 focus:outline-none focus:text-gray-700">
            <svg class="h-6 w-6" fill="none"
            stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Navbar Links -->
      <div :class="{ 'hidden': !isOpen, 'lg:flex': isOpen }"
      class="lg:flex lg:justify-end lg:items-center mt-4">
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-800 hover:text-blue-600">Home</a></li>
          <li class="relative">
            <a href="#" class="text-gray-800 hover:text-blue-600">Services</a>
            <!-- Second Level Menu -->
            <ul class="absolute left-0 mt-2 bg-white shadow-lg rounded w-40 py-2 z-10">
              <li><a href="#" class="text-gray-700 hover:text-blue-600 px-4 block">
                Web Design</a></li>
              <li><a href="#" class="text-gray-700 hover:text-blue-600 px-4 block">
                Graphic Design</a></li>
              <li><a href="#" class="text-gray-700 hover:text-blue-600 px-4 block">
                SEO</a></li>
            </ul>
          </li>
          <li><a href="#" class="text-gray-800 hover:text-blue-600">About</a></li>
          <li><a href="#" class="text-gray-800 hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);
    const toggleNavbar = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      isOpen,
      toggleNavbar,
    };
  },
};
</script>
