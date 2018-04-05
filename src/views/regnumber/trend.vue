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
        <div id="echartthis" :style="{height:height,width:width}" ref="myEchart">
        </div>
    </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
         datatime:'', 
         postdata:{
             document_type:'',
             document_user:''
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
      }
    },
    computed: {
		dicdata:function(){
			return this.$store.state.dicdata
		}
	},
    methods:{
        searchdata(){
            console.log("aaa")
        }
    }
}
</script>