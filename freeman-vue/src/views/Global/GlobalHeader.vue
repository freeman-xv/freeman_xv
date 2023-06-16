<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Fold, Expand, SwitchButton, Check, Sunny, Moon } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import useStyleStore from '@/stores/style'
const router = useRouter()

// 菜单展开折叠
const styleStore = useStyleStore()
function changeExpend() {
  styleStore.expend = !styleStore.expend
}

/* *******************************************  系统操作  ********************************************* */
const drawerVisibi = ref(false)
const colorList = reactive([
  {color:'#f5222d',name:'薄暮'},
  {color:'#fa541c',name:'火山'},
  {color:'#faad14',name:'日暮'},
  {color:'#13c2c2',name:'明青'},
  {color:'#1abc9c',name:'青蓝'},
  {color:'#52c41a',name:'极光绿'},
  {color:'#1890ff',name:'拂晓蓝'},
  {color:'#2f54eb',name:'极客蓝'},
  {color:'#722ed1',name:'酱紫'},
  {color:'#e58adb',name:'樱粉'},
])
// 系统级操作
function featureControls(command:string){
  switch(command){
    case '1':
      drawerVisibi.value = true
    break;

    case '2':

    break
  }
}

// 修改主题颜色
function changeThemeColor(color:string){
  styleStore.changeTheme(color)
}

// 修改暗黑模式
function changeDark(val:boolean){
  styleStore.changeDark(val)
}

// 退出登录
function quit(){
  ElMessageBox.confirm('真的要退出登录吗?', '提示', {
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  closeOnPressEscape: false,
  closeOnClickModal: false,
  autofocus: false,
  type: 'warning',
  }).then(() => {
    router.replace('/login')
  }).catch(() => {

  })
}
</script>
<template>
  <div class="global-header">
    <div class="expand">
      <el-icon class="icon" :size="35" @click="changeExpend" v-if="styleStore.expend">
        <Expand />
      </el-icon>
      <el-icon class="icon" :size="35" @click="changeExpend" v-else>
        <Fold />
      </el-icon>
    </div>
    <div class="quit-content" @click="quit">
      <el-icon class="icon" :size="20">
        <SwitchButton />
      </el-icon>
      <span>退出登录</span>
    </div>
    <div class="feature-content">
      <el-dropdown size="large" @command="featureControls" role="navigation" @mouseenter.prevent="()=>{}">
        <div class="feature-box">
          <img src="@/assets/Global/Img/avatar.webp" alt="">
          <span class="feature-text">欢迎您,freeman_xv</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="1">系统设置</el-dropdown-item>
            <el-dropdown-item command="2">密码修改</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <el-drawer
      v-model="drawerVisibi"
      title="系统设置"
    >
      <h1>主题色</h1>
      <ul class="color-list">
        <li v-for="(item,index) in colorList" :key="item.color">
          <el-tooltip
            class="box-item"
            effect="light"
            :content="item.name"
            placement="top"
          >
            <div :style="{ backgroundColor: item.color }" class="color-item" @click="changeThemeColor(item.color)">
              <el-icon class="color-active" v-if="styleStore.themeColor === item.color"><Check /></el-icon>
            </div>
          </el-tooltip>
        </li>
      </ul>
      <hr>
      <h1>暗黑模式</h1>
      <el-switch
        v-model="styleStore.dark"
        @change="changeDark"
        class="mt-2"
        style="margin-left: 24px"
        inline-prompt
        :active-icon="Moon"
        :inactive-icon="Sunny"
        size="large"
      />
    </el-drawer>
  </div>
</template>
<style scoped lang="scss">
.global-header {
  height: 50px;
  background-color: var(--el-color-primary);

  .expand {
    width: 50px;
    line-height: 50px;
    color: #ffffff;
    font-size: 30px;
    text-align: center;
    display: inline-block;

    .icon {
      vertical-align: middle;
      cursor: pointer;
    }
  }

  .feature-content {
    float: right;
    height: 50px;
    line-height: 50px;
    transition: all .2s ease;
    padding: 0 15px;
    cursor: pointer;

    .feature-box {
      height: 50px;
      line-height: 50px;
      font-size: 16px;

      img {
        height: 40px;
        width: 40px;
        vertical-align: middle;
        border-radius: 50%;
        overflow: hidden;
      }
    }

    .feature-text {
      margin-left: 10px;
      color: #ffffff;
    }
  }

  .feature-content:hover,
  .quit-content:hover {
    background-color: rgba($color: #ffffff, $alpha: 0.4);
  }

  .quit-content {
    float: right;
    padding: 0 30px;
    height: 50px;
    line-height: 50px;
    color: #ffffff;
    font-size: 18px;
    transition: all .2s ease;
    cursor: pointer;

    .icon {
      vertical-align: middle;
      margin-right: 3px;
    }
  }

  .color-list {
    li{
      display: inline-block;
      .color-item{
        width: 25px;
        height: 25px;
        margin: 10px 10px 10px 0;
        cursor: pointer;
        border-radius: 3px;
        position: relative;

        .color-active{
          font-size: 25px;
          color: #ffffff;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }
}</style>