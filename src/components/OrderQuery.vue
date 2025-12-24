<script setup>
import { ref, onMounted } from 'vue'
import { useCustomerStore } from '../store/CustomerStore'
import { orderQuery} from "../api/orderQuery.js";


const customerStore = useCustomerStore()
const tableData = ref([])

const loadOrders = async () => {
  const payload = {
    Id: customerStore.userId,
  }

  try {
    const res = await orderQuery(payload)
    console.log('更新成功', res.data)
    tableData.value = res.data.data
    alert('信息更新成功')
  } catch (err) {
    console.error('更新失败', err)
    alert('更新失败')
  }
}

onMounted(() => {
  loadOrders()
})
</script>

<template>
  <el-table :data="tableData" border stripe>
    <el-table-column prop="orderId" label="订单号" />
    <el-table-column prop="customerId" label="客户Id" />
    <el-table-column prop="bookId" label="书籍Id"/>
    <el-table-column prop="address" label="收获地址" />
    <el-table-column prop="paid" label="是否支付"/>
    <el-table-column prop="shipped" label="是否发货"/>
    <el-table-column prop="count" label="数量" />
    <el-table-column prop="amount" label="订单总金额" />
    <el-table-column prop="createdTime" label="下单时间" />
  </el-table>
</template>

<style scoped>

</style>