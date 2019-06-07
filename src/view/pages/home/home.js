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
        this.Containers = res.data
      }).catch(function(error){
        console.log(error); // eslint-disable-line
       })
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
