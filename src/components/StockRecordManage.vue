<script setup lang="ts">

import {onMounted, ref} from "vue";
import {getMissingBookRecord, MissingBookRecord} from "../api/missingBooks";

const missingBooks=ref<MissingBookRecord[]>([]);
const errorMessage = ref<string>('')

const loadMissingBooks = async () => {
  try {
    const res = await getMissingBookRecord()
    missingBooks.value = res;
  } catch (error) {
    errorMessage.value = '获取缺书记录失败'
    console.error(error)
  }
}
onMounted(loadMissingBooks)
</script>

<template>
  <div>
    <h2>缺书记录</h2>

    <!-- 错误信息显示 -->
    <div v-if="errorMessage" style="color: red;">
      {{ errorMessage }}
    </div>

    <!-- 显示缺书记录 -->
    <table border="1" cellpadding="8" v-if="missingBooks.length > 0">
      <thead>
      <tr>
        <th>书籍ID</th>
        <th>缺书数量</th>
        <th>更新时间</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(record, index) in missingBooks" :key="index">
        <td>{{ record.bookId }}</td>
        <td>{{ record.count }}</td>
        <td>{{ new Date(record.updateTime).toLocaleString() }}</td>
      </tr>
      </tbody>
    </table>

    <!-- 如果没有数据 -->
    <div v-else>
      <p>没有缺书记录</p>
    </div>
  </div>
</template>

<style scoped>

</style>