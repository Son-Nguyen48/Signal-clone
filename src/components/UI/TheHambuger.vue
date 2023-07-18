<template>
  <div
    role="button"
    @click="toggleMenu"
    v-if="!isMenuOpen"
    href="#"
    class="lg:hidden w-[52px] flex items-center justify-center ml-auto relative"
  >
    <div
      class="flex flex-col justify-center items-center w-4 h-7 cursor-pointer absolute transform translate-y-px"
    >
      <span class="w-full h-px bg-[#000] mb-1"></span>
      <span class="w-full h-px bg-[#000] mb-1"></span>
      <span class="w-full h-px bg-[#000] mb-1"></span>
    </div>
  </div>

  <div
    role="button"
    @click="toggleMenu"
    v-if="isMenuOpen"
    href="#"
    class="lg:hidden w-[52px] flex items-center justify-center ml-auto relative"
  >
    <div
      class="flex flex-col justify-center items-center w-4 h-7 cursor-pointer absolute transform translate-y-1"
    >
      <span class="w-full h-px bg-[#000] mb-1 transform rotate-45"></span>
      <span
        class="w-full h-px bg-[#000] mb-1 transform -rotate-45 -translate-y-[5px]"
      ></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["isMenuOpen"]);
const emits = defineEmits("toggleMenu");

console.log(props.isMenuOpen, "isMenuOpen", emits, "emits");

const toggleMenu = () => {
  emits("toggleMenu");
};
</script>

<style lang="scss" scoped></style>
