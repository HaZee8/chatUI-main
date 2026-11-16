
<template>
  <section
    class="flex-1 overflow-y-auto px-7 py-6"
  >
    <div class="max-w-[930px] mx-auto space-y-5">

      <div
        v-for="(message, index) in messages"
        :key="index"
        class="flex"
        :class="message.role === 'user'
          ? 'justify-end'
          : 'justify-start'"
      >
        <div
          class="max-w-[75%] rounded-xl px-4 py-3"
          :class="message.role === 'user'
            ? 'bg-[#8b5cf6] text-white'
            : 'bg-[#171a21] text-[#d7dae0]'"
        >
          <p class="text-sm whitespace-pre-wrap break-words">
            {{ message.content }}
          </p>

          <p class="text-[10px] opacity-50 mt-2">
            {{ formatDate(message.createdAt) }}
          </p>
        </div>
      </div>

      <div
        v-if="isLoading"
        class="text-sm text-[#727a86]"
      >
        Aura печатает...
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { ChatMessage } from '~/models/depseekApi/SendMessage'

const messages = ref<ChatMessage[]>([])
const isLoading = ref(false)

function updateMessages() {
  const chatId = localStorage.getItem('currentChatId')

  if (!chatId) {
    messages.value = []
    return
  }

  messages.value = JSON.parse(
    localStorage.getItem(`messages_${chatId}`) || '[]'
  )
}

function formatDate(date?: string) {
  if (!date) return ''

  return new Date(date).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  updateMessages()

  window.addEventListener('new-message', updateMessages)
})

onUnmounted(() => {
  window.removeEventListener('new-message', updateMessages)
})
</script>


<style scoped>

.chat-messages-container::-webkit-scrollbar {
  width: 8px;
}

.chat-messages-container::-webkit-scrollbar-track {
  background: #08090b;
}

.chat-messages-container::-webkit-scrollbar-thumb {
  background: #2a2d35;
  border-radius: 10px;
  border: 2px solid #08090b;
}

.chat-messages-container::-webkit-scrollbar-thumb:hover {
  background: #8b5cf6;
}

/* Firefox */
.chat-messages-container {
  scrollbar-width: thin;
  scrollbar-color: #2a2d35 #08090b;
}

</style>