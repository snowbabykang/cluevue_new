<template>
<div class="container">
    <div class="clearfix centermodel">
        <h3>问题线索管理系统</h3>
        <h5>密码找回</h5>
        <div class="form-group clearfix">
            <!--a href="#" class="pull-right label-forgot">Forgot email?</a-->
            <label for="inputUsernameEmail">用户名:</label>
            <input type="text" id="inputUsernameEmail" class="form-control" v-model="loginName" >
        </div>
        <div class="form-group  clearfix">
            <!--a href="#" class="pull-right label-forgot">Forgot password?</a-->
            <label for="inputPassword">新密码:</label>
            <input type="password" id="inputPassword" class="form-control" v-model="newPassword">
        </div>
         <div class="form-group  clearfix">
            <!--a href="#" class="pull-right label-forgot">Forgot password?</a-->
            <label for="inputPassword">新密码:</label>
            <input type="password" id="inputPassword" class="form-control" v-model="newPasswordtwo">
        </div>
        
        <router-link class="findpassword" to="/loginpage">前往登录</router-link>

        <!-- <div class="or-box">
            <center><span class="text-center login-with">登录or <router-link :to="{ path: 'register' }">注册</router-link></span></center>
           </div>             -->
            <div class="row-block">
                <div class="row">
                <div class="col-md-12 row-block">
                    <a @click="userfind" class="btnup">确认</a>
                </div>
            </div>
        </div> 
        <h4>中共承德市纪律检查委员会</h4>
    </div>
</div>
</template>
<script>
export default {
  name: "findpassword",
  data() {
    return {
        loginName:'',
        newPassword:'',
        newPasswordtwo:''
    };
  },
  methods:{
       userfind: function() {
        this.$ajax.post("/api/recover_pwd",{
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
<style scoped>
    .container{
        background: url(../../assets/img/loginmodel2.png) no-repeat center top / 646px 308px;
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
        top:180px;
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
        height: 23px;
        margin:-4px auto 0;
        line-height: 21px;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }
</style>


