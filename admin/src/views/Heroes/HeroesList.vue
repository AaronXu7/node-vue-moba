<template>
  <div class="list">
      <h2 class="h2-title">英雄列表</h2>
      <list pathName="heroes" pathTitle="英雄">
        <el-table-column prop="name" label="英雄"></el-table-column>
        <el-table-column prop="avatar" label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="scope.row.name" style="height: 3rem;">
          </template>
        </el-table-column>
      </list>
  </div>
</template>

<script>
import List from '../../components/List'

export default {
  name:'HeroesList',
  components:{
    List
  }
}
</script>

<style>

</style>