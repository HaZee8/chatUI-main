// import type { SendMessageResponseAndGetMessageRequest } from "~/models/SendMessageResponseAndGetMessageRequest";

// export async function SendMessageResponseAndGetMessageRequestService(data: SendMessageResponseAndGetMessageRequest) {
    
//     const userdata = await $fetch<{
//         textAi: string,
//         createdAt: string
//     }>
//     ('https://fc177929714abc7a.mokky.dev/SendMessageResponseAndGetMe', {
//         method: 'POST',
//         body: data

//     },)
//     console.log(userdata)
//     return userdata

// }


import type {
  SendMessageResponseAndGetMessageRequest
} from '~/models/SendMessageResponseAndGetMessageRequest'

interface MessageResponse {
  textAi: string
  createdAt: string
}

export async function SendMessageResponseAndGetMessageRequestService(
  data: SendMessageResponseAndGetMessageRequest
) {
  const response = await $fetch<MessageResponse[]>(
    'https://fc177929714abc7a.mokky.dev/SendMessageResponseAndGetMe',
    {
      method: 'GET',
      query: {
        userid: data.userid,
        chatid: data.chatid,
        text: data.text
      }
    }
  )

  console.log('Ответ Mokky:', response)

  return response[0]
}
