// export interface DeepSeekResponse {
//   choices: {
//     message: {
//       role: string
//       content: string
//     }
//   }[]
// }

export interface DeepSeekResponse {
  choices: {
    message: {
      role: 'assistant'
      content: string
    }
  }[]
}