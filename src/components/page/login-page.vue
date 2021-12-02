<template>
  <div style="padding-top: 80px">
    <el-card class="box-card" shadow="hover">
      <div class="imgBox">
        <img src="@/assets/acm.png" alt="" width="100%">
      </div>
      <div class="page-title">
        <b>User Login</b>
      </div>
      <div style="width: 100%; text-align: center">
        <el-button class="other-login-methods-button"
                   title="使用实验室统一账号登录"
                   :loading="ssoLock"
                   :disabled="ssoLock"
                   round
                   @click="ssoLogin">
          <el-image style="width: 20px; height: 20px; overflow: unset" fit="fill" src="favicon.ico"/>
          <span style="margin-left: 10px; font-weight: bold">统一账号登录</span>
        </el-button>
      </div>
      <el-divider>或</el-divider>
      <div class="form-box">
        <el-form :model="FormData" status-icon :rules="rules" ref="FormData" class="demo-ruleForm">
          <p style="text-align: center; margin-bottom: 20px; font-weight: bold;">使用原账号登录</p>
          <el-form-item prop="username">
            <el-input
                v-model="FormData.username"
                placeholder="Please enter your username."
                prefix-icon="el-icon-user">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password"
                      v-model="FormData.password"
                      placeholder="Please enter your password."
                      prefix-icon="el-icon-key"
                      @keyup.enter.native="submitForm('FormData')">
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="submitBox">
              <el-button class="submitButton" type="primary" @click="submitForm('FormData')">Login
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data() {
    return {
      FormData: {
        username: '',
        password: ''
      },
      rules: {
        username: [{required: true, message: 'Please enter your username!', trigger: 'blur'}],
        password: [{required: true, message: 'Please enter your password!', trigger: 'blur'}]
      },
      ssoLock: false
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.commit('login', {
            username: this.FormData.username,
            password: this.FormData.password
          })
        } else {
          return false
        }
      })
    },
    ssoLogin() {
      this.ssoLock = true
      this.$store.commit('loginBySSO', {
        onFailed: this.resetSSOLock
      })
    },
    resetSSOLock() {
      this.ssoLock = false
    }
  },
  created() {
    document.title = "Login - viewOJ"
  }
}
</script>

<style scoped>
.box-card {
  width: 400px;
  margin: 0 auto;
}

.imgBox {
  width: 200px;
  height: 125px;
  margin: 0 auto;
}

.form-box {
  width: 80%;
  float: left;
  transform: translate(12%, 0);
}

.page-title {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
}

.submitBox {
  width: 100%;
}

.submitButton {
  width: 100%;
  height: auto;
}

.other-login-methods-button {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
}

.other-login-methods-button /deep/ span {
  line-height: 20px;
}
</style>
