<script setup>
import { ref } from 'vue'
// import { useUserStore } from './store/userStore'
// import { updateCustomer } from './api/customer'

//const userStore = useUserStore()

// 四个输入框对应的状态
const nickname = ref('')
const password = ref('')
const name = ref('')
const address = ref('')

// // 点击确认按钮
// const submit = async () => {
//   if (!userStore.userId) {
//     console.error('用户ID不存在')
//     return
//   }
//
//   const payload = {
//     id: userStore.userId,
//     nickname: nickname.value,
//     password: password.value,
//     name: name.value,
//     address: address.value
//   }
//
//   try {
//     const res = await updateCustomer(payload)
//     console.log('更新成功', res.data)
//     alert('信息更新成功')
//   } catch (err) {
//     console.error('更新失败', err)
//     alert('更新失败')
//   }
// }
</script>


<template>
    <div>
      这里是信息页面
    </div>
<!--  <div class="customer-edit">-->
<!--    <h2>修改用户信息</h2>-->

<!--    <div>-->
<!--      <label>昵称：</label>-->
<!--      <input v-model="nickname" />-->
<!--    </div>-->

<!--    <div>-->
<!--      <label>密码：</label>-->
<!--      <input type="password" v-model="password" />-->
<!--    </div>-->

<!--    <div>-->
<!--      <label>姓名：</label>-->
<!--      <input v-model="name" />-->
<!--    </div>-->

<!--    <div>-->
<!--      <label>地址：</label>-->
<!--      <input v-model="address" />-->
<!--    </div>-->

<!--    <button @click="submit">确认修改</button>-->
<!--  </div>-->
</template>


<style scoped>

</style>