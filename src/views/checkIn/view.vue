<template>
<div>
  <el-row :gutter="20">
    <el-col :span="12"><div class="grid-content bg-purple">编号：{{this.ruleForm.number}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">被反映人：{{this.ruleForm.reflected_name}}</div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">工作单位及职务：{{this.ruleForm.company}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">承办领导：{{this.ruleForm.undertake_leader}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">承办部门：{{this.ruleForm.clue_next}}</div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">反应的主要问题：{{this.ruleForm.main_content}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">领取人签字：{{this.ruleForm.signatory}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">集体排查意见及领导批示：{{this.ruleForm.leader_approval}}</div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">备注：{{this.ruleForm.remark}}</div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">进展：{{this.ruleForm.progress}}</div></el-col>
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
