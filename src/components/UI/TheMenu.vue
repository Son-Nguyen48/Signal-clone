<template>
  <ul class="absolute top-full left-0 w-full pt-2 z-30 bg-white">
    <li v-for="itemMenu in menu" :key="itemMenu.id" class="px-3 py-2">
      <a :href="itemMenu.link">{{ itemMenu.name }}</a>
    </li>
  </ul>
</template>

<script setup>
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
