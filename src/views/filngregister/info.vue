<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple">是否单位：{{this.modelinfo.detail.is_dw}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">单位代码：{{this.modelinfo.detail.dw_code}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">单位名称：{{this.modelinfo.detail.dw_title}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">姓名：{{this.modelinfo.detail.reflected_name}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">证件类型：{{this.modelinfo.detail.idcard_type}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">证件号码：{{this.modelinfo.detail.idcard}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">性别：{{this.modelinfo.detail.gender}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">出生年月：{{this.modelinfo.detail.year_of_birth}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">年龄：{{this.modelinfo.detail.age}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">学历：{{this.modelinfo.detail.education}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">民族：{{this.modelinfo.detail.nation}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">是否中共党员：{{this.modelinfo.detail.party_member}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">入党时间：{{this.modelinfo.detail.party_time}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">是否国家监察对象：{{this.modelinfo.detail.supervision}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">国家监察对象详情情况：{{this.modelinfo.detail.supervision_details}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">非党员非监察对象：{{this.modelinfo.detail.unparty_supervision}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">非党员非监察对象详情情况：{{this.modelinfo.detail.unparty_supervision_details}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">工作单位及职务：{{this.modelinfo.detail.company}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">职级：{{this.modelinfo.detail.level}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">任现职时间：{{this.modelinfo.detail.working_time}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">干部管理权限：{{this.modelinfo.detail.cadre_auth}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">人大代表：{{this.modelinfo.detail.is_deputies}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">政协委员：{{this.modelinfo.detail.is_cppcc_members}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">中共党代表：{{this.modelinfo.detail.party_member_represent}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">党委委员：{{this.modelinfo.detail.party_committee_member}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">纪委委员：{{this.modelinfo.detail.committee_member}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">部门分类：{{this.modelinfo.detail.department}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">一把手违纪违法：{{this.modelinfo.detail.leader_violate}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">企业性质：{{this.modelinfo.detail.enterprise_nature}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">企业人员类别1：{{this.modelinfo.detail.enterprise_persion1}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">企业岗位：{{this.modelinfo.detail.enterprise_post}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">企业人员类别：{{this.modelinfo.detail.enterprise_persion}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">企业人员级别：{{this.modelinfo.detail.enterprise_persion_level}}</div></el-col>
           
            <el-col :span="6"><div class="grid-content bg-purple">政治面貌：{{this.modelinfo.detail.political}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">政治面貌二级：{{this.modelinfo.detail.political_status}}</div></el-col>
            <!-- <el-col :span="6"><div class="grid-content bg-purple">职务：{{this.modelinfo.detail.post}}</div></el-col> -->
            
            <el-col :span="6"><div class="grid-content bg-purple">公务员：{{this.modelinfo.detail.is_civil_servant}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">是否行政监察对象：{{this.modelinfo.detail.is_supervision}}</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">岗位：{{this.modelinfo.detail.station}}</div></el-col>
            
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
                <el-col :span="6"><div class="grid-content bg-purple">案件编码：{{this.modelinfo.sheet2.case_num}}</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">涉案人员编码：{{this.modelinfo.sheet2.case_user_num}}</div></el-col>
                <!-- <el-col :span="6"><div class="grid-content bg-purple">办理机关：{{this.modelinfo.sheet2.clue_accept_time}}</div></el-col> -->
                <!-- <el-col :span="4"><div class="grid-content bg-purple">是否与本人合适：{{this.modelinfo.sheet2.clue_agency}}</div></el-col> -->
                <el-col :span="12"><div class="grid-content bg-purple">线索来源：{{this.modelinfo.sheet2.case_source}}</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">纪委立案时间：{{this.modelinfo.sheet2.filing_time}}</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">纪委立案机关：{{this.modelinfo.sheet2.filing_office}}</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">监委立案时间：{{this.modelinfo.sheet2.supervisory_time}}</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">监委立案机关：{{this.modelinfo.sheet2.supervisory_office}}</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple">是否其他纪检监察机关立案后移送：{{this.modelinfo.sheet2.transfer_inspection}}</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple">其他纪检监察机关立案后移送方式：{{this.modelinfo.sheet2.transfer_inspection_type}}</div></el-col>

                <el-col :span="6"><div class="grid-content bg-purple">首次违纪时间：{{this.modelinfo.sheet2.first_violation_time}}</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">末次违纪时间：{{this.modelinfo.sheet2.end_violation_time}}</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple">其他违纪时间：{{this.modelinfo.sheet2.other_process_time}}</div></el-col>

                <el-col :span="24"><div class="grid-content bg-purple">调查中（终）止时间：{{this.modelinfo.sheet2.survey_end_time}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">简要案情：{{this.modelinfo.sheet2.brief_case}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">立案报告：{{this.modelinfo.sheet2.filing_report}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">立案决定书：{{this.modelinfo.sheet2.filing_decision}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">调查报告：{{this.modelinfo.sheet2.survey_report}}</div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple">备注：{{this.modelinfo.sheet2.memo}}</div></el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="留置措施情况" name="i">
            <el-row :gutter="20">
                 <el-col :span="6"><div class="grid-content bg-purple">采取措施机关：{{this.modelinfo.sheet7.measures_office}}</div></el-col>
                 <el-col :span="6"><div class="grid-content bg-purple">采取措施机关名称：{{this.modelinfo.sheet7.measures_office_name}}</div></el-col>
                 <el-col :span="12"><div class="grid-content bg-purple">留置起始时间：{{this.modelinfo.sheet7.lien_start_time}}</div></el-col>
                 <el-col :span="6"><div class="grid-content bg-purple">采取措施地点分类：{{this.modelinfo.sheet7.measures_address_category}}</div></el-col>
                 <el-col :span="18"><div class="grid-content bg-purple">采取措施地点：{{this.modelinfo.sheet7.measures_address}}</div></el-col>
                 <el-col :span="24"><div class="grid-content bg-purple">留置审批情况：{{this.modelinfo.sheet7.lien_approval}}</div></el-col>
                 <el-col :span="6"><div class="grid-content bg-purple">留置结束时间：{{this.modelinfo.sheet7.lien_end_time}}</div></el-col>
                 <el-col :span="6"><div class="grid-content bg-purple">留置天数：{{this.modelinfo.sheet7.lien_days}}</div></el-col>
                 <el-col :span="6"><div class="grid-content bg-purple">延期天数：{{this.modelinfo.sheet7.delay_days}}</div></el-col>
                 <el-col :span="6"><div class="grid-content bg-purple">延期审批情况：{{this.modelinfo.sheet7.delay_approval}}</div></el-col>
                 <el-col :span="24"><div class="grid-content bg-purple">移送司法机关金额（万元）：{{this.modelinfo.sheet7.transfer_money}}</div></el-col>
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
                    
                    <el-col :span="6"><div class="grid-content bg-purple">违纪总金额（万元）：{{this.modelinfo.sheet5.violation_money}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">渎职侵权损失（万元）：{{this.modelinfo.sheet5.loss}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">收缴涉案金额（万元）：{{this.modelinfo.sheet5.collected_amount}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">挽回经济损失（万元）：{{this.modelinfo.sheet5.recover_amount}}</div></el-col>
                     
                    <el-col :span="6"><div class="grid-content bg-purple">结案时间：{{this.modelinfo.sheet5.close_time}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">党纪处分：{{this.modelinfo.sheet5.party_discipline}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">留党察看年限：{{this.modelinfo.sheet5.view_year}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">政纪处分：{{this.modelinfo.sheet5.political_disposition}}</div></el-col>
                     
                    <el-col :span="6"><div class="grid-content bg-purple">其他处理：{{this.modelinfo.sheet5.other_process}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">组织措施：{{this.modelinfo.sheet5.organizational}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">潜逃时间：{{this.modelinfo.sheet5.abscond_time}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">潜逃去向：{{this.modelinfo.sheet5.sneak_away}}</div></el-col>
                     
                    <el-col :span="6"><div class="grid-content bg-purple">潜逃去向细节：{{this.modelinfo.sheet5.fleeing_details}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">抓获时间：{{this.modelinfo.sheet5.captured_time}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">销案时间：{{this.modelinfo.sheet5.sales_time}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">责任追究：{{this.modelinfo.sheet5.accountability}}</div></el-col>

                    <el-col :span="6"><div class="grid-content bg-purple">移送单位：{{this.modelinfo.sheet5.transfer_unit}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">是否违反中央八项规定精神：{{this.modelinfo.sheet5.violation_rules}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">是否属于问责：{{this.modelinfo.sheet5.is_accountability}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">政务处分：{{this.modelinfo.sheet5.government_discipline}}</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">审理机关：{{this.modelinfo.sheet5.trial_organ}}</div></el-col>

                    <el-col :span="24"><div class="grid-content bg-purple">处分决定：{{this.modelinfo.sheet5.punish}}</div></el-col>
                    <el-col :span="24"><div class="grid-content bg-purple">案件剖析：{{this.modelinfo.sheet5.analysis}}</div></el-col>
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
<style scoped>
  .grid-content{
    padding: 6px 0px;
  }
</style>
