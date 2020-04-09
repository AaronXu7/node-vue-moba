<template>
    <div class="link-nav bg-white mt-3 pt-3 border-y">
        <div class="nav-icons flex-start f-wrap">
            <a class="nav-icon text-grey-1 w-4 text-center mb-4 fs-sm"
                    v-for="item in iconData" :key="item">
                <i class="sprite sp-sims"></i>
                <div>爆料站</div>
            </a>
        </div>
        <div class="icon-tab text-center py-2 bg-smoke" @click="linkTab">
            <i class="sprite sp-arrow" :class="{ 'a-rotate':iconData == 4 }"></i>
            <span class="pl-1">{{ iconData == 4 ? '展开' : '收起' }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'linkNav',
    data(){
        return {
            iconData:4,
            iconTab:false
        }
    },
    methods:{
        linkTab(){
            this.iconTab = !this.iconTab
            if(this.iconTab){
                this.iconData = 4
            }else{
                this.iconData = 10
            }
        }
    }
}
</script>

<style lang="scss">
@import '../../../../common/_variable.scss';

.link-nav{
    .nav-icons{
        .nav-icon{
            border-right: 1px solid $border-color;
            &:nth-child(4n){
                border-right: none;
            }
        }
    }
    
}

</style>