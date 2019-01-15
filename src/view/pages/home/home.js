//import { first, uniqBy } from 'lodash';
//import CatalogService from '@/core/services/catalog.service';

export default {
  name: 'Home',
  created() {
    this.loadCatalogs();
  },
  data() {
    return {
      // bannerImage,
      catalogList: [],
      catalog: {},
    };
  },
  methods: {
    // loadCatalogs() {
    //   CatalogService.getSchema().then(schema => {
    //     const { categories = [] } = schema;
    //     this.catalogList = categories;
    //     this.catalog = first(categories) || {};
    //   });
    // },

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
      return uniqBy(this.catalog.services.filter(service => service.available), 'name');
    },
  },
}