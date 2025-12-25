<script setup>
import { ref } from 'vue'
import { useCustomerStore } from '../store/CustomerStore'
import { updateCustomer } from '../api/customerRevise.js'
import {getUser} from "../utils/auth.ts";

// const customerStore = useCustomerStore()

const password = ref('')
const name = ref('')
const address = ref('')

// 点击确认按钮
const submit = async () => {
  if (!getUser().id) {
    console.error('用户ID不存在')
    return
  }

  const payload = {
    id: getUser().id,
    password: password.value,
    name: name.value,
    address: address.value
  }

  try {
    const res = await updateCustomer(payload)
    console.log('更新成功', res.data)
    alert('信息更新成功')
  } catch (err) {
    console.error('更新失败', err)
    alert('更新失败')
  }
}
</script>


<template>

  <div class="customer-edit">
    <h2>修改用户信息</h2>

    <div>
      <label>密码：</label>
      <input type="password" v-model="password" />
    </div>

    <div>
      <label>姓名：</label>
      <input v-model="name" />
    </div>

    <div>
      <label>地址：</label>
      <input v-model="address" />
    </div>

    <button @click="submit">确认修改</button>
  </div>
</template>


<style scoped>

</style>