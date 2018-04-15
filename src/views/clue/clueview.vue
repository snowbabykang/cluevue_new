<template>
<div v-loading="loading">
    <div id="paper-top">
        <div class="col-lg-3">
            <h2 class="tittle-content-header">
                <i class="icon-window"></i>
                <span>录入线索</span>
            </h2>
        </div>
        <div class="col-sm-7">
            <div class="devider-vertical visible-lg"></div>
            <div class="tittle-middle-header">

                <div class="alert">
                    <button type="button" class="close" data-dismiss="alert">×</button>
                    <span class="tittle-alert entypo-info-circled"></span> 请在此处录入线索

                </div>


            </div>

        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <breadcrumb></breadcrumb>
        </div>
    </div>

    <div class="demo-block">

        <div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="结案日期" prop="source">
                            {{ruleForm.closed_time}}
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="" prop="number">
                            距结案日期还有 <span style="color:red;font-weight:bold">{{newdata}}</span> 天
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="线索来源" prop="source">
                            {{ruleForm.source}}
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="编号" prop="number">
                            {{ruleForm.number}}
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="被反映人姓名">
                            {{ruleForm.reflected_name}}
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="职务">
                            {{ruleForm.post}}
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="级别">
                            <el-select :disabled="true" v-model="ruleForm.level" clearable placeholder="请选择级别">
                                <el-option v-for="item in dicdata.rank.data" :key="item.id" :label="item.title" :value="item.title">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="主要内容">
                            {{ruleForm.main_content}}
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="部门意见">
                            {{ruleForm.department_opinion}}
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="领导批示">
                            {{ruleForm.leader_approval}}
                        </el-form-item>
                    </el-col>
                </el-row>
                <hr/>
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="备注">
                            {{ruleForm.remark}}
                        </el-form-item>
                    </el-col>
                </el-row>
                <hr/>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="处置类型">
                            <el-select v-model="ruleForm.disposal_type" :disabled="true" placeholder="请选择处置类型">
                                <el-option v-for="item in dicdata.chuzhi.data" :key="item.id" :label="item.title" :value="item.title">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="上级交办">
                            <el-switch v-model="ruleForm.supervisor" :disabled="true" active-value="上级交办" inactive-value="否"></el-switch>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="办结期限">
                            {{ruleForm.closed_time}}
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="提醒天数">
                            {{ruleForm.remind_days}}
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="5">
                        <el-form-item label="去向">
                            {{ruleForm.clue_next}}
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="线索状态">
                            <el-select :disabled="true" v-model="ruleForm.clue_state" clearable placeholder="请选择状态">
                                <el-option v-for="item in dicdata.clue_state.data" :key="item.id" :label="item.title" :value="item.title">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                    </el-col>
                </el-row>
                <hr/>
                <el-row class="jihao">
                    <el-col :span="24">
                        <el-form-item label="已上传文件">
                            <el-button @click="fileClick(tag)" :key="tag.id" v-for="(tag, index) in upFileEnd">{{index+1}}. {{tag.filename}}</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
                <hr/>
                <el-form-item>
                    <el-button type="primary" @click="daochu()">导出</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-dialog title="图片" :visible.sync="dialogTableVisible" class="mod" width="996px">
            <div style="text-align:center">
                <img class="img-show" :src="srcimg">
            </div>
        </el-dialog>
    </div>
