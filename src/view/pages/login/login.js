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
      DockerService.login(this.user.username, this.user.password)
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
