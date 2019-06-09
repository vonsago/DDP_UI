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
      visible: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        image: '',
        ports: '',
        volumes: '',
        environment: '',
        type: '',
        // date2: [],
        // delivery: false,
        // resource: '',
        // desc: ''
      },
      formLabelWidth: '120px',
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
      ContainerService.removeContainer(row.short_id).then(res => {
        if (res.status == 200) {
          this.$notify({
            title : '提示信息',
            message : '删除成功',
            type : 'success'
          });
          location.reload()
        }
      });
    },
    restartContainer(index, row) {
      ContainerService.restartContainer(row.short_id).then(res => {
        if (res.status == 200) {
          this.$notify({
            title : '提示信息',
            message : '重启成功',
            type : 'success'
          });
          location.reload()
        }
      });
    },
    createContainer() {
      ContainerService.startContainer(this.form).then(res => {
        if (res.status == 200) {
          this.$notify({
            title : '提示信息',
            message : '启动成功',
            type : 'success'
          });
          location.reload()
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
