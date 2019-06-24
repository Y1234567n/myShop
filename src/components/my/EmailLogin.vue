<template>
  <div class="email_login_box">
    <div class="top_logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="netease"/>
    </div>    
    <label class="input_email">
      <div class="login_tips">
        <p :class="{active:succss}">{{email_tips}}</p>
        <p :class="{active:succss}">{{password_tips}}</p>
      </div>
      <input type="text" placeholder="请输入邮箱" v-model="user.email" @blur="blurEmail('email')" />
    </label>
    
    <label class="input_code">
      <input type="text" placeholder="请输入密码" v-model="user.password" @blur="blurEmail('password')" />
    </label>
    <div class="login_help">
      <span>遇到问题? </span>
      <span>使用密码验证登录</span>
    </div>
    <div class="register-btns">
      <div class="register-phone" @click="toLogin">
        <span class="iconfont icon-accountfilling">
            &nbsp;
            登录
        </span> 
      </div>
      <div class="register-emil" @click="setWhoIsSho">
        <span class="iconfont icon-wode"></span>&nbsp;
        其他登录方式
      </div>
      <p>
        手机号快捷注册&nbsp;<span class="iconfont icon-xiangyoujiantou"></span>
      </p>

    </div>

<!-- 
    <div class="login_btn active" @click="toLogin">登录</div>
    <div class="back_btn">其他登录方式</div>
    <div class="register_btn">注册账号 &gt;</div> -->
  </div>
</template>

<script>
  export default {
    name: 'EmailLogin',
    props:['setWhoIsSho'],
    data (){
      return {
        succss: {
          email:false,
          password:false
          },
        user: {
          email: "",
          password: ""
        },
        email_tips: "",
        password_tips: ""
      }
    },
    methods: {
    
      toLogin () {
        if(this.succss.email&&this.succss.password){
         alert("登录成功")
        }else {
           alert("请输入正确的账号或邮箱")
           this.user.email= ''
           this.user.password = ''
        }      
      },
      blurEmail(who){
        if(who==='email'){
          if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.user.email)){
              this.email_tips = ""
              this.succss.email = true
            }else{
              this.email_tips= "请输入正确的邮箱"
              this.succss.email = false
            }
        }
         if(who==='password'){
        if(/^[a-zA-Z0-9_]{6,20}$/.test(this.user.password)){
            this.password_tips = ""
             this.succss.password = true
          }else{
            this.password_tips = "请输入正确的密码"
            this.succss.password = false
          }
         }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped> 
  .email_login_box
    background-color: #fff
    height 100%
    position absolute 
    top 88px
    left 0
    overflow hidden
    .top_logo
      text-align center
      width 100%
      height 133px
      margin 56px 0 135px 0
      img
        width 192px
        height 64px
        margin 0 auto
    .input_email
      position relative
      .login_tips
        position absolute
        left 50%
        top -100%
        width 50%
        transform translateX(-50%)
        color red
        font-size 28px
    .input_email,
    .input_code
      display block
      width 675px
      height 90px
      margin 30px auto
      input
        display block
        width 100%
        height 100%
        outline none
        border 0 none
        border-bottom 1px solid #bdbdbd
        font-size 30px
        line-height 45px
    .input_code
      position relative
      .get_password
        position absolute
        right 0
        bottom 0
        width 173px
        height 56px
        line-height 56px
        text-align center
        font-size 28px
        border 1px solid #333
        border-radius  10px
    .login_help
      font-size 28px
      line-height 45px
      margin-bottom 64px
      display flex
      justify-content space-between
      align-items center
      padding 0 30px
    .register-btns
      width 670px
      height 292px
      padding 0 40px
      font-size 35px
      >div
        width 100%
        margin-bottom 32px
        height  90px
        border-radius 10px
        border 2px solid #B4282D
        color #B4282D
        line-height 90px
        text-align center
      .register-phone  
        background-color #B4282D
        span
          color #ffffff
      p 
        text-align center
</style>
