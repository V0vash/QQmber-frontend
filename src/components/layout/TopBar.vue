<template>
   <nav class="bg-white shadow dark:bg-gray-800">
        <div class="px-8 py-3 mx-auto">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                <div class="flex items-center justify-between">

                     <!-- Mobile menu button -->
                    <div class="flex lg:hidden">
                        <button 
                            type="button"
                            @click="isOpen = !isOpen"
                            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-10 h-10 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>

                    <div class="flex items-center">
                        
                        <router-link 
                            class="text-2xl font-bold mx-10 text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                            to="/"><img class="w-12" src="@/assets/QQ_logo.png">
                        </router-link>

                        <!-- Search input on desktop screen -->
                        <div class="hidden md:block">
                            <div class="relative">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>

                                <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
                            </div>
                        </div>
                    </div>

                   
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="items-center md:flex">
                    <div class="flex items-center py-2 -mx-1 md:mx-0">

                      <div class="">
                        <!-- NOTIFICATION BUTTON -->
                        <button
                            @click="showNotification = !showNotification"
                            class="mx-2 transition-colors duration-300 ease-in-out p-1 text-gray-600 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200 hover:text-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500 dark:hover:text-gray-200 focus:outline-none">
                          <svg class="w-7 h-7 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                          </svg>
                        </button>

                        <!-- Dropdown menu -->
                        <div v-if="showNotification"
                             class="absolute right-5 z-20 mt-6 overflow-hidden bg-white rounded-md shadow-lg w-80 dark:bg-gray-800">
                          <div class="py-2">
                            <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-700">
                              <img class="object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">
                              <p class="mx-2 text-sm text-gray-600 dark:text-white">
                                <span class="font-bold" href="#">Sara Salah</span> replied on the <span class="font-bold text-blue-500" href="#">Upload Image</span> artical . 2m
                              </p>
                            </a>
                            <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-700">
                              <img class="object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avatar">
                              <p class="mx-2 text-sm text-gray-600 dark:text-white">
                                <span class="font-bold" href="#">Slick Net</span> start following you . 45m
                              </p>
                            </a>
                            <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-700">
                              <img class="object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">
                              <p class="mx-2 text-sm text-gray-600 dark:text-white">
                                <span class="font-bold" href="#">Jane Doe</span> Like Your reply on <span class="font-bold text-blue-500" href="#">Test with TDD</span> artical . 1h
                              </p>
                            </a>
                            <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-gray-700">
                              <img class="object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80" alt="avatar">
                              <p class="mx-2 text-sm text-gray-600 dark:text-white">
                                <span class="font-bold" href="#">Abigail Bennett</span> start following you . 3h
                              </p>
                            </a>
                          </div>
                          <a href="#" class="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline">See all notifications</a>
                        </div>
                      </div>



                      <!-- THEME TOGGLE -->
                        <button  @click="toggleTheme"
                            aria-label="dark mode button"
                            class="mx-2 transition-colors duration-300 ease-in-out p-1 text-gray-600 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200 hover:text-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500 dark:hover:text-gray-200 focus:outline-none">
                            <svg v-if="currentTheme == 'light'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </button>

<!--                        <router-link -->
<!--                            class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto" -->
<!--                            to="/signin">Login</router-link>-->
                        <button
                            @click="signOut"
                            class="block w-1/2 px-3 py-2 mx-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto"
                            >LogOut</button>
                    </div>

                    <!-- Search input on mobile screen -->
                    <div class="mt-3 md:hidden">
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>

                            <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </nav>
</template>

<script>
import { ref } from 'vue'
import { useSidebar } from "@/hooks/useSidebar";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/hooks/useAuth";
export default {
  name: "TopBar",
  setup(){
      const { toggleTheme } = useTheme();
      const { currentTheme } = useTheme();
      const { isOpen } = useSidebar();
      const { signOut } = useAuth();

      const showNotification = ref(false)

      return{
          showNotification,
          currentTheme,
          toggleTheme,
          isOpen,
          signOut
      }
  }
};
</script>