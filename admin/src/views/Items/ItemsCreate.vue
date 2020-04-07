<template>
  <div class="create">
    <h2 class="h2-title">{{ id ? '编辑' : '创建'}}物品</h2>
    <el-form label-width="100px" @submit.native.prevent="save">
        <el-form-item label="名称">
            <el-input v-model="model.name"/>
        </el-form-item>
        <el-form-item label="图标">
            <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL + '/upload'"
            :show-file-list="false"
            :on-success="uploadImg"
            >
                <img v-if="model.icon" :src="model.icon" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
    </el-form>  
  </div>
</template>

<script>
export default {
    name:'ItemsCreate',
    props:{
        id:{}
    },
    data(){
        return {
            model:{
                name:'',
                icon:''
            },
            parents:[]
        }
    },
    methods:{
        uploadImg(res){
            this.model.icon = res.url
        },
        async save(){
            if(this.id){
                await this.$http.put(`/manage/items/${this.id}`,this.model)
            }else{
                if(this.parents.find(item => item.name == this.model.name)){
                    this.$message({
                        type: 'error',
                        message: '物品已存在，请重新输入'
                    })
                }else{
                    await this.$http.post('/manage/items',this.model)
                }
            }
            this.$router.push('/items/list')
            this.$message({
                type: 'success',
                message: '保存成功'
            })
            
        },
        async fetch(){
            const res = await this.$http.get(`/manage/items/${this.id}`)
            this.model = res.data
        },
        async fetchData(){
            const res =await this.$http.get('/manage/items')
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
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>