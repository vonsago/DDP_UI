<template>
    <div class="login-layout">
    <div class="logo">
      <div
        class="login-logo"
        v-if="loginLogo"
        v-bg-image="loginLogo">
      </div>
      <svg v-if="!loginLogo">
        <use xlink:href="#logo_login"></use>
      </svg>
    </div>


    <div class="bg-img" :style="{backgroundImage: `url('${loginBackground}')`}"></div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="login-container">
      <h3 class="title">用户登录</h3>
      <el-form-item prop="account" class="icon-login icon-user">
        <el-input type="text" v-model="ruleForm.account" size="large" :maxlength="20" auto-complete="off" placeholder="用户名">
        </el-input>
      </el-form-item>
      <el-form-item prop="checkPass" class="icon-login icon-pass">
        <el-input type="password" v-model="ruleForm.checkPass" size="large" :maxlength="32" auto-complete="off" placeholder="登录密码"></el-input>
      </el-form-item>
      <!--<el-form-item prop="checkCode" class="icon-login icon-code">
          <el-input type="text" v-model="ruleForm.checkCode" @keyup.native.enter="handleSubmit" size="large" :maxlength="4" auto-complete="off" placeholder="验证码" ></el-input>
          <div class="login-code-img" @click="getCheckCode"><img :src="checkImg.ImgBase64" alt="验证码"></div>
        </el-form-item>-->
      <el-form-item style="width:100%;" class="login-btn">
        <el-button type="primary" size="large" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">{{logintext}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script src="./login.js"></script>

<style lang="scss">
@import "./login.scss";
</style>
