<template>
  <div>
    <div v-for="chat in chatList" :key="chat.id" class="chat-1">
      <p v-for="chatItem in chat.listContent" :key="chatItem.id">
        {{ chatItem.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
const chatList = [
  {
    id: 1,
    listContent: [
      {
        id: 1,
        content: "...",
        isLock: false
      },
      {
        id: 2,
        content: "7a#v9*ht035v:q",
        isLock: true
      },
      {
        id: 3,
        content: "Hey check this out!",
        isLock: false
      }
    ]
  },
  {
    id: 2,
    listContent: [
      {
        id: 1,
        content: `<div>Lock</div>`,
        isLock: true
      },
      {
        id: 2,
        content: `<img src="" alt=""/>`,
        isLock: false
      }
    ]
  },
  {
    id: 3,
    listContent: [
      {
        id: 1,
        content: "3TF{*2Rhh2!dO:pR^",
        isLock: true
      },
      {
        id: 2,
        content: "Whoa where are you!?",
        isLock: false
      }
    ]
  },
  {
    id: 4,
    listContent: [
      {
        id: 1,
        content: "*Ep!z4Goql",
        isLock: true
      },
      {
        id: 2,
        content: "New Zealand",
        isLock: false
      }
    ]
  }
];
</script>

<style scoped></style>
