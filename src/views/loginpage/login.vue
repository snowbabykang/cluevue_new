<template>
    <div class="clearfix">
        <div class="form-group">
            <!--a href="#" class="pull-right label-forgot">Forgot email?</a-->
            <label for="inputUsernameEmail">用户名</label>
            <input type="text" id="inputUsernameEmail" class="form-control" v-model="loginName" >
        </div>
        <div class="form-group">
            <!--a href="#" class="pull-right label-forgot">Forgot password?</a-->
            <label for="inputPassword">密码</label>
            <input type="password" id="inputPassword" class="form-control" v-model="password">
        </div>
        <div class="checkbox">
            <label><input type="checkbox">记住用户名</label>
            <router-link class="forgotLnk pull-right" :to="{ path: 'findpassword' }">忘记密码？</router-link>
        </div>
        <div class="or-box">
            <center><span class="text-center login-with">登录or <router-link :to="{ path: 'register' }">注册</router-link></span></center>
           </div>            
            <div class="row-block">
                <div class="row">
                <div class="col-md-12 row-block">
                    <button @click="userlogin" class="btn btn-primary btn-block">登录</button>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      loginName: "admin",
      password: "123456"
    };
  },
  methods: {
    userlogin: function() {
      this.$ajax.post("/api/dologin",{
          loginName: this.loginName,
          password: this.password
    }).then((res)=>{
        localStorage.setItem('userinfo',JSON.stringify(res.data));
        this.$store.commit("settoken",res.data.token)
        this.$router.push("/")
    }).catch((error)=>{
        console.log(error)
        this.$message({
            showClose: true,
            message: "错误",
            type: 'error'
          });
    })
    }
  },
  created:function(){
      console.log(localStorage.getItem('userinfo'))
        // if(!localStorage.getItem('userinfo')){
        //     setTimeout(()=>{
        //          this.$router.push("/")
        //     },3000)
           
        // }
  }
};
</script>

