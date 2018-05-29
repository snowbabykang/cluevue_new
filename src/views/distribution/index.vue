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
                            <el-form :inline="true" :model="postdata" class="demo-form-inline">
                                <el-form-item label="线索来源">
                                    <el-select size="small" v-model="postdata.source" placeholder="请选择线索来源">
                                        <el-option v-for="item in dicdata.source.data" :key="item.id" :label="item.title" :value="item.title">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="关键字">
                                    <el-input size="small" v-model="postdata.keyword" placeholder="请输入线索来源、被反映人姓名"></el-input>
                                </el-form-item>
                                <label>请选择时间</label>
                                <el-date-picker size="small" v-model="datatime" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
                                </el-date-picker>
                            </el-form>
                        </div>

                        <div class="block pull-left ml-lg">
                            <label>承办部门</label>
                            <el-select size="small" v-model="postdata.clue_next" clearable placeholder="请选择承办部门">
                                <el-option v-for="item in dicdata.clue_next.data" :key="item.id" :label="item.title" :value="item.title">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="block pull-left ml-lg">
                            <el-button size="small" type="primary" @click="searchdata" style="margin-left:15px">查询</el-button>

                            <el-button size="small" type="primary" @click="printpage" style="margin-left:15px">打印</el-button>
                            <el-button size="small" type="primary" @click="output" style="margin-left:15px">导出EXCEL</el-button>
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
                            <th class="footable-sortable footable-last-column " :class="postdata.orders[0].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('number')">
                                编号
                                <span class="footable-sort-indicator"></span>
                            </th>
                            <th class="footable-sortable footable-last-column " :class="postdata.orders[1].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('reflected_name')">
                                被反映人
                                <span class="footable-sort-indicator"></span>
                            </th>
                            <th class="footable-sortable footable-last-column " :class="postdata.orders[2].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('company')">
                                工作单位及职务
                                <span class="footable-sort-indicator"></span>
                            </th>
                            <th class="footable-sortable footable-last-column " :class="postdata.orders[3].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('main_content')">
                                反应的主要问题
                                <span class="footable-sort-indicator"></span>
                            </th>
                            <th class="footable-sortable footable-last-column " :class="postdata.orders[4].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('leader_approval')">
                                集体排查意见及领导批示
                                <span class="footable-sort-indicator"></span>
                            </th>
                            <th class="footable-sortable footable-last-column " :class="postdata.orders[5].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('signatory')">
                                领取人签字
                                <span class="footable-sort-indicator"></span>
                            </th>
                            <th class="footable-sortable footable-last-column " :class="postdata.orders[6].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('undertake_leader')">
                                承办领导
                                <span class="footable-sort-indicator"></span>
                            </th>
                            <th class="footable-sortable footable-last-column " :class="postdata.orders[7].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('clue_next')">
                                承办部门
                                <span class="footable-sort-indicator"></span>
                            </th>
                            <th class="footable-sortable footable-last-column " :class="postdata.orders[8].order==1?'footable-sorted-desc':'footable-sorted'" @click="ordersdata('progress')">
                                进展情况
                                <span class="footable-sort-indicator"></span>
                            </th>
                            <th>备注</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in tableData" :key="index">
                            <td>{{item.number}}</td>
                            <td>{{item.reflected_name}}</td>
                            <td>{{item.company}}—{{item.post}}</td>
                            <td>{{item.main_content}}</td>
                            <td>{{item.leader_approval}}</td>
                            <td>{{item.signatory}}</td>
                            <td>{{item.undertake_leader}}</td>
                            <td>{{item.clue_next}}</td>
                            <td>{{item.progress}}</td>
                            <td>{{item.remark}}</td>
                            <td>
                                <el-button size="mini" type="primary" @click="viewData(item.clue_id)" style="margin-left:15px">查看</el-button>
                                <el-button size="mini" type="primary" @click="editData(item.clue_id)" style="margin-left:15px">修改</el-button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div id="printtable" v-show="false">
                    <h3 style="text-align:center">登记发放</h3>
                    <table border="1" cellpadding="1" width="100%" cellspacing="0" style="text-align:center">
                        <tr>
                            <th>编号</th>
                            <th>被反映人</th>
                            <th>工作单位及职务</th>
                            <th>反应的主要问题</th>
                            <th>领导批示</th>
                            <th>备注</th>
                        </tr>
                        <tr v-for="(item,index) in tableData" :key="index">
                            <td>{{item.number}}</td>
                            <td>{{item.reflected_name}}</td>
                            <td>{{item.company}}—{{item.post}}</td>
                            <td>{{item.main_content}}</td>
                            <td>{{item.leader_approval}}</td>
                            <td>{{item.remark}}</td>
                        </tr>
                    </table>
                </div>

                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="current_page" :page-sizes="[10, 20, 50, 100]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="totaldata">
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
export default {
    data() {
        return {
            showmodel: false,
            current_page: 1,
            totaldata: 1,
            tableData: [],
            datatime: '',
            postdata: {
                beginDate: '', //发文日期
                endDate: '', //发文字号
                source: '', //
                keyword: '',
                clue_next: '',
                orders: [{
                        column: 'number',
                        order: 1
                    },
                    {
                        column: 'reflected_name',
                        order: 1
                    },
                    {
                        column: 'company',
                        order: 1
                    },
                    {
                        column: 'main_content',
                        order: 1
                    },
                    {
                        column: 'leader_approval',
                        order: 1
                    },
                    {
                        column: 'signatory',
                        order: 1
                    },
                    {
                        column: 'undertake_leader',
                        order: 1
                    },
                    {
                        column: 'clue_next',
                        order: 1
                    },
                    {
                        column: 'progress',
                        order: 1
                    }
                ],
                export: 0,
                print: 0,
                page: 1,
                pagesize: 10
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
        dicdata: function() {
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
        viewData(id) {
            this.$router.push({
                path: 'checkInView',
                query: {
                    clue_id: id
                }
            })
        },
        editData(id) {
            this.$router.push({
				path: 'checkInEdit',
				query: {
					clue_id: id
				}
			})
        },
        output() {
            var arrtep = [];
            let pdata = this.cloneobj(this.postdata);
            for (var i in pdata.orders) {
                if (pdata.orders[i].order == 0) {
                    arrtep.push(pdata.orders[i])
                }
            }
            pdata.orders = arrtep;
            pdata.export = 1;
            pdata.orders = []
            window.open(this.$store.state.baseURL + "/api/clue/closedlist" + this.urlArgs(pdata), 'download')
        },
        printpage: function() {
            let newWindow = window.open("_blank"); //打开新窗口
            let codestr = document.getElementById("printtable").innerHTML; //获取需要生成pdf页面的div代码
            newWindow.document.write(codestr); //向文档写入HTML表达式或者JavaScript代码
            newWindow.document.close(); //关闭document的输出流, 显示选定的数据
            newWindow.print(); //打印当前窗口
            return true;
        },
        dismodelopen() {
            this.showmodel = true
        },
        closeprop() {
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
            for (var i in pdata.orders) {
                if (pdata.orders[i].order == 0) {
                    arrtep.push(pdata.orders[i])
                }
            }
            pdata.orders = arrtep
            this.$ajax.post("/api/clue/closedlist", pdata).then((res) => {
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
        }

    },
    created() {
        this.getdata();
    }
};
</script>

<style scoped>
.el-tabs__nav-wrap {
    background-color: #fff
}
</style>
