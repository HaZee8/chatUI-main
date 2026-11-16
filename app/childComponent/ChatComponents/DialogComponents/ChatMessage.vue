<template>
  <section class="min-h-0 min-w-0 overflow-y-auto overflow-x-hidden chat-messages-container">
    <div class="max-w-[900px] mx-auto px-8 py-7">

      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="mb-7"
        :class="msg.role === 'user' ? 'flex justify-end' : 'flex items-start'"
      >
        <div class="flex items-start gap-3" :class="msg.role === 'user' ? 'max-w-[580px]' : ''">

          <!-- Аватар: для user вторым по порядку, для assistant первым -->
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
            <p class="text-[12px] leading-[1.6] text-[#d7dae0]">
              {{ msg.content }}
            </p>

            <div class="text-right mt-3">
              <span class="text-[9px] text-[#626a76]">10:24 AM</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// import { GetChatMessageById } from '../../../services/GetChatMessageById';
// import { onMounted, ref } from 'vue'

// onMounted(async () => {
//     await GetChatMessages()
// })

// const messages = ref<any[]>([])

// async function GetChatMessages() {
//   try {
//     const result = await GetChatMessageById()
//     messages.value = result[0]?.ListMessage ?? []
//     console.log(result[0].ListMessage)

//   } catch (error) {
//     console.error('Ошибка запроса чата', error)
//   }
// }


import { ref, onMounted } from 'vue'

const messages = ref<any[]>([])

onMounted(() => {
  messages.value = JSON.parse(
    localStorage.getItem('messages') || '[]'
  )

  window.addEventListener('new-message', updateMessages)
})

function updateMessages() {
  messages.value = JSON.parse(
    localStorage.getItem('messages') || '[]'
  )
}

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