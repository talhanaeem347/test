<script setup>
import { LogInErrors } from "../assets/javaScropt/validate";
import { ref } from "vue";
let email = ref("");
let password = ref("");
let pin = ref("");
let admin = ref(false);
let errors = ref([]);
let isAdmin = () => (admin.value ? showBtn("pin") : hideBtn("pin"));

let signIn = () =>
  admin
    ? (errors.value = LogInErrors(email.value, password.value, pin.value))
    : (errors.value = LogInErrors(email.value, password.value));
</script>

<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full p-4 mt-8 rounded-md border mx-auto bg-indigo-200"
      >
        <h2
          class="text-gray-900 text-lg mb-1 font-medium title-font text-center"
        >
          Sign In form
        </h2>
        <p class="leading-relaxed mb-2 text-lg text-gray-600">
          Log in for details
        </p>

        <div class="relative mb-2">
          <label for="email" class="leading-7 text-lg text-gray-600"
            >Email</label
          >
          <input
            placeholder="someone@example.com"
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-lg text-gray-600"
            >Password</label
          >
          <input
            placeholder="Enter Password"
            v-model="password"
            type="password"
            id="lPassword"
            name="lPassword"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative m-2 mt-0">
          <input
            v-model="admin"
            @focus="isAdmin"
            type="checkbox"
            id="admin"
            name="admin"
            class="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <label for="admin" class="pl-2 leading-7 text-lg text-gray-600"
            >log in as Admin</label
          >
        </div>
        <div class="relative mb-4">
          <label for="pin" class="leading-7 text-lg text-gray-600 mx-2"
            >Admin Pin</label
          >
          <input
            placeholder="pin"
            v-model="pin"
            maxlength="4"
            type="password"
            id="pin"
            name="pin"
            class="hidden w-16 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          @click="signIn"
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Log In
        </button>
      </div>
    </div>
  </section>
</template>
