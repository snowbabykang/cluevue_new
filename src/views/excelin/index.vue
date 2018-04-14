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
             </publicsearch>
             </div>
             <div class="col-md-4" >
             <publicsearch modeltitle="立案模板上传"  style="margin:0">
                 <el-upload :before-remove="removeFile4" :on-success="upSuccessFile" 
                  class="upload-demo" ref="excel" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                  :action="importfiling" :on-preview="handlePreview" :auto-upload="true">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb</div>
                                    </el-upload>
             </publicsearch>
             </div>
              </div>
    </div>
    </div> 
</template>
<script>
export default {
  data(){
      return {
          importfiling:this.$store.state.baseURL+'/api/excel/import_filing',
          importcaseclue:this.$store.state.baseURL+'/api/excel/import_case_clue',
          importclue:this.$store.state.baseURL+'/api/excel/import_clue'
      }
  },
  methods:{
      download:function(url){
          window.open(this.$store.state.baseURL+url,'download')
      },
      upSuccessFile:function(res){
          console.log(res)
          if(res.success){
              this.$message({
                showClose: true,
                message: "上传成功",
                type: 'success'
            });
          }else{
              this.$message({
                showClose: true,
                message: res.errorMessage,
                type: 'error'
            });
          }
      },
      handlePreview(file) {
        console.log(file);
      },
      removeFile4(file, fileList) {
        
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
  }
}
</script>

