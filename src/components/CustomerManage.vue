<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Customer, getAllCustomers, UpdateCustomer} from "../api/customer";

const customers=ref<Customer[]>([]);
const editForm=ref<Customer>({
  id:0,
  nickName:"",
  password:"",
  name:"",
  address:"",
  balance:0,
  credit:1,
  email:"",
  phone:"",
});
const getCustomers = async () =>
{
  try
  {
    const res=await getAllCustomers();
    console.log(res)
    customers.value = res.data;
  }
  catch(e)
  {
    console.error(e);
    alert('查询失败，请检查网络或后端接口')
  }
}
const updateCustomer =async () =>
{
  if(editForm.value.id==0)
  {
    alert('请输入顾客 ID')
    return
  }
  try
  {
    const res=await UpdateCustomer(editForm.value);
    if(!res.data.success)
    {
      console.log(res.data.message);
      alert(res.data.message);
    }
    await getCustomers();
  }
  catch(e)
  {
    console.error(e);
    alert(e.message);
  }
}

onMounted(getCustomers);
</script>

<template>
  <div class="customer-manage">
    <h2>顾客管理</h2>

    <!-- 顾客列表 -->
    <table border="1" cellpadding="8">
      <thead>
      <tr>
        <th>ID</th>
        <th>昵称</th>
        <th>姓名</th>
        <th>余额</th>
        <th>信用</th>
        <th>Email</th>
        <th>电话</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="c in customers" :key="c.id">
        <td>{{ c.id }}</td>
        <td>{{ c.nickName }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.balance }}</td>
        <td>{{ c.credit }}</td>
        <td>{{ c.email }}</td>
        <td>{{ c.phone }}</td>
      </tr>
      </tbody>
    </table>

    <hr />

    <!-- 更新区域 -->
    <h3>更新顾客信息</h3>

    <div>
      <label>顾客 ID：</label>
      <input v-model.number="editForm.id" type="number" />
    </div>

    <div>
      <label>昵称：</label>
      <input v-model="editForm.nickName" />
    </div>

    <div>
      <label>密码：</label>
      <input v-model="editForm.password" />
    </div>

    <div>
      <label>姓名：</label>
      <input v-model="editForm.name" />
    </div>

    <div>
      <label>地址：</label>
      <input v-model="editForm.address" />
    </div>

    <div>
      <label>余额：</label>
      <input v-model.number="editForm.balance" type="number" />
    </div>

    <div>
      <label>信用：</label>
      <input v-model.number="editForm.credit" type="number" />
    </div>

    <div>
      <label>Email：</label>
      <input v-model="editForm.email" />
    </div>

    <div>
      <label>电话：</label>
      <input v-model="editForm.phone" />
    </div>

    <button @click="updateCustomer">提交更新</button>
  </div>
</template>

<style scoped>

</style>