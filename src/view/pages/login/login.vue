<template>
    <div class="login-layout">

    <div class="bg-img" :style="{backgroundImage: `url('${loginBackground}')`}"></div>
    <el-form label-position="left" label-width="0px" class="login-container">
      <h3 class="title">Dokcer ID 登录</h3>
      <el-form-item prop="account" class="icon-login icon-user">
        <el-input 
          type="text" 
          v-model="user.username" 
          size="large" :maxlength="20" 
          auto-complete="off" 
          placeholder="用户名">
        </el-input>
      </el-form-item>
      <el-form-item prop="checkPass" class="icon-login icon-pass">
        <el-input 
          type="password" 
          v-model="user.password" 
          size="large" 
          :maxlength="32" 
          auto-complete="off" 
          placeholder="登录密码">
        </el-input>
      </el-form-item>
      <el-form-item style="width:100%;" class="login-btn">
        <el-button type="primary" size="large" style="width:100%;" @click.native.prevent="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script src="./login.js"></script>

<style lang="scss">
@import "./login.scss";
</style>
