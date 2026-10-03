import type { ActiveChats } from "~/models/ActiveChats";

export async function GetActiveChats(data: ActiveChats) {
    
    const chatsdata = await $fetch<ActiveChats[]>
    ('https://fc177929714abc7a.mokky.dev/Chats', {
        method: 'GET',

    },)
    console.log(chatsdata)
    return chatsdata

}