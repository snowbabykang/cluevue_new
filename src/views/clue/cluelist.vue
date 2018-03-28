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
							<el-table :data="tableData"  @sort-change="tableSortChange" border height="600" style="width: 100%">
								<el-table-column
									type="index"
									label="序号"
									width="60">
									</el-table-column>
								
								<el-table-column
									prop="source"
									label="线索来源" 
									custom sortable>
								</el-table-column>
								<el-table-column
									prop="number"
									label="编号"
									width="180"
									custom sortable>
								</el-table-column>
								<el-table-column
									prop="reflected_name"
									custom sortable
									label="被反映人">
								</el-table-column>
								<el-table-column
									prop="created_at"
									custom sortable
									label="入库时间">
								</el-table-column>
								<el-table-column
									prop="company"
									custom sortable
									label="单位">
								</el-table-column>
								<el-table-column
									prop="post"
									custom sortable
									label="职位"
									:filters="[{ text: '已办', value: '0' }, { text: '在办', value: '8' }]"
										:filter-method="filterpost"
										filter-placement="bottom-end">
								</el-table-column>
								<el-table-column
									prop="level"
									custom sortable
									label="级别">
								</el-table-column>
								<el-table-column
										prop="clue_state"
										label="状态"
										 width="100"
										:filters="[{ text: '已办', value: '0' }, { text: '在办', value: '8' }]"
										:filter-method="filterTag"
										filter-placement="bottom-end">
									<template slot-scope="scope">
										<el-tag :type="scope.row.clue_state == '0' ? 'danger' : 'success'"
										close-transition>{{scope.row.clue_state==0?'已办':'在办'}}</el-tag>
									</template>
									</el-table-column>
							</el-table>
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
			keyword:'',
			tableData: [],
			options: [{value: "选项1",label: "黄金糕"},
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
			cluekeysearch:{
				keyword:'zhangsan',
				orders:[{column:'source',order:0},{column:'number',order:0},{column:'reflected_name',order:0},{column:'created_at',order:0},{column:'company',order:0},{column:'post',order:0},{column:'level',order:0},{column:'clue_state',order:0}],
				index:1,
				size:20			
			}
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
		},
		 formatter(row, column) {
			return row.address;
		},
		filterTag(value, row) {
			console.log(row.clue_state,value)
			return row.clue_state == value;
		},
		filterpost(value, row) {
			console.log(row.post,value)
			return row.post == value;
		},
		filterHandler(value, row, column) {
			const property = column['property'];
			return row[property] === value;
		},
		tableSortChange(value, row, column){
			console.log(value, row, column);
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
		var data = {keyword:"zhangsan"}
		 this.$ajax.post('/api/clue/clue_keyword_search',this.cluekeysearch).then((res)=>{
			 console.log(res.data.data)
			this.tableData =  [
            {
                "pk_id": 4,
                "clue_id": "6CF5D170-9C43-2658-A2CC-389DB1EAED16",
                "source": "",
                "number": "1521383710",
                "reflected_name": "zhangsan",
                "company": "",
                "post": "",
                "level": "",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 0,
                "supervisor": 0,
                "remind_days": 0,
                "clue_next": "",
                "clue_state": 0,
                "created_at": "2018-03-18 22:35:27",
                "updated_at": "2018-03-18 22:35:27"
            },
            {
                "pk_id": 5,
                "clue_id": "7711DC14-7357-052E-F1FC-D44697B7E778",
                "source": "",
                "number": "1521384420",
                "reflected_name": "zhangsan",
                "company": "",
                "post": "",
                "level": "",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 0,
                "supervisor": 0,
                "remind_days": 0,
                "clue_next": "",
                "clue_state": 0,
                "created_at": "2018-03-18 22:47:00",
                "updated_at": "2018-03-18 22:47:00"
            },
            {
                "pk_id": 6,
                "clue_id": "822EC009-E91F-D803-B679-846B90BE9798",
                "source": "",
                "number": "1521383787",
                "reflected_name": "zhangsan",
                "company": "",
                "post": "",
                "level": "",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 0,
                "supervisor": 0,
                "remind_days": 0,
                "clue_next": "",
                "clue_state": 0,
                "created_at": "2018-03-18 22:36:27",
                "updated_at": "2018-03-18 22:36:27"
            },
            {
                "pk_id": 7,
                "clue_id": "92C8B2F3-7F9D-DA40-08DB-519262047564",
                "source": "",
                "number": "1521384418",
                "reflected_name": "zhangsan",
                "company": "",
                "post": "",
                "level": "",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 0,
                "supervisor": 0,
                "remind_days": 0,
                "clue_next": "",
                "clue_state": 0,
                "created_at": "2018-03-18 22:46:58",
                "updated_at": "2018-03-18 22:46:58"
            },
            {
                "pk_id": 8,
                "clue_id": "E57CC23E-4F0A-A6B6-B3FB-95C97E1CBBFA",
                "source": "",
                "number": "1521384419",
                "reflected_name": "zhangsan",
                "company": "",
                "post": "",
                "level": "",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 0,
                "supervisor": 0,
                "remind_days": 0,
                "clue_next": "",
                "clue_state": 0,
                "created_at": "2018-03-18 22:47:00",
                "updated_at": "2018-03-18 22:47:00"
            },
            {
                "pk_id": 2,
                "clue_id": "663BE68A-246D-179B-7972-6BBD634E8622",
                "source": "",
                "number": "20180318",
                "reflected_name": "zhangsan",
                "company": "",
                "post": "",
                "level": "",
                "entry_time": "0000-00-00 00:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 0,
                "supervisor": 0,
                "remind_days": 0,
                "clue_next": "",
                "clue_state": 0,
                "created_at": "2018-03-18 22:23:36",
                "updated_at": "2018-03-18 22:23:43"
            },
            {
                "pk_id": 3,
                "clue_id": "663BE68A-246D-179B-7972-6BBD634E8622_bk",
                "source": "",
                "number": "20180318DD",
                "reflected_name": "zhangsan",
                "company": "",
                "post": "",
                "level": "",
                "entry_time": "0000-00-00 00:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 0,
                "supervisor": 0,
                "remind_days": 0,
                "clue_next": "",
                "clue_state": 0,
                "created_at": "2018-03-18 22:24:51",
                "updated_at": "2018-03-18 22:30:30"
            },
            {
                "pk_id": 11,
                "clue_id": "EFD10DBA-9B08-5AEC-A687-5E5A877DBD80",
                "source": "2",
                "number": "1521632175",
                "reflected_name": "zhangsan",
                "company": "天宇国际",
                "post": "经理",
                "level": "1",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 1,
                "supervisor": 1,
                "remind_days": 8,
                "clue_next": "8",
                "clue_state": 8,
                "created_at": "2018-03-21 19:36:11",
                "updated_at": "2018-03-21 19:36:11"
            },
            {
                "pk_id": 12,
                "clue_id": "5EDFDC4B-47C0-4125-3E29-CB2FAC7BE2C9",
                "source": "2",
                "number": "1521632311",
                "reflected_name": "zhangsan",
                "company": "天宇国际",
                "post": "经理",
                "level": "1",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 1,
                "supervisor": 1,
                "remind_days": 8,
                "clue_next": "8",
                "clue_state": 8,
                "created_at": "2018-03-21 19:38:27",
                "updated_at": "2018-03-21 19:38:27"
            },
            {
                "pk_id": 13,
                "clue_id": "E00CCEBD-D152-F067-4195-DA253C6B0489",
                "source": "2",
                "number": "1521632312",
                "reflected_name": "zhangsan",
                "company": "天宇国际",
                "post": "经理",
                "level": "1",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 1,
                "supervisor": 1,
                "remind_days": 8,
                "clue_next": "8",
                "clue_state": 8,
                "created_at": "2018-03-21 19:38:27",
                "updated_at": "2018-03-21 19:38:27"
            },
            {
                "pk_id": 14,
                "clue_id": "F0878C5E-3478-DE11-1380-B4F28E76615B",
                "source": "2",
                "number": "1521632313",
                "reflected_name": "zhangsan",
                "company": "天宇国际",
                "post": "经理",
                "level": "1",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 1,
                "supervisor": 1,
                "remind_days": 8,
                "clue_next": "8",
                "clue_state": 8,
                "created_at": "2018-03-21 19:38:28",
                "updated_at": "2018-03-21 19:38:28"
            },
            {
                "pk_id": 15,
                "clue_id": "73EBE961-F6C1-5D26-1F15-F18B6AB30072",
                "source": "2",
                "number": "1521632314",
                "reflected_name": "zhangsan",
                "company": "天宇国际",
                "post": "经理",
                "level": "1",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 1,
                "supervisor": 1,
                "remind_days": 8,
                "clue_next": "8",
                "clue_state": 8,
                "created_at": "2018-03-21 19:38:29",
                "updated_at": "2018-03-21 19:38:29"
            },
            {
                "pk_id": 16,
                "clue_id": "3119EC6A-C5BE-6AAF-ED33-A81A05DCF9C9",
                "source": "2",
                "number": "1521632323",
                "reflected_name": "zhangsan",
                "company": "天宇国际",
                "post": "经理",
                "level": "1",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 1,
                "supervisor": 1,
                "remind_days": 8,
                "clue_next": "8",
                "clue_state": 8,
                "created_at": "2018-03-21 19:38:39",
                "updated_at": "2018-03-21 19:38:39"
            },
            {
                "pk_id": 9,
                "clue_id": "5DA9D3B5-E04B-FAFD-91E4-0037F501E61A",
                "source": "省十一巡交办",
                "number": "1521632167",
                "reflected_name": "zhangsan",
                "company": "天宇国际",
                "post": "经理",
                "level": "1",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 1,
                "supervisor": 1,
                "remind_days": 8,
                "clue_next": "8",
                "clue_state": 8,
                "created_at": "2018-03-21 19:36:03",
                "updated_at": "2018-03-22 00:19:24"
            },
            {
                "pk_id": 10,
                "clue_id": "F7F6971A-A90B-06AB-A6C6-7E3FB759B34F",
                "source": "省十一巡交办",
                "number": "1521632174",
                "reflected_name": "zhangsan",
                "company": "天宇国际",
                "post": "经理",
                "level": "1",
                "entry_time": "2018-03-17 10:00:00",
                "closed_time": "2018-05-20 10:00:00",
                "disposal_type": 1,
                "supervisor": 1,
                "remind_days": 8,
                "clue_next": "8",
                "clue_state": 8,
                "created_at": "2018-03-21 19:36:10",
                "updated_at": "2018-03-22 00:20:31"
            }
        ]
		})
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
