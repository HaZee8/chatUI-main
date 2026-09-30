<template>
    <footer
        class="
        shrink-0
        border-t
        border-[#202329]
        px-7
        py-6
        "
    >

        <div class="max-w-[930px] mx-auto">

        <div
            class="
            h-[53px]
            rounded-[10px]
            border
            border-[#242933]
            bg-[#0d1015]
            flex
            items-center
            px-4
            gap-3
            focus-within:border-[#343b48]
            transition
            "
        >

            <!-- Attachment -->
            <button
            class="
                text-[#727a86]
                hover:text-[#b5bac3]
                transition
                shrink-0
            "
            >
            <svg
                class="w-[18px] h-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.82-2.83l8.49-8.48"
                />
            </svg>
            </button>


            <!-- Input -->
            <input
            type="text"
            placeholder="Ask Aura to write, analyze, or debug code..."
            class="
                flex-1
                min-w-0
                bg-transparent
                outline-none
                text-[12px]
                text-[#d7dae0]
                placeholder:text-[#5f6671]
            "
            />


            <!-- Microphone -->
            <button
            class="
                text-[#68707c]
                hover:text-[#aeb4bd]
                transition
                shrink-0
            "
            >
            <svg
                class="w-[18px] h-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"
                />

                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 10v2a7 7 0 01-14 0v-2M12 19v3M8 22h8"
                />
            </svg>
            </button>


            <!-- Send -->
            <button
            class="
                w-[31px]
                h-[31px]
                rounded-[7px]
                bg-[#8b5cf6]
                hover:bg-[#996df7]
                flex
                items-center
                justify-center
                transition
                shrink-0
            "
            >
            <svg
                class="w-[17px] h-[17px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
                />
            </svg>
            </button>

        </div>

        </div>

    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>