<template>
  <div>
    <div class="row">  
      <div id="paper-top">
        <div class="col-lg-3">
          <h2 class="tittle-content-header">
            <i class="icon-window"></i>
            <span>Excel导入</span>
          </h2>
        </div>
        <div class="col-sm-7">
            <div class="devider-vertical visible-lg"></div>
            <div class="tittle-middle-header"></div>
        </div>
      </div>
    </div> 
    <div class="row">
        <breadcrumb></breadcrumb>
    </div>
    <div class="row">

        <div class="col-md-12">
                <publicsearch modeltitle="模版下载">
                   <el-row>
                    <el-button @click="download('/demo/clue_demo.xlsx')" type="primary">离线线索模板</el-button>
                    <el-button @click="download('/demo/case_clue_demo.xlsx')" type="primary">案件问题线索模板</el-button>
                    <el-button @click="download('/demo/filing_demo.xlsx')" type="primary">立案模板</el-button>
                    <el-button @click="download('/demo/register_demo.xlsx')" type="primary">登记发放模板</el-button>
                    <el-button @click="download('/demo/document_demo.xlsx')" type="primary">文书管理模板</el-button>
                </el-row>
            </publicsearch>
        </div>
        
    </div>
    <div class="row">
        <div class="col-md-12" >
            <div class="col-md-4" >
            <publicsearch modeltitle="线索模板上传" style="margin:0">
                <el-upload :before-remove="removeFile4" :on-success="upSuccessFile" 
                 class="upload-demo" ref="excel" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  :action="importclue" :on-preview="handlePreview" :auto-upload="true">
                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb</div>
                                    </el-upload>
                <el-card style="margin-top:16px" class="box-card" v-if="importfilinglist.total>0 || importfilinglistsuc.total>0">
                    <div slot="header" class="clearfix">
                        <span>共{{importfilinglist.total}}条错误,{{importfilinglistsuc.total}}条成功</span>
                    </div>
                    <div v-for="o in importfilinglist.data" :key="o.line" class="text item" style="margin-bottom:6px">
                        第{{o.line}}行,<el-tag v-for="(i,index) in o.error" :key="index" type="danger" style="margin-left:6px">{{i}}</el-tag>
                    </div>
                </el-card>
             </publicsearch>
            </div>
            <div class="col-md-4" >
             <publicsearch modeltitle="案件问题线索上传" style="margin:0">
                 <el-upload :before-remove="removeFile4" :on-success="upSuccessFile"
                  class="upload-demo" ref="excel" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                   :action="importcaseclue" :on-preview="handlePreview" :auto-upload="true">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb</div>
                                    </el-upload>
                   <el-card style="margin-top:16px" class="box-card" v-if="importcasecluelist.total>0 || importfilinglistsuc.total>0">
                    <div slot="header" class="clearfix">
                        <span>共{{importcasecluelist.total}}条错误,{{importfilinglistsuc.total}}条成功</span>
                    </div>
                    <div v-for="o in importcasecluelist.data" :key="o.line" class="text item" style="margin-bottom:6px">
                        第{{o.line}}行,<el-tag v-for="(i,index) in o.error" :key="index" type="danger" style="margin-left:6px">{{i}}</el-tag>
                    </div>
                </el-card>                 
             </publicsearch>
             </div>
             <div class="col-md-4" >
             <publicsearch modeltitle="立案模板上传"  style="margin:0">
                 <el-upload :before-remove="removeFile4" :on-success="upSuccessFile" 
                  class="upload-demo" ref="excel" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                  :action="importfiling" :on-preview="handlePreview" :auto-upload="true">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb</div>
                    <el-card style="margin-top:16px" class="box-card" v-if="importcluelist.total>0 || importcluelistsuc.total>0">
                    <div slot="header" class="clearfix">
                        <span>共{{importcluelist.total}}条错误,{{importcluelistsuc.total}}条成功</span>
                    </div>
                    <div v-for="o in importcluelist.data" :key="o.line" class="text item" style="margin-bottom:6px">
                        第{{o.line}}行,<el-tag v-for="(i,index) in o.error" :key="index" type="danger" style="margin-left:6px">{{i}}</el-tag>
                    </div>
                </el-card>                </el-upload>
             </publicsearch>
             </div>
            </div>
        </div>
     <div class="row">
        <div class="col-md-12" >
             <div class="col-md-4" >
             <publicsearch modeltitle="登记发放上传"  style="margin:0">
                 <el-upload :before-remove="removeFile4" :on-success="upSuccessFile" 
                  class="upload-demo" ref="excel" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                  :action="importregister" :on-preview="handlePreview" :auto-upload="true">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb</div>
                    <el-card style="margin-top:16px" class="box-card" v-if="importregisterlist.total>0 || importregisterlistsuc.total>0">
                    <div slot="header" class="clearfix">
                        <span>共{{importregisterlist.total}}条错误,{{importregisterlistsuc.total}}条成功</span>
                    </div>
                    <div v-for="o in importregisterlist.data" :key="o.line" class="text item" style="margin-bottom:6px">
                        第{{o.line}}行,<el-tag v-for="(i,index) in o.error" :key="index" type="danger" style="margin-left:6px">{{i}}</el-tag>
                    </div>
                </el-card>                </el-upload>
             </publicsearch>
             </div>
             <div class="col-md-4" >
             <publicsearch modeltitle="文书上传"  style="margin:0">
                 <el-upload :before-remove="removeFile4" :on-success="upSuccessFile" 
                  class="upload-demo" ref="excel" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                  :action="importdocument" :on-preview="handlePreview" :auto-upload="true">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb</div>
                    <el-card style="margin-top:16px" class="box-card" v-if="importdocumentlist.total>0 || importdocumentlistsuc.total>0">
                    <div slot="header" class="clearfix">
                        <span>共{{importdocumentlist.total}}条错误,{{importdocumentlistsuc.total}}条成功</span>
                    </div>
                    <div v-for="o in importdocumentlist.data" :key="o.line" class="text item" style="margin-bottom:6px">
                        第{{o.line}}行,<el-tag v-for="(i,index) in o.error" :key="index" type="danger" style="margin-left:6px">{{i}}</el-tag>
                    </div>
                </el-card>
                </el-upload>
             </publicsearch>
             </div>
        </div>
    </div>
    </div> 
