<template>
<div>
  <div class="row">
            <div id="paper-top">
                <div class="col-lg-3">
                    <h2 class="tittle-content-header">
                        <i class="icon-window"></i>
                        <span>案件数量趋势</span>
                    </h2>
                </div>
                <div class="col-sm-7">
                    <div class="devider-vertical visible-lg"></div>
                    <div class="tittle-middle-header">
                        
                    </div>
                </div>
            </div>
    </div>
    <breadcrumb></breadcrumb>
    <div class="row">
    <div class="col-md-12">

		<publicsearch modeltitle="快速查询">
            <el-form :inline="true" :model="topdata" class="demo-form-inline" >
                <el-form-item label="请选择时间" >
                    <el-col :span="11">
                        <el-date-picker size="small"  type="date" placeholder="选择日期" v-model="topdata.entry_start_time" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" style="text-aline:center" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-date-picker size="small"  type="date" placeholder="选择日期" v-model="topdata.entry_end_time" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="地区">
                    <el-col :span="11">
						<el-select size="small" v-model="topdata.level" placeholder="请选择级别">
							<el-option v-for="item in dicdata.rank2.data" :key="item.id" :label="item.title" :value="item.code">
							</el-option>
						</el-select>
                    </el-col>
                    <el-col class="line" style="text-aline:center" :span="2">-</el-col>
                     <el-col :span="11">
						<el-select size="small" v-model="topdata.level" placeholder="请选择级别">
							<el-option v-for="item in dicdata.rank2.data" :key="item.id" :label="item.title" :value="item.code">
							</el-option>
						</el-select>
                    </el-col>
					</el-form-item>
                    <el-form-item>
						<el-button size="small" type="primary" @click="searchdata" style="margin-left:15px">查询</el-button>
					</el-form-item>
            </el-form>  
        </publicsearch>
    </div>
    </div>
    <div class="col-md-12">
        <div id="echartthis" style="height:300px;background:#fff" :style="{scrwid}" ref="myEchart">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
		<div style="padding:15px">

			<table class="table-striped footable-res footable metro-blue" style="width:100%">
				<thead>
					<tr>
						<th>序号</th>
						<th>线索来源</th>
						<th class="footable-sortable footable-last-column " :class="topdata.orders[0].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('number')">
							编号
							<span class="footable-sort-indicator"></span>
						</th>
						<th class="footable-sortable footable-last-column" :class="topdata.orders[1].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('reflected_name')">
							被反映人
							<span class="footable-sort-indicator"></span></th>
						<th class="footable-sortable footable-last-column" :class="topdata.orders[2].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('company')">
							单位
							<span class="footable-sort-indicator"></span></th>
						<th class="footable-sortable footable-last-column" :class="topdata.orders[3].order==1?'footable-sorted-desc':'footable-sorted'" width="250">
							<div class="block" style="display:inline-block; margin-bottom:0">
								<span class="demonstration">职位</span>
								<el-cascader size="mini" :options="selectoptions" v-model="topdata.whereIn" @change="handleChange">
								</el-cascader>
							</div>
							<span class="footable-sort-indicator" @click="ordersdata('post')"></span>
						</th>
						<th class="footable-sortable footable-last-column" :class="topdata.orders[4].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('level')">
							级别
							<span class="footable-sort-indicator"></span>
						</th>
						
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in tableData" :key="index">
						<td>{{index+1}}</td>
						<td>{{item.source}}</td>
						<td>{{item.number}}</td>
						<td>{{item.reflected_name}}</td>
						<td>{{item.company}}</td>
						<td>{{item.post}}</td>
						<td>{{item.level}}</td>
						
					</tr>
				</tbody>
			</table>

			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="current_page" :page-sizes="[5, 10, 20, 50]" :page-size="20" layout="total, sizes, prev, pager, next, jumper" :total="totaldata">
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
      datatime: "",
      current_page: 1,
	totaldata: 1,
      topdata: {
        entry_start_time:'',
        entry_end_time:'',
        document_type: "",
        document_user: "",
        orders:[{
			column: 'number',
			order: 1
		}, {
			column: 'reflected_name',
			order: 1
		}, {
			column: 'company',
			order: 1
		}, {
			column: 'post',
			order: 1
		}, {
			column: 'level',
			order: 1
        }],
        index: 1,
		size: 1
      },
      scrwid:{
          width:'800px'
      }     
    };
  },
  computed: {
    dicdata: function() {
      return this.$store.state.dicdata;
    }
  },
  methods: {
    searchdata: function() {
			this.getdata()
		},
		ordersdata: function(key) {
			this.postdata.orders.forEach((e, k, arr) => {
				if (e.column == key) {
					e.order = (e.order == "1") ? '0' : '1'
				}
			})
			this.getdata()

        },
        tablecha: function(e) {
			this.postdata.orders.column = e.prop
			this.postdata.orders.order = e.order == "descending" ? '0' : '1'
			this.getdata()
        },
        handleChange(value) {
			this.getdata()
        },
        handleSizeChange(val) {
			//consoleconsole.log(`每页 ${val} 条`);
			this.postdata.size = val
			this.getdata()
		},
		handleCurrentChange(val) {
			//console.log(`当前页: ${val}`);
			this.postdata.index = val;
			this.getdata()
		},
		getdata() {
			let pdata = {};
			var tempdata = this.cloneobj(pdata);
			var arrtep = []
			for (var i in pdata.orders) {
				if (pdata.orders[i].order == 0) {
					arrtep.push(pdata.orders[i])
				}
			}
			
			tempdata.orders = arrtep
			this.$ajax.post(urls, tempdata).then((res) => {
				this.tableData = res.data.data;
				this.current_page = res.data.current_page;
				this.totaldata = res.data.total;
			})
		},
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('echartthis'))
      // 绘制图表
      myChart.setOption({
       // title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  },
  mounted(){
    this.scrwid.width = this.$el.clientWidth-30 + 'px'
    console.log(this.$el.clientWidth)
    this.drawLine();
  }
};
</script>