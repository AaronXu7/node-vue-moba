<template>
  <div class="list">
      <h2 class="h2-title">英雄列表</h2>
      <el-table :data="tableData" border>
        <el-table-column prop="_id" label="ID" width="240"></el-table-column>
        <el-table-column prop="name" label="英雄"></el-table-column>
        <el-table-column prop="avatar" label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="scope.row.name" style="height: 3rem;">
          </template>
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="180">
          <template slot-scope="scope">
            <el-button type="text" 
                        size="small"
                        @click="$router.push(`/heroes/edit/${scope.row._id}`)">
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
  </div>
</template>

<script>
export default {
  name:'HeroesList',
  data(){
    return {
      tableData:[]
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get('/manage/heroes')
      this.tableData = res.data
    },
    async remove(item){
      this.$confirm(`是否确定删除物品“${item.name}”`,{ type:"warning" })
        .then(async () => {
          await this.$http.delete(`/manage/heroes/${item._id}`)
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