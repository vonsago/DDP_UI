export default {
  data() {
    //用户名
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入您的登录账户名'))
      } else if (!/[A-Za-z0-9~!@#$%^&*()_+]{4,30}$/.test(value)) {
        callback(new Error('登录账户名格式不符'))
      } else {
        callback();
      }
    };
    //密码验证
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (!/^[A-Za-z0-9~!@#$%^&*()_+]{6,15}$/.test(value)) {
          callback(new Error('请输入6~15位字母、数字或字符组成的密码'));
        }
        if (this.addForm.Checkpass !== '') {
          this.$refs.addForm.validateField('Checkpass');
        }
        callback();
      }
    };
    //验证码
    var validateCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else {
        if (!/^[A-Za-z0-9]{4}$/.test(value)) {
          callback(new Error('请正确输入4位验证码'));
        }
        callback();
      }
    };
    return {
      logining: false,
      logintext: "登录",
      ruleForm: {
        account: 'admin',
        checkPass: '123456',
        checkCode: ''
      },
      checkImg: {},
      rules: {
        account: [
          { required: true, validator: validateUserName, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: '请输入6到15个密码', trigger: 'blur' }
        ],
        // checkCode: [
        //   { required: true, validator: validateCheck, trigger: 'blur' },
        // ]
      }
    };
  },
  methods: {
    handleReset() {
      this.$refs.ruleForm.resetFields();
    },
    handleSubmit() {
      var _this = this;
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          _this.logining = true;
          _this.logintext = "正在登录...";
          setTimeout(function () {
            _this.logining = false;
            _this.logintext = "登录";
            _this.$message({
              message: '登录成功',
              type: 'success'
            });
            sessionStorage.setItem('BIGDATA_PLATFORM', JSON.stringify(_this.ruleForm));
            _this.$router.push({ path: '/' });
          }, 1000);
        } else {
          return false;
        }
      });
    }
  },
}
