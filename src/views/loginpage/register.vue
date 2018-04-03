<template>
  <form role="form" class="clearfix">
                            <div class="form-group">
                                <!--a href="#" class="pull-right label-forgot">Forgot email?</a-->
                                <label for="inputUsernameEmail">用户名</label>
                                <input type="text" id="inputUsernameEmail" class="form-control">
                            </div>
                            <div class="form-group">
                                <!--a href="#" class="pull-right label-forgot">Forgot password?</a-->
                                <label for="inputPassword">密码</label>
                                <input type="password" id="inputPassword" class="form-control">
                            </div>
                             <div class="form-group">
                                <!--a href="#" class="pull-right label-forgot">Forgot password?</a-->
                                <label for="inputPassword">再次输入密码</label>
                                <input type="password" id="inputPassword" class="form-control">
                            </div>
                            
                           <!-- <div class="or-box">
            <center><span class="text-center login-with"><router-link :to="{ path:'/loginpage' }">登录</router-link>or注册</span></center>
           </div>             -->
            <div class="row-block">
                <div class="row">
                <div class="col-md-12 row-block">
                    <button @click="userlogin" class="btn btn-primary btn-block">登录</button>
                </div>
            </div>
        </div> 
                        </form>
</template>
<script>
export default {
  name: "register",
  data() {
    return {};
  }
};
</script>

