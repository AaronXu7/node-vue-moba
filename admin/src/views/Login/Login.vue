<template>
    <el-card class="box-card login">
        <div slot="header" class="clearfix">
            <span>请登录</span>
        </div>
        <el-form @submit.native.prevent="login">
            <el-form-item label="名字">
                <el-input v-model="model.username"/>
            </el-form-item>
            <el-form-item label="密码">
                <el-row :gutter="10" style="width:100%;" type='flex' align='middle'>
                    <el-col :span="21">
                        <el-input :type="show ? 'password': 'text'" v-model="model.password"/>
                    </el-col>
                    <el-col :span="3">
                        <el-switch v-model="show"></el-switch>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item  class="save-btn">
                <el-button type="primary" native-type="submit">登录</el-button>
                <el-button type="danger" @click="model.password=''">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name:'Login',
    data(){
        return {
            model:{
                username:'',
                password:''
            },
            show:true
        }
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    methods:{
        async login(){
            const res = await this.$http.post('login',this.model)
            localStorage.token = res.data.token
            this.$router.push('/')
            this.$userMsg.name = res.data.username;
            this.$message({
                type:'success',
                message:`${res.data.username},登录成功!`
            })
        }
    }
}
</script>

<style>
    .login{
        width: 30rem;
        margin: 15rem auto;
    }
</style>