<template>
  <div>
    <div class="row">  
      <div id="paper-top">
        <div class="col-lg-3">
          <h2 class="tittle-content-header">
            <i class="icon-window"></i>
            <span>立案案件登记表</span>
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
              <th>工作单位</th>
              <th>职务</th>
              <th>详情</th>
            </tr>
            </thead>
                <tbody>
                  <tr v-for="(item,index) in datalist" :key="index">
                      <td>{{item.case_source}}</td>
                      <td>{{item.case_num}}</td>
                      <td>{{item.reflected_name}}</td>
                      <td>{{item.company}}</td>
                      <td>{{item.level}}</td>
                      <td><el-button size="mini" type="primary" @click="infoopen(item.case_num)">查看</el-button></td>
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
     <el-dialog title="立案案件登记情况详情" :visible.sync="showmodel" width="1000px" :modal-append-to-body="false">
            <infomodel v-on:closemodel="closeprop" :modelinfo="idinfo"></infomodel>
        </el-dialog>
  </div>
</template>
<script>
import infomodel from './info.vue'
export default {
  data() {
    return {
      cluefrom: "",
      page: 1,
      pagesize: 20,
      current_page: 1,
      totaldata: 1,
      datalist: [],
      showmodel:false,
      idinfo:{}
    };
  },
  components:{
    'infomodel':infomodel
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
     infoopen:function(id){
        this.infoid = id
        this.$ajax.post("/api/cases/list",{
            case_num:id,
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
    getdata: function(data = {}) {
      this.$ajax
        .post("/api/cases/list", {
          page: this.page,
          pagesize: this.pagesize
        })
        .then(res => {
          this.datalist = res.data.data;
          this.totaldata = res.data.total
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.getdata();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.getdata();
    },
    view(id) {
      console.log(id);
    }
  },
  created() {
    this.getdata();
  }
};
</script>
<style scoped>
.el-tabs__nav-wrap {
  background-color: #fff;
}
</style>
