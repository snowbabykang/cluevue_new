<template>
    <div>
        <el-row :gutter="20">
            
            <el-col :span="6"><div class="grid-content bg-purple">是否单位：{{this.modelinfo. detail.units_event}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">姓名：{{this.modelinfo. detail.reflected_name}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">性别：{{this.modelinfo. detail.gender}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">出生年月：{{this.modelinfo. detail.birthday}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">学历：{{this.modelinfo. detail.education}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">民族：{{this.modelinfo. detail.nation}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">政治面貌：{{this.modelinfo. detail.political}}{{this.modelinfo. detail.political_2}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">是否党员：{{this.modelinfo. detail.party_member}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">入党时间：{{this.modelinfo. detail.join_party_time}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">是否国家监察对象：{{this.modelinfo. detail.supervision}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">监察对象二级分类：{{this.modelinfo. detail.supervision_type_two}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">是否非党员非监察对象：{{this.modelinfo. detail.unparty_supervision}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">非党员非监察对象二级分类：{{this.modelinfo. detail.unsupervision_type_two}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">工作单位及职务：{{this.modelinfo. detail.company}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">职级：{{this.modelinfo. detail.level}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">任现职时间：{{this.modelinfo. detail.join_company_time}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">干部管理权限：{{this.modelinfo. detail.cadre_auth}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">人大代表：{{this.modelinfo. detail.npc_member}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">政协委员：{{this.modelinfo. detail.cppcc_member}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">一把手违纪违法：{{this.modelinfo. detail.leader_violate}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">企业性质：{{this.modelinfo. detail.enterprise_nature}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">企业级别：{{this.modelinfo. detail.enterprise_level}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">岗位：{{this.modelinfo. detail.station}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">企业人员级别：{{this.modelinfo. detail.enterprise_persion_level}}</div></el-col>

            <el-col :span="6"><div class="grid-content bg-purple">职务犯罪行为：{{this.modelinfo. detail.crime_of_duty}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">其他违法犯罪行为：{{this.modelinfo. detail.other_offenses}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">组织措施统计时间：{{this.modelinfo. detail.clue_measures_count_time}}</div></el-col>

            <!-- <el-col :span="6"><div class="grid-content bg-purple">年龄：{{this.modelinfo. detail.units_event}}</div></el-col> -->
            <!-- <el-col :span="6"><div class="grid-content bg-purple">职务：{{this.modelinfo. detail.post}}</div></el-col> -->
            
            <el-col :span="6"><div class="grid-content bg-purple">公务员：{{this.modelinfo. detail.servant}}</div></el-col>
            
            <el-col :span="6"><div class="grid-content bg-purple">部门分类：{{this.modelinfo. detail.department}}</div></el-col>
            
        </el-row>
        <el-tabs v-model="activeName">
          <el-tab-pane label="线索情况" name="first">
                <el-row :gutter="20">
                    <el-col :span="5"><div class="grid-content bg-purple">线索编码：{{this.modelinfo. sheet.clue_number}}</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">人员编码：{{this.modelinfo. sheet.user_number}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">受理时间：{{this.modelinfo. sheet.clue_accept_time}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple">办理机关：{{this.modelinfo. sheet.clue_agency}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple">是否与本人合适：{{this.modelinfo. sheet.clue_verify}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">案件来源：{{this.modelinfo. sheet.clue_source}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">违纪行为：{{this.modelinfo. sheet.clue_violate}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">涉法行为：{{this.modelinfo. sheet.clue_involve_law}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">处置方式：{{this.modelinfo. sheet.clue_disposal_type}}{{this.modelinfo. sheet.clue_disposal_type_2}}</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">组织措施：{{this.modelinfo. sheet.clue_measures}}</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">收缴涉案金额：{{this.modelinfo. sheet.clue_collection_money}}</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">挽回经济损失：{{this.modelinfo. sheet.clue_redeem_money}}</div></el-col>
                </el-row>
          </el-tab-pane>
          <el-tab-pane label="线索文书" name="second">
            <el-row :gutter="20">
                <el-col :span="24"><div class="grid-content bg-purple">主要问题线索：{{this.modelinfo. sheet2.document_main_content}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">处置情况报告：{{this.modelinfo. sheet2.document_disposal_report}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">备注：{{this.modelinfo. sheet2.document_remark}}</div></el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        infodata: {},
        activeName: 'first'
      };
    },
    props:['modelinfo'],
    computed:{
      wtext:function(){
          return JSON.parse(this.modelinfo) 
      }
    }
  }
</script>
<style scoped>
  .grid-content{
    padding: 6px 0px;
  }
</style>
