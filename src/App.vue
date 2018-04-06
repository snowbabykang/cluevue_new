<template>
  <div id="app" :class="classname">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    classname:function(){
      return this.$store.state.classname
    }
  },
  created(){
    if(!!localStorage.getItem('userinfo')){
      this.$store.commit("settoken",JSON.parse(localStorage.getItem('userinfo')).token)
    }
  }
}
</script>

<style>
#skin-select  .el-icon-arrow-down{
    position: absolute;
    left: auto;
    top: 50%;
}
ul.topnav ul{
    display: block;
    background-color: transparent;
}
ul.topnav ul .is-active , .el-menu-item .is-active, .el-menu-item:focus, .el-menu-item:hover{
  background-color: rgba(255, 255, 255, .6) !important
}
.button-bg1{overflow: visible; background: url("assets/img/bg5.jpg") center center no-repeat fixed;}
.button-bg2{overflow: visible; background: url("assets/img/bg2.jpg") center center no-repeat fixed;}
.button-bg3{overflow: visible; background: url("assets/img/bg.jpg") center center no-repeat fixed;}
.button-bg4{overflow: visible; background: url("assets/img/giftly.png") repeat;}
.button-bg5{overflow: visible; background: rgb(44, 62, 80);}
.button-bg6{overflow: visible; background: url("assets/img/bg3.png") repeat;}
.button-bg7{overflow: visible; background: url("assets/img/bg8.jpg") center center no-repeat fixed;}
.button-bg8{overflow: visible; background: url("assets/img/bg9.jpg") center center no-repeat fixed;}
.button-bg9{overflow: visible; background: url("assets/img/bg10.jpg") center center no-repeat fixed;}
.button-bg10{overflow: visible; background: url("assets/img/bg11.jpg") center center no-repeat fixed;}
.button-bg11{overflow: visible; background: url("assets/img/bg12.jpg") center center no-repeat fixed;}
.button-bg12{overflow: visible; background: url("assets/img/bg13.jpg") repeat;}
#app {
  background-size: 100% auto;
  height: 100%;
}
html, body, #sb-site{
  height: 100%;
}
.wrap-fluid{
  height: calc(100% - 65px);
  overflow-y: auto
}
.ml-lg{
  margin-left: 15px
}
</style>
