<template>
  <div>
    <div class="row">  
      <div id="paper-top">
        <div class="col-lg-3">
          <h2 class="tittle-content-header">
            <i class="icon-window"></i>
            <span>超期提醒</span>
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
    </div> 
    <div class="row">
        <breadcrumb></breadcrumb>
      <!-- <ul id="breadcrumb">
        <li>
          <span class="entypo-home"></span>
        </li>
        <li><i class="fa fa-lg fa-angle-right"></i>
        </li>
        <li><a href="#" title="Sample page 1">超期提醒</a>
        </li>
        
      </ul> -->
    </div>
    <div class="row">
      <div class="col-md-12">
        <div style="padding:15px">
            <tableModel v-bind:tabtitle="askmodel"/>
        </div>
          
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cluefrom:'',
      askmodel:[{
        name:"序号",
        en:"num"
      },{
        name:"线索来源",
        en:"num"
      },{
        name:"编号",
        en:"num"
      },{
        name:"被反映人",
        en:"num"
      },{
        name:"结案日期",
        en:"num"
      },{ 
        name:"剩余天数",
        en:"num"
      },{
        name:"消息时间",
        en:"num"
      }]
    };
  },
  computed:{
    searchback:function(){
      return this.cluefrom
    }
  },
  methods:{
    searchdata:function(){
      console.log(this.cluefrom)
    },
    getlist:function(data={}){
      this.$ajax.post("").then
    }
  }
};
</script>
<style scoped>
  .el-tabs__nav-wrap {
    background-color: #fff
  }
</style>
