<template>
  <div class="login">
    <div class="search_input">
      <div class="search_input_wrapper">
        <input type="text" placeholder="账号：" v-model="username" @focus="show" @blur="divhide">
        <transition name="fade">
          <p v-show="showd" v-text="zhanghao" @click="add"></p>
        </transition>
      </div>
      <div class="search_input_wrapper" v-show="!identify">
        <input type="password" placeholder="密码：" v-model="password">
      </div>
      <div class="login_identify" v-show="identify">
        <input type="text" v-model="verifyImg" placeHolder="请输入您的验证码">
        <input type="button" value="获取验证码" class="get_code">
      </div>
      <div class="search_input_wrapper login_switch">
        <a @click="identify=false">密码登录</a>
        <a @click="identify=true">验证码登录</a>
      </div>
      <div class="search_input_wrapper">
        <input type="submit" class="login_btn" value="登录" @click="login">
      </div>
      <div class="search_input_wrapper login_link">
        <router-link to="/mine/register">立即注册</router-link>
        <router-link to="/mine/findPassword">找回密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      zhanghao: '',
      username: '',
      password: '',
      verifyImg: '',
      showd: false,
      identify: false
    }
  },
  methods: {
    login: function () {
      if (this.username === '' || this.password === '') {
        alert('请输入账号和密码！')
      } else {
        window.localStorage.setItem('username', JSON.stringify(this.username))
      }
    },
    show: function () {
      this.zhanghao = JSON.parse(window.localStorage.getItem('username'))
      if (this.zhanghao === null) {
        return
      }
      this.showd = true
    },
    divhide: function () {
      this.showd = false
    },
    add: function () {
      this.username = this.zhanghao
    }
  }
}
</script>

<style scoped>
  .search_input{
      background-color: #f5f5f5;
      padding: 5px 0;
      }
  .search_input input{
    border: none;
    width: 100%;
    height: 45px;
    background-color: #fff;
    text-indent: 10px;
    border-radius: 5px;
  }
  .search_input_wrapper{
    padding: 0 15px;
    background-color: #f5f5f5;
    line-height: 20px;
    margin: 10px 0;
    position: relative;
    }
  .search_input_wrapper p{
    width: 80%;
    height: 30px;
    background-color: #fff8ff;
    text-indent: 10px;
    border: 1px solid #f5f5f5;
    margin-top: 2px;
    position: absolute;
    z-index: 2;
  }
  .login_identify{
    padding: 0 15px;
    background-color: #f5f5f5;
    line-height: 20px;
    margin: 10px 0;
    display: flex;
  }
  .login_identify .get_code{
    width: 33%;
    min-width: 85px;
    background-color: #e6e6e6;
  }
  .search_input_wrapper .login_btn{
    background-color: #f58545;
    color: white;
    transition: height linear 1s;
  }
  .login_switch{
    display: flex;
    justify-content: space-around;
  }
  .login_switch a{
    text-decoration: none;
    font-size: 12px;
    color:slategray;
  }
  .login_switch a:active{
    color: red;
  }
  .login_link{ display: flex; justify-content:space-between;}
  .login_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}
  .fade-enter-active, .fade-leave-active {
    transition: all 1s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
