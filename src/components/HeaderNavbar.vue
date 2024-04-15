<template>
  <header class="relative bg-white">
    <div class="w-full mx-auto flex items-center justify-between p-6">
      <!-- logo -->
      <a href="#" class="flex items-center text-gray-500 m-1.5 p-1.5">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        <span class="ml-3 text-2xl">Your Company</span>
      </a>
      <!-- md menu control icon -->
      <div class="flex items-center p-2 md:hidden">
        <button type="button" class="w-8 h-8 block"
        @click="menu = !menu">
          <span class="sr-only">Open menu</span>
          <span ref="menuIcon" class="relative block w-8 h-0.5 bg-black
          before:content-[''] before:-top-2.5
          before:absolute before:w-8 before:h-0.5
          before:right-0 before:bg-black
          after:content-[''] after:-bottom-2.5
          after:absolute after:w-8 after:h-0.5
          after:right-0 after:bg-black"></span>
        </button>
      </div>
      <!-- pc menu -->
      <nav :class="{'hidden': !menu, 'md:flex': menu, 'sm:absolute': menu,
      'sm:absolute': menu, 'sm:top-20': menu, 'sm:inset-x-0': menu, 'sm:p-2': menu,
      'sm:transition': menu, 'sm:transform': menu, 'sm:origin-top-center': menu }" class="
      md:flex space-x-10
      ">
        <ul class="flex flex-wrap items-center font-medium text-base">
          <li class="p-4 lg:px-5">
            <a href="#" class="text-slate-800 hover:text-slate-900">Prospects</a>
          </li>
          <li class="p-4 lg:px-5">
            <a class="text-slate-800 hover:text-slate-900" href="#">History</a>
          </li>
          <li class="p-4 lg:px-5 relative flex items-center space-x-1">
            <a href="#" class="text-slate-800 hover:text-slate-900"
            @click="solutions = !solutions">Flyout Menu</a>
            <button class="shrink-0 p-1">
              <span class="sr-only">Show submenu for "Flyout Menu"</span>
              <svg class="w-3 h-3 fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
              </svg>
            </button>
            <!-- 2nd level menu -->
            <ul v-if="solutions"
            class="origin-top-right absolute top-full left-1/2 -translate-x-1/2
            min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl">
              <li>
                <a class="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
                  <div class="flex items-center justify-center bg-white border
                  border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                    <svg class="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width="9" height="12">
                      <path d="M8.724.053A.5.5 0 0 0 8.2.1L4.333 3H1.5A1.5 1.5 0
                      0 0 0 4.5v3A1.5 1.5 0 0 0 1.5 9h2.833L8.2 11.9a.5.5 0 0
                      0 .8-.4V.5a.5.5 0 0 0-.276-.447Z" />
                    </svg>
                  </div>
                  <span class="whitespace-nowrap">Priority Ratings</span>
                </a>
              </li>
              <li>
                <a class="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
                  <div class="flex items-center justify-center bg-white border
                  border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                    <svg class="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                        <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0
                        0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0
                        0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                    </svg>
                  </div>
                  <span class="whitespace-nowrap">Insights</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="group p-4 lg:px-5 relative flex items-center space-x-1">
            <a href="#" class="text-slate-800 hover:text-slate-900">Numbers</a>
            <button class="shrink-0 p-1">
              <span class="sr-only">Show submenu for "Flyout Menu"</span>
              <svg class="w-3 h-3 fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
              </svg>
            </button>
            <ul class="origin-top-right absolute top-full left-1/2 -translate-x-1/2
            min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl
            hidden group-hover:block">
              <li>
                <a class="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
                  <div class="flex items-center justify-center bg-white border
                  border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                    <svg class="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width="9" height="12">
                      <path d="M8.724.053A.5.5 0 0 0 8.2.1L4.333 3H1.5A1.5 1.5 0
                      0 0 0 4.5v3A1.5 1.5 0 0 0 1.5 9h2.833L8.2 11.9a.5.5 0 0
                      0 .8-.4V.5a.5.5 0 0 0-.276-.447Z" />
                    </svg>
                  </div>
                  <span class="whitespace-nowrap">Priority Ratings</span>
                </a>
              </li>
              <li>
                <a class="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
                  <div class="flex items-center justify-center bg-white border
                  border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                    <svg class="fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                        <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0
                        0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0
                        0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                    </svg>
                  </div>
                  <span class="whitespace-nowrap">Insights</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="p-4 lg:px-5">
            <a class="text-slate-800 hover:text-slate-900" href="#">Contacts</a>
          </li>
        </ul>
      </nav>

      <!-- mobile menu -->
      <!-- <nav v-if="menu"
      class="absolute top-20 inset-x-0 p-2 transition transform origin-top-center md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-opacity-5
        bg-white divide-y-2 divide-gray-50">
        <div class="p-6">
          <div class="flex items-center justify-between">
            <a href="#" class="flex items-center text-gray-500 m-1.5 p-1.5">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              <span class="ml-3 text-2xl">Your Company</span>
            </a>
          </div>
        </div>
      </div>
      </nav> -->

    </div>
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const menu = ref(false);
    const solutions = ref(false);

    return {
      menu,
      solutions,
    };
  },
};
</script>
