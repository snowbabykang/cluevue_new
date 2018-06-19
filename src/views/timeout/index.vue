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

                        </div>

                    </div>
      </div>
    </div> 
    <div class="row">
        <breadcrumb></breadcrumb>
    </div>
    <div class="col-md-12">
        <publicsearch modeltitle="快速查询">
            <div class="row">
                <div class="col-md-12">
                    <el-form :inline="true" :model="cluefrom" class="demo-form-inline" >
                        <el-form-item label="请选择时间">
                        <el-date-picker size="small" v-model="datatime" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
                                </el-date-picker>
                    </el-form-item>	
                    <el-form-item label="线索来源">
                        <el-input  size="small" v-model="cluefrom.source" placeholder="请选择线索来源"></el-input>
                        <!-- <el-select size="small" v-model="cluefrom.keyword" placeholder="请选择线索来源">
                            <el-option v-for="item in dicdata.source.data" :key="item.id" :label="item.title" :value="item.title">
                            </el-option>
                        </el-select> -->
                    </el-form-item>
                    <!-- <el-form-item label="关键字">
                        <el-input  size="small" v-model="cluefrom.keyword" placeholder="请输入线索来源、被反映人姓名"></el-input>
                    </el-form-item> -->
                    <el-form-item>
                        <el-button size="small" type="primary" @click="searchdata" style="margin-left:15px">查询</el-button>
                    </el-form-item>
                    </el-form>
                </div>
                
            </div>


        </publicsearch>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div style="padding:15px">
           <table class="table-striped footable-res footable metro-blue" style="width:100%">
          <thead>
            <tr>
              <th class="footable-sortable footable-last-column" :class="cluefrom.orders[0].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('source_dic')">线索来源I级<span class="footable-sort-indicator"></span></th>
              <th class="footable-sortable footable-last-column " :class="cluefrom.orders[1].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('source')">线索来源II级<span class="footable-sort-indicator"></span></th>
              <th class="footable-sortable footable-last-column " :class="cluefrom.orders[2].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('number')">编号<span class="footable-sort-indicator"></span></th>
              <th class="footable-sortable footable-last-column " :class="cluefrom.orders[3].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('reflected_name')">被反映人<span class="footable-sort-indicator"></span></th>
              <th class="footable-sortable footable-last-column " :class="cluefrom.orders[4].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('closed_time')">结案日期<span class="footable-sort-indicator"></span></th>
              <th class="footable-sortable footable-last-column " :class="cluefrom.orders[5].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('news')">剩余天数<span class="footable-sort-indicator"></span></th>
              <th class="footable-sortable footable-last-column " :class="cluefrom.orders[6].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('days')">消息时间<span class="footable-sort-indicator"></span></th>
              <th>操作</th>
            </tr>
            </thead>
                <tbody>
                  <tr v-for="(item,index) in datalist" :key="index">
                      <td>{{item.source_dic}}</td>
                      <td>{{item.source}}</td>
                      <td>{{item.number}}</td>
                      <td>{{item.reflected_name}}</td>
                      <td>{{item.closed_time}}</td>
                      <td>距离结案日期还有 <span class="status-metro status-suspended">{{item.days}}</span> 天</td>
                      <td>{{item.news}}</td>
                      <td><el-button size="mini" type="primary" @click="view(item.clue_id)">查看</el-button></td>
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
              :total="total">
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
      cluefrom: {
        beginDate: "",
        endDate: "",
        source: "",
        orders: [
          {
            column: "source_dic",
            order: 1
          },
          {
            column: "source",
            order: 1
          },
          {
            column: "number",
            order: 1
          },
          {
            column: "reflected_name",
            order: 1
          },
          {
            column: "closed_time",
            order: 1
          },
          {
            column: "news",
            order: 1
          },
          {
            column: "days",
            order: 1
          }
        ]
      },
      index: 1,
      size: 20,
      current_page: 1,
      total: 1,
      datatime: "",
      datalist: [],
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  computed: {
    searchback: function() {
      return this.cluefrom;
    },
    dicdata: function() {
      return this.$store.state.dicdata;
    }
  },
  watch: {
    datatime: function() {
      if (this.datatime == null) {
        (this.cluefrom.beginDate = ""), (this.topdata.endDate = "");
      } else {
        let startTime = new Date(this.datatime[0]);
        let endTime = new Date(this.datatime[1]);
        this.cluefrom.beginDate =
          startTime.getFullYear() +
          "-" +
          (startTime.getMonth() + 1) +
          "-" +
          startTime.getDate();
        this.cluefrom.endDate =
          endTime.getFullYear() +
          "-" +
          (endTime.getMonth() + 1) +
          "-" +
          endTime.getDate();
      }
    }
  },
  methods: {
    searchdata: function() {
      this.getdata();
    },
    ordersdata: function(key) {
			this.cluefrom.orders.forEach((e, k, arr) => {
				if (e.column == key) {
					e.order = (e.order == "1") ? '0' : '1'
				}
			})
			this.getdata()

		},
    getdata: function(data = {}) {
        var arrtep = []
			for (var i in this.cluefrom.orders) {
				if (this.cluefrom.orders[i].order == 0) {
					arrtep.push(this.cluefrom.orders[i])
				}
			}
      this.$ajax
        .post("/api/clue/overdue", {
          page: this.index,
          pagesize: this.size,
        //   keyword: this.cluefrom.keyword,
          source: this.cluefrom.source,
          beginDate: this.cluefrom.beginDate,
          endDate: this.cluefrom.endDate,
          orders: arrtep
        })
        .then(res => {
            console.log(res)
          this.datalist = res.data.data;
          this.total = res.data.total.total;
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.getdata();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.index = val;
      this.getdata();
    },
    view(id) {
      this.$router.push({
        path: "clueview",
        query: {
          clue_id: id,
          name: '1'
        }
      });
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
