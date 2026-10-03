import type { UserAuthData } from "~/models/AuthData";

export async function UserAuth(data: UserAuthData) {
    
    const userdata = await $fetch<{
        token: string
    }>
    ('https://fc177929714abc7a.mokky.dev/auth', {
        method: 'POST',
        body: data

    },)
    console.log(userdata)
    return userdata

}