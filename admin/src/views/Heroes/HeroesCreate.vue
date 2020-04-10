<template>
  <div class="create">
    <h2 class="h2-title">{{ id ? '编辑' : '创建'}}英雄</h2>
    <el-form label-width="80px" @submit.native.prevent="save">
        <el-tabs type="border-card">
            <el-tab-pane label="基本信息">
                <el-form-item label="名称">
                    <el-input v-model="model.name"/>
                </el-form-item>
                <el-form-item label="称号">
                    <el-input v-model="model.title"/>
                </el-form-item>
                <el-form-item label="类型">
                    <el-select v-model="model.categories" placeholder="请选择" multiple>
                        <el-option 
                            v-for="item of categories" 
                            :key="item._id"
                            :label="item.name"
                            :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="头像">
                    <el-upload
                    class="avatar-uploader"
                    :action="uploadURL"
                    :headers="getAuthorization()"
                    :show-file-list="false"
                    :on-success="res => $set(model,'avatar',res.url)"
                    >
                        <img v-if="model.avatar" :src="model.avatar" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="展示图">
                    <el-upload
                    class="avatar-uploader"
                    :action="uploadURL"
                    :headers="getAuthorization()"
                    :show-file-list="false"
                    :on-success="res => $set(model,'banner',res.url)"
                    >
                        <img v-if="model.banner" :src="model.banner" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="难度">
                            <el-rate style="margin-top:.5rem;" :max="9" show-score v-model="model.scores.difficult"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="技能">
                            <el-rate style="margin-top:.5rem;" :max="9" show-score v-model="model.scores.skill"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="攻击">
                            <el-rate style="margin-top:.5rem;" :max="9" show-score v-model="model.scores.attack"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="生存">
                            <el-rate style="margin-top:.5rem;" :max="9" show-score v-model="model.scores.survive"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="顺风出装">
                    <el-select v-model="model.items1" placeholder="请选择" multiple :multiple-limit="6">
                        <el-option 
                            v-for="item of items" 
                            :key="item._id"
                            :label="item.name"
                            :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="逆风出装">
                    <el-select v-model="model.items2" placeholder="请选择" multiple :multiple-limit="6">
                        <el-option 
                            v-for="item of items" 
                            :key="item._id"
                            :label="item.name"
                            :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="使用技巧">
                    <el-input type="textarea" v-model="model.usageTip"/>
                </el-form-item>
                <el-form-item label="对抗技巧">
                    <el-input type="textarea" v-model="model.battleTip"/>
                </el-form-item>
                <el-form-item label="团战思路">
                    <el-input type="textarea" v-model="model.teamIdea"/>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="技能">
                <el-button type="text" icon="el-icon-plus" @click="addSkills">添加技能</el-button>
                <el-row :gutter="20">
                    <el-col :span="12" class="skill-box" v-for="(item,index) in model.skills" :key="index">
                        <el-form-item label="名称">
                            <el-input v-model="item.name"/>
                        </el-form-item>
                        <el-form-item label="图标">
                            <el-upload
                            class="avatar-uploader"
                            :action="uploadURL"
                            :headers="getAuthorization()"
                            :show-file-list="false"
                            :on-success="res => $set(item,'icon',res.url)"
                            >
                                <img v-if="item.icon" :src="item.icon" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <el-form-item label="冷却值">
                                    <el-input v-model="item.cd"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="消耗">
                                    <el-input v-model="item.consume"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="item.description"/>
                        </el-form-item>
                        <el-form-item label="小提示">
                            <el-input type="textarea" v-model="item.tips"/>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="danger" @click="model.skills.splice(index,1)">删除</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="皮肤">
                <el-button type="text" icon="el-icon-plus" @click="addSkins">添加皮肤</el-button>
                <el-row :gutter="20">
                    <el-col :span="12" class="skill-box" v-for="(item,index) in model.skins" :key="index">
                        <el-form-item label="名称">
                            <el-input v-model="item.name"/>
                        </el-form-item>
                        <el-form-item label="图片">
                            <el-upload
                            class="avatar-uploader"
                            :action="uploadURL"
                            :headers="getAuthorization()"
                            :show-file-list="false"
                            :on-success="res => $set(item,'src',res.url)"
                            >
                                <img v-if="item.src" :src="item.src" class="avatar-h">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="danger" @click="model.skins.splice(index,1)">删除</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="英雄关系">
                <el-button type="text" icon="el-icon-plus" @click="model.partners.push({})">添加最佳搭档</el-button>
                <div v-for="item in model.partners" :key="item.index">
                    <el-form-item label="描述">
                        <el-input v-model="item.description"/>
                    </el-form-item>
                    <el-form-item label="英雄">
                        <el-select v-model="item.hero" placeholder="请选择" filterable>
                            <el-option 
                                v-for="i of parents" 
                                :key="i._id"
                                :label="i.name"
                                :value="i._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" @click="model.partners.splice(index,1)">删除</el-button>
                    </el-form-item>
                </div>
                <el-button type="text" icon="el-icon-plus" @click="model.weak.push({})">添加被谁克制</el-button>
                <div v-for="item in model.weak" :key="item.index">
                    <el-form-item label="描述">
                        <el-input v-model="item.description"/>
                    </el-form-item>
                    <el-form-item label="英雄">
                        <el-select v-model="item.hero" placeholder="请选择" filterable>
                            <el-option 
                                v-for="i of parents" 
                                :key="i._id"
                                :label="i.name"
                                :value="i._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" @click="model.weak.splice(index,1)">删除</el-button>
                    </el-form-item>
                </div>
                <el-button type="text" icon="el-icon-plus" @click="model.strong.push({})">添加克制谁</el-button>
                <div v-for="item in model.strong" :key="item.index">
                    <el-form-item label="描述">
                        <el-input v-model="item.description"/>
                    </el-form-item>
                    <el-form-item label="英雄">
                        <el-select v-model="item.hero" placeholder="请选择" filterable>
                            <el-option 
                                v-for="i of parents" 
                                :key="i._id"
                                :label="i.name"
                                :value="i._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" @click="model.strong.splice(index,1)">删除</el-button>
                    </el-form-item>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-form-item class="save-btn" label-width="0">
            <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
    </el-form>  
  </div>
