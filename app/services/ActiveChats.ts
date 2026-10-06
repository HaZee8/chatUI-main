import type { ActiveChat } from "~/models/ActiveChats";

export async function GetActiveChats() {
    
    const chatsdata = await $fetch<ActiveChat[]>
    ('https://fc177929714abc7a.mokky.dev/Chats', {
        method: 'GET',

    },)
    return chatsdata

}