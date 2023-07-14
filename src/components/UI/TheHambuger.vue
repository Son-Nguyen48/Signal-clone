<template>
  <a
    @click="toggleMenu"
    v-if="isMenuClose"
    href="#"
    class="w-[52px] flex items-center justify-center ml-auto relative"
  >
    <div
      class="flex flex-col justify-center items-center w-4 h-7 cursor-pointer absolute transform translate-y-px"
    >
      <span class="w-full h-px bg-[#000] mb-1"></span>
      <span class="w-full h-px bg-[#000] mb-1"></span>
      <span class="w-full h-px bg-[#000] mb-1"></span>
    </div>
  </a>

  <a
    @click="toggleMenu"
    v-if="!isMenuClose"
    href="#"
    class="w-[52px] flex items-center justify-center ml-auto relative"
  >
    <div
      class="flex flex-col justify-center items-center w-4 h-7 cursor-pointer absolute transform translate-y-1"
    >
      <span class="w-full h-px bg-[#000] mb-1 transform rotate-45"></span>
      <span
        class="w-full h-px bg-[#000] mb-1 transform -rotate-45 -translate-y-[5px]"
      ></span>
    </div>
  </a>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let isMenuClose = ref(true);

    console.log(isMenuClose, "isMenuClose");

    const toggleMenu = () => {
      isMenuClose.value = !isMenuClose.value;
      console.log(isMenuClose.value, "isMenuClose");
    };
    return { isMenuClose, toggleMenu };
  }
};
</script>

<style lang="scss" scoped></style>
