<template>
  <div>
    <div class="row">  
      <div id="paper-top">
        <div class="col-lg-3">
          <h2 class="tittle-content-header">
            <i class="icon-window"></i>
            <span>线索列表</span>
          </h2>
        </div>
        <div class="col-sm-7">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="tittle-middle-header">

                            <div class="alert">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                <span class="tittle-alert entypo-info-circled"></span>
                                Welcome back,&nbsp;
                                <strong>Dave mattew!</strong>&nbsp;&nbsp;Your last sig in at Yesterday, 16:54 PM
                            </div>


                        </div>

                    </div>
      </div>
    </div> 
    <div class="row">
      <ul id="breadcrumb">
        <li>
          <span class="entypo-home"></span>
        </li>
        <li><i class="fa fa-lg fa-angle-right"></i>
        </li>
        <li><a href="#" title="Sample page 1">线索管理</a>
        </li>
        <li><i class="fa fa-lg fa-angle-right"></i>
        </li>
        <li><a href="#" title="Sample page 1">线索列表</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-12">
        <publicsearch modeltitle="快速查询">    
          <el-input class="col-md-3" v-model="cluefrom" placeholder="输入线索来源"></el-input>
          <el-button type="primary" @click="searchdata" style="margin-left:15px">查询</el-button>
          <el-button type="primary" style="margin-left:15px">高级筛选</el-button>
        </publicsearch>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div style="padding:15px">
            <el-tabs type="card">
            <el-tab-pane label="问题线索">用户管理</el-tab-pane>
            <el-tab-pane label="案件管理">案件管理</el-tab-pane>
            <el-tab-pane label="公文管理">公文管理</el-tab-pane>
          </el-tabs>
        </div>
          
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cluefrom:''
    };
  },
  methods:{
    searchdata:function(){
      console.log(this.cluefrom)
    },
    getlist:function(data={}){
      this.$ajax.post("").then
    }
  },
  created:{
    //this.getlist()
  }
};
</script>
<style scoped>
  .el-tabs__nav-wrap {
    background-color: #fff
  }
</style>
