import type { User } from "~/models/RegistrationData";

export async function RegistrationUser(data: User) {
    
    const userdata = await $fetch('http://localhost:8001/auth/register', {

        method: 'POST',
        body: data

    },)

    return userdata

}