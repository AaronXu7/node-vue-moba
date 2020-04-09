<template>
    <div class="nav-items" :class="{active:isActive}">
        <router-link class="nav-link" tag="div" :to="path">{{ name }}</router-link>
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
        path:{
            type:String,
            default:'/'
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        }
    }
}
</script>

<style>

</style>