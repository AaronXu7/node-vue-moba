<template>
  <div class="list">
      <h2 class="h2-title">广告位列表</h2>
      <list pathName="ads" pathTitle="广告位">
        <el-table-column prop="name" label="名称"></el-table-column>
      </list>
  </div>
</template>

<script>
import List from '../../components/List'

export default {
  name:'AdsList',
  components:{
    List
  }
}
</script>

<style>

</style>