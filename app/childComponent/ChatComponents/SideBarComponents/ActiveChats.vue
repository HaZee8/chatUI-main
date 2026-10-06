<template>
    <!-- Conversation -->
        <div
            v-for="chat in chatsdata"
            :key="chat.id"
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
                {{ chat.title }}
            </p>

            <p class="text-[10px] text-[#555c67] mt-1">
                1 week ago
            </p>
            </div>
            

        </div>
</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import {GetActiveChats} from '../../../services/ActiveChats'
import type {ActiveChat} from '../../../models/ActiveChats'

const chatsdata = ref<ActiveChat[]>([])

onMounted(async () => {
    await getChats()
})

async function getChats() {
    try{
        chatsdata.value = await GetActiveChats()
        console.log(chatsdata)
    }
    catch(error){

    }
}


</script>

<style>

</style>