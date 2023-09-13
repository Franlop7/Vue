<script setup>
const name = "Vue dinámico";
const styleColor = "color: blue";
const active = false;
const arrayFrutas2 = ["🍎", "🍌", "🍉", "🍓", "🍒"];
const arrayFrutas = [
  {
    id: 1,
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
  },
  {
    id: 2,
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
  },
  {
    id: 3,
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
  },
];
const objetoFruta = {
  id: 1,
  name: "Manzana",
  price: "$1.00",
  description: "Una manzana",
};
const arrayFrutas3 = [
  {
    id: 1,
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
    stock: 0,
  },
  {
    id: 2,
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
    stock: 10,
  },
  {
    id: 3,
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
    stock: 20,
  },
];
</script>

<template>
  <h1>Hola {{ name.toLocaleUpperCase() }}!</h1>
  <h2 v-bind:style="styleColor">soy azul</h2>
  <h2 v-if="active">v-if en acción</h2>
  <h2 v-else>v-else en acción</h2>

  <ul>
    <!-- se puede utilizar tanto el in como el of en vue es lo mismo, no como en Js que son diferentes. -->
    <!-- v-bind:key se puede usar como :key -->
    <li v-for="(fruta, index) in arrayFrutas2" v-bind:key="index">
      {{ fruta }}
    </li>
  </ul>
  <ul>
    <li v-for="fruta of arrayFrutas" :key="fruta.id">
      {{ fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
    </li>
  </ul>
  <ul>
    <li v-for="(value, propiedad, index) in objetoFruta" :key="index">
      {{ index }} - {{ propiedad }} : {{ value }}
    </li>
  </ul>
  <ul>
    <!-- no es buena solución, ya que sigue pintando el li aunque este vacío -->
    <!-- <li v-for="item in arrayFrutas3" :key="item.id">
      <span v-if="item.stock > 0"> {{ item.name }} - {{ item.price }} </span>
    </li> -->
    <template v-for="item in arrayFrutas3" :key="item.id">
      <li v-if="item.stock > 0">{{ item.name }} - {{ item.price }}</li>
    </template>
  </ul>
  <h1>Eventos</h1>
  <!-- v-on, se acorta a @ para escuchar eventos -->
  
</template>

<style>
h1 {
  color: aquamarine;
}
</style>
