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
                    <li class="dropdown" v-bind:class="openbox=='clue'?'open':''">
                        <a class="dropdown-toggle" @click="openuserinfo('clue')">线索管理</a>
                        <ul style="margin: 11px 0 0 9px;" role="menu" class="dropdown-menu dropdown-wrap">
                            <li>
                                <router-link :to="{path:'clueadd',query:{breadNum:1}}"> 录入线索</router-link>
                                <router-link :to="{path:'cluelist',query:{breadNum:1}}">线索列表</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown" v-bind:class="openbox=='numtpu'?'open':''" v-if="false">
                        <a class="dropdown-toggle" @click="openuserinfo('numtpu')">数据统计</a>
                        <ul style="margin: 11px 0 0 9px;" role="menu" class="dropdown-menu dropdown-wrap">
                            <li>
                                <router-link :to="{path:'trend',query:{breadNum:1}}">案件数量趋势</router-link>
                                <router-link :to="{path:'proportion',query:{breadNum:1}}">各职级案件比例</router-link>
                                <router-link :to="{path:'unproportion',query:{breadNum:1}}">未结案比例</router-link>
                            </li>
                        </ul>
                    </li>
                    <li><router-link :to="{path:'timeout',query:{breadNum:1}}">超期提醒</router-link></li>
                    <li><router-link :to="{path:'distribution',query:{breadNum:1}}">登记发放</router-link></li>
                    <li><router-link :to="{path:'pagerwork',query:{breadNum:1}}">文书管理</router-link></li>
                    <li><router-link :to="{path:'regnumber',query:{breadNum:1}}">问题线索处置情况登记表</router-link></li>
                    <li><router-link :to="{path:'regnumber',query:{breadNum:1}}">立案案件登记表</router-link></li>
                    <li v-if="false"><router-link :to="{path:'regnumber',query:{breadNum:1}}">登号登记</router-link></li>
                </ul>
        
                <ul style="margin-right:0;" class="nav navbar-nav navbar-right">
                    <li v-bind:class="openbox=='userinfo'?'open':''">
                        <a class="dropdown-toggle" @click="openuserinfo('userinfo')">
                            {{username}}，你好<b class="caret"></b>
                        </a>
                        <ul style="margin-top:14px;" class="dropdown-setting dropdown-menu" >
                            <li>
                                <a @click="loginout"><span class="entypo-user"></span>&#160;&#160;退出登录</a>
                            </li>   
                        </ul>
                    </li>
                    <li v-bind:class="openbox=='skinset'?'open':''">
                        <a class="dropdown-toggle" @click="openuserinfo('skinset')">
                            <span class="icon-gear"></span>&#160;&#160;皮肤</a>
                        <ul  class="dropdown-setting dropdown-menu">
                            <li class="theme-bg">
                                <div v-for="key in bglist" :key="key" :id="key" @click="chagebg(key)"></div>
                               
                            </li>
                        </ul>
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
  computed:{
     openbox:function(){
        return this.$store.state.topnavhide
     } 
  },
  methods:{
      messagopen:function(){
          this.message = !this.message
      },
      openuserinfo:function(e){
          if(this.$store.state.topnavhide==e){
               this.$store.commit("topnavhide",'');
          }else{
               this.$store.commit("topnavhide",e);
          }
      },
      loginout:function(){
        this.$ajax.post('/api/logout',{}).then((res)=>{
            localStorage.removeItem('userinfo');
            this.$router.push("/loginpage")
        })
         
      },
      
      chagebg:function(name){
        this.$store.commit('changebg',name)
      },
      
  },
  created:function(){
     
  }
}
</script>


<style scoped>
.navbar{
    margin-top: 0px !important
}
.dropdown-toggle {
    cursor: pointer;
}
</style>