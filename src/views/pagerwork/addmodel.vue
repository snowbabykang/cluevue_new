<template>

<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <div class="row" style="margin:0px">
    <el-col :span="12">
       <el-form-item label="发文类型" prop="document_type" required>
          <!-- <el-input v-model="ruleForm.document_type"></el-input> -->
        <el-select v-model="ruleForm.document_type" placeholder="请选择发文类型" style="width:100%">
            <el-option v-for="item in dicdata.document_type.data" :key="item.id" :label="item.title" :value="item.title">
									</el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="发文日期" >
        <el-form-item prop="document_date">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.document_date" style="width: 100%;"></el-date-picker>
            </el-form-item>
        </el-form-item>
        <el-form-item label="文件标题" prop="document_title">
            <el-input v-model="ruleForm.document_title"></el-input>
        </el-form-item>
        <el-form-item label="领取人签字" prop="document_title">
            <el-input v-model="ruleForm.document_signatory"></el-input>
        </el-form-item>
       
    </el-col>
    <el-col :span="12">
        <el-form-item label="发文字号" prop="document_code">
            <el-input v-model="ruleForm.document_code"></el-input>
        </el-form-item>
        <el-form-item label="发文人" prop="document_user">
            <el-input v-model="ruleForm.document_user"></el-input>
        </el-form-item>
        <el-form-item label="发文单位" prop="document_unit">
            <el-input v-model="ruleForm.document_unit"></el-input>
        </el-form-item>
    </el-col>
  </div>
  <el-form-item label="备注" prop="desc">
    <el-input type="textarea" v-model="ruleForm.memo"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          document_date: '',
          document_code: '',
          username:JSON.parse(localStorage.getItem('userinfo')).login_name,
          document_type: '',
          document_title: '',
          memo: '',
          document_user: '',
          document_unit: '',
          document_signatory:''
        },
        rules: {
          document_date: [
            { required: false, message: '请选择日期', trigger: 'change' }
          ],
          document_code: [
            { required: false, message: '请输入发文字号', trigger: 'blur' },
            // { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
          ],
          document_type: [
            { required: true, message: '请选择发文类型', trigger: 'change' }
          ],
          document_title: [
            { required: false, message: '请输入文件标题', trigger: 'blur' },
            // { min:5, max:20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
          ],
           document_signatory: [
            { required: false, message: '请输入领取签字人', trigger: 'blur' },
            // { min:1, max:20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
           document_user: [
             { required: false, message: '请输入发文人', trigger: 'blur' },
            // { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
           document_unit: [
            { required: false, message: '请输入发文单位', trigger: 'blur' },
            // { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
           memo: [
            { required: false, message: '请输入发文字号', trigger: 'blur' },
            // { min: 5, max: 200, message: '长度在 5 到 200 个字符', trigger: 'blur' }
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
                    message:'成功',
                    type: 'success'
                })
                this.$emit('closemodel')
                this.resetForm('ruleForm')
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.ruleForm.memo = ''
      }
    },
    computed:{
      dicdata: function() {
        return this.$store.state.dicdata
      }
    }
    
  }
</script>