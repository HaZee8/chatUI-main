import type { User } from "~/models/RegistrationData";

export async function RegistrationUser(data: User) {
    
    const userdata = await $fetch('https://fc177929714abc7a.mokky.dev/users', {

        method: 'POST',
        body: data

    },)

    return userdata

}