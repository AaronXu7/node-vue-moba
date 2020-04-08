<template>
    <div id="list">
      <el-table :data="listItems" border>
        <el-table-column prop="_id" label="ID" width="240"></el-table-column>
        <slot />
        <el-table-column
        fixed="right"
        label="操作"
        width="180">
            <template slot-scope="scope">
            <el-button type="text" 
                        size="small"
                        @click="$router.push(`/${pathName}/edit/${scope.row._id}`)">
                编辑
            </el-button>
            <el-button type="text" 
                        size="small"
                        @click="remove(scope.row)">
                删除
            </el-button>
            </template>
        </el-table-column>
      </el-table>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[8, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
          class="page-box">
        </el-pagination>
    </div>
    
    
</template>

<script>
export default {
  name:'List',
  props:{
      pathName:{
          type:String,
          default:''
      },
      pathTitle:{
          type:String,
          default:''
      }
  },
  data(){
    return {
      tableData:[],
      currentPage: 1,
      pageSize:8
    }
  },
  computed:{
    listItems(){
      const pageData = this.tableData.slice((this.currentPage - 1) * this.pageSize,this.currentPage * this.pageSize)
      return pageData
    }
  },
  methods:{
    handleSizeChange(val) {
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    async fetch(){
      const res = await this.$http.get(`/manage/${this.pathName}`)
      this.tableData = res.data
    },
    async remove(item){
      this.$confirm(`确定删除${this.pathTitle}“${item.name || item.title}”吗?`,{ type:"warning" })
        .then(async () => {
          await this.$http.delete(`/manage/${this.pathName}/${item._id}`)
          this.$message({
              type: 'success',
              message: '删除成功'
          })
          this.fetch()
        })
    }
  },
  created(){
    this.fetch()
  }
}
</script>

<style>

</style>