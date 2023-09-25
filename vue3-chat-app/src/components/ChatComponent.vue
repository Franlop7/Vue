<template>
  <h1 class="text-center">Chats</h1>
  <v-card
    v-for="item of messages"
    :key="item.id"
    width="300"
    class="mb-3"
    theme="dark"
    :subtitle="item.displayName"
    :text="item.text"
    :class="item.uid === userChat.uid && 'ml-auto'"
    :color="item.uid === userChat.uid ? 'success' : 'pink'"
  >
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const userChat = ref({ uid: '002' })

const messages = ref([
  {
    id: 1,
    text: 'Este es el primer mensaje',
    uid: '001',
    time: Date.now(),
    displayName: 'Noe'
  },
  {
    id: 2,
    text: 'Este es el primer mensaje 2',
    uid: '002',
    time: Date.now(),
    displayName: 'Fran'
  },
  {
    id: 3,
    text: 'Este es el primer mensaje 3',
    uid: '003',
    time: Date.now(),
    displayName: 'Noe'
  }
])
</script>
