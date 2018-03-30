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
									v-model="datatime"
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
								<el-select v-model="postdata.source" clearable placeholder="请选择线索来源">
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
								<el-select v-model="postdata.post" clearable placeholder="请选择职位">
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
								<el-select v-model="postdata.level" clearable placeholder="请选择级别">
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
								<el-select v-model="postdata.company" clearable placeholder="请选择">
									<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="block pull-left ml-lg form-group">

								<el-input v-model="postdata.keyword" placeholder="输入线索来源"></el-input>
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
						<table class="table-striped footable-res footable metro-blue" style="width:100%">
							<thead>
								<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th data-hide="phone,tablet">Job Title</th>
								<th data-hide="phone,tablet">DOB</th>
								<th data-hide="phone">Status</th>
								</tr>
							</thead>
							<tbody>
							<tr>
								<td>Lauri</td>
								<td>Hyland</td>
								<td>Blackjack Supervisor</td>
								<td data-value="500874333932">15 Nov 1985</td>
								<td data-value="3">
								<span class="status-metro status-suspended" title="Suspended">Suspended</span>
								</td>
							</tr>
							</tbody>
						</table>
							<el-table :data="tableData" border style="width: 100%" v-on:sort-change="tablecha">
								<el-table-column
									type="index"
									label="序号"
									width="60">
									</el-table-column>
								<el-table-column
								prop="source"
								label="线索来源">
								</el-table-column>
								<el-table-column
								prop="number"
								label="编号"
								width="180">
								</el-table-column>
								<el-table-column
								prop="reflected_name"
								label="被反映人"
								:filters="[{text: '升序', value: '0'}, {text: '降序', value: '1'}]"
      							:filter-method="filterHandler">
								</el-table-column>
								<el-table-column
								prop="company"
								:filters="[{text: '升序', value: '0'}, {text: '降序', value: '1'}]"
      							:filter-method="filterHandler"
								label="单位">
								</el-table-column>
								<el-table-column
								prop="post"
								:filters="[{text: '升序', value: '0'}, {text: '降序', value: '1'}]"
      							:filter-method="filterHandler"
								label="职位">
								</el-table-column>
								<el-table-column
								prop="level"
								:filters="[{text: '升序', value: '0'}, {text: '降序', value: '1'}]"
      							:filter-method="filterHandler"
								label="级别">
								</el-table-column>
								<el-table-column
									prop="clue_state"
									label="状态"
									width="100">
									<template slot-scope="scope">
										<el-tag
										:type="scope.row.clue_state == '0' ? 'primary' : 'success'"
										close-transition>{{scope.row.clue_state=='0'?'以办':'未办'}}</el-tag>
									</template>
									</el-table-column>
							</el-table>
							<el-pagination
								@size-change="handleSizeChange"
								@current-change="handleCurrentChange"
								:current-page="current_page"
								:page-sizes="[1, 5, 10, 20]"
								:page-size="100"
								layout="total, sizes, prev, pager, next, jumper"
								:total="totaldata">
							</el-pagination>
						</el-tab-pane>
						<el-tab-pane label="案件管理">
							<el-tabs tab-position="left" style="height:600px;">
								<el-tab-pane label="线索部分">
									
								</el-tab-pane>
									<el-tab-pane label="立案部分">
										
									</el-tab-pane>
								</el-tabs>


						</el-tab-pane>
						<el-tab-pane label="公文管理">
								
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
			postdata:{
				keyword:'zhangsan',
				source:'',
				company:'',
				post:'',
				level:'',
				company:'',
				orders:{},
				index:1,
				size:1
			},
			tableData: [],
			datatime:'',
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
			showmore:false,
			current_page:1,
			totaldata:1
		};
	},
	computed: {
		searchback: function() {
			return this.cluefrom;
		}
	},
	methods: {
		tablecha:function(e){
			console.log(e,1111)
			this.postdata.orders.column = e.prop
			this.postdata.orders.order = e.order=="descending"?'0':'1'
			this.getdata()
		},
		filterHandler(value, row, column) {
			console.log(value, row, column)
		},
		searchdata: function() {
			this.getdata()
		},
		getlist: function(data = {}) {
		 // this.$ajax.post("").then;
		},
		topsearch:function(){
			this.showmore = !this.showmore;
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.postdata.size = val
			this.getdata()

		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			++this.postdata.index;
			this.getdata()
		},
		getdata(){
			this.$ajax.post('/api/clue/clue_keyword_search',this.postdata).then((res)=>{
				this.tableData = res.data.data;
				this.current_page = res.data.current_page;
				this.totaldata = res.data.total;
			})
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
.block{
	margin-bottom:15px
}
</style>
