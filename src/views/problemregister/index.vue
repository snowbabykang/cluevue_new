<template>
  <div>
    <div class="row">  
      <div id="paper-top">
        <div class="col-lg-3">
          <h2 class="tittle-content-header">
            <i class="icon-window"></i>
            <span>问题线索处置情况列表、详情</span>
          </h2>
        </div>
        <div class="col-sm-7">
                        <div class="devider-vertical visible-lg"></div>
                        <div class="tittle-middle-header">

                        </div>

                    </div>
      </div>
    </div> 
    <div class="row">
        <breadcrumb></breadcrumb>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div style="padding:15px">
           <table class="table-striped footable-res footable metro-blue" style="width:100%">
          <thead>
            <tr>
              <th>线索来源</th>
              <th>线索编号</th>
              <th>被反映人</th>
              <th>级别</th>
              <th>操作</th>
            </tr>
            </thead>
                <tbody>
                  <tr v-for="(item,index) in datalist" :key="index">
                      <td>{{item.clue_source}}</td>
                      <td>{{item.clue_number}}</td>
                      <td>{{item.user_number}}</td>
                      <td>{{item.clue_agency}}</td>
                      <td><el-button size="mini" type="primary" @click="infoopen(item.clue_number)">查看</el-button></td>
                  </tr>
                </tbody>
            </table>
             <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="current_page"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="20"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totaldata">
            </el-pagination>
        </div>
          
      </div>
    </div>

     <el-dialog title="问题线索处置情况详情" :visible.sync="showmodel" width="1000px" :modal-append-to-body="false">
            <infomodel v-on:closemodel="closeprop" :modelinfo="idinfo"></infomodel>
        </el-dialog>
  </div>
</template>
<script>
import infomodel from './info.vue'
export default {
  data() {
    return {
      cluefrom:'',
      index:1,
      size:20,
      current_page:1,
      totaldata:1,
      datalist:[],
      showmodel:false,
      idinfo:{}
    };
  },
  components:{
    'infomodel':infomodel
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
      this.$ajax.post("/api/clue/problem_clues_list",{
        page:this.index,
        pagesize:this.size
      }).then((res)=>{
        this.datalist = res.data.data
       // this.totaldata = res.data.l
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
    async infoopen(id){
        this.infoid = id
        this.$ajax.post("/api/clue/problem_clues_list",{
            clue_number:id,
        }).then((res)=>{
            this.idinfo = res.data
            console.log(this.idinfo)
            // this.totaldata = res.data.l
        })
        this.showmodel = true
    },
    closeprop(){
        this.showmodel = false;
        this.getdata()
    },
    view(id){
      console.log(id)
    }
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
