<script setup lang='ts'>
import LoginForm from '@/views/Login/LoginForm.vue'
</script>

<template>
  <div class="login-view">
    <div class="login-content freeman-background-color">
      <div style="display: flex;">
        <div class="logo-view">
          <div class="logo-box">
            <img src="@/assets/Global/Img/Logo.png" alt="">
            <div class="logo-title">freeman管理系统</div>
          </div>
        </div>
        <div class="form-view">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-view{
  height: 100vh;
  width: 100vw;
  background: url(@/assets/Login/Img/background1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .login-content{
    padding: 50px;
    border-radius: 15px;
    display: inline-block;
    position: absolute;
    background-color: var(--free-background-color);
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px 10px rgba($color: #000000, $alpha: .2);
    
    .logo-view{
      padding-right: 30px;
      border-right: 1px solid #cccccc;
      text-align: center;
      position: relative;
      width: 230px;

      .logo-box{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        img{
          width: 230px;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        .logo-title{
          font-size: 26px;
          font-weight: 700;
          color: var(--free-font-color);
        }
      }
    }

    .form-view{
      width: 300px;
      padding-left: 30px;
    }
  }
}
</style>