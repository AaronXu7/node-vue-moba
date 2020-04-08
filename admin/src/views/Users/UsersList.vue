<template>
  <div class="list">
      <h2 class="h2-title">管理员列表</h2>
      <list pathName="users" pathTitle="管理员">
        <el-table-column prop="username" label="管理员"></el-table-column>
      </list>
      <!-- <el-table :data="tableData" border>
        <el-table-column prop="_id" label="ID" width="240"></el-table-column>
        <el-table-column prop="username" label="管理员"></el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="180">
          <template slot-scope="scope">
            <el-button type="text" 
                        size="small"
                        @click="$router.push(`/users/edit/${scope.row._id}`)">
              编辑
            </el-button>
            <el-button type="text" 
                        size="small"
                        @click="remove(scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table> -->
  </div>
</template>

<script>
import List from '../../components/List'

export default {
  name:'UsersList',
  components:{
    List
  }
}
</script>

<style>

</style>