<template>
<div>
  <el-row :gutter="20">
    <el-col :span="12"><div class="grid-content bg-purple">结案日期：{{this.ruleForm.closed_time}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">距结案日期还有{{newdata}}天</div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">线索来源I级：{{this.ruleForm.source_dic}}</div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">线索来源II级：{{this.ruleForm.source}}</div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">编号：{{this.ruleForm.number}}</div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">被反映人姓名：{{this.ruleForm.reflected_name}}</div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">职务：{{this.ruleForm.post}}</div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">级别：{{this.ruleForm.level}}</div></el-col>
</el-row>
    <hr>
<el-row>
    <el-col :span="24"><div class="grid-content bg-purple">主要内容：{{this.ruleForm.main_content}}</div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">部门意见：{{this.ruleForm.department_opinion}}</div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">领导批示：{{this.ruleForm.leader_approval}}</div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">备注：{{this.ruleForm.remark}}</div></el-col>
</el-row>
    <hr>
<el-row>
    <el-col :span="12"><div class="grid-content bg-purple">处置类型：{{this.ruleForm.disposal_type}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">上级交办：{{this.ruleForm.supervisor}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">办结期限：{{this.ruleForm.closed_time}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">提醒天数：{{this.ruleForm.remind_days}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">承办部门：{{this.ruleForm.clue_next}}</div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">线索状态：{{this.ruleForm.clue_state}}</div></el-col>
    <el-col :span="24"><div class="grid-content bg-purple">已上传文件：
            <el-button @click="fileClick(tag)" :key="tag.id" v-for="(tag, index) in upFileEnd">{{index+1}}. {{tag.filename}}</el-button>
        </div></el-col>
  </el-row>
  <hr>
  <el-button type="primary" @click="daochu()">导出</el-button>
</div>
</template>

<script>
export default {
  props: ['ruleForm','upFileEnd','newdata'],
  methods: {
    daochu() {
        let data={clue_id:this.ruleForm.clue_id};
        this.$ajax.post('/api/clue/export_word', data).then((res) => {
            this.downF = 'http://clue.api.test/' + res.data.file_path;
            this.open();
        })
    },
    open() {
        window.open(this.downF);
    }
  }
}
</script>
<style>
.grid-content{
    padding: 6px 0px;
  }
</style>
