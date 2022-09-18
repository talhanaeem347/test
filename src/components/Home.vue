<script setup>
import { ref } from "@vue/reactivity";
const todos = ref(null);
let active = ref(0);
const vMyDirective = {
  created: async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/");
     res = await res.json();
    todos.value = res;
  },
};

let count = () =>
  (active.value = document.querySelectorAll(
    `input[type=checkbox]:checked`
  ).length);
let selectAll = () =>
  document
    .querySelectorAll(`input[type=checkbox]`)
    .forEach((inp) => (inp.checked = true));
let unSelectAll = () =>
  document
    .querySelectorAll(`input[type=checkbox]:checked`)
    .forEach((inp) => (inp.checked = false));
let reload = () => window.location.reload();
</script >
<template>
  <div v-my-directive>
    <h1>
      {{ active }}
    </h1>
  </div>
  <button class="border rounded-full p-2 m-1" @click="count()">count</button>
  <button class="border rounded-full p-2 m-1" @click="selectAll()">
    Select
  </button>
  <button class="border rounded-full p-2 m-1" @click="unSelectAll()">
    unSelect
  </button>
  <button class="border rounded-full p-2 m-1" @click="reload()">
    Prev position
  </button>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <div v-if="todo.completed">
        <input type="checkbox" name="" :id="todo.id" checked /> {{ todo.title }}
      </div>
      <div v-else>
        <input type="checkbox" name="" :id="todo.id" /> {{ todo.title }}
      </div>
    </div>
  </div>
</template>
      

<style>
</style>