<template>
  <div class="h-screen bg-gray-200 flex flex-wrap content-center">

    <div class="w-full max-w-sm mx-auto">

      <div v-if="error" class="flex w-full max-w-sm mx-auto mb-4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-center w-12 bg-red-500">
          <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
          </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
            <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
            <p class="text-sm text-gray-600 dark:text-gray-200">{{ error }}</p>
          </div>
        </div>
      </div>

      <div class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="px-6 py-4">
          <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>

          <h3 class="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

          <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

          <form>
            <div class="w-full mt-4">
              <input
                  v-model="login"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="email"
                  placeholder="Email Address" aria-label="Email Address">
            </div>

            <div class="w-full mt-4">
              <input
                  v-model="password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="password" placeholder="Password" aria-label="Password">
            </div>

            <div class="flex items-center justify-between mt-4">
              <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

              <button
                  @click="signIn"
                  class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="button">
                Login
              </button>
            </div>
          </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
          <span class="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

          <router-link to="/signup" class="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">Register</router-link>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from "../hooks/useAuth";

export default {
  name: "Signin",
  setup(){
    const router = useRouter()

    const{ login, password, signIn, user, error} = useAuth()

    watch(user,(newValue, oldValue) => {

      console.log(newValue, oldValue)
      if(newValue){
        router.push("/");
      }
    });

    return{
      login,
      password,
      signIn,
      user,
      error
    }
  }
};
</script>