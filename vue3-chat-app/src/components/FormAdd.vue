<template>
  <v-form class="w-100" @submit.prevent="sendMessage">
    <v-text-field
      color="success"
      label="Ingrese mensaje"
      variant="outlined"
      hide-details
      append-icon="mdi-send"
      @click:append="sendMessage"
      v-model="message"
    >
    </v-text-field>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { db, auth } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

const message = ref('')

const sendMessage = async () => {
  // console.log('enviado mensaje ' + message.value)
  try {
    await addDoc(collection(db, 'chats'), {
      text: message.value,
      time: Date.now(),
      uid: auth.currentUser.uid,
      displayName: auth.currentUser.displayName
    })
    message.value = ''
  } catch (error) {
    console.log(error)
  }
}
</script>
