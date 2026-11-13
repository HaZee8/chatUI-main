import type { GetChatMessageById } from "~/models/GetChatMessageByID";

export async function GetChatMessageById() {
    
    const chatListdata = await $fetch<GetChatMessageById[]>
    ('https://fc177929714abc7a.mokky.dev/getMessageByChatId', {
        method: 'GET',

    },)
    console.log(chatListdata)
    return chatListdata

}