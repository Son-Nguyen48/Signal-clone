<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheHero from "./components/TheHero.vue";
import TheReason from "./components/TheReason.vue";
import TheInfor from "./components/TheInfor.vue";
import TheFeature from "./components/TheFeature.vue";
import SpecialFeature from "./components/SpecialFeature.vue";
import TheFooter from "./components/TheFooter.vue";
import ChatAnimation from "./components/ChatAnimation.vue";
</script>

<template>
  <main class="overflow-x-hidden">
    <TheHeader />
    <TheHero />
    <TheReason />
    <TheInfor />
    <TheFeature />
    <SpecialFeature />
    <TheFooter />
    <!-- <ChatAnimation /> -->
  </main>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
