<template>
  <div class="h-screen flex items-center justify-center bg-gray-50">
    <div class="flex bg-white rounded-lg shadow-lg w-full max-w-6xl h-5/6">
      <!-- Coluna da imagem -->
      <div class="w-1/2 flex flex-col items-center justify-center bg-main h-full relative rounded-md">
        <div class="absolute inset-0 z-0 bg-paw-pattern rounded-lg"></div>
        <div class="relative z-10 flex flex-col justify-center items-center h-full relative overflow-hidden">
          <h1 class="text-white text-3xl font-bold relative top-[5.25rem] mx-[4rem] text-center tracking-wider" style="font-family: 'Inter', sans-serif;">
            Welcome to the Cat Adoption Panel
          </h1>
          <img src="../assets/images/Cat-image.png" alt="Cat Image" class="relative top-[8.25rem]" />
        </div>
      </div>
      <!-- Coluna do formulário de login -->
      <div class="w-1/2 p-16 flex items-center justify-center h-full">
        <div class="w-full">
          <div class="flex justify-center mb-4">
            <!-- <img src="/logo.png" alt="Cat Adoption Platform Logo" class="w-12 h-12"> -->
          </div>
          <h2 class="text-3xl font-bold text-center text-textPrimary mb-6">Login</h2>
          <form @submit.prevent="login" class="space-y-6">
            <div>
              <label for="username" class="block text-sm font-medium text-textPrimary">Username</label>
              <input
                id="username"
                v-model="email"
                type="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-stroke rounded-md placeholder-placeholder text-textPrimary focus:outline-none focus:ring-main focus:border-main sm:text-sm"
                placeholder="Enter the user name"
              />
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-textPrimary">Password</label>
              <input
                id="password"
                v-model="password"
                type="password"
                required
                class="appearance-none block w-full px-3 py-2 border border-stroke rounded-md placeholder-placeholder text-textPrimary focus:outline-none focus:ring-main focus:border-main sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                type="submit"
                class="w-full py-2 px-4 bg-main text-white font-medium rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
              >
                Login
              </button>
            </div>
          </form>
          <div v-if="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const login = async () => {
    const { data, error } = await useNuxtApp().$supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
  
    if (error) {
      alert(`Login failed: ${error.message}`)
    } else {
      alert('Login successful!')
      await router.push('/CatList')
    }
  }
  </script>

