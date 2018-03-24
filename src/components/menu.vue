<template>
<div id="skin-select" :class="{'active':isCollapse}">
  <div>
        <div id="logo">
         <h1>着急赚钱 <span>v1.2</span></h1>
        </div>
        <a  id="toggle">
            <span class="entypo-menu" @click="showorh"></span>
        </a>
    </div>

    <div class="skin-part">
        <div id="tree-wrap">
        <div class="side-bar">
        <el-menu class="topnav menu-left-nest" default-active="1-1-1"  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <li>    
            <b style="border-left:0px solid!important;" class="title-menu-left" v-show="!isCollapse">
                <span class="">线索管理</span>
                <i data-toggle="tooltip" class="entypo-cog pull-right config-wrap"></i>
            </b>
        </li>
        <el-submenu index="1">
            <template slot="title" class="tooltip-tip ajax-load" >
              <a>
                <i class="icon-feed"></i>线索管理
              </a>
            </template>
            <el-menu-item-group class="heipad">
               <el-menu-item class="clearsty" index="1-1"><router-link :to="{path:'clueadd',query:{breadNum:1}}"> 录入线索</router-link></el-menu-item>
                <el-menu-item class="clearsty" index="1-2"><router-link :to="{path:'clue',query:{breadNum:1}}">线索列表</router-link></el-menu-item>
            </el-menu-item-group>   
        </el-submenu>
        <el-menu-item index="2">
             <template slot="title" class="tooltip-tip ajax-load">
               <router-link to="/">
                  <i class="icon-feed"></i>数据统计
               </router-link>
            </template>
        </el-menu-item>
         <el-menu-item index="3">
             <template slot="title" class="tooltip-tip ajax-load">
                <router-link :to="{path:'timeout',query:{breadNum:1}}">
                  <i class="icon-feed"></i>超期提醒
                </router-link>
            </template>
            
        </el-menu-item>
        <el-menu-item index="4">
            <template slot="title" class="tooltip-tip ajax-load">
               <router-link to="/timeout">
                <i class="icon-feed"></i>登记发放
              </router-link>
            </template>    
        </el-menu-item>
        <el-menu-item index="5">
             <template slot="title" class="tooltip-tip ajax-load">
               <router-link to="/timeout">
                <i class="icon-feed"></i>案件文书&文登号登记
                </router-link>
               </template>
             
        </el-menu-item>
        </el-menu>
    </div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: "menuslider",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    showorh() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>


<style scoped>
.topnav {
  margin: 10px;
  position: relative;
  top: -18px;
}
a {
  cursor: pointer;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
.topnav a {
  width: 190px;
  height: 56px;
  line-height: 56px !important;
}
.clearsty {
  line-height: 50px;
}
#tree-wrap {
  height: auto;
}
#skin-select i.el-icon-arrow-down {
  position: absolute;
  left: auto;
  top: 50%;
}
#skin-select .icon-feed {
  top: 0px;
}
.el-menu {
  border-right: none;
}
#sb-site .el-menu-item > span,
#sb-site .el-submenu__title > span {
  color: #fff;
  font-size: 14px;
}
.ul.topnav ul {
  display: block;
}
.el-menu--inline {
  background-color: transparent;
}
.el-menu-item-group .el-menu-item {
  line-height: 50px !important;
  font-size: 14px !important;
}
.clearsty {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.clearsty a,
.clearsty a:hover {
  background: transparent;
  line-height: 30px;
}
#logo {
  top: -21px;
}
#toggle {
  top: 5px;
}
</style>

