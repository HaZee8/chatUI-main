// export interface SendChatMessageByIdModel {
//     model: "deepseek-v4.1-flash:free",
//     messages: [
//     {
//       role: "user",
//       content: string
//     }
//   ]
// }


// export interface ChatMessage {
//   role: 'user' | 'assistant'
//   content: string
//   createdAt?: string
// }

// export interface SendChatMessageByIdModel {
//   model: 'deepseek-v4.1-flash:free'
//   messages: {
//     role: 'user' | 'assistant'
//     content: string
//   }[]
// }


export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  images?: string[]
  createdAt?: string
}

export type ApiMessageContent =
  | string
  | (
      | {
          type: 'text'
          text: string
        }
      | {
          type: 'image_url'
          image_url: {
            url: string
            detail?: 'auto' | 'low' | 'high'
          }
        }
    )[]

export interface SendChatMessageByIdModel {
  model: 'deepseek-v4.1-flash:free'
  messages: {
    role: 'user' | 'assistant'
    content: ApiMessageContent
  }[]
}
