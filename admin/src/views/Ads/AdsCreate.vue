<template>
  <div class="create">
    <h2 class="h2-title">{{ id ? '编辑' : '创建'}}广告位</h2>
    <el-form label-width="100px" @submit.native.prevent="save">
        <el-form-item label="名称">
            <el-input v-model="model.name"/>
        </el-form-item>
        <el-form-item label="广告内容">
            <el-button type="text" icon="el-icon-plus" @click="addAd(6)">添加广告</el-button>
            <el-row :gutter="20">
                <el-col :span="24" class="skill-box" v-for="(item,index) in model.items" :key="index">
                    <el-form-item label="标题">
                        <el-input v-model="item.title"/>
                    </el-form-item>
                    <el-form-item label="跳转连接">
                        <el-input v-model="item.href"/>
                    </el-form-item>
                    <el-row type="flex" align="middle" :gutter="20">
                        <el-col :span="18">
                            <el-form-item label="图片">
                                <el-upload
                                class="avatar-uploader"
                                :action="uploadURL"
                                :headers="getAuthorization()"
                                :show-file-list="false"
                                :on-success="res => $set(item,'img',res.url)"
                                >
                                    <img v-if="item.img" :src="item.img" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item>
                                <el-button type="danger" @click="model.items.splice(index,1)">删除</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item class="save-btn">
            <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
    </el-form>  
  </div>
</template>

<script>
export default {
    name:'AdsCreate',
    props:{
        id:{}
    },
    data(){
        return {
            model:{
                items:[]
            }
        }
    },
    methods:{
        addAd(i){
            if(this.model.items.length + 1 > i){
                this.$message({
                    message: `每个广告位仅拥有${i}个广告！`,
                    type: 'warning'
                });
            }else{
                this.model.items.push({})
            }
        },
        async save(){
            if(this.id){
                await this.$http.put(`/manage/ads/${this.id}`,this.model)
            }else{
                await this.$http.post('/manage/ads',this.model)
            }
            this.$router.push('/ads/list')
            this.$message({
                type: 'success',
                message: '保存成功'
            })
            
        },
        async fetch(){
            const res = await this.$http.get(`/manage/ads/${this.id}`)
            this.model = Object.assign({},this.model,res.data)
        }
    },
    created(){
        this.id && this.fetch()
    }
}
</script>

<style>

</style>