<template>
    <div class="bg-[#08090C] relative  w-screen h-screen overflow-hidden flex items-center justify-center">

        <!-- Градиент-круг левый -->
        <div
            class="absolute -top-63 -left-[250px] w-[750px] h-[750px] rounded-full
                bg-[radial-gradient(circle,_#8B5CF6_0%,_transparent_70%)]
                opacity-35 blur-3xl"
        ></div>

        <!-- Градиент-круг правый -->
        <div
            class="absolute -bottom-63 -right-[250px] w-[750px] h-[750px] rounded-full
                bg-[radial-gradient(circle,_#06B6D4_0%,_transparent_70%)]
                opacity-35 blur-3xl"
        ></div>

        <AuthForm></AuthForm>

    </div>
        <!-- 8B5CF6 -->
</template>

<script>
import AuthForm from './AurhForm.vue'
export default {
  components: { AuthForm },

}
</script>

<style>

</style>