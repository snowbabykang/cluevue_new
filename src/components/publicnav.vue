<template>
<nav role="navigation" class="navbar navbar-static-top" style="margin-left:240px">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" class="navbar-toggle" type="button">
                    <span class="entypo-menu"></span>
                </button>
                <button class="navbar-toggle toggle-menu-mobile toggle-left" type="button">
                    <span class="entypo-list-add"></span>
                </button>
                <div id="logo-mobile" class="visible-xs">
                   <h1>WEB管理<span>v1.2</span></h1>
                </div>

            </div>


            <!-- Collect the nav links, forms, and other content for toggling -->
            <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="dropdown" :class="{'open':message}">
                        <a class="dropdown-toggle" @click="messagopen"><i style="font-size:20px;" class="icon-conversation"></i><div class="noft-red">23</div></a>
                        <ul style="margin: 11px 0 0 9px;" role="menu" class="dropdown-menu dropdown-wrap">
                            <li>
                                <a href="#">
                                    <img alt="" class="img-msg img-circle" src="http://api.randomuser.me/portraits/thumb/men/1.jpg">Jhon Doe <b>Just Now</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <img alt="" class="img-msg img-circle" src="http://api.randomuser.me/portraits/thumb/women/1.jpg">Jeniffer <b>3 Min Ago</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <img alt="" class="img-msg img-circle" src="http://api.randomuser.me/portraits/thumb/men/2.jpg">Dave <b>2 Hours Ago</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <img alt="" class="img-msg img-circle" src="http://api.randomuser.me/portraits/thumb/men/3.jpg"><i>Keanu</i>  <b>1 Day Ago</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <img alt="" class="img-msg img-circle" src="http://api.randomuser.me/portraits/thumb/men/4.jpg"><i>Masashi</i>  <b>2 Mounth Ago</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <div>See All Messege</div>
                            </li>
                        </ul>
                    </li>
                    <li><router-link to="/clue">线索管理</router-link></li>
                    <li><router-link to="/clue">登记发放</router-link></li>
                    <li><router-link to="/clue">文书管理</router-link></li>
                    <li><router-link to="/clue">数据统计</router-link></li>

                </ul>
       
                <ul style="margin-right:0;" class="nav navbar-nav navbar-right">
                    <li :class="{'open':openuser}">
                        <a class="dropdown-toggle" @click="openuserinfo">
                            <img alt="" class="admin-pic img-circle" src="http://api.randomuser.me/portraits/thumb/men/10.jpg">{{username}}，你好<b class="caret"></b>
                        </a>
                        <ul style="margin-top:14px;" class="dropdown-setting dropdown-menu" >
                            <li>
                                <a @click="loginout"><span class="entypo-user"></span>&#160;&#160;退出登录</a>
                            </li>   
                            <!-- <li>
                                <a href="#">
                                    <span class="entypo-vcard"></span>&#160;&#160;Account Setting</a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="entypo-lifebuoy"></span>&#160;&#160;Help</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="http://themeforest.net/item/apricot-navigation-admin-dashboard-template/7664475?WT.ac=category_item&WT.z_author=themesmile">
                                    <span class="entypo-basket"></span>&#160;&#160; Purchase</a>
                            </li> -->
                        </ul>
                    </li>
                    <li :class="{'open':setingstate}">
                        <a data-toggle="dropdown" class="dropdown-toggle" @click="seting">
                            <span class="icon-gear"></span>&#160;&#160;Setting</a>
                        <ul role="menu" class="dropdown-setting dropdown-menu">
                            <li class="theme-bg">
                                <div v-for="key in bglist" :key="key" :id="key" @click="chagebg(key)"></div>
                                <!-- <div id="button-bg2"></div>
                                <div id="button-bg3"></div>
                                <div id="button-bg5"></div>
                                <div id="button-bg6"></div>
                                <div id="button-bg7"></div>
                                <div id="button-bg8"></div>
                                <div id="button-bg9"></div>
                                <div id="button-bg10"></div>
                                <div id="button-bg11"></div>
                                <div id="button-bg12"></div>
                                <div id="button-bg13"></div> -->
                            </li>
                        </ul>
                    </li>
                    <li class="hidden-xs">
                        <a class="toggle-left" href="#">
                            <span style="font-size:20px;" class="entypo-list-add"></span>
                        </a>
                    </li>
                </ul>

            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
</template>


<script>
export default {
  name: 'publicnav',
  data () {
    return {
        message:false,
        username:JSON.parse(localStorage.getItem('userinfo')).login_name,
        openuser:false,
        setingstate:false,
        bglist:this.confindata.bglist
    }
  },
  methods:{
      messagopen:function(){
          this.message = !this.message
      },
      openuserinfo:function(){
          this.openuser = !this.openuser
      },
      loginout:function(){
        this.$ajax.post('/api/logout',{}).then((res)=>{
             localStorage.setItem('userinfo',null);
            this.$router.push("/loginpage")
        })
         
      },
      seting:function(){
          this.setingstate =! this.setingstate
      },
      chagebg:function(name){
          console.log(this)
        this.$store.commit('changebg',name)
      }
  },
  created:function(){

  }
}
</script>


<style scoped>
.navbar{
    margin-top: 0px !important
}
</style>