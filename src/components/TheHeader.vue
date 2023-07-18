<template>
  <nav
    class="flex justify-end px-[18px] min-h-[53px] lg:h-[83px] fixed z-50 bg-white w-full border-b-[1px] border-[#ebeaeb] lg:py-4"
  >
    <div class="flex items-center mr-auto lg:pt-">
      <img
        class="h-[30px] lg:h-[50px]"
        src="https://signal.org/assets/header/logo-f7ef605fe417d5520d38d546b3b774b4261c75220b9904da4d8b2ffc19a761ff.png"
        alt="logo"
      />
    </div>

    <div class="hidden lg:flex items-center">
      <ul class="flex gap-4">
        <li v-for="item in menu" :key="item.id">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </div>

    <TheHambuger :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />

    <TheMenu v-show="isMenuOpen" />
  </nav>
</template>

<script setup>
import { ref } from "vue";
import TheHambuger from "./UI/TheHambuger.vue";
import TheMenu from "./UI/TheMenu.vue";

const menu = [
  {
    id: 1,
    name: "Get Signal",
    link: "https://signal.org/vi/download/"
  },
  {
    id: 2,
    name: "Help",
    link: "https://support.signal.org/"
  },
  {
    id: 3,
    name: "Blog",
    link: "https://signal.org/blog/"
  },
  {
    id: 4,
    name: "Developers",
    link: "https://signal.org/docs/"
  },
  {
    id: 5,
    name: "Careers",
    link: "https://signal.org/workworkwork/"
  },
  {
    id: 6,
    name: "Donate",
    link: "https://signal.org/vi/donate/"
  }
];

let isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped></style>
