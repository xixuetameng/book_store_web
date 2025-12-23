import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCustomerStore = defineStore('user', () => {
    const isLogin = ref(false)  // 是否登录
    const userId = ref('')      // 登录用户 ID

    function login(id) {
        userId.value = id
        isLogin.value = true
    }

    function logout() {
        userId.value = ''
        isLogin.value = false
    }

    return { isLogin, userId, login, logout }
})
