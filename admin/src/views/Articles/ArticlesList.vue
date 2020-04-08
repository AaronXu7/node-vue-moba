<template>
  <div class="list">
      <h2 class="h2-title">文章列表</h2>
      <list pathName="articles" pathTitle="文章">
        <el-table-column prop="title" label="文章标题"></el-table-column>
      </list>
  </div>
</template>

<script>
import List from '../../components/List'

export default {
  name:'ArticlesList',
  components:{
    List
  },
  data(){
    return {
      tableData:[]
    }
  }
}
</script>

<style>

</style>