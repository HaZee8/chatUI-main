<template>

    <form @submit.prevent="submitAuth" class="mt-7 space-y-5">

      <!-- Пароль -->
      <div>
        <label

          class="mb-2 block text-xs text-[#A1A5AE]"
        >
          Логин
        </label>

        <input
          id="username"
          placeholder="Логин"
          v-model="authStore.data.username"
          class="h-10 w-full rounded-md border border-[#292D36]
                  bg-[#101216] px-4 text-sm text-white
                  placeholder-[#4B5563] outline-none
                  transition focus:border-[#8B5CF6]"
        />
      </div>

      <!-- Подтверждение -->
      <div>
        <label
          for="Password"
          class="mb-2 block text-xs text-[#A1A5AE]"
        >
            Пароль
        </label>
        
        <input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          v-model="authStore.data.password"
          class="h-10 w-full rounded-md border border-[#292D36]
                  bg-[#101216] px-4 text-sm text-white
                  placeholder-[#4B5563] outline-none
                  transition focus:border-[#8B5CF6]"
        />
      </div>

      <!-- Кнопка -->
      <button
        type="submit"
        class="h-10 w-full rounded-md
                bg-[#8B5CF6] text-sm font-semibold text-white
                shadow-[0_4px_14px_rgba(139,92,246,0.25)]
                transition hover:bg-[#7C3AED] cursor-pointer"
      >
        Continue to Aura
      </button>

    </form>
    
</template>

<script setup lang="ts">
import { UserAuth } from '../../services/Auth'
import { useAuthStore } from '../../stores/Auth'



const authStore = useAuthStore()

async function submitAuth() {
  try {
    const result = await UserAuth(authStore.data)
    localStorage.setItem('auth', (authStore.data.username))
    localStorage.setItem('token', (result.access_token))
    console.log(result)

    await navigateTo('/')
  } catch (error) {
    console.error('Ошибка авторизации:', error)
  }
}

</script>

<style>

</style>