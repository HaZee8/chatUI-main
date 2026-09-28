<template>
    <div class="relative h-full flex-col flex items-center mt-[25%] overflow-hidden">
        <!-- Свечение позади картинки -->
        <div
            class="absolute
                    w-[600px] h-[600px]
                    bg-[radial-gradient(circle,_rgba(139,92,246,0.18)_0%,_transparent_70%)]
                    blur-3xl
                    z-0
                    bottom-[30%]"

        ></div>

        <!-- Картинка поверх свечения -->
        <div class="h-[45%] w-[35%] border rounded-xl overflow-hidden">
            <img
                src="../../assets/img/AuthImg.png"
                class="relative h-full w-full z-10 object-contain object-cover opacity-90 contrast-90 brightness-95"
            />
        </div>

        <div class="relative z-10 text-center max-w-[500px]">

            <h1 class="mt-8 text-3xl font-bold text-white leading-tight">
                The next evolution of<br />
                thought.
            </h1>

            <p class="mt-4 text-sm text-gray-400 leading-relaxed">
                A deep-learning synthesis engine built to augment
                your creative and technical capabilities.
            </p>

        </div>

    </div>

    <!-- 8B5CF6 -->
</template>

<script>
export default {

}
</script>

<style>

</style>