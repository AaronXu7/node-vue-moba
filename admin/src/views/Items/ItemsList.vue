<template>
  <div class="list">
      <h2 class="h2-title">物品列表</h2>
      <list pathName="items" pathTitle="物品">
        <el-table-column prop="name" label="物品名称"></el-table-column>
        <el-table-column prop="icon" label="物品图标">
          <template slot-scope="scope">
            <img :src="scope.row.icon" alt="scope.row.name" style="height: 3rem;">
          </template>
        </el-table-column>
      </list>
  </div>
</template>

<script>
import List from '../../components/List'

export default {
  name:'ItemsList',
  components:{
    List
  }
}
</script>

<style>

</style>