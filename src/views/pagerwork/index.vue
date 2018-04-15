<template>
    <div>
        <div class="row">
            <div id="paper-top">
                <div class="col-lg-3">
                    <h2 class="tittle-content-header">
                        <i class="icon-window"></i>
                        <span>文书管理</span>
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
                                <el-button size="small" type="primary" @click="dismodelopen" style="margin-left:15px">添加</el-button>
                                <el-button size="small" type="primary" @click="printpage" style="margin-left:15px">打印</el-button>
                                <el-button size="small" type="primary" @click="output" style="margin-left:15px">导出EXCEL</el-button>
                            </div>

                        </div>
                    </div>
                </publicsearch>
    
            </div>
                <div class="col-md-12">
                    <div  style="padding:15px">
                        
                        <table class="table-striped footable-res footable metro-blue" style="width:100%">
                            <thead>
                                <tr>
                                    <th class="footable-sortable footable-last-column " :class="postdata.orders[0].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('document_date')">
                                        发文日期
                                        <span class="footable-sort-indicator"></span>    
                                    </th>
                                    <th class="footable-sortable footable-last-column " :class="postdata.orders[1].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('document_code')">
                                        发文字号
                                        <span class="footable-sort-indicator"></span>
                                    </th>
                                    <th class="footable-sortable footable-last-column " :class="postdata.orders[2].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('document_title')">
                                        文件标题
                                        <span class="footable-sort-indicator"></span>
                                    </th>
                                    <th class="footable-sortable footable-last-column " :class="postdata.orders[3].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('document_user')">
                                        发文人
                                        <span class="footable-sort-indicator"></span>
                                    </th>
                                    <th class="footable-sortable footable-last-column " :class="postdata.orders[4].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('document_unit')">
                                        发文单位
                                        <span class="footable-sort-indicator"></span>
                                    </th>
                                    <th>备注</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in tableData" :key="index">
                                    <td>{{item.document_date}}</td>
                                    <td>{{item.document_code}}</td>
                                    <td>{{item.document_title}}</td>
                                    <td>{{item.document_user}}</td>
                                    <td>{{item.document_unit}}</td>
                                    <td>{{item.memo}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div  id="printtable" v-show="false">
                            <h3 style="text-align:center" >文书管理</h3> 
                        <table border="1" cellpadding="1" width="100%" cellspacing="0" style="text-align:center" >
                            <tr>
                                <th>发文日期</th>
                                <th>发文字号</th>
                                <th>文件标题</th>
                                <th>发文人</th>
                                <th>发文单位</th>
                                <th>备注</th>
                            </tr>
                            <tr v-for="(item,index) in tableData" :key="index">
                                <td>{{item.document_date}}</td>
                                    <td>{{item.document_code}}</td>
                                    <td>{{item.document_title}}</td>
                                    <td>{{item.document_user}}</td>
                                    <td>{{item.document_unit}}</td>
                                    <td>{{item.memo}}</td>
                            </tr>
                        </table> 
                        </div>
                        <el-pagination class="not-print" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="current_page" :page-sizes="[10, 20, 50, 100]" :page-size="20" layout="total, sizes, prev, pager, next, jumper" :total="totaldata">
                        </el-pagination>
                    </div>
                </div>
        </div>
        <el-dialog title="新增发文登记" :visible.sync="showmodel" width="800px" :modal-append-to-body="false">
            <distributionaddmodel v-on:closemodel="closeprop"></distributionaddmodel>
                <!-- <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="showmodel = false">取 消</el-button>
                <el-button size="small" type="primary" @click="showmodel = false">确 定</el-button>
                </span> -->
        </el-dialog>
    </div>
</template>

<script>
    import distributionaddmodel from './addmodel.vue'
    
    export default {
        data() {
            return {
                showmodel: false,
                cluefrom: '',
                current_page: 1,
                totaldata: 1,
                tableData: [],
                datatime:'',
                source:'',
                postdata:{
                    beginDate:'', //发文日期
                    endDate:'', //发文字号
                    document_type:'', //姓名
                    document_user:'',//发文人
                    orders:[{column:'document_date',order:1},{column:'document_code',order:1},{column:'document_title',order:1},{column:'document_user',order:1},{column:'document_unit',order:1}], 
                    export:0,
                    print:0,
                    page: 1,
				    pagesize: 20
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
        watch: {
            datatime: function() {
                if (this.datatime == null) {
                    this.postdata.beginDate = '',
                    this.postdata.endDate = ''
                } else {
                    let startTime = new Date(this.datatime[0])
                    let endTime = new Date(this.datatime[1]);
                    this.postdata.beginDate = startTime.getFullYear() + '-' + (startTime.getMonth() + 1) + '-' + startTime.getDate()
                    this.postdata.endDate = endTime.getFullYear() + '-' + (endTime.getMonth() + 1) + '-' + endTime.getDate()
                }
		    }
	    },
        methods: {
            output(){
                 var arrtep = [];
                let pdata = this.cloneobj(this.postdata);
                for (var i in pdata.orders){
                    if(pdata.orders[i].order==0){
                        arrtep.push(pdata.orders[i])
                    }
                }
                pdata.orders = arrtep;
                pdata.export = 1;
                pdata.orders = []
                console.log(this.urlArgs(pdata));
                window.open(this.$store.state.baseURL+"/api/document/list"+this.urlArgs(pdata),'download')
            },
            printpage:function(){
                let newWindow = window.open("_blank");   //打开新窗口
                let codestr = document.getElementById("printtable").innerHTML;   //获取需要生成pdf页面的div代码
                newWindow.document.write(codestr);   //向文档写入HTML表达式或者JavaScript代码
                newWindow.document.close();     //关闭document的输出流, 显示选定的数据
                newWindow.print();   //打印当前窗口
                return true;
            },
            dismodelopen(){
                this.showmodel = true
            },
            closeprop(){
                this.showmodel = false;
                this.getdata()
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            },

            searchdata: function() {
                this.getdata()
            },
            ordersdata: function(key) {
                this.postdata.orders.forEach((e, k, arr) => {
                    if (e.column == key) {
                        e.order = (e.order == 1) ? 0 : 1
                    }
                })
                this.getdata()
            },
            getdata: function(data = {}) {
                var arrtep = [];
                let pdata = this.cloneobj(this.postdata);
                for (var i in pdata.orders){
                    if(pdata.orders[i].order==0){
                        arrtep.push(pdata.orders[i])
                    }
                }
                pdata.orders = arrtep
                this.$ajax.post("/api/document/list", pdata).then((res) => {
                    this.tableData = res.data.data;
                    this.current_page = res.data.current_page;
                    this.totaldata = res.data.total;
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.postdata.pagesize = val
                this.getdata()
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.postdata.page = val;
                this.getdata()
            },
            adddoc(){
                console.log("添加")
            }
        },
        created() {
            this.getdata();
        },
        components:{
            'distributionaddmodel':distributionaddmodel
        }
    };
</script>

<style scoped>
    .el-tabs__nav-wrap {
        background-color: #fff
    }
</style>
