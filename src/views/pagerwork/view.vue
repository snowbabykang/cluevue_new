<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <div class="row" style="margin:0px">
    <el-col :span="12">
      <el-form-item label="发文日期" required>
        <el-form-item prop="document_date">
          {{ruleForm.document_date}}
        </el-form-item>
      </el-form-item>
      <el-form-item label="文件标题" prop="document_title">
        {{ruleForm.document_title}}
      </el-form-item>
      <el-form-item label="发文人" prop="document_user">
        {{ruleForm.document_user}}
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="发文字号" prop="document_code">
        {{ruleForm.document_code}}
      </el-form-item>
      <el-form-item label="发文类型" prop="document_type">
        {{ruleForm.document_type}}
      </el-form-item>
      <el-form-item label="发文单位" prop="document_unit">
        {{ruleForm.document_unit}}
      </el-form-item>
    </el-col>
  </div>
  <el-form-item label="备注" prop="desc">
    {{ruleForm.memo}}
  </el-form-item>
</el-form>
</template>

<script>
export default {
  props: ['id'],
  created() {
    this.$ajax.post("/api/document/view", {id:this.id}).then((res) => {
        this.ruleForm=res.data;
    })
  },
  data() {
    return {
      ruleForm: {
        document_date: '',
        document_code: '',
        username: JSON.parse(localStorage.getItem('userinfo')).login_name,
        document_type: '',
        document_title: '',
        memo: '',
        document_user: '',
        document_unit: ''
      },
      rules: {
        document_date: [{
          required: true,
          message: '请选择日期',
          trigger: 'change'
        }],
        document_code: [{
            required: true,
            message: '请输入发文字号',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ],
        document_type: [{
            required: true,
            message: '请输入发文类型',
            trigger: 'change'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ],
        document_title: [{
            required: true,
            message: '请输入文件标题',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ],
        document_user: [{
            required: true,
            message: '请输入发文人',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 50,
            message: '长度在 1 到 50 个字符',
            trigger: 'blur'
          }
        ],
        document_unit: [{
            required: true,
            message: '请输入发文单位',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 50,
            message: '长度在 1 到 50 个字符',
            trigger: 'blur'
          }
        ],
        memo: [{
            required: true,
            message: '请输入发文字号',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 200,
            message: '长度在 5 到 200 个字符',
            trigger: 'blur'
          }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$ajax.post("/api/document/save", this.ruleForm).then((res) => {
            console.log(res)
            this.$message({
              showClose: true,
              message: '成功',
              type: 'success'
            })
            this.$emit('closemodel')
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>