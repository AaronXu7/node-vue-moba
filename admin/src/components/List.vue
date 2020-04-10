<template>
    <div id="list">
      <div class="search">
        <el-autocomplete
          class="inline-input"
          v-model="keyword"
          :fetch-suggestions="querySearch"
          :placeholder="`请输入要查找的${pathTitle}`"
          @select="handleSelect"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-autocomplete>
      </div>
      
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
      pageSize:8,
      keyword:'',
      searchAll:[]
    }
  },
  computed:{
    listItems(){
      const pageData = this.tableData.slice((this.currentPage - 1) * this.pageSize,this.currentPage * this.pageSize)
      return pageData
    }
  },
  methods:{
    async toSearch(){
      if(this.keyword == ''){
        this.fetch()
      }else{
        const res = await this.$http.get(`/manage/${this.pathName}/search/${this.keyword}`)
        this.tableData = res.data
      }
    },
    querySearch(queryString, cb) {
      const searchAll = this.searchAll;
      const results = queryString ? searchAll.filter(this.createFilter(queryString)) : searchAll;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (search) => {
        return (search.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return this.tableData.map(item => {
        return { 'value' : (!item.name) ? item.title :item.name}
      });
    },
    handleSelect(item) {
      console.log(item);
    },
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
  },
  watch:{
    tableData(){
      this.searchAll = this.loadAll();
    },
    keyword(){
      this.toSearch()
    }
  }
}
</script>

<style>
  .search{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
</style>