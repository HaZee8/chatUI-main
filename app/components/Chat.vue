<template>
    <div class="min-h-screen bg-[#08090b] text-white flex overflow-hidden">
    
        <!-- Toggle sidebar -->
        <input
        id="sidebar-toggle"
        type="checkbox"
        class="peer hidden"
        />

        <!-- Sidebar -->
        <ChatSidebar />

        <!-- Main -->
        <main class="flex-1 min-w-0 flex flex-col bg-[#08090b]">
        <ChatHeader />

        <ChatMessages />

        <ChatInput />
        </main>

    </div>
</template>

<script setup>
import ChatSidebar from '../childComponent/ChatComponents/SideBarComponents/ChatSidebar.vue'
import ChatHeader from '../childComponent/ChatComponents/SideBarComponents/ChatHeader.vue'
import ChatMessages from '../childComponent/ChatComponents/DialogComponents/ChatMessage.vue'
import ChatInput from '../childComponent/ChatComponents/DialogComponents/ChatInput.vue'
</script>

<style>

</style>