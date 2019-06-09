import DockerService from '@/core/docker.respository';

import loginBackground from '@/assets/images/login-bg.jpg';

export default {
  name: 'Login',
  data() {
    return {
      loginBackground,
      loginFail: false,
      user: {
        username: '',
        password: '',
      }
    };
  },
  created() {
    if (DockerService.check()) {
      alert(1)
      this.returnToPage();
    }
  },
  methods: {
    login() {
      DockerService.login(this.user.username, this.user.password).then(res => {
        if (res.status == 200) {
          this.$notify({
            title : '提示信息',
            message : '登录成功',
            type : 'success'
          });
          this.$router.push({path:'/'})
        }
      })
    },

    returnToPage() {
      const { query } = this.$route;
      if (query.from) {
        let { from } = query;
        try {
          from = JSON.parse(from);
        } catch (err) {
          /** do nothing */
        }
        this.$router.push(from);
      } else {
        this.$router.push({
          name: 'console',
        });
      }
    },

    shake() {
      this.loginFail = true;
      setTimeout(() => {
        this.loginFail = false;
      }, 400);
    },

  },
};
