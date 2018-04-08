<template>
   <div class="container">
        <!-- <div class="" id="login-wrapper">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div id="logo-login">
                        <h1>线索管理系统
                            <span>v1.0</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div class="account-box">  -->
                        <router-view></router-view>
<!--                         
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  name: "loginpage",
  data() {
    return {

    };
  }
};
</script>
<style scoped>
    .forgotLnk{
        margin-top: 0px
    }
    .btn {
        background:#3DA09A
    }
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
</style>

