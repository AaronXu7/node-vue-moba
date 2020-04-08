<template>
  <div class="create">
    <h2 class="h2-title">{{ id ? '编辑' : '创建'}}管理员</h2>
    <el-form label-width="100px" @submit.native.prevent="save">
        <el-form-item label="名字">
            <el-input v-model="model.username"/>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="model.password"/>
        </el-form-item>
        <el-form-item  class="save-btn">
            <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
    </el-form>  
  </div>
</template>

<script>
export default {
    name:'UsersCreate',
    props:{
        id:{}
    },
    data(){
        return {
            model:{}
        }
    },
    methods:{
        async save(){
            if(this.id){
                await this.$http.put(`/manage/users/${this.id}`,this.model)
            }else{
                await this.$http.post('/manage/users',this.model)
            }
            this.$router.push('/users/list')
            this.$message({
                type: 'success',
                message: '保存成功'
            })
            
        },
        async fetch(){
            const res = await this.$http.get(`/manage/users/${this.id}`)
            this.model = res.data
        }
    },
    created(){
        this.id && this.fetch()
    }
}
</script>

<style>

</style>