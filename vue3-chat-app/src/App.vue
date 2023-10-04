<template>
  <v-app>
    <div v-if="userGoogle === false">Loading...</div>
    <v-app-bar color="blue" v-if="userGoogle !== false">
      <v-app-bar-title>Welcome to Chat</v-app-bar-title>
      <v-btn variant="outlined" @click="googleAccess" v-if="!userGoogle">Acceder</v-btn>
      <v-btn variant="outlined" @click="logout" v-if="userGoogle">Salir</v-btn>
    </v-app-bar>

    <v-main app v-if="userGoogle !== false">
      <v-container>
        <ChatComponent v-if="userGoogle" />
        <div v-else>
          <h1 class="text-center mt-15">Debes iniciar sesión</h1>
        </div>
      </v-container>
    </v-main>

    <v-footer class="d-flex flex-column" app v-if="userGoogle">
      <FormAdd />
    </v-footer>
  </v-app>
</template>

<script setup>
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from './firebase'
import { ref } from 'vue'

import ChatComponent from './components/ChatComponent.vue'
import FormAdd from './components/FormAdd.vue'

const userGoogle = ref(false)

const googleAccess = async () => {
  try {
    const provider = new GoogleAuthProvider()
    const { user } = await signInWithPopup(auth, provider)
  } catch (error) {
    console.log(error)
  }
}

const logout = async () => {
  await signOut(auth)
}

onAuthStateChanged(auth, (user) => {
  userGoogle.value = user
})
</script>
