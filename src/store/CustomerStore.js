import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCustomerStore = defineStore('user', () => {
    const isLogin = ref(false)  // 是否登录
    const userId = '2'     // 登录用户 ID

    return { isLogin, userId }
})
