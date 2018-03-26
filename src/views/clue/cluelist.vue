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
                <span class="tittle-alert entypo-info-circled"></span>当前查询条件,&nbsp;<strong>{{searchback}}</strong>
              </div>
            </div>
          </div>
        </div>
     
    
      <breadcrumb></breadcrumb>
      <div class="col-md-12">
        <publicsearch modeltitle="快速查询">
          <div class="row">
            <div class="col-md-12">
              <div class="block pull-left" v-if="showmore">
                  <label>请选择时间</label>
                  <el-date-picker
                  v-model="value7"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="this.$store.state.pickerOptions2">
                </el-date-picker>
              </div>
              <div class="block pull-left ml-lg"  v-if="showmore">
                <label>线索来源</label>
                <el-select v-model="source" clearable placeholder="请选择线索来源">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              </div>
               <div class="block pull-left ml-lg"  v-if="showmore">
                <label>单位</label>
                <el-select v-model="company" clearable placeholder="请选择单位">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              </div>
              <div class="block pull-left ml-lg"  v-if="showmore">
                <label>职位</label>
                <el-select v-model="post" clearable placeholder="请选择职位">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              </div>
              <div class="block pull-left ml-lg"  v-if="showmore">
                <label>级别</label>
                <el-select v-model="level" clearable placeholder="请选择级别">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              </div>
              <div class="block pull-left ml-lg"  v-if="showmore">
                <label>单位</label>
                <el-select v-model="company" clearable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="block pull-left ml-lg form-group">
                
                <el-input v-model="keyword" placeholder="输入线索来源"></el-input>
              </div>
              <div class="block pull-left ml-lg">
                  <el-button type="primary" @click="searchdata" style="margin-left:15px">查询</el-button>
                  <el-button type="primary" style="margin-left:15px" @click="topsearch">高级筛选</el-button>
              </div>
            </div>
          </div>
          
          
        </publicsearch>
      </div>
    
    
      <div class="col-md-12">
        <div style="padding:15px">
            <el-tabs type="card">
            <el-tab-pane label="问题线索">
                <tableModel otherconfig="ts_ackmodel" v-bind:tabtitle="askmodel" posturl="/api/clue/clue_keyword_search"/>
            </el-tab-pane>
            <el-tab-pane label="案件管理">
                <el-tabs tab-position="left" style="height:600px;">
                  <el-tab-pane label="线索部分">
                    <tableModel otherconfig="ts_ackmodel" v-bind:tabtitle="askmodel" posturl="/api/clue/clue_keyword_search"/>
                  </el-tab-pane>
                  <el-tab-pane label="立案部分">
                    <tableModel otherconfig="ts_ackmodel" v-bind:tabtitle="askmodel" posturl="/api/clue/clue_keyword_search"/>
                  </el-tab-pane>
                </el-tabs>

             
            </el-tab-pane>
            <el-tab-pane label="公文管理">
                <tableModel otherconfig="ts_ackmodel" v-bind:tabtitle="askmodel" posturl="/api/clue/clue_keyword_search"/>
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
          en: "index"
        },
        {
          name: "线索来源",
          en: "source"
        },
        {
          name: "编号",
          en: "number"
        },
        {
          name: "被反映人",
          en: "reflected_name"
        },
        {
          name: "入库时间",
          en: "created_at"
        },
        {
          name: "单位",
          en: "company"
        },
        {
          name: "职位",
          en: "post"
        },
        {
          name: "级别",
          en: "level"
        },
        {
          name: "状态",
          en: "clue_state"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value4: "",
      
      value7: "",
      showmore:false
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
     // this.$ajax.post("").then;
    },
    topsearch:function(){
      this.showmore = !this.showmore;
    }
  },
  watch:{
      value7:function(n,o){
        console.log(n,o)
      }
    },
  // created(){
  //    //this.getlist()
     
  // },
  mounted(){
    console.log()
  }
};
</script>
<style scoped>
.el-tabs__nav-wrap {
  background-color: #fff;
}
.el-tabs__header {
  margin-bottom: 0px !important;
}
.block{
  margin-bottom:15px
}
</style>
