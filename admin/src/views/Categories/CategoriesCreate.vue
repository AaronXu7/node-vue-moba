<template>
  <div class="create">
    <h2 class="h2-title">{{ id ? '编辑' : '创建'}}分类</h2>
    <el-form label-width="100px" @submit.native.prevent="save">
        <el-form-item label="上级分类">
            <el-select v-model="model.parent" placeholder="请选择">
                <el-option
                v-for="item in parents"
                :key="item._id"
                :label="item.name"
                :value="item._id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="名称">
            <el-input v-model="model.name"/>
        </el-form-item>
        <el-form-item  class="save-btn">
            <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
    </el-form>  
  </div>
</template>

<script>
export default {
    name:'CategoriesCreate',
    props:{
        id:{}
    },
    data(){
        return {
            model:{},
            parents:[]
        }
    },
    methods:{
        async save(){
            if(this.id){
                await this.$http.put(`/manage/categories/${this.id}`,this.model)
            }else{
                if(this.parents.find(item => item.name == this.model.name)){
                    this.$message({
                        type: 'error',
                        message: '分类名已存在，请重新输入'
                    })
                }else{
                    await this.$http.post('/manage/categories',this.model)
                }
            }
            this.$router.push('/categories/list')
            this.$message({
                type: 'success',
                message: '保存成功'
            })
            
        },
        async fetch(){
            const res = await this.$http.get(`/manage/categories/${this.id}`)
            this.model = res.data
        },
        async fetchData(){
            const res =await this.$http.get('/manage/categories')
            this.parents = res.data
        }
    },
    created(){
        this.fetchData()
        this.id && this.fetch()
    }
}
</script>

<style>

</style>