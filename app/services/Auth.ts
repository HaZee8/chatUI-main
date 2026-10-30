import type { UserAuthData } from "~/models/AuthData";

export async function UserAuth(data: UserAuthData) {
    
    const userdata = await $fetch<{
        token: string
    }>
    ('http://localhost:8001/auth/login', {
        method: 'POST',
        body: data

    },)
    console.log(userdata)
    return userdata

}