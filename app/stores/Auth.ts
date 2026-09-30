import { defineStore } from "pinia";
import type { UserAuthData } from "../models/AuthData";

export const useAuthStore = defineStore('AuthStore', {
    state: (): {data: UserAuthData } => ({
        data: {
            username: '',
            password: ''
        }
    }),
    actions: {
        setUsername(username: string) {
            this.data.username = username
        },

        setPassword(password: string) {
            this.data.password = password
        }
    }
})