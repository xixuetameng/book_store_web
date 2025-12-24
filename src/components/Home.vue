<script setup>
import {computed, ref} from 'vue'
import CustomerRevise from './CustomerRevise.vue'
import OrderQuery from './OrderQuery.vue'
import BookOrder from './BookOrder.vue'
import {tabConfig} from "../utils/TabConfig.ts";

const currentPage = ref(tabConfig[0].name) // 默认显示 Page1
const currentComponent=computed(() => {
  return tabConfig.find(tab=>tab.name===currentPage.value)?.component
})
</script>

<template>
  <div>
    <div class="tab-bar">
      <button
          v-for="tab in tabConfig"
          :key="tab.name"
          @click="currentPage = tab.name"
      >
        {{ tab.label }}
      </button>
    </div>

    <component :is="currentComponent" />
  </div>
</template>


<style scoped>
.tab-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
