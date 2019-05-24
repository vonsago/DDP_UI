// import { first, uniqBy } from 'lodash';
// import CatalogService from '@/core/services/catalog.service';
import bannerImage from '@/assets/images/banner.jpg';

export default {
  name: 'Home',
  created() {
    // this.loadCatalogs();
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      bannerImage,
      catalogList: [],
      catalog: {},
      tableData: Array(20).fill(item)
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

    loadCatalogs () {
      this.$api.get('instances', null, r => {
        console.log(r)
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
