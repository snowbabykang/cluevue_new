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
							<div class="block pull-left" v-show="showmore">
									<label>请选择时间</label>
									<el-date-picker size="small"
									v-model="datatime"
									type="daterange"
									align="right"
									unlink-panels
									range-separator="至"
									start-placeholder="开始日期"
									end-placeholder="结束日期"
									:picker-options="pickerOptions2">
								</el-date-picker>
							</div>
							<div class="block pull-left ml-lg"  v-show="showmore">
								<label>线索来源</label>
								<el-select size="small" v-model="topdata.source" clearable placeholder="请选择线索来源">
								<el-option 
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
							</div>
							<div class="block pull-left ml-lg"  v-show="showmore">
								<label>职位</label> 
								<el-select size="small" v-model="topdata.post" clearable placeholder="请选择职位">
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
							</div>
							<div class="block pull-left ml-lg"  v-show="showmore">
								<label>级别</label>
								<el-select size="small" v-model="topdata.level" clearable placeholder="请选择级别">
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
							</div>
							<div class="block pull-left ml-lg"  v-show="showmore">
								<label>单位</label>
								<el-select size="small" v-model="topdata.company" clearable placeholder="请选择">
									<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="block pull-left ml-lg form-group">

								<el-input size="small" v-model="postdata.keyword" placeholder="输入线索来源"></el-input>
							</div>
							<div class="block pull-left ml-lg">
									<el-button size="small" type="primary" @click="searchdata" style="margin-left:15px">查询</el-button>
									<el-button size="small" type="primary" style="margin-left:15px" @click="topsearch">高级筛选</el-button>
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
									 width="250"
                                   >
                                    <div  class="block"  style="display:inline-block; margin-bottom:0">
										<span class="demonstration">职位</span>
										<el-cascader size="mini"
											:options="selectoptions"
											v-model="topdata.whereIn"
											@change="handleChange">
										</el-cascader>
										</div>
                                    <span class="footable-sort-indicator"  @click="ordersdata('post')"></span>
                                </th>
                                <th
                                    class="footable-sortable footable-last-column"
                                    :class="postdata.orders[4].order==1?'footable-sorted-desc':'footable-sorted'"
                                    @click="ordersdata('level')">
                                    级别
                                    <span class="footable-sort-indicator"></span>
                                </th>
                                <th>状态</th>
								<th  width="160">操作</th>
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
									<el-button size="mini" type="primary" @click="edit(item.clue_id)">编辑</el-button>
									<el-button size="mini" type="primary">查看</el-button>
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
						<!-- <el-tab-pane label="案件管理">
							<el-tabs tab-position="left" style="height:600px;">
								<el-tab-pane label="线索部分">
									
								</el-tab-pane>
									<el-tab-pane label="立案部分">
										
									</el-tab-pane>
								</el-tabs>


						</el-tab-pane> -->
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
				orders:[{column:'number',order:1},{column:'reflected_name',order:1},{column:'company',order:1},{column:'post',order:1},{column:'level',order:1}],
				index:1,
                size:1
			},
			topdata:{
				entry_start_time:'',
				entry_end_time:'',
				source:'',
				post:'',
				reflected_name:'',
				level:'',
				whereIn:[]
			},
			selectedOptions: [],
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


			selectoptions: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
			showmore:false,
			current_page:1,
			totaldata:1,
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
		}	
	},
	watch:{
		datatime:function(){
			if(this.datatime==null){
				this.topdata.entry_start_time='',
				this.topdata.entry_end_time=''
			}else{
				let startTime = new Date(this.datatime[0])
				let endTime = new Date(this.datatime[1]);	
				this.topdata.entry_start_time = startTime.getFullYear()+'-'+(startTime.getMonth()+1)+'-'+startTime.getDate()
				this.topdata.entry_end_time=endTime.getFullYear()+'-'+(endTime.getMonth()+1)+'-'+endTime.getDate()
			}
			
			

		}
	},
	methods: {
		handleChange(value) {
			this.getdata()
		},
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
			let pdata = {};
			let urls = ''
			if(this.showmore){
				pdata = Object.assign(this.postdata,this.topdata);
				urls = '/api/clue/clue_advanced_search'
			}else{
				pdata = this.postdata;
				urls = '/api/clue/clue_keyword_search'
			}
			this.$ajax.post(urls,pdata).then((res)=>{
				this.tableData = res.data.data;
				this.current_page = res.data.current_page;
				this.totaldata = res.data.total;
			})
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
