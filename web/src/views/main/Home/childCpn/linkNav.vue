<template>
    <div class="link-nav bg-white mt-3 pt-3 border-y">
        <div class="nav-icons flex-start f-wrap link-tab" :class="{ toShort:iconTab }">
            <a class="nav-icon text-grey-1 w-4 text-center mb-4 fs-sm">
                <i class="sprite sp-news"></i>
                <div>爆料站</div>
            </a>
            <a class="nav-icon text-grey-1 w-4 text-center mb-4 fs-sm">
                <i class="sprite sp-story"></i>
                <div>故事站</div>
            </a>
            <a class="nav-icon text-grey-1 w-4 text-center mb-4 fs-sm">
                <i class="sprite sp-mall"></i>
                <div>周边商城</div>
            </a>
            <a class="nav-icon text-grey-1 w-4 text-center mb-4 fs-sm">
                <i class="sprite sp-ex"></i>
                <div>体验服</div>
            </a>
            <a class="nav-icon text-grey-1 w-4 text-center mb-4 fs-sm">
                <i class="sprite sp-fish"></i>
                <div>新人专区</div>
            </a>
            <a class="nav-icon text-grey-1 w-4 text-center mb-4 fs-sm">
                <i class="sprite sp-honor"></i>
                <div>荣耀·传承</div>
            </a>
            <a class="nav-icon text-grey-1 w-4 text-center mb-4 fs-sm">
                <i class="sprite sp-sims"></i>
                <div>模拟战资料库</div>
            </a>
            <a class="nav-icon text-grey-1 w-4 text-center mb-4 fs-sm">
                <i class="sprite sp-camp"></i>
                <div>王者营地</div>
            </a>
            <a class="nav-icon text-grey-1 w-4 text-center mb-4 fs-sm">
                <i class="sprite sp-wechat"></i>
                <div>公众号</div>
            </a>
        </div>
        <div class="icon-tab text-center py-2 bg-smoke" @click="linkTab">
            <i class="sprite sp-arrow" :class="{ 'a-rotate':iconData == 4 }"></i>
            <span class="pl-1">{{ iconTab ? '展开' : '收起' }}</span>
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
    .toShort{
        height: 4rem;
        overflow: hidden;
    }
}

</style>