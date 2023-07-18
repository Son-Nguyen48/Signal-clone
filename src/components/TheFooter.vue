<template>
  <div
    class="pt-12 px-6 pb-24 bg-[#3C3744] text-[#e9e9e9] lg:flex lg:flex-row-reverse lg:justify-end"
  >
    <ul class="flex-1 md:flex">
      <li
        class="mb-6 lg:mb-0 lg:inline-block md:w-1/4 p-2"
        v-for="link in linkFooter"
        :key="link.id"
      >
        <strong>{{ link.title }}</strong>
        <ul class="mt-3">
          <a
            class="block"
            v-for="item in link.listLink"
            :key="item.id"
            :href="item.href"
            >{{ item.linkName }}</a
          >
        </ul>
      </li>
    </ul>

    <div class="lg:flex-none lg:w-[40%] p-2">
      <p class="leading-[22px]">© 2013–2022 Signal, a 501c3 nonprofit.</p>
      <p class="leading-[22px]">
        Signal is a registered trademark in the United States and other
        countries.
      </p>
      <br />

      <p class="leading-[22px]">
        For media inquiries, contact
        <a href="mailto:press@signal.org">press@signal.org</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const linkFooter = [
  {
    id: 1,
    title: "organization",
    listLink: [
      { id: 1, href: "https://signal.org/fr/donate/", linkName: "Donate" },
      { id: 2, href: "https://signal.org/workworkwork/", linkName: "Careers" },
      { id: 3, href: "https://signal.org/blog/", linkName: "Blog" },
      {
        id: 4,
        href: "https://signal.org/legal/",
        linkName: "Terms & Privacy Policy"
      }
    ]
  },
  {
    id: 2,
    title: "Download",
    listLink: [
      {
        id: 1,
        href: "https://signal.org/fr/download/android/",
        linkName: "android"
      },
      {
        id: 2,
        href: "https://signal.org/fr/download/ios/",
        linkName: "Iphones & Ipads"
      },
      {
        id: 3,
        href: "https://signal.org/fr/download/windows/",
        linkName: "Windows"
      },
      {
        id: 4,
        href: "https://signal.org/fr/download/macos/",
        linkName: "mac"
      },
      {
        id: 5,
        href: "https://signal.org/fr/download/linux/",
        linkName: "linux"
      }
    ]
  },
  {
    id: 3,
    title: "Social",
    listLink: [
      {
        id: 1,
        href: "https://github.com/signalapp",
        linkName: "GitHub"
      },
      {
        id: 2,
        href: "https://twitter.com/i/flow/login?redirect_after_login=%2Fsignalapp",
        linkName: "Twitter"
      },
      {
        id: 3,
        href: "https://www.instagram.com/signal_app/",
        linkName: "instagram"
      }
    ]
  },
  {
    id: 4,
    title: "Help",
    listLink: [
      {
        id: 1,
        href: "https://support.signal.org/hc/vi",
        linkName: "Support Center"
      },
      {
        id: 2,
        href: "https://community.signalusers.org/",
        linkName: "Community"
      }
    ]
  }
];
</script>

<style scoped></style>
