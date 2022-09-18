<script setup></script>
<template>

  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-2 mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Sign In
        </h2>
        <p class="leading-relaxed mb-2 text-gray-600">Log in for details</p>

        <div class="relative mb-2">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-sm text-gray-600"
            >Name</label
          >
          <input
            type="password"
            id="lPassword"
            name="lPassword"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative m-2 mt-0">
          <input
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
          <label for="pin" class="leading-7 text-sm text-gray-600">Name</label>
          <input
            type="pin"
            id="pin"
            name="pin"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <button
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Button
        </button>
      </div>
    </div>
  </section>
</template>
