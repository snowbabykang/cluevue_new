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
				<!-- <div class="alert">
					<button type="button" class="close">×</button>
					<span class="tittle-alert entypo-info-circled"></span>当前查询条件,&nbsp;<strong>{{searchback}}</strong>
				</div> -->
			</div>
		</div>
	</div>

	<breadcrumb></breadcrumb>
	<div class="col-md-12">
		<publicsearch modeltitle="快速查询">
			<div class="row">
				<div class="col-md-12">
					<el-form :inline="true" :model="topdata" class="demo-form-inline" >
                    <!--<el-form-item label="线索来源">
						<el-input  size="small" v-model="postdata.source_dic" placeholder="请输入线索来源"></el-input>
						<el-select size="small" v-model="topdata.source" placeholder="请选择线索来源">
							<el-option v-for="item in dicdata.source.data" :key="item.id" :label="item.title" :value="item.title">
							</el-option>
						</el-select>
					</el-form-item> -->
                    <!-- <el-form-item label="线索来源">
						<el-select size="small" v-model="postdata.source" placeholder="请选择线索来源">
							<el-option v-for="item in dicdata.source.data" :key="item.id" :label="item.title" :value="item.title">
							</el-option>
						</el-select>
					</el-form-item> -->
                    <el-form-item label="关键字">
						<el-input  size="small" v-model="postdata.keyword" placeholder="请输入线索来源、被反映人姓名"></el-input>
					</el-form-item>
					<el-form-item label="请选择时间" v-show="showmore">
						<el-date-picker size="small" v-model="datatime" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
                                </el-date-picker>
					</el-form-item>	
					<!-- <div class="block pull-left" v-show="showmore">
						<label>请选择时间</label>
						<el-date-picker size="small" v-model="datatime" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
						</el-date-picker>
					</div> -->
					<el-form-item label="线索来源" v-show="showmore">
						<el-input  size="small" v-model="topdata.source" placeholder="请输入线索来源"></el-input>
						<!--<el-select size="small" v-model="topdata.source" placeholder="请选择线索来源">
							<el-option v-for="item in dicdata.source.data" :key="item.id" :label="item.title" :value="item.title">
							</el-option>
						</el-select> -->
					</el-form-item>
					<!-- <div class="block pull-left ml-lg" v-show="showmore">
						<label>线索来源</label>
						<el-select size="small" v-model="topdata.source" clearable placeholder="请选择线索来源">
							<el-option v-for="item in dicdata.source.data" :key="item.id" :label="item.title" :value="item.code">
							</el-option>
						</el-select>
					</div> -->					
					<el-form-item label="职位" v-show="showmore">
						<el-input  size="small" v-model="topdata.post" placeholder="请输入职位"></el-input>
					</el-form-item>

					<el-form-item label="级别" v-show="showmore">
						<el-select size="small" clearable v-model="postdata.level" placeholder="请选择级别">
							<el-option v-for="item in dicdata.rank.data" :key="item.id" :label="item.title" :value="item.title">
							</el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="单位" v-show="showmore">
						<el-input  size="small" v-model="topdata.company" placeholder="请输入单位"></el-input>
					</el-form-item>
					
					
					
					<el-form-item>
						<el-button size="small" type="primary" @click="searchdata" style="margin-left:15px">查询</el-button>
						<el-button size="small" type="primary" style="margin-left:15px" @click="topsearch">高级筛选</el-button>
						<el-button size="small" type="primary" style="margin-left:15px" @click="clearsearch" v-show="showmore">清除筛选</el-button>
					</el-form-item>
					</el-form>
				</div>
				
			</div>


		</publicsearch>
	</div>


	<div class="col-md-12">
		<div style="padding:15px">

			<table class="table-striped footable-res footable metro-blue" style="width:100%">
				<thead>
					<tr>
						<th>序号</th>
						<th class="footable-sortable footable-last-column " :class="postdata.orders[6].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('source_dic')">
                            线索来源I级
                            <span class="footable-sort-indicator"></span>
                            </th>
                        <th class="footable-sortable footable-last-column " :class="postdata.orders[7].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('source')">
                            线索来源II级
                            <span class="footable-sort-indicator"></span>
                            </th>
						<th class="footable-sortable footable-last-column " :class="postdata.orders[0].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('number')">
							编号
							<span class="footable-sort-indicator"></span>
						</th>
						<th class="footable-sortable footable-last-column" :class="postdata.orders[1].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('reflected_name')">
							被反映人
							<span class="footable-sort-indicator"></span></th>
						<th class="footable-sortable footable-last-column" :class="postdata.orders[2].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('company')">
							单位
							<span class="footable-sort-indicator"></span></th>
						<th class="footable-sortable footable-last-column" :class="postdata.orders[3].order==1?'footable-sorted-desc':'footable-sorted'" width="100" @click="ordersdata('post')">
							<!-- <div class="block" style="display:inline-block; margin-bottom:0">
								<span class="demonstration">职位</span>
								<el-cascader size="mini" :options="selectoptions" v-model="topdata.whereIn" @change="handleChange">
								</el-cascader>
							</div> -->
							职位
							<span class="footable-sort-indicator" ></span>
						</th>
						<th class="footable-sortable footable-last-column" :class="postdata.orders[4].order==1?'footable-sorted-desc':'footable-sorted'" width="250">
							
							<div class="block" style="display:inline-block; margin-bottom:0">
								<span class="demonstration">级别</span>
								<el-select clearable size="small" v-model="postdata.level" placeholder="请选择级别" @change="searchdata">
									<el-option v-for="item in dicdata.rank.data" :key="item.id" :label="item.title" :value="item.title">
									</el-option>
								</el-select>
							</div>
							
							<span class="footable-sort-indicator" @click="ordersdata('level')"></span>
						</th>
						<th class="footable-sortable footable-last-column" :class="postdata.orders[5].order==1?'footable-sorted-desc':'footable-sorted'"  width="250" @click="ordersdata('clue_state')">
							
							<div class="block" style="display:inline-block; margin-bottom:0">
								<span class="demonstration">状态</span>
								<el-select clearable size="small" v-model="postdata.clue_state" placeholder="请选择状态" @change="searchdata">
									<el-option v-for="item in dicdata.clue_state.data" :key="item.id" :label="item.title" :value="item.title">
									</el-option>
								</el-select>
							</div>

							<span class="footable-sort-indicator"></span>
						</th>

						<th width="160">操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in tableData" :key="index">
						<td>{{index+1}}</td>
						<td>{{item.source_dic}}</td>
                        <td>{{item.source}}</td>
						<td>{{item.number}}</td>
						<td>{{item.reflected_name}}</td>
						<td>{{item.company}}</td>
						<td>{{item.post}}</td>
						<td>{{item.level}}</td>
						<td>
							<span class="status-metro" v-bind:class="item.clue_state=='待办'?'status-suspended':'status-active'">{{item.clue_state}}</span>
						</td>
						<td>
							<el-button size="mini" type="primary" @click="edit(item.clue_id)">编辑</el-button>
							<el-button size="mini" type="primary" @click="view(item.clue_id)">查看</el-button>
						</td>
					</tr>
				</tbody>
			</table>

			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="current_page" :page-sizes="[5, 10, 20, 50]" :page-size="20" layout="total, sizes, prev, pager, next, jumper" :total="totaldata">
			</el-pagination>


		</div>

	</div>

