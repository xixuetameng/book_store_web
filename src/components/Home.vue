<script setup>
import { ref } from 'vue'
import CustomerRevise from './CustomerRevise.vue'
import BookQuery from './BookQuery.vue'
import BookOrder from './BookOrder.vue'

const currentPage = ref('CustomerRevise') // 默认显示 Page1
</script>

<template>
  <div>
    <!-- 顶部标签栏 -->
    <div class="tab-bar">
      <button @click="currentPage='CustomerRevise'">用户信息修改</button>
      <button @click="currentPage='BookQuery'">书籍查询</button>
      <button @click="currentPage='BookOrder'">书籍订购</button>
    </div>

    <!-- 标签内容显示 -->
    <component :is="currentPage === 'CustomerRevise' ? CustomerRevise : currentPage === 'BookQuery' ? BookQuery : BookOrder" />
  </div>
</template>

<style scoped>
.tab-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
