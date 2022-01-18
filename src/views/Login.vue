<template>
  <div class="login-container">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="80px" class="login-form">
      <h2 class="login-title">管理系统</h2>
      <el-form-item label="账号" prop="id">
        <el-input v-model.number="loginForm.id"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import {loginAPI} from "@/api";

export default {
  data() {
    var checkId = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        password: '',
        id: ''
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        id: [
          { validator: checkId, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {

    async login(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          this.$message('请正确填写账号密码');
          return;
        }});

      const loginData = {...this.loginForm};
      //发起请求
      const {data: res} = await loginAPI(loginData);
      console.log(res);

      // 显示提示信息
      this.$message(res.message);
      // 如果失败  则停止执行
      if (res.code !== 200) {
        return;
      } else {
        // 如果成功
        // 将返回的token 保存到 sessionStorage
        console.log(11);
        window.sessionStorage.setItem("token", res.data.token);
        // 跳转到home页面
        this.$router.push("/main");
      }

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style acoped>
.login-form {
  width: 350px;
  margin: 160px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgb(255, 255, 255, 0.8); /* 透明背景色 */
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}

/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(232, 240, 254);
}

/* 标题 */
.login-title {
  color: #303133;
  text-align: center;
}
</style> -->
