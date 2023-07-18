<template>
  <section class="bg-[#f6f6f6]">
    <div class="py-12 px-6 text-center">
      <div
        class="lg:max-w-[960px] lg:mx-auto lg:flex lg:gap-6 4k:max-w-[1344px] 4k:mb-6"
      >
        <div
          v-for="feature in features1"
          :key="feature.id"
          class="lg:w-[50%] p-[30px] lg:p-0 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] mb-6 lg:mb-0 lg:pb-3"
        >
          <img
            class="md:w-[370px] md:mx-auto"
            :src="feature.src"
            alt="feature1"
          />
          <h3
            class="mt-[18px] mb-1 text-[28px] leading-8 font-extrabold text-[#1b1b1b]"
          >
            {{ feature.title }}
          </h3>
          <p class="text-[#4a4a4a] font-normal leading-[22px]">
            {{ feature.discription }}
          </p>
        </div>
      </div>

      <div
        class="lg:max-w-[960px] lg:mx-auto lg:flex lg:gap-6 4k:max-w-[1344px]"
      >
        <div
          v-for="feature in features2"
          :key="feature.id"
          class="lg:w-[50%] p-[30px] lg:p-0 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] mb-6 lg:mb-0 lg:pb-3"
        >
          <img
            class="md:w-[370px] md:mx-auto"
            :src="feature.src"
            alt="feature1"
          />
          <h3
            class="mt-[18px] mb-1 text-[28px] leading-8 font-extrabold text-[#1b1b1b]"
          >
            {{ feature.title }}
          </h3>
          <p class="text-[#4a4a4a] font-normal leading-[22px]">
            {{ feature.discription }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features1 = [
  {
    id: 1,
    src: "https://signal.org/assets/features/Media-9ebea788426f7eabd9756d3f5ec12a5b97b47b6fa8918cdff0004777f27e1fa3.png",
    title: "say what you like",
    discription:
      "Share texts, voice messages, photos, videos and GIFs for free. Signal uses your phone's data connection to save you the cost of texting and multimedia messaging."
  },
  {
    id: 2,
    src: "https://signal.org/assets/features/Calls-7d9c94d0e1937d6c9f265dcfd68b4d977d681f974a36f36bf14d1ae1beeadf12.png",
    title: "Express yourself freely",
    discription:
      "Make clear voice or video calls with people across town or across the world at no extra cost"
  }
];

const features2 = [
  {
    id: 1,
    src: "https://signal.org/assets/features/Stickers-51967388a365dff9f56b8c11b02e461a3a598a500f825d751a93c9e16e9f7800.png",
    title: "Respect your privacy",
    discription:
      "Take your conversations to the next level with Encrypted Stickers. You can also create and share your own sticker packs."
  },
  {
    id: 2,
    src: "https://signal.org/assets/features/Groups-2009b23758fe4fb3f6bb8e6cf61e41dedbeaa0a92b7734191a8565d2d7ee3cfc.png",
    title: "Get together with the groups",
    discription:
      "With Group Chat, easily stay in touch with family, friends, and co-workers."
  }
];
</script>

<style scoped></style>
