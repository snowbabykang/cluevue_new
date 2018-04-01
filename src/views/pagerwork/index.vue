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
              <div class="block pull-left">
                  <label>请选择时间</label>
                  <el-date-picker size="small"
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
              <div class="block pull-left ml-lg">
                <label>发文类型</label>
                <el-select size="small" v-model="document_type" clearable placeholder="请选择发文类型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              </div>
              <div class="block pull-left ml-lg form-group">      
                <el-input size="small" v-model="document_user" placeholder="输入发件人"></el-input>
              </div>
              <div class="block pull-left ml-lg">
                  <el-button type="primary" size="small" @click="searchdata" style="margin-left:15px">查询</el-button>
                  <el-button type="primary" size="small" style="margin-left:15px" @click="topsearch">新增</el-button>
                  <el-button type="primary" size="small" style="margin-left:15px" @click="topsearch">打印</el-button>
                  <el-button type="primary" size="small" style="margin-left:15px" @click="topsearch">导出excel</el-button>
              </div>
            </div>
          </div>
        </publicsearch>
      </div>
       <div class="col-md-12">
            <div style="padding:15px">
                <tableModel otherconfig=" " v-bind:tabtitle="askmodel" posturl="/api/document/list"/>
            </div> 
        </div> 
    </div> 
</template>

<script>
export default {
  data() {
    return {
        orders:[],
        document_type:'',
        document_user:'',
        askmodel:[
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
      ]
    };
  }
};
</script>

