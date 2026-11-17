
<template>
  <section class="min-h-0 min-w-0 overflow-y-auto overflow-x-hidden chat-messages-container">
    <div class="max-w-[900px] mx-auto px-8 py-7">

      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="mb-7"
        :class="msg.role === 'user' ? 'flex justify-end' : 'flex items-start'"
      >
        <div
          class="flex items-start gap-3"
          :class="msg.role === 'user' ? 'max-w-[580px]' : ''"
        >

          <!-- Аватар -->
          <div
            class="w-8 h-8 rounded-full shrink-0 flex items-center justify-center"
            :class="[
              msg.role === 'user'
                ? 'order-2 bg-gradient-to-br from-[#d6b98c] to-[#6b5540]'
                : 'bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4]'
            ]"
          >
            <span class="text-[10px] font-semibold">A</span>
          </div>

          <!-- Сообщение -->
          <div
            class="px-4 py-4 border"
            :class="[
              msg.role === 'user'
                ? 'order-1 bg-[#181b21] border-[#20242c] rounded-[15px] rounded-tr-[5px]'
                : 'max-w-[600px] bg-[#111317] border-[#171a20] rounded-[14px] rounded-tl-[5px]'
            ]"
          >

            <!-- Текст -->
            <p
              v-if="msg.content"
              class="text-[12px] leading-[1.6] text-[#d7dae0] whitespace-pre-wrap break-words"
            >
              {{ msg.content }}
            </p>

            <!-- Изображения -->
            <div
              v-if="msg.images?.length"
              class="flex flex-wrap gap-2"
              :class="msg.content ? 'mt-3' : ''"
            >
              <img
                v-for="(image, imageIndex) in msg.images"
                :key="imageIndex"
                :src="image"
                alt="Прикреплённое изображение"
                class="max-w-full max-h-[280px] object-contain rounded-lg border border-[#343b48]"
              />
            </div>

            <!-- Время -->
            <div class="text-right mt-3">
              <span class="text-[9px] text-[#626a76]">
                {{ formatDate(msg.createdAt) }}
              </span>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { ChatMessage } from '~/models/depseekApi/SendMessage'

const messages = ref<ChatMessage[]>([])

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

.chat-messages-container {
  scrollbar-width: thin;
  scrollbar-color: #2a2d35 #08090b;
}
</style>
