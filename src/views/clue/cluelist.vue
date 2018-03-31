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
								<th>序号</th>
								<th>线索来源</th>
								<th 
                                    class="footable-sortable footable-last-column "
                                    :class="postdata.orders[0].order==1?'footable-sorted-desc':'footable-sorted'"
                                    @click="ordersdata('number')">
                                    编号
                                    <span class="footable-sort-indicator"></span>
                                </th>
								<th
                                    class="footable-sortable footable-last-column"
                                    :class="postdata.orders[1].order==1?'footable-sorted-desc':'footable-sorted'"
                                    @click="ordersdata('reflected_name')">
                                    被反映人
                                    <span class="footable-sort-indicator"></span></th>
                                <th
                                    class="footable-sortable footable-last-column"
                                    :class="postdata.orders[2].order==1?'footable-sorted-desc':'footable-sorted'"
                                     @click="ordersdata('company')">
                                     单位
                                     <span class="footable-sort-indicator"></span></th>
								<th
                                    class="footable-sortable footable-last-column"
                                    :class="postdata.orders[3].order==1?'footable-sorted-desc':'footable-sorted'"
                                    @click="ordersdata('post')">
                                    职位
                                    <span class="footable-sort-indicator"></span>
                                </th>
                                <th
                                    class="footable-sortable footable-last-column"
                                    :class="postdata.orders[4].order==1?'footable-sorted-desc':'footable-sorted'"
                                    @click="ordersdata('level')">
                                    级别
                                    <span class="footable-sort-indicator"></span>
                                </th>
                                <th>状态</th>
								<th>操作</th>
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
                                <td>
                                    <span class="status-metro" v-bind:class="item.clue_state=='0'?'status-suspended':'status-active'">{{item.clue_state=='0'?'以办':'未办'}}</span>
                                </td>
								<td>
									<el-button type="primary" @click="edit(item.clue_id)">编辑</el-button>
									<el-button type="primary">查看</el-button>
								</td>
							</tr>
							</tbody>
						</table>
							
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
				keyword:'mahuan',
				source:'',
				company:'',
				post:'',
				level:'',
				company:'',
				orders:[{column:'number',order:1},{column:'reflected_name',order:1},{column:'company',order:1},{column:'post',order:1},{column:'level',order:1}],
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
		edit(id){
			this.$router.push({ path: 'clueadd', query: { plan:id }})
		},
		tablecha:function(e){
			console.log(e,1111)
			this.postdata.orders.column = e.prop
			this.postdata.orders.order = e.order=="descending"?'0':'1'
			this.getdata()
		},
		
		searchdata: function() {
			this.getdata()
		},
		ordersdata:function(key){
            
            this.postdata.orders.forEach((e,k,arr)=>{
                if(e.column==key){
                   e.order = (e.order=="1")?'0':'1'
                }
            })
            this.getdata()
            console.log(JSON.stringify(this.postdata.orders))
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
			this.postdata.index = val;
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
