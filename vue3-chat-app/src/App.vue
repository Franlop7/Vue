<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>Vuetify Chat</v-app-bar-title>
      <v-btn variant="outlined">Acceder</v-btn>
    </v-app-bar>

    <v-main app>
      <v-container>
        <ChatComponent />
      </v-container>
    </v-main>

    <v-footer class="d-flex flex-column" app>
      <FormAdd />
    </v-footer>
  </v-app>
</template>

<script setup>
import ChatComponent from './components/ChatComponent.vue'
import FormAdd from './components/FormAdd.vue'
</script>
