<template>
<div class="demo-block">
    <h4>录入线索</h4>
    <hr/>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="线索来源" prop="source">
                        <el-input v-model="ruleForm.source"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="编号" prop="number">
                        <el-input type="number" v-model="ruleForm.number"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="16">
                    <el-form-item label="被反映人姓名" prop="reflected_name">
                        <el-input v-model="ruleForm.reflected_name"></el-input>
                    </el-form-item>
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
                        <el-input v-model="ruleForm.level"></el-input>
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
                        <el-input v-model="ruleForm.disposal_type"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="上级交办" prop="supervisor">
                        <el-switch v-model="ruleForm.supervisor"></el-switch>
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
                <el-col :span="5">
                    <el-form-item label="去向" prop="clue_next" required>
                        <el-select v-model="ruleForm.clue_next" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="线索状态" prop="clue_state" required>
                        <el-select v-model="ruleForm.clue_state" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
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
                                    <el-upload class="upload-demo" ref="img" accept="image/*" action="http://clue.api.test/api/clue/clue_upload/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="img" :auto-upload="false">
                                        <el-button slot="trigger" size="small" >选取文件</el-button>
                                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('img')">上传到服务器</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                    </el-upload>
                                </el-tab-pane>
                                <el-tab-pane label="音频">      
                                    <el-upload class="upload-demo" ref="audio" accept="audio/*" action="http://clue.api.test/api/clue/clue_upload/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="audio" :auto-upload="false">
                                        <el-button slot="trigger" size="small" >选取文件</el-button>
                                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('audio')">上传到服务器</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传音频文件，且不超过500kb</div>
                                    </el-upload>
                                </el-tab-pane>
                                <el-tab-pane label="word">
                                    <el-upload class="upload-demo" ref="word" accept="application/msword" action="http://clue.api.test/api/clue/clue_upload/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="word" :auto-upload="false">
                                        <el-button slot="trigger" size="small" >选取文件</el-button>
                                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('word')">上传到服务器</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传word文件，且不超过500kb</div>
                                    </el-upload>
                                </el-tab-pane>
                                <el-tab-pane label="excel">
                                    <el-upload class="upload-demo" ref="excel" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" action="http://clue.api.test/api/clue/clue_upload/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="excel" :auto-upload="false">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('excel')">上传到服务器</el-button>
                                        <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb</div>
                                    </el-upload>
                                </el-tab-pane>
                                <el-tab-pane label="其他">
                                    <el-upload class="upload-demo" ref="qita" action="http://clue.api.test/api/clue/clue_upload/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="qita" :auto-upload="false">
                                        <el-button slot="trigger" size="small">选取文件</el-button>
                                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('qita')">上传到服务器</el-button>
                                        <div slot="tip" class="el-upload__tip">只能不超过500kb</div>
                                    </el-upload>
                                </el-tab-pane>
                            </el-tabs>
                    </el-form-item>
                </el-col>
            </el-row>
            <hr/>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>

</div>
</template>
<script>
export default {
    name: 'menuslider',
    data() {
        return {
            img: [],
            audio: [],
            word: [],
            excel: [],
            qita: [],
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
                'supervisor': 1,
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
                    },
                    {
                        min: 3,
                        max: 5,
                        message: '长度在 3 到 5 个字符',
                        trigger: 'blur'
                    }
                ],
                number: [{
                        required: true,
                        message: '必填',
                        trigger: 'blur'
                    },
                    {
                        min: 8,
                        max: 8,
                        message: '长度为8',
                        trigger: 'blur'
                    }
                ],
                reflected_name: [{
                    required: true,
                    message: '必填',
                    trigger: 'blur'
                }],
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
                }]
            }
        };
    },
    methods: {
        submitUpload(i) {
            console.log(this.$refs[i].uploadFiles,3213123);
           var Files=this.$refs[i].uploadFiles;
           var data=[];
           for(let i=0;i<Files;i++){
               let fileName=Files[i].rew.type.split('/');
                data[i]={};
                data[i].attachment_type=
           }
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        submitForm(formName) {
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
                            'supervisor': 1,
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
                        data.clue[i] = this.ruleForm[i];
                    }
                    console.log(data)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>


<style scoped>
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