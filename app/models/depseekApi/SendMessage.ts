// export interface SendChatMessageByIdModel {
//     model: "deepseek-v4.1-flash:free",
//     messages: [
//     {
//       role: "user",
//       content: string
//     }
//   ]
// }


export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  createdAt?: string
}

export interface SendChatMessageByIdModel {
  model: 'deepseek-v4.1-flash:free'
  messages: {
    role: 'user' | 'assistant'
    content: string
  }[]
}