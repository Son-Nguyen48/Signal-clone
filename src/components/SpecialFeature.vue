<template>
  <div class="px-6 py-12 lg:flex lg:flex-row-reverse lg:justify-center">
    <div>
      <img
        class="rounded-[32px] lg:w-[680px] p-3"
        src="https://signal.org/assets/features/No-Ads-3d8c77d5daeadd4c02fd3f4343745812fd4f79406a01b4924cf53549957297e0.png"
        alt="no ads"
      />
    </div>
    <div class="lg:w-1/3 lg:flex-none lg:p-3">
      <h2
        class="mt-6 text-[28px] leading-8 font-extrabold font-inter text-[#1b1b1b] lg:text-[40px] lg:leading-[44px]"
      >
        No ads, no trackers, really.
      </h2>
      <p class="mt-8 lg:text-[20px] lg:font-normal lg:leading-7">
        In Signal, there are no advertisements, no partner sellers, and no
        worrying tracking systems. You can devote yourself to sharing the
        important moments with the people who matter to you.
      </p>
    </div>
  </div>

  <div class="px-6 py-12 lg:flex lg:justify-center">
    <div>
      <img
        class="rounded-[32px] lg:w-[680px] lg:p-3"
        src="https://signal.org/assets/features/Nonprofit503-876fb51a00d7d9de8a2c23f94394278191947bd56a8048df5d0138cde497332f.png"
        alt="non profit"
      />
    </div>
    <div class="lg:w-1/3 lg:p-3">
      <h2
        class="mt-6 text-[28px] leading-8 font-extrabold font-inter text-[#1b1b1b] lg:text-[40px] lg:leading-[44px]"
      >
        Free for all
      </h2>
      <p class="mt-8 lg:text-[20px] lg:font-normal lg:leading-7">
        Signal is an independent non-profit organization. We are not connected
        to any major technology company and we can never be bought by one. The
        development of our platform is funded by grants and donations from
        people like you.
      </p>
      <a
        class="inline-block rounded-lg border-2 border-[#2c6bed] text-[#2c6bed] text-[20px] leading-7 font-semibold px-4 py-[7px] font-get-signal mt-6"
        href="https://signal.org/fr/donate/"
        >Donate to Signal</a
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.font-get-signal {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
}
</style>
