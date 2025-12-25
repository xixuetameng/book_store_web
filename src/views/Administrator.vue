<script setup>
import { ref } from 'vue'
import BookManage from '../components/BookManage.vue'
import CustomerManage from '../components/CustomerManage.vue'
import StockRecordManage from '../components/StockRecordManage.vue'

const currentPage = ref('BookManage') // 默认显示 Page1
</script>

<template>
  <div>
    <!-- 顶部标签栏 -->
    <div class="tab-bar">
      <button @click="currentPage='BookManage'">书籍库存管理</button>
      <button @click="currentPage='CustomerManage'">客户信息管理</button>
      <button @click="currentPage='StockRecordManage'">缺书记录管理</button>
    </div>

    <!-- 标签内容显示 -->
    <component :is="currentPage === 'BookManage' ? BookManage : currentPage === 'CustomerManage' ? CustomerManage : StockRecordManage" />
  </div>
</template>

<style scoped>
.tab-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
