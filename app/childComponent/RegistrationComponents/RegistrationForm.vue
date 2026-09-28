<template>
    <div class=" flex flex-col w-full max-w-md px-4 py-8 rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
    <div class="self-center mb-6 text-8xl font-light text-gray-600 sm:text-4xl dark:text-[#F3F4F6]">
        Регистрация
    </div>
    <div class="mt-8">


        <form @submit.prevent="SendPOST()" action="#" autoComplete="off">
            <RegistrationInputs @update:UserFormData="onFormDataUpdate"></RegistrationInputs>
                    <div class="flex w-full mt-6">
                        <button type="submit" class="py-3 px-4 cursor-pointer  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Зарегистрироваться
                        </button>
                    </div>
        </form>


            </div>
            <div class="flex items-center justify-center mt-3">
                <NuxtLink to="/Auth" target="_blank" class="inline-flex items-center text-sm font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                    <span class="ml-2">
                        Уже есть аккаунт ?
                    </span>
                </NuxtLink>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RegistrationInputs from './RegistrationInputs.vue';
import { RegistrationUser } from '../../services/Registration'

export default defineComponent({
  components: {
    RegistrationInputs,
  },
  data(){
    return{
        UserFormData: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
      },
    }
  },
  methods:{
    onFormDataUpdate(data: { username: string; email: string; password: string; confirmPassword: string }) {
      this.UserFormData = data;
      console.log('текущие данные', this.UserFormData);
    },
    async SendPOST(){
        try{
            const response = await RegistrationUser(this.UserFormData)
            console.log("Успешно:", response);
        }
        catch (error){
            console.error("Ошибка:", error);
        }
    }
  }
})

</script>

<style>

</style>