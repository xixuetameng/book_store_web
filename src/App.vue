<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { getBookList } from './api/book'

const bookList = ref([])

onMounted(async () => {
  console.log('后端返回数据:')
  try {
    const res = await getBookList()
    console.log('后端返回数据:', res.data) // 打印到控制台
    bookList.value = res.data
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
  <table border="1">
    <thead>
    <tr>
      <th>书名</th>
      <th>ISBN</th>
      <th>作者</th>
      <th>出版社</th>
      <th>价格</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="book in bookList" :key="book.id">
      <td>{{ book.name }}</td>
      <td>{{ book.isbn }}</td>
      <td>{{ book.author }}</td>
      <td>{{ book.publisher }}</td>
      <td>{{ book.price }}</td>
    </tr>
    </tbody>
  </table>
</template>

