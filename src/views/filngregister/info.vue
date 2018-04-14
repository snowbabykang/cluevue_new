<template>
    <div>
        <el-row :gutter="20">
            
            <el-col :span="6"><div class="grid-content bg-purple">是否单位或事件事故：{{this.modelinfo.detail.reflected_name}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">姓名：{{this.modelinfo.detail.reflected_name}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">性别：{{this.modelinfo.detail.gender}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">民族：{{this.modelinfo.detail.nation}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">出生年月：{{this.modelinfo.detail.birthday}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">年龄：{{this.modelinfo.detail.age}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">政治面貌：{{this.modelinfo.detail.political}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">入党时间：{{this.modelinfo.detail.join_party_time}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">学历：{{this.modelinfo.detail.education}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">工作单位：{{this.modelinfo.detail.company}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">职务：{{this.modelinfo.detail.post}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">职级：{{this.modelinfo.detail.level}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">干部管理权限：{{this.modelinfo.detail.cadre_auth}}</div></el-col>
            
            <el-col :span="6"><div class="grid-content bg-purple">任现职时间：{{this.modelinfo.detail.join_company_time}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">人大代表：{{this.modelinfo.detail.npc_member}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">政协委员：{{this.modelinfo.detail.cppcc_member}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">公务员：{{this.modelinfo.detail.servant}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">是否行政监察对象：{{this.modelinfo.detail.supervision}}</div></el-col>
            
            <el-col :span="6"><div class="grid-content bg-purple">部门分类：{{this.modelinfo.detail.department}}</div></el-col>
            
            <el-col :span="6"><div class="grid-content bg-purple">企业性质：{{this.modelinfo.detail.enterprise_nature}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">岗位：{{this.modelinfo.detail.station}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">企业人员级别：{{this.modelinfo.detail.enterprise_persion_level}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">一把手违纪：{{this.modelinfo.detail.leader_violate}}</div></el-col>
            
        </el-row>
        <el-tabs v-model="activeName">
          <el-tab-pane label="两规两指情况" name="a">
                <el-row :gutter="20">
                    
                    <el-col :span="24"><div class="grid-content bg-purple">使用措施：{{this.modelinfo.sheet.use_measures}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">实施开始时间：{{this.modelinfo.sheet.begin_time}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">实施结束时间：{{this.modelinfo.sheet.end_time}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">实施机关：{{this.modelinfo.sheet.lglzjg}}</div></el-col>
                    
                </el-row>
          </el-tab-pane>
          <el-tab-pane label="立案情况" name="b">
            <el-row :gutter="20">
                <el-col :span="5"><div class="grid-content bg-purple">案件编码：{{this.modelinfo.sheet2.case_num}}</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">涉案人员编码：{{this.modelinfo.sheet2.case_user_num}}</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">办理机关：{{this.modelinfo.sheet2.clue_accept_time}}</div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">是否与本人合适：{{this.modelinfo.sheet2.clue_agency}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">线索来源：{{this.modelinfo.sheet2.document_main_content}}</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">立案时间：{{this.modelinfo.sheet2.document_disposal_report}}</div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple">立案机关：{{this.modelinfo.sheet2.document_remark}}</div></el-col>

                <el-col :span="6"><div class="grid-content bg-purple">首次违纪时间：{{this.modelinfo.sheet2.document_disposal_report}}</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">末次违纪时间：{{this.modelinfo.sheet2.document_remark}}</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple">其他违纪时间：{{this.modelinfo.sheet2.document_disposal_report}}</div></el-col>

                <el-col :span="24"><div class="grid-content bg-purple">调查中（终）止时间：{{this.modelinfo.sheet2.document_remark}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">简要案情：{{this.modelinfo.sheet2.document_remark}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">立案报告：{{this.modelinfo.sheet2.document_remark}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">立案决定书：{{this.modelinfo.sheet2.document_remark}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">调查报告：{{this.modelinfo.sheet2.document_remark}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">备注：{{this.modelinfo.sheet2.document_remark}}</div></el-col>
            </el-row>
          </el-tab-pane>
           <el-tab-pane label="违纪违法行为" name="c">
                <el-row :gutter="20">
                    
                    <el-col :span="24"><div class="grid-content bg-purple">违纪行为：{{this.modelinfo.sheet3.disciplinary_action}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">涉法行为：{{this.modelinfo.sheet3.law_related}}</div></el-col>

                </el-row>
           </el-tab-pane>
           <el-tab-pane label="审理情况" name="d">
                <el-row :gutter="20">
                    
                    <el-col :span="24"><div class="grid-content bg-purple">审理受理时间：{{this.modelinfo.sheet4.trial_accept_time}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">审理机关：{{this.modelinfo.sheet4.trial_office}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">审结时间：{{this.modelinfo.sheet4.trial_end_time}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">审理报告：{{this.modelinfo.sheet4.trial_report}}</div></el-col>
                </el-row>
           </el-tab-pane>
           <el-tab-pane label="结案情况" name="e">
                <el-row :gutter="20">
                    
                    <el-col :span="6"><div class="grid-content bg-purple">违纪涉法总金额（万元）：{{this.modelinfo.sheet5.clue_source}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">失职渎职损失（万元）：{{this.modelinfo.sheet5.clue_violate}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">收缴涉案金额（万元）：{{this.modelinfo.sheet5.clue_source}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">挽回经济损失（万元）：{{this.modelinfo.sheet5.clue_violate}}</div></el-col>
                     
                    <el-col :span="6"><div class="grid-content bg-purple">结案时间：{{this.modelinfo.sheet5.close_time}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">党纪处分：{{this.modelinfo.sheet5.other_process}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">留党察看年限：{{this.modelinfo.sheet5.clue_source}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">政纪处分：{{this.modelinfo.sheet5.organizational}}</div></el-col>
                     
                    <el-col :span="6"><div class="grid-content bg-purple">其他处理：{{this.modelinfo.sheet5.clue_source}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">组织措施：{{this.modelinfo.sheet5.clue_violate}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">潜逃时间：{{this.modelinfo.sheet5.clue_source}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">潜逃去向：{{this.modelinfo.sheet5.clue_violate}}</div></el-col>
                     
                    <el-col :span="6"><div class="grid-content bg-purple">潜逃去向细节：{{this.modelinfo.sheet5.clue_source}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">抓获时间：{{this.modelinfo.sheet5.clue_violate}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">销案时间：{{this.modelinfo.sheet5.clue_source}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">责任追究：{{this.modelinfo.sheet5.clue_violate}}</div></el-col>

                    <el-col :span="24"><div class="grid-content bg-purple">处分决定：{{this.modelinfo.sheet5.political_disposition}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">案件剖析：{{this.modelinfo.sheet5.punish}}</div></el-col>
                </el-row>
           </el-tab-pane>
           <el-tab-pane label="公检法等处理情况" name="f">
                <el-row :gutter="20">
                    
                    <el-col :span="24"><div class="grid-content bg-purple">移送司法机关时间：{{this.modelinfo.sheet6.transfer_time}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">公检法等机关处理时间：{{this.modelinfo.sheet6.process_time}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">公检法等机关处理内容：{{this.modelinfo.sheet6.public_inspection}}{{this.modelinfo.sheet6.public_inspection_two}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">司法判决金额（万元）：{{this.modelinfo.sheet6.judicial_amount}}</div></el-col>
                </el-row>
               
           </el-tab-pane>
           <!-- <el-tab-pane label="线索情况" name="g">
                <el-row :gutter="20">
                    
                    <el-col :span="5"><div class="grid-content bg-purple">线索编码：{{this.modelinfo.clue_number}}</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">人员编码：{{this.modelinfo.user_number}}</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">受理时间：{{this.modelinfo.clue_accept_time}}</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">办理机关：{{this.modelinfo.clue_agency}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple">是否与本人核实：{{this.modelinfo.clue_verify}}</div></el-col>

                    <el-col :span="24"><div class="grid-content bg-purple">线索来源：{{this.modelinfo.clue_source}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">违纪行为：{{this.modelinfo.clue_violate}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">涉法行为：{{this.modelinfo.clue_involve_law}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">处置方式：{{this.modelinfo.clue_disposal_type}}</div></el-col>

                    <el-col :span="5"><div class="grid-content bg-purple">组织措施：{{this.modelinfo.clue_measures}}</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">收缴涉案金额：{{this.modelinfo.clue_collection_money}}</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">挽回经济损失：{{this.modelinfo.clue_redeem_money}}</div></el-col>
                </el-row>
           </el-tab-pane> -->
           <!-- <el-tab-pane label="线索文书" name="h">
                <el-row :gutter="20">
                    
                    <el-col :span="24"><div class="grid-content bg-purple">主要问题线索：{{this.modelinfo.document_main_content}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">处置情况报告：{{this.modelinfo.document_disposal_report}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">备注：{{this.modelinfo.document_remark}}</div></el-col>
                </el-row>
           </el-tab-pane> -->
        </el-tabs>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        infodata: {},
        activeName: 'a'
      };
    },
    props:['modelinfo'],
    computed:{
      wtext:function(){
          return JSON.parse(this.modelinfo) 
      },
      age:function(){
          return this.modelinfo.birthday
      }
    }
  }
</script>
<style>
  .grid-content{
    padding: 6px 0px;
  }
</style>
