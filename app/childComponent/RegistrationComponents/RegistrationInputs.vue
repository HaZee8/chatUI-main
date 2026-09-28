<template>
    <div class=" relative mb-3">
    <label for="required-email" class="text-[#9CA3AF] block mb-2">
        Логин
    </label>
    <input v-model="UserFormData.username" type="text" id="required-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-[#222530] w-full py-3 px-6 bg-[#101216] text-white placeholder-[#4B5563] shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Логин"/>
    </div>
    
    <div class=" relative mb-3">
    <label for="required-email" class="text-[#9CA3AF] block mb-2">
        Почта
    </label>
    <input v-model="UserFormData.email" type="text" id="required-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-[#222530] w-full py-3 px-6 bg-[#101216] text-white placeholder-[#4B5563] shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="email"/>
    </div>

    <div class=" relative mb-3">
    <label for="required-email" class="text-[#9CA3AF] block mb-2">
        Пароль
    </label>
    <input v-model="UserFormData.password" type="text" id="required-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-[#222530] w-full py-3 px-6 bg-[#101216] text-white placeholder-[#4B5563] shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="пароль"/>
    </div>
    <div class=" relative mb-3">
    <label for="required-email" class="text-[#9CA3AF] block mb-2">
        Подтверждение пароля
    </label>
    <input v-model="UserFormData.confirmPassword" type="text" id="required-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-[#222530] w-full py-3 px-6 bg-[#101216] text-white placeholder-[#4B5563] shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="повторите пароль"/>
    </div>
</template>

<script lang="ts">
import type {User} from '../../models/RegistrationData'

export default {
  data() {
    return {
      UserFormData: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }as User,
    };
  },
  watch: {
    UserFormData: {
      handler(newVal) {
        this.$emit('update:UserFormData', newVal);
      },
      deep: true,
    },
  },
};

</script>

<style>

</style>