</div>
</template>
<script>
export default {
	data() {
		return {
			cluefrom: "",
			postdata: {
                keyword: '',
				orders: [{
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
				}, {
					column: 'clue_state',
					order: 1
				},{
					column: 'source_dic',
					order: 1
				},{
					column: 'source',
					order: 1
				}],
				index: 1,
				size: 20,
				level: ''
			},
			topdata: {
				entry_start_time: '',
				entry_end_time: '',
				source: '',
				post: '',
				reflected_name: '',
				whereIn: []
			},
			selectedOptions: [],
			tableData: [],
			datatime: '',
			options: [

			],
			showmore: false,
			current_page: 1,
			totaldata: 1,
			pickerOptions2: {
				shortcuts: [{
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
			return this.$store.state.dicdata
		}
	},
	watch: {
		datatime: function() {
			if (this.datatime == null) {
				this.topdata.entry_start_time = '',
					this.topdata.entry_end_time = ''
			} else {
				let startTime = new Date(this.datatime[0])
				let endTime = new Date(this.datatime[1]);
				this.topdata.entry_start_time = startTime.getFullYear() + '-' + (startTime.getMonth() + 1) + '-' + startTime.getDate()
				this.topdata.entry_end_time = endTime.getFullYear() + '-' + (endTime.getMonth() + 1) + '-' + endTime.getDate()
			}
		}
	},
	methods: {
		handleChange(value) {
			this.getdata()
		},
		clearsearch() {
			for (var i in this.topdata) {
				if (typeof(this.topdata[i]) == 'string' || typeof(this.topdata[i]) == 'number') {
					this.topdata[i] = ''
				} else {
					this.topdata[i] = []
				}
			}
			this.postdata.level = '';
			this.postdata.clue_state = '';
            this.postdata.keyword = '';
		},
		edit(id) {
			this.$router.push({
				path: 'clueedit',
				query: {
					clue_id: id
				}
			})
		},
		view(id) {
			this.$router.push({
				path: 'clueview',
				query: {
					clue_id: id
				}
			})
		},
		tablecha: function(e) {
			this.postdata.orders.column = e.prop
			this.postdata.orders.order = e.order == "descending" ? '0' : '1'
			this.getdata()
		},

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
		topsearch: function() {
			this.showmore = !this.showmore;
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
			let urls = ''
			var arrtep = []
			for (var i in this.postdata.orders) {
				if (this.postdata.orders[i].order == 0) {
					arrtep.push(this.postdata.orders[i])
				}
			}

			if (this.showmore) {
				pdata = Object.assign(this.postdata, this.topdata);
				urls = '/api/clue/clue_advanced_search'
			} else {
				pdata = Object.assign(this.postdata, {});
				urls = '/api/clue/clue_keyword_search'
			}
			console.log(pdata)
			let tempdata = this.cloneobj(pdata);
			tempdata.orders = arrtep
			this.$ajax.post(urls, tempdata).then((res) => {
				this.tableData = res.data.data;
				this.current_page = res.data.current_page;
				this.totaldata = res.data.total;
			})
		}
	},
	// created(){
	//    //this.getlist()

	// },
	mounted() {
		console.log(this.$store.state)
		this.getdata()
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

.block {
	margin-bottom: 15px
}

.footable {
	border-left: none
}
</style>
