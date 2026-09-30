import type { UserAuthData } from "~/models/AuthData";

export async function RegistrationUser(data: UserAuthData) {
    
    const userdata = await $fetch('https://fc177929714abc7a.mokky.dev/users', {

        method: 'POST',
        body: data

    },)
    console.log(userdata)
    return userdata

}