</template>
<script>
export default {
  data() {
    return {
      importfiling: this.$store.state.baseURL + "/api/excel/import_filing",
      importcaseclue: this.$store.state.baseURL + "/api/excel/import_case_clue",
      importclue: this.$store.state.baseURL + "/api/excel/import_clue",
      importregister: this.$store.state.baseURL + "/api/excel/import_register",
      importdocument: this.$store.state.baseURL + "/api/excel/import_document",
      importfilinglist: {},
      importcasecluelist: {},
      importcluelist: {},
      importregisterlist: {},
      importdocumentlist: {},
      importfilinglistsuc: {},
      importcasecluelistsuc: {},
      importcluelistsuc: {},
      importregisterlistsuc: {},
      importdocumentlistsuc: {}
    };
  },
  methods: {
    download: function(url) {
      window.open(this.$store.state.baseURL + url, "download");
    },
    upSuccessFile: function(res) {
      console.log(res);
      if (res.success) {
        this.$message({
          showClose: true,
          message: "上传成功",
          type: "success"
        });
        switch (res.data.type) {
          case "t_clue":
            this.importfilinglist = res.data.failedData;
            this.importfilinglistsuc = res.data.successData;
            break;
          case "t_case_clue":
            this.importcasecluelist = res.data.failedData;
            this.importcasecluelistsuc = res.data.successData;
            break;
          case "t_filing":
            this.importcluelist = res.data.failedData;
            this.importcluelistsuc = res.data.successData;
            break;
        case "t_register":
            this.importregisterlist = res.data.failedData;
            this.importregisterlistsuc = res.data.successData;
            break;
        case "t_document":
            this.importdocumentlist = res.data.failedData;
            this.importdocumentlistsuc = res.data.successData;
            break;
        }
      } else {
        this.$message({
          showClose: true,
          message: res.errorMessage,
          type: "error"
        });
      }
    },
    handlePreview(file) {
      console.log(file);
    },
    removeFile4(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

