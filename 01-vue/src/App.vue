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
//metodo - methods
const handleClick = (menssage) => {
  console.log(menssage);
};

//contador counter1 no es reactivo
let counter1 = 0;

const increment1 = () => {
  console.log("aumentar contador");
  counter1++;
  console.log(counter1);
};

import { ref } from "vue";
//counter ahora si es una variable reactiva
const counter = ref(0);

const increment = () => {
  // mutamos el valor a través de .value
  counter.value++;
};

const decrement = () => {
  counter.value--;
};

const reset = () => {
  counter.value = 0;
};
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
  <button v-on:click="handleClick('Texto 1')">Activame 1</button>
  <br />
  <br />
  <button @click="handleClick('Texto 2')">Activame 2</button>
  <br />
  <br />
  <button @click="handleClick('Texto left')">Activame left</button>
  <button @click.middle="handleClick('Texto middle')">Activame middle</button>
  <button @click.right.prevent="handleClick('Texto right')">
    Activame right
  </button>
  <br />
  <br />
  <!-- Variables reactivas, contador -->
  <button @click="increment">Aumentar</button>
  <br />
  <br />
  <button @click="decrement">Disminuir</button>
  <br />
  <br />
  <button @click="reset">Reset</button>
  <h2>{{ counter }}</h2>
</template>

<style>
h1 {
  color: aquamarine;
}
</style>
