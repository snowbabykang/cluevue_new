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
                    <el-form-item label="上传附件">
                        <el-upload class="upload-demo" ref="upload" action="http://clue.api.test/api/clue/clue_upload/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
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
            fileList: [{
                name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
                name: 'food2.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }],
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
        submitUpload() {
            this.$refs.upload.submit();
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