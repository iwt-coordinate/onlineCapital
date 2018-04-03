<template>
    <div>
        <section class="login">
            <header class="logo"><img src="@/images/logo.jpg" alt="互联网销售福利彩票交易系统"></header>
            <article class="login_bg">
                <dl class="login-form">
                    <dt>用户登录</dt>
                    <dd>
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" :label-position="labelPosition">
                            <el-form-item label="用户名" prop="usrsname">
                                <el-input v-model="ruleForm.usrsname"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input v-model="ruleForm.password" type="password"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码" prop="imgcode">
                                <el-input v-model="ruleForm.imgcode" class="imgCodeData"></el-input>
                                <img src="@/images/login-yz.jpg" alt="" class="imgCodeStyle" />
                            </el-form-item>
                            <div class="loginerror"></div>
                            <el-form-item>
                                <el-button type="primary" class="login_but" @click="submitForm('ruleForm')">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </dd>
                </dl>
            </article>
            <footer class="footer">中国福利彩票发行管理中心Copyright © 2018 - 2018. All Rights Reserved</footer>
        </section>
    </div>
</template>


<script>
export default {
  data() {
    return {
      labelPosition: "top",
      ruleForm: {
        usrsname: "",
        password: "",
        imgcode: ""
      },
      rules: {
        usrsname: [{ message: "请输入活动名称", trigger: "blur" }],
        password: [{ message: "请输入活动名称", trigger: "blur" }],
        imgcode: [{ message: "请输入活动名称", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>