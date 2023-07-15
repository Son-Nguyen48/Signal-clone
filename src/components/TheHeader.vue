<template>
  <nav
    class="flex pl-[18px] h-[53px] fixed z-50 bg-white w-full border-b-[1px] border-[#ebeaeb]"
  >
    <div class="flex items-center">
      <img
        class="h-[30px] md:h-[50px]"
        src="https://signal.org/assets/header/logo-f7ef605fe417d5520d38d546b3b774b4261c75220b9904da4d8b2ffc19a761ff.png"
        alt="logo"
      />
    </div>

    <TheHambuger :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />

    <!-- <div class="flex-1 flex items-center">
      <ul class="flex gap-4">
        <li v-for="item in menu" :key="item.id">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </div> -->

    <TheMenu v-show="isMenuOpen" />
  </nav>
</template>

<script setup>
import { ref } from "vue";
import TheHambuger from "./UI/TheHambuger.vue";
import TheMenu from "./UI/TheMenu.vue";

let isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped></style>