</template>

<script>
export default {
    name:'HeroesCreate',
    props:{
        id:{}
    },
    data(){
        return {
            categories:[],
            items:[],
            model:{
                name:'',
                avatar:'',
                scores:{
                    difficult:0,
                    skill:0,
                    attack:0,
                    survive:0
                },
                skills:[],
                skins:[{
                    name:'',
                    src:''
                }]
            },
            parents:[]
        }
    },
    methods:{
        addSkins(){
            this.model.skins.push({})
        },
        addSkills(){
            if(this.model.skills.length + 1 > 4){
                this.$message({
                    message: '每个英雄仅拥有4个技能！',
                    type: 'warning'
                });
            }else{
                this.model.skills.push({})
            }
        },
        async save(){
            if(this.id){
                await this.$http.put(`/manage/heroes/${this.id}`,this.model)
            }else{
                await this.$http.post('/manage/heroes',this.model)
            }
            this.$router.push('/heroes/list')
            this.$message({
                type: 'success',
                message: '保存成功'
            })
            
        },
        async fetch(){
            const res = await this.$http.get(`/manage/heroes/${this.id}`)
            this.model = Object.assign({},this.model,res.data)
        },
        async fetchData(){
            const res =await this.$http.get('/manage/heroes')
            this.parents = res.data.map(item => {
                return {
                    _id:item._id,
                    name:item.name
                }
            })
        },
        async fetchCategories(){
            const res = await this.$http.get('/manage/categories')
            this.categories = res.data
        },
        async fetchItems(){
            const res =await this.$http.get('/manage/items')
            this.items = res.data
        }
    },
    created(){
        this.fetchData()
        this.fetchItems()
        this.fetchCategories()
        this.id && this.fetch()
    }
}
</script>

<style>
    
</style>