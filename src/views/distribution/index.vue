<template>
    <div>
        <div class="row">
            <div id="paper-top">
                <div class="col-lg-3">
                    <h2 class="tittle-content-header">
                        <i class="icon-window"></i>
                        <span>登记发放</span>
                    </h2>
                </div>
                <div class="col-sm-7">
                    <div class="devider-vertical visible-lg"></div>
                    <div class="tittle-middle-header">
                        <div class="alert">
                            <button type="button" class="close">×</button>
                            <span class="tittle-alert entypo-info-circled"></span> 当前查询条件,&nbsp;
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <breadcrumb></breadcrumb>
            <div class="col-md-12">
                <publicsearch modeltitle="快速查询">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="block pull-left">
                                <label>请选择时间</label>
                                <el-date-picker size="small" v-model="datatime" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
                                </el-date-picker>
                            </div>
    
                            <div class="block pull-left ml-lg">
                                <label>发文类型</label>
                                <el-select size="small" v-model="postdata.document_type" clearable placeholder="请选择发文类型">
                                    <el-option v-for="item in dicdata.specstat.data" :key="item.id" :label="item.title" :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                           
                            <div class="block pull-left ml-lg form-group">
                                <el-input size="small" v-model="postdata.document_user" placeholder="输入发件人"></el-input>
                            </div>
                            <div class="block pull-left ml-lg">
                                <el-button size="small" type="primary" @click="searchdata" style="margin-left:15px">查询</el-button>
                            </div>
                        </div>
                    </div>
                </publicsearch>
    
            </div>
                <div class="col-md-12">
                    <div style="padding:15px">
                        <table class="table-striped footable-res footable metro-blue" style="width:100%">
                            <thead>
                                <tr>
                                    <th>发文日期</th>
                                    <th>发文字号</th>
                                    <th>文件标题</th>
                                    <th>发文人</th>
                                    <th>发文单位</th>
                                    <th>备注</th>
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
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="current_page" :page-sizes="[10, 20, 50, 100]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="totaldata">
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
                cluefrom: '',
                index: 1,
                size: 10,
                current_page: 1,
                totaldata: 1,
                datalist: [],
                datatime:'',
                source:'',
                postdata:{
                    beginDate:'', //发文日期
                    endDate:'', //发文字号
                    document_type:'', //姓名
                    document_user:'',//发文人
                    orders:[{column:'',order:''}], 
                    export:0,
                    print:0
                },
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
                return this.cluefrom
            },
            dicdata:function(){
                console.log(this.$store.state.dicdata)
                return this.$store.state.dicdata
            }
        },
        methods: {
            searchdata: function() {
                console.log(this.cluefrom)
            },
            getdata: function(data = {}) {
                this.$ajax.post("/api/document/list", this.postdata).then((res) => {
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
        created() {
            this.getdata()
        }
    };
</script>

<style scoped>
    .el-tabs__nav-wrap {
        background-color: #fff
    }
</style>
