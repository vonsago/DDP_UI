import ContainerService from '@/core/docker.container';

import bannerImage from '@/assets/images/banner.jpg';
export default {
  name: 'Home',
  created() {
    this.loadContainers();
  },
  data() {
    return {
      bannerImage,
      Containers: [],
      tableData: []
    };
  },
  methods: {
    loadContainers() {
      ContainerService.getList().then(res => {
        console.log(res); // eslint-disable-line no-console
        this.Containers = res.data;
      });
    },
    version() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
    handleCommand(command) {
      if (command=='version') {
        this.$message('当前的Docker的版本为: 18.06.1-ce');
      }
      else if (command=='login') {
        this.$router.push('/login');
      }
      else if (command=='create') {
        this.$router.push('https://cloud.docker.com/');
      }
    },
    switchCatalog(catalog) {
      this.catalog = catalog;
    },

    gotoService(productId) {
      this.$router.push({
        name: 'product.detail',
        params: {
          product: productId,
        },
      });
    },
  },
  computed: {
    availableServices() {
      if (!this.catalog.services) return [];
      
    },
  },
};
