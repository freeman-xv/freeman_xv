<script setup lang='ts'>
import type { FormInstance, FormRules } from 'element-plus/lib/components/form/index.js';
import { ref, reactive } from 'vue'
import { validatePassword } from '@/utils/globalTools'
import { useRouter } from 'vue-router';
const router = useRouter()
/* *******************************  标签页相关  ************************************ */
const tabName = ref('login')

/* *******************************  登录相关  ************************************ */
// 获取登录表单ref
const loginFormRef = ref<FormInstance>()
let loginForm = reactive({
  phone:'',
  password:'',
  verify:''
})

// 登录表单验证规则
let loginRules = reactive<FormRules>({
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' },],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  verify: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

// 登录按钮
const loginSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      router.replace('/')
    } else {
      console.log('error submit!', fields)
    }
  })
}

/* *******************************  注册相关  ************************************ */
// 获取注册表单ref
const signFormRef = ref<FormInstance>()

// 定义注册表单数据
let signForm = reactive({
  phone:'',
  password:'',
  rePassword: '',
  verify:''
})


// 注册表单验证规则
let singRules = reactive<FormRules>({
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' },],
  password: [{ validator: signPasswordRule, trigger: 'blur' }],
  rePassword: [{ validator: signRePasswordRule, trigger: 'blur' }],
  verify: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

// 自定义密码规则
function signPasswordRule(rule: any, value: any, callback: any){
  if(value === ''){
    callback(new Error('请再次输入密码'))
  }else{
    if(validatePassword(value)){
      callback()
    }else{
      callback(new Error('密码由10到16位字母+数字组成'))
    }
  }
}

// 自定义确认密码规则
function signRePasswordRule(rule: any, value: any, callback: any){
  if(value === ''){
    callback(new Error('请再次输入密码'))
  }else{
    if(value != signForm.rePassword){
      callback(new Error('两次密码输入不一致'))
    }else{
      callback()
    }
  }
}

// 注册按钮
const signSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.replace('/')
    }
  })
}
</script>

<template>
  <el-tabs v-model="tabName">
    <el-tab-pane label="登录" name="login">
      <div class="login">
        <el-form :model="loginForm" label-width="auto" ref="loginFormRef" :rules="loginRules">
          <el-form-item class="form-item" prop="phone">
            <el-input placeholder="手机号" v-model="loginForm.phone" />
          </el-form-item>
          <el-form-item class="form-item" prop="password">
            <el-input placeholder="密码" type="password" show-password v-model="loginForm.password" />
          </el-form-item>
          <el-form-item class="form-item" prop="verify">
            <div style="display: flex;">
              <el-input placeholder="验证码" v-model="loginForm.verify" />
              <el-button style="margin-left: 5px;" type="primary">发送验证码</el-button>
            </div>
          </el-form-item>
          <el-form-item class="form-item">
            <el-button class="login-btn" type="primary" size="large" @click=loginSubmit(loginFormRef)>登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-tab-pane>
    <el-tab-pane label="注册" name="sign">
      <div class="sign">
        <el-form :model="signForm" label-width="auto" ref="signFormRef" :rules="singRules">
          <el-form-item class="form-item" prop="phone">
            <el-input placeholder="手机号" v-model="signForm.phone" />
          </el-form-item>
          <el-form-item class="form-item" prop="password">
            <el-input placeholder="密码" type="password" show-password v-model="signForm.password" />
          </el-form-item>
          <el-form-item class="form-item" prop="rePassword">
            <el-input placeholder="确认密码" type="password" show-password v-model="signForm.rePassword" />
          </el-form-item>
          <el-form-item class="form-item" prop="verify">
            <div style="display: flex;">
              <el-input placeholder="验证码" v-model="signForm.verify" />
              <el-button style="margin-left: 5px;" type="primary">发送验证码</el-button>
            </div>
          </el-form-item>
          <el-form-item class="form-item">
            <el-button class="login-btn" type="primary" size="large" @click="signSubmit(signFormRef)">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
.form-item{
  margin: 10px 0 25px 0 ;
}
.login-btn{
  width: 100%;
}
</style>