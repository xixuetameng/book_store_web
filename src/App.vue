<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { getBookList } from './api/book'

const bookList = ref([])


</script>

<template>
  <router-view></router-view>
</template>

