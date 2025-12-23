<script lang="ts" setup>
import {ref} from "vue";
import {login} from "../api/auth";

const nickname=ref('')
const password=ref('')
const errorMessage=ref('')

const handleLogin=async ()=>
{
  try
  {
    const response=await login({nickname:nickname.value,password:password.value})
    console.log(response)
  }
  catch (e)
  {

  }
}
</script>

<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label>用户名：</label>
        <input v-model="nickname" type="text" placeholder="请输入用户名" required/>
        <label>密码：</label>
        <input v-model="password" type="text" required/>
      </div>
    </form>
  </div>
</template>

<style scoped>
.login-container
{
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.login-container div
{
  margin-bottom: 15px;
}
.login-container label
{
  display: inline-block;
  width: 70px;
}
.login-container input
{
  width: calc(100% - 80px);
  padding: 5px;
}
button
{
  padding: 5px 10px;
}

</style>