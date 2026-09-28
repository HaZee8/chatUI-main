<script setup lang="ts">
import AuthInputs from './AuthInputs.vue';

</script>

<template>
  <div
    class="w-full max-w-[420px] rounded-2xl border border-[#242730]
           bg-[#17191f] px-9 py-9 shadow-xl"
  >
    <!-- Логотип -->
    <div class="flex flex-col items-center">
      <div
        class="h-9 w-9 rounded-md
               bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4]"
      ></div>

      <h1 class="mt-4 text-xl font-semibold text-[#F3F4F6]">
        AURA
      </h1>

      <p class="mt-1 text-xs text-[#8B909C]">
        Sign in to your development interface
      </p>
    </div>

    <AuthInputs></AuthInputs>

    <!-- Нижняя ссылка -->
    <div class="mt-6 text-center text-xs text-[#8B909C]">
      Don't have an account?

    <NuxtLink
        to="/registration"
        class="ml-1 text-[#A855F7] hover:text-[#C084FC]"
    >
        Create one
    </NuxtLink>
    </div>
  </div>
</template>