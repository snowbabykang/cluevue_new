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
           <table class="table-striped footable-res footable metro-blue" style="width:100%">
          <thead>
            <tr>
              <th>线索来源</th>
              <th>编号</th>
              <th>被反映人</th>
              <th>结案日期</th>
              <th>剩余天数</th>
              <th>消息时间</th>
            </tr>
            </thead>
                <tbody>
                  <tr v-for="(item,index) in datalist" :key="index">
                      <td>{{item.source}}</td>
                      <td>{{item.number}}</td>
                      <td>{{item.reflected_name}}</td>
                      <td>{{item.closed_time}}</td>
                      <td>距离结案日期还有 <span class="status-metro status-suspended">{{item.remind_days}}</span> 天</td>
                      <td>{{item.number}}</td>
                  </tr>
                </tbody>
            </table>
             <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="current_page"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totaldata">
            </el-pagination>
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
      index:1,
      size:10,
      current_page:1,
      totaldata:1,
      datalist:[]
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
    getdata:function(data={}){
      this.$ajax.post("/api/clue/overdue",{
        page:this.index,
        pagesize:this.size
      }).then((res)=>{
        this.datalist = res.data.data,
        this.totaldata = res.data.total
      })
    },
    handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.size = val
			this.getdata()
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.index = val;
			this.getdata()
		},
  },
  created(){
    this.getdata()
  }
};

</script>
<style scoped>
  .el-tabs__nav-wrap {
    background-color: #fff
  }
</style>
