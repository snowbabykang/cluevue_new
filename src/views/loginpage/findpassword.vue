<template>
  <form role="form" class="clearfix">
                            <div class="form-group">
                                <!--a href="#" class="pull-right label-forgot">Forgot email?</a-->
                                <label for="inputUsernameEmail">用户名</label>
                                <input type="text" v-model="loginName" id="inputUsernameEmail" class="form-control">
                            </div>
                            <div class="form-group">
                                <!--a href="#" class="pull-right label-forgot">Forgot password?</a-->
                                <label for="inputPassword">密码</label>
                                <input type="password" v-model="newPassword" id="inputPassword" class="form-control">
                            </div>
                             <div class="form-group">
                                <!--a href="#" class="pull-right label-forgot">Forgot password?</a-->
                                <label for="inputPassword">再次输入密码</label>
                                <input type="password" v-model="newPasswordtwo" id="inputPassword" class="form-control">
                            </div>
                            
                             <!-- <div class="or-box">
            <center><span class="text-center login-with"><router-link :to="{ path:'/loginpage' }">登录</router-link> or <router-link :to="{ path: 'register' }">注册</router-link></span></center>
           </div>             -->
            <div class="row-block">
                <div class="row">
                <div class="col-md-12 row-block">
                    <button @click="userfind" class="btn btn-primary btn-block">登录</button>
                </div>
            </div>
        </div> 
                        </form>
</template>
<script>
export default {
  name: "findpassword",
  data() {
    return {};
  },
  methods:{
       userfind: function() {
        this.$ajax.post("/api/dologin",{
            loginName: this.loginName,
            newPassword: this.newPassword
        }).then((res)=>{
            this.$message({
                showClose: true,
                message: "找回成功",
                type: 'success'
            });
            
        }).catch((error)=>{
            console.log(error)
            this.$message({
                showClose: true,
                message: "错误",
                type: 'error'
            });
        })
    }
  }
};
</script>

