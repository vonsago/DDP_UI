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
            ImageService.removeImage(row.short_id).then(res => {
                if (res.status == 200) {
                    this.$notify({
                      title : '提示信息',
                      message : '删除成功',
                      type : 'success'
                    });
                }
                location.reload()
            })
          }
      }


  
  }
  