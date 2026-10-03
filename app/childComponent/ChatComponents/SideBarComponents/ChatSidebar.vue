<template>
    <aside
        class="
        w-[247px]
        peer-checked:w-[72px]
        shrink-0
        h-screen
        border-r
        border-[#202329]
        bg-[#0d0f12]
        flex
        flex-col
        overflow-hidden
        transition-[width]
        duration-300
        ease-in-out
        "
    >

        <!-- TOP -->
        <div
        class="
            h-[66px]
            shrink-0
            px-5
            peer-checked:px-4
            flex
            items-center
            justify-between
            border-b
            border-[#202329]
        "
        >

        <!-- Logo -->
        <div class="flex items-center gap-2.5 min-w-0">

            <div
            class="
                w-6
                h-6
                shrink-0
                rounded-[5px]
                bg-gradient-to-br
                from-[#a855f7]
                to-[#06b6d4]
            "
            ></div>

            <span
            class="
                sidebar-text
                text-[15px]
                font-bold
                tracking-wide
                whitespace-nowrap
                peer-checked:hidden
            "
            >
            AURA
            </span>

        </div>

        <!-- New conversation -->
        <button
            class="
            w-7
            h-7
            shrink-0
            flex
            items-center
            justify-center
            text-[#8c929e]
            hover:text-white
            transition
            "
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[17px] h-[17px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 3.487a2.25 2.25 0 013.182 3.182L8.25 18.463 4 19.5l1.037-4.25L16.862 3.487z"
            />
            </svg>
        </button>

        </div>


        <!-- CONVERSATIONS -->
        <div class="px-3 pt-5">

        <!-- Title -->
        <div
            class="
            sidebar-text
            px-2
            mb-3
            text-[10px]
            uppercase
            tracking-wider
            text-[#626975]
            whitespace-nowrap
            peer-checked:hidden
            "
        >
            Conversations
        </div>


        <!-- ACTIVE -->
        <div
            class="
            h-[59px]
            px-3
            rounded-[7px]
            bg-[#181c22]
            border
            border-[#252a32]
            flex
            items-center
            gap-3
            cursor-pointer
            "
        >

            <svg
            class="w-[17px] h-[17px] text-[#a855f7] shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.4-5.7A8.38 8.38 0 013.5 11.5 8.5 8.5 0 0112 3a8.5 8.5 0 019 9z"
            />
            </svg>

            <div
            class="
                sidebar-text
                min-w-0
                peer-checked:hidden
            "
            >
            <p class="text-[12px] text-[#e5e7eb] truncate">
                Refactoring auth middleware
            </p>

            <p class="text-[10px] text-[#69707c] mt-1">
                10m ago
            </p>
            </div>

        </div>


        <!-- Conversation -->
        <div
            class="
            h-[54px]
            px-3
            flex
            items-center
            gap-3
            rounded-[7px]
            hover:bg-[#15181d]
            transition
            cursor-pointer
            "
        >

            <svg
            class="w-[17px] h-[17px] text-[#59616d] shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.4-5.7A8.38 8.38 0 013.5 11.5 8.5 8.5 0 0112 3a8.5 8.5 0 019 9z"
            />
            </svg>

            <div
            class="
                sidebar-text
                min-w-0
                peer-checked:hidden
            "
            >
            <p class="text-[12px] text-[#8e949e] truncate">
                Rust async performance bottle...
            </p>

            <p class="text-[10px] text-[#555c67] mt-1">
                2h ago
            </p>
            </div>

        </div>


        <!-- Conversation -->
        <div
            class="
            h-[54px]
            px-3
            flex
            items-center
            gap-3
            rounded-[7px]
            hover:bg-[#15181d]
            transition
            cursor-pointer
            "
        >

            <svg
            class="w-[17px] h-[17px] text-[#59616d] shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.4-5.7A8.38 8.38 0 013.5 11.5 8.5 8.5 0 0112 3a8.5 8.5 0 019 9z"
            />
            </svg>

            <div
            class="
                sidebar-text
                min-w-0
                peer-checked:hidden
            "
            >
            <p class="text-[12px] text-[#8e949e] truncate">
                Creative brief: tech-noir poster
            </p>

            <p class="text-[10px] text-[#555c67] mt-1">
                Yesterday
            </p>
            </div>

        </div>

        <!-- ActiveChats-->

        <ActiveChats></ActiveChats>

        </div>


        <!-- BOTTOM -->
        <div
            class="
                mt-auto
                h-[65px]
                shrink-0
                border-t
                border-[#202329]
                px-5
                flex
                items-center
                justify-between
            "
            >

            <!-- Avatar + Username -->
            <div class="flex items-center">
                
                <!-- Avatar -->
                <div
                class="
                    w-8
                    h-8
                    rounded-full
                    bg-gradient-to-br
                    from-[#312e81]
                    via-[#7c3aed]
                    to-[#0891b2]
                    flex
                    items-center
                    justify-center
                    shrink-0
                "
                >
                <span class="text-[11px] font-semibold">
                    A
                </span>
                </div>

                <!-- Username -->
                <h1 class="ml-3 text-sm font-medium text-white">
                {{ username }}
                </h1>

            </div>

            <!-- Collapse -->
            <label
                for="sidebar-toggle"
                class="
                w-7
                h-7
                rounded-md
                flex
                items-center
                justify-center
                cursor-pointer
                text-[#737a86]
                hover:text-white
                hover:bg-[#171a20]
                transition
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
                    d="M15 19l-7-7 7-7"
                />
                </svg>
            </label>

        </div>

    </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ActiveChats from './ActiveChats.vue';

const username = ref('')

onMounted(() => {
  username.value = localStorage.getItem('auth') || ''
})

</script>

<style>

</style>