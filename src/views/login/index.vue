<template>
  <div class="login">
    <div class="loginBox">
      <!-- <h2 class="loginH2">
        <strong>Vue</strong> 后台管理系统
      </h2>-->
      <div class="loginCon">
        <div class="titleDiv">
          <h3>Sign up now</h3>
          <p>Enter your username and password to log on:</p>
          <i class="el-icon-key"></i>
        </div>
        <el-form ref="loginForm" :rules="rules" :model="loginForm">
          <el-form-item prop="username">
            <el-input placeholder="请输入账号" prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-button type="primary" class="loginBtn" @click="loginSubmit()">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Login extends Vue {
  private loginForm: {
    username: string;
    password: string;
  } = { username: "", password: "" };
  private rules = {
    username: [
      { required: true, message: "请输入账号", trigger: "blur" },
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
    ],
  };

  loginSubmit(): void {
    console.log(123, this.loginForm);
    
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: pink;
}
</style>