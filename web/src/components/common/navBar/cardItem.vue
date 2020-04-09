<template>
    <div class="nav-items" :class="{active:isCurrent}"
                            @click="current">
        <div class="nav-link" tag="div">{{ name }}</div>
    </div>
</template>

<script>
export default {
    name:'navBarItem',
    props:{
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
        }
    },
    methods:{
        current(){
            this.$emit('current',this.itemIndex)
        }
    }
}
</script>

<style>

</style>