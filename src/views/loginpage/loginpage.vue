<template>
   <div class="container">
        <div class="" id="login-wrapper">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div id="logo-login">
                        <h1>最赚钱的管理系统
                            <span>v1.0</span>
                        </h1>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div class="account-box"> 
                        <router-view></router-view>
                        <div class="or-box">
                            <center><span class="text-center login-with"><router-link :to="{ path: 'login' }">登录</router-link> or <router-link :to="{ path: 'register' }">注册</router-link></span></center>
                        </div>
                        
                            <div class="row-block">
                                <div class="row">
                                    <div class="col-md-12 row-block">
                                        <a href="index.html" class="btn btn-primary btn-block">登录</a>
                                    </div>
                                </div>
                            </div>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "loginpage",
  data() {
    return {};
  }
};
</script>
<style>
    .forgotLnk{
        margin-top: 0px
    }
</style>

