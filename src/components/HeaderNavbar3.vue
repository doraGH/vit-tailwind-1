<template>
  <header class="relative bg-white">
    <div class="w-full mx-auto flex items-center justify-between p-6">
      <a href="#" class="flex items-center text-gray-500 m-1.5 p-1.5">
        <img class="h-8 w-auto" src="@/assets/logo.svg" alt="Vue logo" />
        <span class="ml-3 text-2xl">Your Company</span>
      </a>

      <nav class="nav-menu">
        <ul class="menu-main">
          <li class="has-sub">
            <a href="about_us.php" title="About Us">About Us</a>
            <ul class="menu-sub reset">
              <li><a href="about_us.php" title="About Us">About Us</a></li>
              <li><a href="milestone.php" title="Milestone">Milestone</a></li>
              <li><a href="team.php" title="Our Team">Our Team</a></li>
              <li><a href="locations.php" title="Locations">Locations</a></li>
              <li><a href="awards.php" title="Awards">Awards</a></li>
            </ul>
          </li>
          <li class="has-sub">
            <a href="product_list.php" title="Products">Products</a>
            <ul class="menu-sub reset">
              <li><a href="product_list.php" title="PIR Detector">PIR Detector</a></li>
              <li><a href="product_list.php" title="HF Detector">HF Detector</a></li>
              <li><a href="product_list.php" title="DALI Sensor">DALI Sensor</a></li>
              <li><a href="product_list.php" title="KNX Sensor">KNX Sensor</a></li>
            </ul>
          </li>
          <li class="has-sub">
            <a href="news_list.php" title="News">News</a>
            <ul class="menu-sub reset">
              <li><a href="news_list.php" title="All News">All News</a></li>
              <li><a href="news_list.php" title="Exhibition">Exhibition</a></li>
              <li><a href="news_list.php" title="News">News</a></li>
            </ul>
          </li>
          <li>
            <a href="download.php" title="Download">Download</a>
          </li>
          <li>
            <a href="catalogue.php" title="Catalogue">Catalogue</a>
          </li>
          <li>
            <a href="contact_us_form.php" title="Contact Us">Contact Us</a>
          </li>
          <li class="show-for-mb">
            <a href="inquiry_form.php" title="Inquiry">Inquiry</a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center p-2 md:hidden">
        <button type="button" class="nav-switch" :class="{'isOpen': isOpen}"
        @click="isOpen = !isOpen">
          <i class="line"></i>
          <i class="line"></i>
          <i class="line"></i>
          <span class="sr-only">Open menu</span>
        </button>
      </div>
    </div>

  </header>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
    };
  },
};
</script>
<style lang="scss" scoped>
.nav-switch {
  @apply relative w-12 h-12 border-none bg-blue-600 p-0 top-0 right-0
}
.line {
  @apply block absolute h-0.5 bg-white top-1/2 right-2
  transition-width duration-[0.25s] delay-[0.25s] transition-spacing
}
.line:nth-child(1) {
  @apply w-8 -mt-2
}
.line:nth-child(2) {
  @apply w-8 mt-0
}
.line:nth-child(3) {
  @apply w-8 mt-2
}
.nav-switch.isOpen .line:nth-child(1) {
  @apply w-8 -mt-px -rotate-45 transition
}
.nav-switch.isOpen .line:nth-child(2) {
  @apply w-0
}
.nav-switch.isOpen .line:nth-child(3) {
  @apply w-8 -mt-px rotate-45 transition
}

.menu-main {
  @apply flex flex-wrap items-center font-medium text-base
}
.menu-main > li {
  @apply p-4
}
.menu-main > li > a {
  @apply text-slate-800
}
.menu-main > li > a:hover {
  @apply text-slate-900
}
</style>
