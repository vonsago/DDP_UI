import ImageService from '@/core/docker.images'

export default {
    name: 'Repository',
    data() {
      return {
        tableData: [],
          search: ''
      };
    },
    created() {
        this.loadImages();
    },
    methods: {
        goBack() {
            this.$router.push('/');
          },
        loadImages() {
            ImageService.getList().then(res => {
                this.tableData = res.data
            })
        },
        handleEdit(index, row) {
            console.log(index, row);
          },
        handleDelete(index, row) {
            console.log(index, row);
          }
      }


  
  }
  