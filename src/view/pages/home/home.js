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
    loadContainers() {
      ContainerService.getList().then(res => {
        this.Containers = res.data;
      });
    },

    deleteContainer(index, row) {
      ContainerService.removeContainer(row.short_id).then(() => {
        console.log(index, row);  // eslint-disable-line no-console
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
        window.location = 'https://cloud.docker.com/'
      }
      else if (command=='star') {
        window.location = 'https://github.com/vonsago/service_platform'
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
