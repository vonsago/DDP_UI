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
