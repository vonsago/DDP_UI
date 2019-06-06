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
  methods: {
    login() {
      if (!this.isFromValid) {
        this.shake();
        this.$noty.error('请输入正确的用户名和密码');
      } else {
        DockerService.login(this.user.username, this.user.password)
          .then(() => {
            this.$noty.success('登录成功');
            this.returnToPage();
            this.user.username = '';
          })
          .finally(() => {
            this.user.password = '';
          });
      }
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
