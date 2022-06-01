<template>
  <div class="container">
    <el-card shadow="always" class="card">
      <el-form :rules="rules" :model="userInfo" ref="loginForm" label-position="left" label-width="60px">
        <h2 class="login_title">欢迎登录</h2>
        <el-form-item prop="name" label="用户名">
          <el-input type="text"  clearable placeholder="请输入用户名"  v-model="userInfo.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input type="password"  placeholder="请输入密码"  show-password
                    v-model="userInfo.password"
                     @keyup.enter.native="login"/>
        </el-form-item>
        <div class="btn">
          <el-button style="width: 30%;color: white" color="deepskyblue" @click.prevent="login">登录</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import {reactive,ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {ElMessage} from 'element-plus'

const router = useRouter()
const store = useStore()
const userInfo = reactive({
  name: '',
  password: ''
})
const validatorName = (rule, value, callback) => {
  if (value.trim() == '') {
    callback(new Error('*用户名不能为空'))
  } else if (!/^[a-zA-Z][a-zA-Z0-9]{2,8}$/.test(value)) {
    callback(new Error('*请输入3至9位字母开头账号'))
  } else {
    callback()
  }
}
const validatorPsw = (rule, value, callback) => {
  if (value.trim() == '') {
    callback(new Error('*密码不能为空'))
  } else if (!/^(?![0-9]*$)[a-zA-Z0-9]{8,12}/.test(value)) {
    callback(new Error('*请输入8-16位非纯数字密码'))
  } else {
    callback()
  }
}
const rules = reactive({
  name: [{trigger: 'blur',validator:validatorName}],
  password: [{trigger: 'blur',validator:validatorPsw}]
})
const loginForm=ref(null)

function login() {
  loginForm.value.validate(valid=>{
    if(valid){
    if(userInfo.name==='admin'&&userInfo.password==='a12345678'){
      store.dispatch('Login/login',userInfo).then(()=>{
        ElMessage({
          message:'登录成功',
          type:"success"
        })
        router.push({
          name: 'home'
        })
      }).catch(()=>{
        ElMessage({
          message:'登陆失败',
          type:"warning"
        })
      })
    }else {
      ElMessage({
        message:'用户名或密码错误',
        type:"error"
      })
    }
    }
  })
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;

  .card {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;
    border-radius: 30px;
    box-sizing: border-box;

    .login_title {
      text-align: center;
      margin-bottom: 30px;
    }

    .btn {
      text-align: center;
      margin-top: 30px;
      //background-color: deepskyblue;
    }
  }
}
</style>
