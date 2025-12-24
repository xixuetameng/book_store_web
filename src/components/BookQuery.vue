<script setup lang="ts">

import {ref} from "vue";
import {BookInfo, queryBooks, QueryType} from "../api/bookQuery";

const keyword=ref('')
const queryType=ref(QueryType.Name)
const books=ref<BookInfo[]>([])

const queryTypes=
[
  { label: '按书名', value: QueryType.Name },
  { label: '按ISBN', value: QueryType.Isbn },
  { label: '按出版社', value: QueryType.Publisher },
  { label: '按作者', value: QueryType.Author },
  { label: '按关键字', value: QueryType.Keyword }
]

const searchBooks = async () => {
  if (!keyword.value) {
    alert('请输入搜索内容')
    return
  }
  try {
    const res = await queryBooks({
      context: keyword.value,
      queryType: queryType.value
    })
    if (res.data.success) {
      books.value = res.data.data.books
      alert(res.data.message)
    } else {
      books.value = []
      alert(res.data.message)
    }
  } catch (error) {
    console.error(error)
    alert('查询失败，请检查网络或后端接口')
  }
}

</script>

<template>
  <div class="book-query">
    <!-- 搜索栏 -->
    <div class="search-bar">
      <input v-model="keyword" placeholder="输入搜索内容" />
      <span v-for="type in queryTypes" :key="type.value">
        <label>
          <input type="radio" v-model="queryType" :value="type.value" />{{ type.label }}
        </label>
      </span>
      <button @click="searchBooks">搜索</button>
    </div>

    <!-- 书籍列表 -->
    <table v-if="books.length" border="1" cellspacing="0" cellpadding="5">
      <thead>
      <tr>
        <th>ID</th>
        <th>ISBN</th>
        <th>书名</th>
        <th>出版社</th>
        <th>作者</th>
        <th>价格</th>
        <th>关键字</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="book in books" :key="book.id">
        <td>{{ book.id }}</td>
        <td>{{ book.isbn }}</td>
        <td>{{ book.name }}</td>
        <td>{{ book.publisher }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.price }}</td>
        <td>{{ book.keyword }}</td>
      </tr>
      </tbody>
    </table>

    <div v-else>暂无数据</div>
  </div>
</template>

<style scoped>

</style>