<template>
<div>
  <el-row :gutter="20">
    <el-col :span="12"><div class="grid-content bg-purple">文件标题：{{this.ruleForm.document_title}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">发文人：{{this.ruleForm.document_user}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">发文字号：{{this.ruleForm.document_code}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">发文类型：{{this.ruleForm.document_type}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">发文单位：{{this.ruleForm.document_unit}}</div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">备注：{{this.ruleForm.memo}}</div></el-col>
  </el-row>
</div>
</template>

<script>
export default {
  props: ['ruleForm'],
}
</script>
<style>
.grid-content{
    padding: 6px 0px;
  }
</style>
