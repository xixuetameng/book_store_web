<script lang="ts" setup>
import {ref} from "vue";
import {login} from "../api/auth";
import {setUser} from "../utils/auth";

const nickname=ref('')
const password=ref('')
const errorMessage=ref('')

const handleLogin=async ()=>
{
  try
  {
    const response=await login({nickname:nickname.value,password:password.value})
    if(response.data.success!=true)
    {
      console.log(response.data.message)
      return
    }
    const {id,name}=response.data.data;
    console.log("登录成功")
    console.log({id,name})
    setUser({id,name})
  }
  catch (err:any)
  {
    console.log(err)
    errorMessage.value=err?.response?.data?.message||"登录失败"
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
        <input v-model="password" type="password" placeholder="请输入密码" required/>
        <button type="submit">登录</button>
      </div>
    </form>
    <p v-if="errorMessage" class="error">{{errorMessage}}</p>
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
.error
{
  color: red;
}
</style>