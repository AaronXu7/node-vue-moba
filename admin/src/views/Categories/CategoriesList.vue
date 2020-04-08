<template>
  <div class="list">
      <h2 class="h2-title">分类列表</h2>
      <list pathName="categories" pathTitle="分类">
        <el-table-column prop="parent.name" label="上级分类"></el-table-column>
        <el-table-column prop="name" label="分类名称"></el-table-column>
      </list>
  </div>
</template>

<script>
import List from '../../components/List'

export default {
  name:'CategoriesList',
  components:{
    List
  }
}
</script>

<style>

</style>