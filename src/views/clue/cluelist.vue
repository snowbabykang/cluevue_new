<template>
  <div>
      
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
                                当前查询条件,&nbsp;
                                <strong>{{searchback}}</strong>
                            </div>


                        </div>

                    </div>
      </div>
     
    
      <breadcrumb></breadcrumb>
      <!-- <ul id="breadcrumb">
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
      </ul> -->
   
    
      <div class="col-md-12">
        <publicsearch modeltitle="快速查询">    
          <el-input class="col-md-3" v-model="cluefrom" placeholder="输入线索来源"></el-input>
          <el-button type="primary" @click="searchdata" style="margin-left:15px">查询</el-button>
          <el-button type="primary" style="margin-left:15px">高级筛选</el-button>
        </publicsearch>
      </div>
    
    
      <div class="col-md-12">
        <div style="padding:15px">
            <el-tabs type="card">
            <el-tab-pane label="问题线索">
                <tableModel v-bind:tabtitle="askmodel"/>
            </el-tab-pane>
            <el-tab-pane label="案件管理">
              <tableModel tabtitle=""/>
            </el-tab-pane>
            <el-tab-pane label="公文管理">
              <tableModel tabtitle=""/>
            </el-tab-pane>
          </el-tabs>
        </div>
          
      </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      cluefrom: "",
      askmodel: [
        {
          name: "序号",
          en: "num"
        },
        {
          name: "线索来源",
          en: "num"
        },
        {
          name: "编号",
          en: "num"
        },
        {
          name: "被反映人",
          en: "num"
        },
        {
          name: "单位",
          en: "num"
        },
        {
          name: "职位",
          en: "num"
        },
        {
          name: "级别",
          en: "num"
        },
        {
          name: "状态",
          en: "num"
        }
      ]
    };
  },
  computed: {
    searchback: function() {
      return this.cluefrom;
    }
  },
  methods: {
    searchdata: function() {
      console.log(this.cluefrom);
    },
    getlist: function(data = {}) {
      this.$ajax.post("").then;
    }
  }
  // created:{
  //   //this.getlist()
  // },
  // mounted(){

  // }
};
</script>
<style scoped>
.el-tabs__nav-wrap {
  background-color: #fff;
}
</style>
