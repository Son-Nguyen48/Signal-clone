<template>
  <div class="flex pl-[18px] h-[52px]">
    <div class="flex items-center">
      <img
        class="h-[30px] md:h-[50px]"
        src="https://signal.org/assets/header/logo-f7ef605fe417d5520d38d546b3b774b4261c75220b9904da4d8b2ffc19a761ff.png"
        alt="logo"
      />
    </div>

    <TheHambuger />

    <!-- <div class="flex-1 flex items-center">
      <ul class="flex gap-4">
        <li v-for="item in menu" :key="item.id">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script setup>
import TheHambuger from "./UI/TheHambuger.vue";

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
</script>

<style lang="scss" scoped></style>
