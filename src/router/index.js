import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../components/Home.vue'
import Administrator from '../views/Administrator.vue'

const routes = [
    { path: '/', redirect: '/Login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/administrator',component: Administrator}// 登录后显示主页
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// // 全局路由守卫，防止未登录访问主页
// import { useUserStore } from './store/CustomerStore'
// router.beforeEach((to, from, next) => {
//     const store = useUserStore()
//     if (to.path !== '/login' && !store.isLogin) {
//         next('/login')
//     } else if (to.path === '/login' && store.isLogin) {
//         next('/home')
//     } else {
//         next()
//     }
// })

export default router
