<script setup>
import { ref } from 'vue'
import { useCustomerStore } from '../store/CustomerStore'
import { bookOrder } from '../api/bookOrder.js'
import {getUser} from "../utils/auth.ts";

// const customerStore = useCustomerStore()

const bookId = ref('')
const count = ref('')

// 点击确认按钮
const order = async () => {
  if (!getUser().id) {
    console.error('用户ID不存在')
    return
  }

  const payload = {
    CustomerId: getUser().id,
    Count: count.value,
    BookId: bookId.value,
    Amount: 0
  }

  try {
    const res = await bookOrder(payload)
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
    <h2>书籍订购</h2>

    <div>
      <label>书籍id：</label>
      <input v-model="bookId" />
    </div>

    <div>
      <label>订购数量：</label>
      <input v-model="count" />
    </div>

    <button @click="order">确认订购</button>
  </div>
</template>

<style scoped>

</style>