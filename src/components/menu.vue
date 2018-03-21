<template>
<div id="skin-select">
  <div>
        <div id="logo">
         <h1>着急赚钱 <span>v1.2</span></h1>
        </div>

        <a  id="toggle">
            <span class="entypo-menu"></span>
        </a>
        <!-- <div class="dark">
            <form action="#">
                <span>
                    <input type="text" name="search" value="" class="search rounded id_search" placeholder="Search Menu..." autofocus="">
                </span>
            </form>
        </div> -->
        <div  v-if="false" class="skin-part">
            <div id="tree-wrap">
                <div class="side-bar">
                    <ul class="topnav menu-left-nest"   >
                        <li>
                            <b style="border-left:0px solid!important;" class="title-menu-left">
                                <span class="">线索管理</span>
                                <i data-toggle="tooltip" class="entypo-cog pull-right config-wrap"></i>
                            </b>
                            
                        </li>
                         <li>
                            <a class="tooltip-tip ajax-load" title="线索管理">
                                <i class="icon-feed"></i>
                                <span>线索管理</span>
                            </a>
                             <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="blog-list.html" title="Blog List"><i class="entypo-doc-text"></i><span>线索列表</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="blog-detail.html" title="Blog Detail"><i class="entypo-newspaper"></i><span>新建线索</span></a>
                                </li>
                            </ul>
                        </li>



                        <li>
                            <a class="tooltip-tip ajax-load" title="数据统计">
                                <i class="icon-document-edit"></i>
                                <span>数据统计</span>

                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="blog-list.html" title="Blog List"><i class="entypo-doc-text"></i><span>案件数量趋势</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="blog-detail.html" title="Blog Detail"><i class="entypo-newspaper"></i><span>各职级案件比例</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="blog-detail.html" title="Blog Detail"><i class="entypo-newspaper"></i><span>未结案件比例</span></a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="tooltip-tip ajax-load" title="登记发放">
                                <i class="icon-feed"></i>
                                <span>登记发放</span>

                            </a>
                        </li>
                        <li>
                            <a class="tooltip-tip ajax-load" title="案件文书&文登号登记">
                                <i class="icon-camera"></i>
                                <span>案件文书&文登号登记</span>

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
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
  width: 200px;
  min-height: 400px;
}
#tree-wrap {
  height: auto;
}
</style>