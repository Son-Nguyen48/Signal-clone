<template>
  <section class="bg-[#9DBBF8] text-[#1b1b1b] max-h-[760px] pt-[53px] lg:flex">
    <div class="pt-12 px-6 lg:w-[40%]">
      <div class="lg:pl-[8px]">
        <h1
          class="text-[40px] font-[800] mb-6 font-inter leading-[44px] lg:mb-6 lg:text-[60px] lg:leading-[64px] lg:mt-[152px]"
        >
          Express yourself freely
        </h1>
        <p
          class="text-[16px] font-normal leading-[22px] mb-6 lg:text-[20px] lg:leading-7 lg:font-inter"
        >
          Say "Hello" to a different messaging experience. An unexpected focus
          on privacy and personal data protection, combined with all the
          features you'd expect.
        </p>
        <a href="https://signal.org/vi/download/" class="inline-block">
          <p
            class="bg-white text-[#2C6BED] text-xl max-w-max px-5 h-[50px] flex items-center gap-2 rounded-lg"
          >
            <span class="font-get-signal font-bold">Get Signal</span>
            <i
              class="fa-solid fa-arrow-up-right-from-square h-7 w-7"
              style="color: #000000"
            ></i>
          </p>
        </a>
      </div>
    </div>
    <div class="relative p-3">
      <img
        class="w-[218px] -ml-[38px] mt-[65.5px] transform rotate-[22.5deg] lg:w-[320px] lg:m-0 lg:translate-y-[114px] lg:translate-x-[4px]"
        src="https://signal.org/assets/features/signal-iphone-eee9210b058079bae2f5972f41b87c68a95cdca5e7bc8c878d9450663b5044c9.png"
        alt="pic1"
      />
      <img
        class="absolute w-[218px] -right-[58px] top-[10.5px] transform rotate-[22.5deg] mM:-right-[3px] mL:right-[47px] md:left-[160px] lg:m-0 lg:translate-y-[57px] lg:translate-x-[144px] lg:w-[300px]"
        src="https://signal.org/assets/features/signal-pixel-3ff95be5c1225215416ca118ad5adabce8b61a820f0550b2174ce3fe13831e03.png"
        alt="pic2"
      />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.font-get-signal {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
}
</style>
