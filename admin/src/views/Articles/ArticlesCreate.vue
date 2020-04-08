<template>
  <div class="create">
    <h2 class="h2-title">{{ id ? '编辑' : '创建'}}文章</h2>
    <el-form label-width="100px" @submit.native.prevent="save">
        <el-form-item label="标题">
            <el-input v-model="model.title"/>
        </el-form-item>
        <el-form-item label="文章分类">
            <el-select v-model="model.categories" placeholder="请选择" multiple>
                <el-option
                v-for="item in categories"
                :key="item._id"
                :label="item.name"
                :value="item._id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="内容">
            <vue-editor v-model="model.content"
                        useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
        </el-form-item>
        <el-form-item class="save-btn">
            <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
    </el-form>  
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
    name:'ArticlesCreate',
    components:{
        VueEditor
    },
    props:{
        id:{}
    },
    data(){
        return {
            model:{},
            categories:[]
        }
    },
    methods:{
        async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        var formData = new FormData();
        formData.append("file", file);

        const res = await this.$http.post('upload',formData)
        Editor.insertEmbed(cursorLocation, "image", res.data.url);
        resetUploader();
        },
        async save(){
            if(this.id){
                await this.$http.put(`/manage/articles/${this.id}`,this.model)
            }else{
                await this.$http.post('/manage/articles',this.model)
            }
            this.$router.push('/articles/list')
            this.$message({
                type: 'success',
                message: '保存成功'
            })
            
        },
        async fetch(){
            const res = await this.$http.get(`/manage/articles/${this.id}`)
            this.model = res.data
        },
        async fetchData(){
            const res =await this.$http.get('/manage/categories')
            this.categories = res.data
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