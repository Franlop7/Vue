<script setup>
const name = "Vue dinámico";
const styleColor = "color: blue";
const active = false;
const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
</script>

<template>
  <h1>Hola {{ name.toLocaleUpperCase() }}!</h1>
  <h2 v-bind:style="styleColor">soy azul</h2>
  <h2 v-if="active">v-if en acción</h2>
  <h2 v-else>v-else en acción</h2>

  <ul>
    <li v-for="(fruta, index) in arrayFrutas" v-bind:key="index">
      {{ fruta }}
    </li>
  </ul>
</template>

<style>
h1 {
  color: aquamarine;
}
</style>
