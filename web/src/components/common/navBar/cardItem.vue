<template>
    <div :class="navClass"
                            @click="current">

        <div v-if="!isImg" class="nav-link" tag="div">{{ name }}</div>
        <div v-else><img :src="src"></div>
    </div>
</template>

<script>
export default {
    name:'navBarItem',
    props:{
        src:{
            type:String,
            default:''
        },
        name:{
            type:String,
            default:'首页'
        },
        isCurrent:{
            type:Boolean,
            default:true
        },
        itemIndex:{
            type:Number,
            require:true
        },
        isImg:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        current(){
            this.$emit('current',this.itemIndex)
        }
    },
    computed:{
        navClass(){
            return {
                active:this.isCurrent,
                'nav-circle':this.isImg,
                'nav-items':!this.isImg
            }
        }
    }
}
</script>

<style>

</style>