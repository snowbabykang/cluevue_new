<template>
<div>
    <el-tabs name="viewlist_" v-model="activeName2" type="card">
        <el-tab-pane label="线索管理" name="first">
            <el-table :data="data.clue.data" height="350">
                <el-table-column property="source_dic" label="线索来源I级"></el-table-column>
                <el-table-column property="source" label="线索来源II级"></el-table-column>
                <el-table-column property="number" label="编号"></el-table-column>
                <el-table-column property="reflected_name" label="被反映人"></el-table-column>
                <el-table-column property="company" label="单位"></el-table-column>
                <el-table-column property="post" label="职位"></el-table-column>
                <el-table-column property="level" label="级别"></el-table-column>
                <el-table-column property="clue_state" label="状态"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="view(scope.$index, scope.row,1)">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="文书管理" name="second">
            <el-table :data="data.document.data" height="350">
                <el-table-column property="document_date" label="发文日期"></el-table-column>
                <el-table-column property="document_code" label="发文字号"></el-table-column>
                <el-table-column property="document_title" label="文件标题"></el-table-column>
                <el-table-column property="document_user" label="发文人"></el-table-column>
                 <el-table-column property="document_type" label="发文类型"></el-table-column>
                <el-table-column property="document_unit" label="发文单位"></el-table-column>
                <el-table-column property="document_signatory" label="领取签字人"></el-table-column>
                <el-table-column property="memo" label="备注"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                    <el-button size="mini" @click="view(scope.$index, scope.row,2)">
                        查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="问题线索处理登记" name="third">
            <el-table :data="data.case.case_clue.data" height="350">
                <el-table-column property="clue_number" label="编号"></el-table-column>
                <el-table-column property="reflected_name" label="被反映人"></el-table-column>
                <el-table-column property="company" label="工作单位"></el-table-column>
                <el-table-column property="post" label="职位"></el-table-column>
                <el-table-column property="level" label="级别"></el-table-column>
                <el-table-column property="clue_disposal_type" label="处置方式"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                    <el-button size="mini" @click="view(scope.$index, scope.row,3)">
                        查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="立案案件登记表" name="fourth">
            <el-table :data="data.case.case_filing.data" height="350">
                <el-table-column property="case_num" label="编号"></el-table-column>
                <el-table-column property="reflected_name" label="被反映人"></el-table-column>
                <el-table-column property="company" label="工作单位"></el-table-column>
                <el-table-column property="post" label="职位"></el-table-column>
                <el-table-column property="level" label="级别"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                    <el-button size="mini" @click="view(scope.$index, scope.row,4)">
                        查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-tab-pane>



        <el-tab-pane label="登记发放" name="register">
            <el-table :data="data.register.data" height="350">
                <el-table-column property="number" label="编号"></el-table-column>
                <el-table-column property="reflected_name" label="被反映人"></el-table-column>
                <el-table-column property="company" label="工作单位及职务">
                    <template slot-scope="scope">
                     {{scope.row.company}}-{{scope.row.post}}
                    </template>
                </el-table-column>
                <el-table-column property="main_content" label="反映的主要问题"></el-table-column>
                <el-table-column property="leader_approval" label="集体排查意见及领导批示"></el-table-column>
                <el-table-column property="signatory" label="领取人签字"></el-table-column>
                <el-table-column property="remark" label="备注"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                    <el-button size="mini" @click="view(scope.$index, scope.row,5)">
                        查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-tab-pane>


    </el-tabs>
    <el-dialog width="1300px" name="vv" title="详情" :visible.sync="togg1" :modal="false">
        <clueview :clurid="clue_id">
        </clueview>
    </el-dialog>
    <el-dialog width="800px" name="vv" title="详情" :visible.sync="togg2" :modal="false">
        <infomodelb :id="id">
        </infomodelb>
    </el-dialog>
    <el-dialog width="1300px" name="vv" title="详情" :visible.sync="togg3" :modal="false">
          <infomodel :modelinfo="idinfo"></infomodel>
    </el-dialog>
    <el-dialog width="1300px" name="vv" title="详情" :visible.sync="togg4" :modal="false">
         <infomodela :modelinfo="idinfo_"></infomodela>
    </el-dialog>
    <el-dialog width="1300px" name="vv" title="详情" :visible.sync="togg5" :modal="false">
         <checkInView :clurid="clue_id"></checkInView>
    </el-dialog>
</div>
</template>

<script>
import clueview from "./clueview";
import checkInView from "../checkIn/checkInView.vue";
import infomodel from "../problemregister/info.vue";
import infomodela from "../filngregister/info.vue";
import infomodelb from "../pagerwork/view.vue";
export default {
  name: "viewlist_",
  props: ["data"],
  components: {
    clueview,
    infomodel,
    infomodela,
    infomodelb,
    checkInView
  },
  created() {},
  data() {
    return {
      id: "",
      togg1: false,
      togg2: false,
      togg3: false,
      togg4: false,
      togg5: false,
      clue_id: "",
      infoid: "",
      infoid_: "",
      idinfo: "",
      idinfo_: "",
      activeName2: "first"
    };
  },
  methods: {
    view(i, v, tog) {
      this["togg" + tog] = true;
      if (tog == 1) {
        this.clue_id = v.clue_id;
      }
      if (tog == 2) {
        this.id = v.id;
      }
      if (tog == 3) {
        this.infoid = v.clue_number;
        this.$ajax
          .post("/api/clue/problem_clues_list", {
            clue_number: v.clue_number
          })
          .then(res => {
            this.idinfo = res.data;
          });
      }
      if (tog == 4) {
        this.infoid_ = v.case_num;
        this.$ajax
          .post("/api/cases/list", {
            case_num: v.case_num
          })
          .then(res => {
            this.idinfo_ = res.data;
          });
      }
      if(tog==5){
           this.clue_id = v.clue_id;
      }
    }
  }
};
</script>

<style scoped>

</style>