<template>
    <header
        class="
        h-[66px]
        shrink-0
        border-b
        border-[#202329]
        flex
        items-center
        justify-between
        px-7
        "
    >

        <!-- Title -->
        <div class="flex items-center gap-2.5">

        <span
            class="
            w-2
            h-2
            rounded-full
            bg-[#06b6d4]
            shadow-[0_0_8px_#06b6d4]
            "
        ></span>

        <h1 class="text-[13px] font-semibold text-[#e5e7eb]">
            Refactoring auth middleware
        </h1>

        </div>


        <!-- Engine -->
        <div
        class="
            h-[28px]
            px-2.5
            rounded-[6px]
            border
            border-[#252b34]
            bg-[#0e1116]
            flex
            items-center
            gap-2
        "
        >

        <svg
            class="w-3.5 h-3.5 text-[#06b6d4]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
            />

            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.5 12l1.7 1.7 3.8-4"
            />
        </svg>

        <span class="text-[10px] text-[#8f96a1]">
            AURA Engine v4
        </span>

        </div>

    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>