</div>
</template>
<script>
export default {
    name: 'menuslider',
    props:['clur_id'],
    created() {
        if (this.clue_id) {
            this.$ajax.post('/api/clue/view_clue', {clue_id:this.clue_id}).then((res) => {
                this.ruleForm = { ...res.data.clue,
                    ...res.data.clue_detail
                };
                this.upFileEnd = res.data.clue_attachments;
                this.newdata = Math.ceil((new Date(this.ruleForm.closed_time) - this.newdata) / 1000 / 60 / 60 / 24);
            })
        }
        if (this.$route.query.clue_id) {
            this.$ajax.post('/api/clue/view_clue', this.$route.query).then((res) => {
                this.ruleForm = { ...res.data.clue,
                    ...res.data.clue_detail
                };
                this.upFileEnd = res.data.clue_attachments;
                this.newdata = Math.ceil((new Date(this.ruleForm.closed_time) - this.newdata) / 1000 / 60 / 60 / 24);
            })
        }
    },
    data() {
        return {
            dialogTableVisible: false,
            srcimg: '',
            downF: '',
            newdata: new Date(),
            loading: false,
            upFileEnd: [],
            url: 'http://clue.api.test/api/clue/clue_upload/',
            img_: {
                attachment_type: 'img'
            },
            audio_: {
                attachment_type: 'audio'
            },
            word_: {
                attachment_type: 'word'
            },
            excel_: {
                attachment_type: 'excel'
            },
            file_: {
                attachment_type: 'file'
            },
            img__: [],
            audio__: [],
            word__: [],
            excel__: [],
            file__: [],
            img: [],
            audio: [],
            word: [],
            excel: [],
            file: [],
            ruleForm: {
                'source': '',
                'number': '',
                'reflected_name': '',
                'company': '',
                'post': '',
                'level': '',
                'entry_time': '',
                'closed_time': '',
                'disposal_type': '',
                'supervisor': '否',
                'remind_days': '',
                'clue_next': '',
                'clue_state': '',
                'main_content': '',
                'department_opinion': '',
                'leader_approval': '',
                'remark': ''
            }
        };
    },
    methods: {
        fileClick(item) {
            let url = 'http://clue.api.test/' + item.file_path;
            if (item.attachment_type != 'img') {
                window.open('http://clue.api.test/' + item.file_path);
            } else {
                this.srcimg = url;
                this.dialogTableVisible = true;
            }
        },
        daochu() {
            this.$ajax.post('/api/clue/export_word', this.$route.query).then((res) => {
                this.downF = 'http://clue.api.test/' + res.data.file_path;
                this.open();
            })
        },
        open() {
            window.open(this.downF);
        },
        handleClose(index) {
            this.upFileEnd.splice(index, 1);
        },
        removeFile1(file, fileList) {
            this.img__.splice(fileList.indexOf(file), 1)
        },
        removeFile2(file, fileList) {
            this.audio__.splice(fileList.indexOf(file), 1)
        },
        removeFile3(file, fileList) {
            this.word__.splice(fileList.indexOf(file), 1)
        },
        removeFile4(file, fileList) {
            this.excel__.splice(fileList.indexOf(file), 1)
        },
        removeFile5(file, fileList) {
            this.file__.splice(fileList.indexOf(file), 1)
        },
        upSuccessFile(esponse, file, fileList) {
            console.log(file, fileList);
            this[esponse.data.fileInfo.attachment_type + '__'].push(esponse.data.fileInfo);
        },
        beforeUp(file) {},
        submitUpload(a) {

        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        resetForm() {
            this.$refs['ruleForm'].resetFields();
        },
        submitForm(formName) {
            console.log(this.img__, 12312323)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let data = {
                        clue: {
                            'source': '',
                            'number': '',
                            'reflected_name': '',
                            'company': '',
                            'post': '',
                            'level': '',
                            'entry_time': '',
                            'closed_time': '',
                            'disposal_type': '',
                            'supervisor': '',
                            'remind_days': '',
                            'clue_next': '',
                            'clue_state': '',
                            clue_id: this.$route.query.clue_id
                        },
                        clue_detail: {
                            'main_content': '',
                            'department_opinion': '',
                            'leader_approval': '',
                            'remark': ''
                        }

                    }
                    for (let i in data.clue) {
                        data.clue[i] = this.ruleForm[i];
                    }
                    for (let i in data.clue_detail) {
                        data.clue_detail[i] = this.ruleForm[i];
                    }
                    data.clue_attachments = [
                        ...this.img__, ...this.audio__, ...this.word__, ...this.excel__, ...this.file__, ...this.upFileEnd
                    ];
                    var wenzi = ['img', 'audio', 'word', 'excel', 'file'],
                        clear = [...wenzi, 'img__', 'audio__', 'word__', 'excel__', 'file__'];
                    this.loading = true;
                    this.$ajax.post('/api/clue/save_clue/', data).then((res) => {
                        this.loading = false;
                        if (res.data) {
                            this.ruleForm.department_opinion = ''
                            this.ruleForm.leader_approval = ''
                            this.ruleForm.remark = ''
                            this.resetForm();
                            for (let i = 0; i < clear.length; i++) {
                                clear[i] = [];
                            }
                            for (let i = 0; i < wenzi.length; i++) {
                                this.$refs[wenzi[i]].clearFiles();
                            }
                            this.$message({
                                message: '恭喜你，保存成功！',
                                type: 'success'
                            });
                            this.$router.go(-1);

                        } else {
                            this.$message.error('错了哦，保存失败');
                        }
                    }, () => {
                        this.loading = false;
                    })
                } else {
                    this.$message({
                        message: '警告哦，请检查输入是否有误！',
                        type: 'warning'
                    });

                    return false;
                }
            });
        }
    },
    computed: {
        dicdata: function() {
            return this.$store.state.dicdata
        }
    }
}
</script>


<style scoped>
.img-show {
    max-width: 100%
}

.el-dialog__body {
    text-align: center;
}

.el-button+.el-button,
.el-button {
    margin: 0 5px 5px 0;
}

.jihao .el-tag {
    background-color: rgba(64, 158, 255, .1);
    padding: 0 10px;
    height: 25px;
    line-height: 23px;
    font-size: 12px;
    color: #409EFF;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid rgba(64, 158, 255, .2);
}

.el-tag+.el-tag {
    margin-left: 10px;
}

hr {
    border-color: #9b9595;
}

.demo-block {
    border-width: 1px;
    border-style: solid;
    border-color: rgb(202, 197, 197);
    border-image: initial;
    border-radius: 5px;
    transition: 0.2s;
    background: #fff;
    width: 90%;
    color: #606266;
    margin: 10px auto 0;
    padding: 10px 15px;
}
</style>