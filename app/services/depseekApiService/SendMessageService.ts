// import type { SendChatMessageByIdModel } from "~/models/depseekApi/SendMessage"
// import type { DeepSeekResponse } from "~/models/depseekApi/DepseekResponse"

// export async function SendChatMessageById(data: SendChatMessageByIdModel) {

//   const token = 'thk_live_zoOYbnWaFiGMvz_XC5ye7JMgnjFbuECvddm9lRiOJvefX6x6JBum5QzO3YRdXn12'

//   const userdata = await $fetch<DeepSeekResponse>(
//     'https://tokenharbor.ai/v1/chat/completions',
//     {
//       method: 'POST',
//       body: data,
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   )

//   const message = userdata.choices[0]?.message

//   console.log(message)

//   return message
// }

import type { SendChatMessageByIdModel } from '~/models/depseekApi/SendMessage'
import type { DeepSeekResponse } from '~/models/depseekApi/DepseekResponse'

export async function SendChatMessageById(
  data: SendChatMessageByIdModel
) {
  const token = 'thk_live_zoOYbnWaFiGMvz_XC5ye7JMgnjFbuECvddm9lRiOJvefX6x6JBum5QzO3YRdXn12'

  const userdata = await $fetch<DeepSeekResponse>(
    'https://tokenharbor.ai/v1/chat/completions',
    {
      method: 'POST',
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  )

  const message = userdata.choices?.[0]?.message

  if (!message) {
    throw new Error('DeepSeek не вернул сообщение')
  }

  return message
}