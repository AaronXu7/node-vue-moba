<template>
    <div class="nav" :class="[navStyle,{'nav-reverse':isReverse}]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'navBar',
    props:{
        align:{
            type:String,
            default:'around'
        },
        isReverse:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        navStyle(){
            return 'flex-' + this.align
        }
        
    }
}
</script>

<style>

</style>