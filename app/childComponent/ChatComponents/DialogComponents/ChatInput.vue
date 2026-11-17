
<template>
  <footer class="shrink-0 border-t border-[#202329] px-7 py-6">
    <div class="max-w-[930px] mx-auto">

      <!-- Предпросмотр изображений -->
      <div
        v-if="selectedImages.length"
        class="flex flex-wrap gap-3 mb-3"
      >
        <div
          v-for="(image, index) in selectedImages"
          :key="index"
          class="relative w-16 h-16"
        >
          <img
            :src="image.dataUrl"
            :alt="image.name"
            class="w-full h-full object-cover rounded-lg border border-[#343b48]"
          />

          <button
            type="button"
            @click="removeImage(index)"
            class="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs"
          >
            ×
          </button>
        </div>
      </div>

      <div
        class="h-[53px] rounded-[10px] border border-[#242933] bg-[#0d1015] flex items-center px-4 gap-3 focus-within:border-[#343b48] transition"
      >

        <!-- Прикрепление изображения -->
        <button
          type="button"
          @click="openFilePicker"
          class="text-[#727a86] hover:text-[#b5bac3] transition shrink-0"
          title="Прикрепить изображение"
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

        <input
          ref="fileInput"
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          multiple
          class="hidden"
          @change="handleFileSelect"
        />

        <!-- Ввод сообщения -->
        <input
          v-model="MessageOfUserInput"
          type="text"
          placeholder="Ask Aura to write, analyze, or debug code..."
          class="flex-1 min-w-0 bg-transparent outline-none text-[12px] text-[#d7dae0] placeholder:text-[#5f6671]"
          @keydown.enter.prevent="SendChatMessageByIdTest"
        />

        <!-- Microphone -->
        <button
          type="button"
          class="text-[#68707c] hover:text-[#aeb4bd] transition shrink-0"
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
          type="button"
          @click="SendChatMessageByIdTest"
          :disabled="isLoading"
          class="w-[31px] h-[31px] rounded-[7px] bg-[#8b5cf6] hover:bg-[#996df7] disabled:opacity-50 flex items-center justify-center transition shrink-0"
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

<script setup lang="ts">
import { ref } from 'vue'

import type { ChatMessage } from '~/models/depseekApi/SendMessage'
import { SendChatMessageById } from '~/services/depseekApiService/SendMessageService'

interface SelectedImage {
  name: string
  dataUrl: string
}

const MessageOfUserInput = ref('')
const isLoading = ref(false)

const selectedImages = ref<SelectedImage[]>([])
const fileInput = ref<HTMLInputElement | null>(null)

// Открываем выбор файлов
function openFilePicker() {
  fileInput.value?.click()
}

// Конвертируем изображение в Base64
function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => resolve(reader.result as string)
    reader.onerror = () => reject(new Error('Не удалось прочитать изображение'))

    reader.readAsDataURL(file)
  })
}

// Обрабатываем выбранные изображения
async function handleFileSelect(event: Event) {
  const target = event.target as HTMLInputElement
  const files = Array.from(target.files || [])

  for (const file of files) {
    if (!file.type.startsWith('image/')) continue

    // Ограничение 2 МБ на одно изображение
    if (file.size > 2 * 1024 * 1024) {
      console.warn(`${file.name}: размер изображения больше 2 МБ`)
      continue
    }

    try {
      const dataUrl = await readFile(file)

      selectedImages.value.push({
        name: file.name,
        dataUrl
      })
    } catch (error) {
      console.error(error)
    }
  }

  // Позволяет повторно выбрать тот же файл
  target.value = ''
}

// Удаляем изображение из предпросмотра
function removeImage(index: number) {
  selectedImages.value.splice(index, 1)
}

// Получаем ID текущего чата
function getChatId(): string {
  let chatId = localStorage.getItem('currentChatId')

  if (!chatId) {
    chatId = crypto.randomUUID()
    localStorage.setItem('currentChatId', chatId)
  }

  return chatId
}

// Получаем историю
function getMessages(chatId: string): ChatMessage[] {
  return JSON.parse(
    localStorage.getItem(`messages_${chatId}`) || '[]'
  )
}

// Сохраняем историю
function saveMessages(chatId: string, messages: ChatMessage[]) {
  localStorage.setItem(
    `messages_${chatId}`,
    JSON.stringify(messages)
  )

  window.dispatchEvent(new Event('new-message'))
}

// Отправка сообщения
async function SendChatMessageByIdTest() {
  const text = MessageOfUserInput.value.trim()

  if ((!text && !selectedImages.value.length) || isLoading.value) {
    return
  }

  const chatId = getChatId()
  const messages = getMessages(chatId)

  const images = selectedImages.value.map(image => image.dataUrl)

  // Добавляем сообщение пользователя
  messages.push({
    role: 'user',
    content: text,
    images,
    createdAt: new Date().toISOString()
  })

  // Сохраняем сразу, чтобы сообщение появилось в чате
  saveMessages(chatId, messages)

  MessageOfUserInput.value = ''
  selectedImages.value = []
  isLoading.value = true

  try {
    // Формируем историю для DeepSeek
    const apiMessages = messages.map(message => {
      if (message.role === 'assistant' || !message.images?.length) {
        return {
          role: message.role,
          content: message.content
        }
      }

      return {
        role: message.role,
        content: [
          {
            type: 'text' as const,
            text: message.content || 'Проанализируй это изображение.'
          },
          ...message.images.map(image => ({
            type: 'image_url' as const,
            image_url: {
              url: image,
              detail: 'auto' as const
            }
          }))
        ]
      }
    })

    const resultDeps = await SendChatMessageById({
      model: 'deepseek-v4.1-flash:free',
      messages: apiMessages
    })

    // Добавляем ответ AI
    messages.push({
      role: 'assistant',
      content: resultDeps.content,
      createdAt: new Date().toISOString()
    })

    saveMessages(chatId, messages)

  } catch (error) {
    console.error('Ошибка отправки сообщения:', error)
  } finally {
    isLoading.value = false
  }
}
</script>
