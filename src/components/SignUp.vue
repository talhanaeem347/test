<script setup>
import { ref } from "vue";
import validaor from 'validator'

let username = ref("");
let email = ref("");
let password = ref("");
let cPassword = ref("");
let teacher = ref(false);
let student = ref(false);
let err = ref([]);
let selectOne = (checkbox )=> {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach((item) => item !== checkbox ? item.checked = false: "")
}

let checkErrors = ()=>{
  err.value = [];
  username.value.length > 3 && !username.value.includes(" ")  ? "" :err.value.push("invalid Username");
  validaor.isEmail(email.value) ?"" :err.value.push("wrong emil")
  validaor.isStrongPassword(password.value) ? "": err.value.push("password is not strong")
  password.value === cPassword.value ? "": err.value.push("Passwords not mach") 
  student.value  || teacher.value ? "": err.value.push("select you are teacher or student ") 
  return err._rawValue.length>0 ? false : true  
}
let signUp = ()=>{
  console.log(checkErrors());
}

// 8811693@Bt


</script>
<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-5 mx-auto">
      <div class="flex flex-col text-center w-full mb-2">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          Sign Up Page
        </h1>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label
                for="username"
                class="hover:cursor-pointer leading-7 text-lg text-gray-600"
                >User Name</label
              >
              <input
                type="text"
                id="username"
                name="username"
                v-model="username"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-2
                  focus:ring-indigo-200
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
                placeholder="User Name"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label
                for="email"
                class="hover:cursor-pointer leading-7 text-lg text-gray-600"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                v-model="email"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-2
                  focus:ring-indigo-200
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
                placeholder="someOne@example.com"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label
                for="password"
                class="hover:cursor-pointer leading-7 text-lg text-gray-600"
                >password</label
              >
              <input
                type="password"
                id="password"
                name="password"
                v-model="password"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-2
                  focus:ring-indigo-200
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
                placeholder="strong password"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label
                for="c-password"
                class="hover:cursor-pointer leading-7 text-lg text-gray-600"
                >Conform Password</label
              >
              <input
                type="password"
                id="c-password"
                name="c-password"
                v-model="cPassword"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-2
                  focus:ring-indigo-200
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
                placeholder="Conform Password"
              />
            </div>
          </div>
          <div class="px-2 w-full">
            <div class="relative">
              <input
                type="checkbox"
                name="teacher"
                id="teacher"
                v-model="teacher"
                @focus="selectOne(this)"
                class="
                  mx-2
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500 focus:bg-white focus:ring-indigo-200
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
              <label
                for="teacher"
                class="hover:cursor-pointer leading-7 text-lg text-gray-600"
                >I am a Teacher</label
              >
            </div>
          </div>
          <div class="px-2 w-full">
            <div class="relative">
              <input
                type="checkbox"
                name="student"
                id="student"
                v-model="student"
                @focus="selectOne(this)"
                class="
                  mx-2
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500 focus:bg-white focus:ring-indigo-200
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
              <label
                for="student"
                class="hover:cursor-pointer leading-7 text-lg text-gray-600"
                >I am a Student</label
              >
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              @click="signUp"
              class="
                w-full
                text-white
                bg-indigo-500
                border-0
                py-2
                px-8
                focus:outline-none
                hover:bg-indigo-600
                rounded
                text-lg
              "
            >
              Sign Up
            </button>
            <p class="p-2 text-lg">
              All ready have an account
              <a href="#" class="text-blue-500 underline">sign In ?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>