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
                        <el-form-item label="线索来源" prop="source">
                            <el-input type="text" v-model="ruleForm.source" placeholder="请输入线索来源"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="编号" prop="number">
                            <el-input type="number" v-model="ruleForm.number"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="被反映人姓名" prop="reflected_name">
                            <el-input v-model="ruleForm.reflected_name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="1" v-show="Togg">
                        <i @click="dialogTableVisible = true" class="size el-icon-warning" title="跳转到列表"></i>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="单位" prop="company">
                            <el-input v-model="ruleForm.company"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="职务" prop="post">
                            <el-input v-model="ruleForm.post"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="级别" prop="level">
                            <el-select v-model="ruleForm.level" clearable placeholder="请选择级别">
                                <el-option v-for="item in dicdata.rank.data" :key="item.id" :label="item.title" :value="item.title">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="录入时间" prop="entry_time">
                            <el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="ruleForm.entry_time" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <hr/>
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="主要内容" prop="main_content">
                            <el-input type="textarea" v-model="ruleForm.main_content" :rows="5"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <hr/>
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="部门意见">
                            <el-input type="textarea" v-model="ruleForm.department_opinion" :rows="5"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <hr/>
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="领导批示">
                            <el-input type="textarea" v-model="ruleForm.leader_approval" :rows="5"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <hr/>
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="备注">
                            <el-input v-model="ruleForm.remark"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <hr/>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="处置类型" prop="disposal_type">
                            <el-select v-model="ruleForm.disposal_type" clearable placeholder="请选择处置类型">
                                <el-option v-for="item in dicdata.disposal_type.data" :key="item.id" :label="item.title" :value="item.title">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="上级交办" prop="supervisor">
                            <el-switch v-model="ruleForm.supervisor" active-value="上级交办" inactive-value="否"></el-switch>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="办结期限" prop="closed_time" required>
                            <el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="ruleForm.closed_time" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="提醒天数" prop="remind_days" required>
                            <el-input v-model="ruleForm.remind_days"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="去向" prop="clue_next" required>
                            <el-input v-model="ruleForm.clue_next"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="线索状态" prop="clue_state" required>
                            <el-select v-model="ruleForm.clue_state" clearable placeholder="请选择状态">
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
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="上传附件">
                            <el-tabs tab-position="left" style="height: 200px;">
                                <el-tab-pane label="图片">
                                    <el-upload :before-remove="removeFile1" :on-success="upSuccessFile" :data="img_" class="upload-demo" ref="img" accept="image/*" :action="url" :on-preview="handlePreview" :file-list="img" :auto-upload="true">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                    </el-upload>
                                </el-tab-pane>
                                <el-tab-pane label="音频">
                                    <el-upload :before-remove="removeFile2" :on-success="upSuccessFile" :data="audio_" class="upload-demo" ref="audio" accept="audio/*" :action="url" :on-preview="handlePreview" :file-list="audio" :auto-upload="true">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传音频文件，且不超过500kb</div>
                                    </el-upload>
                                </el-tab-pane>
                                <el-tab-pane label="word">
                                    <el-upload :before-remove="removeFile3" :on-success="upSuccessFile" :data="word_" class="upload-demo" ref="word" :action="url" :on-preview="handlePreview" :file-list="word" :auto-upload="true">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传word文件，且不超过500kb</div>
                                    </el-upload>
                                </el-tab-pane>
                                <el-tab-pane label="excel">
                                    <el-upload :before-remove="removeFile4" :on-success="upSuccessFile" :data="excel_" class="upload-demo" ref="excel" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" :action="url" :on-preview="handlePreview"
                                        :file-list="excel" :auto-upload="true">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb</div>
                                    </el-upload>
                                </el-tab-pane>
                                <div></div>
                                <el-tab-pane label="其他">
                                    <el-upload :before-remove="removeFile5" :on-success="upSuccessFile" :data="file_" :before-upload="beforeUp" class="upload-demo" ref="file" :multiple="true" :action="url" :on-preview="handlePreview" :file-list="file" :auto-upload="true">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <div slot="tip" class="el-upload__tip">只能不超过500kb</div>
                                    </el-upload>
                                </el-tab-pane>

                            </el-tabs>
                        </el-form-item>
                    </el-col>
                </el-row>
                <hr/>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-dialog :modal-append-to-body="false" width="1300px" name="vv" title="详情" :visible.sync="dialogTableVisible">
            <viewlist name="aa" :data="gridData">
            </viewlist>
        </el-dialog>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
export default {
    name: 'addlider',
    data() {
       
        var checkAge = (rule, value, callback) => {
            console.log(value, value.length)
            if (!!value) {
                if (value.length != 8) {
                    callback(new Error('请录入8位编号！'));
                } else {
                    this.$ajax.post('/api/clue/check_clue_number/', {
                        number: value,
                    }).then((res) => {
                        if (!res.data.result) {
                            callback();
                        } else {
                            callback(new Error('编号已存在，请重新录入'));
                        }
                    }, () => {
                        callback(new Error('服务器错误'));
                    })
                }

            } else {
                callback(new Error('请录入8位编号！'));
            }
        };
        var checkName = (rule,
            value, callback) => {
            if (!!value) {
                this.$ajax.post('/api/clue/get_reflected_name_clue', {
                    reflected_name: value,
                }).then((res) => {
                    let data = res.data;
                    this.gridData = data;
                    if (data.document.data.length || data.clue.data.length || data.case.case_clue.data.length || data.case.case_filing.data.length) {
                        this.Togg = true;
                    } else {
                        this.Togg = false;
                    }
                    callback();
                }, () => {
                    callback();
                })
            } else {
                callback(new Error('必填'));
            }
        }
        return {
            gridData: {},
            dialogTableVisible: false,
            Togg: false,
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
            },
            rules: {
                source: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                number: [{
                    validator: checkAge,
                    trigger: 'blur'
                }, {
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }, ],
                reflected_name: [{
                        validator: checkName,
                        trigger: 'blur'
                    },
                    {
                        required: true,
                        message: '必填',
                        trigger: 'blur'
                    }
                ],
                company: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                post: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                level: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                entry_time: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                main_content: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                disposal_type: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                closed_time: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                remind_days: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                clue_next: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
                clue_state: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
            }
        };
    },
    methods: {
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
                            'clue_state': ''
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
                    // img__: [],
                    // audio__: [],
                    // word__: [],
                    // excel__: [],
                    // file__: [],3213213
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
.size {
    font-size: 25px;
    position: relative;
    top: 5px;
    left: 5px;
    color: dodgerblue;
    cursor: pointer;
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