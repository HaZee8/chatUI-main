<template>
        <div class="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden ">
        <div class="h-32 bg-[#08090C] h-full flex items-center justify-center">

            <!-- Градиент-круг -->
            <div
                class="absolute -top-63 -left-[250px] w-[750px] h-[750px] rounded-full
                    bg-[radial-gradient(circle,_#8B5CF6_0%,_transparent_70%)]
                    opacity-35 blur-3xl"
            ></div>

            <RegistrationForm></RegistrationForm>

        </div>
        <div class="h-32 bg-[#101216] h-full">

            <RegistrationImgAndText></RegistrationImgAndText>

            <!-- возможно градиент -->

        </div>
    </div>
  
</template>

<script lang="ts">
import RegistrationImgAndText from '../childComponent/RegistrationComponents/RegistrationImgAndText.vue';
import RegistrationForm from '../childComponent/RegistrationComponents/RegistrationForm.vue'
export default {
    components: { RegistrationForm, RegistrationImgAndText },

}
</script>

<style>

</style>