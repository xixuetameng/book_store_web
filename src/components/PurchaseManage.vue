<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getPurchaseOrders, PurchaseOrder, updatePurchase} from "../api/purchase";

const purchaseOrders=ref<PurchaseOrder[]>([])
const orderId=ref<number|null>(null);
const arrivedStatus=ref<number>(0);

const loadPurchaseOrders=async ()=>
{
  try
  {
    const res=await getPurchaseOrders();
    if(res.success)
    {
      purchaseOrders.value=res.data.datas;
    }
    else
    {
      console.error(res.message);
      alert(res.message);
    }
  }
  catch(e)
  {
    console.error(e);
  }
}

const updateArrivedStatus=async ()=>
{
  if(!orderId.value)
  {
    alert("请输入采购单Id")
    return;
  }
  try
  {
    const res=await updatePurchase({id:orderId.value,arrived:arrivedStatus.value});
    alert(res.message);
    await loadPurchaseOrders();
  }
  catch(e)
  {
    console.error(e);
    alert(e.message);
  }
}
onMounted(loadPurchaseOrders)
</script>

<template>
  <div>
    <!-- 显示采购单列表 -->
    <h2>采购单列表</h2>
    <table border="1" cellpadding="8">
      <thead>
      <tr>
        <th>ID</th>
        <th>到达状态</th>
        <th>创建时间</th>
        <th>采购详情</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in purchaseOrders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.arrived ? '已到达' : '未到达' }}</td>
        <td>{{ order.createTime }}</td>
        <td>
          <ul>
            <li v-for="detail in order.details" :key="detail.purchaseId">
              书籍ID: {{ detail.bookId }}, 供应商ID: {{ detail.supplierId }}, 数量: {{ detail.count }}
            </li>
            <li v-if="order.details.length === 0">暂无详情</li>
          </ul>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- 输入框修改采购单的到达状态 -->
    <h3>修改采购单到达状态</h3>
    <label for="orderId">采购单ID:</label>
    <input v-model="orderId" type="number" id="orderId" placeholder="输入采购单ID" />
    <label for="arrivedStatus">是否到达:</label>
    <select v-model="arrivedStatus">
      <option :value="true">已到达</option>
      <option :value="false">未到达</option>
    </select>
    <button @click="updateArrivedStatus">更新状态</button>
  </div>

</template>

<style scoped>

</style>