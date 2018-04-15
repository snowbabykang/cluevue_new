<template>
<div class="container">
    <div class="clearfix centermodel">
        <h3>问题线索管理系统</h3>
        <h5>用户登录</h5>
        <div class="form-group clearfix">
            <!--a href="#" class="pull-right label-forgot">Forgot email?</a-->
            <label for="inputUsernameEmail">用户名:</label>
            <input type="text" id="inputUsernameEmail" class="form-control" v-model="loginName" >
        </div>
        <div class="form-group  clearfix">
            <!--a href="#" class="pull-right label-forgot">Forgot password?</a-->
            <label for="inputPassword">密码:</label>
            <input type="password" id="inputPassword" class="form-control" v-model="password">
        </div>
        <div class="checkbox" v-if=false>
            <label><input type="checkbox">记住用户名</label>
            <router-link class="forgotLnk pull-right" :to="{ path: 'findpassword' }">忘记密码？</router-link>
        </div>
        <router-link class="findpassword" to="/findpassword">忘记密码？点击找回</router-link>

        <!-- <div class="or-box">
            <center><span class="text-center login-with">登录or <router-link :to="{ path: 'register' }">注册</router-link></span></center>
           </div>             -->
            <div class="row-block">
                <div class="row">
                <div class="col-md-12 row-block">
                    <a @click="userlogin" class="btnup">登录</a>
                </div>
            </div>
        </div> 
        <h4>中共承德市纪律检查委员会</h4>
    </div>
</div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      loginName: "",
      password: ""
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
            message: "用户名或密码错误",
            type: 'error'
          });
    })
    }
  }
};
</script>
<style scoped>
    .container{
        background: url(../../assets/img/loginmodel.png) no-repeat center top / 646px 308px;
        position: fixed;
        top: 50%;
        left:50%;
        margin-left: -323px;
        margin-top:-82px;
        width:646px;
        height: 308px;
    }
    .centermodel {
        width:225px;
        margin:46px auto;
        position:relative
    }
    .findpassword{
        position: absolute;
        top:154px;
        right:-16px;
        font-size:12px;
        color: rgb(21, 138, 240);
        text-align: center;
        line-height: 24px;
        font-family: 宋体;
        font-weight: bold 
    }
    .centermodel h3{
        position: absolute;
        top: -160px;
        left:-76px;
        font-size: 36px;
        color: #fff;
        text-align: center;
        width: 360px;
        font-family: 宋体;
        font-weight: bold
    }
    .centermodel h5{
        position: absolute;
        top:-43px;
        left:-40px;
        font-size:18px;
        color: #fff;
        text-align: center;
        width: 280px;
        line-height: 24px;
        font-family: 宋体;
        font-weight: bold
    }
     .centermodel h4{
        position: absolute;
        bottom: -130px;
        left:-36px;
        font-size:18px;
        color: #fff;
        text-align: center;
        width: 280px;
        background: url(../../assets/img/dh.png) no-repeat left center / 24px auto;
        line-height: 24px;
        font-family: 宋体;
        font-weight: bold
    }
    .form-group{
         margin-left: -25px;
         width:250px
    }
    .form-group label {
        float:left; 
        width:50px;
        color:#a1daf9;
        line-height: 24px;
        text-align:justify;
        text-align-last:justify;
       
    }
    .form-group input{
        width:195px;
        float: right;
    }
    .row-block {
        margin-left: -8px
    }
    .btnup{
        display: block;
        width: 75px;
        height: 34px;
        margin:-4px auto 0;
        line-height: 34px;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }
</style>

