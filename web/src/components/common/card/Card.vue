<template>
  <div class="ax-card bg-white mt-3 py-2 px-3 border-y">
    <div class="card-header">
        <div class="header-main flex-start f-align-center text-black pb-1">
            <i class="iconfont pr-2" :class="'icon-' + icon"></i>
            <span class="fs-xl f-1">{{ title }}</span>
            <a>
            <i class="iconfont icon-dots-horizontal fs-xxl text-black"></i>
            </a>
        </div>
            <div class="header-info">
                <slot name="card-ad"/>
            </div>
    </div>
        <hr class="br-smoke"/>
    <div class="card-body">
        <div class="pt-3 pb-2 px-3">
            <nav-bar :isReverse="true" align="between" class="pb-2">
                <card-item v-for="(item,index) in itemData" :key="index" 
                            :name='item.name'
                            :itemIndex='index'
                            :isCurrent='currentIndex === index'
                            @current='$refs.cardSwiper.$swiper.slideTo($event)'/>
            </nav-bar>
            <swiper ref="cardSwiper"
                    :options="{ autoHeight:true }"
                    @slide-change="() => currentIndex = $refs.cardSwiper.$swiper.realIndex">
                <swiper-slide v-for="i in itemData" :key="i.index" :class="slotClass">
                    <slot name="card" :items='i.dataList'></slot>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    </div>
</template>

<script>
import navBar from '../navBar/navBar'
import cardItem from '../navBar/cardItem'

export default {
    name:'Card',
    components:{
        navBar,
        cardItem
    },
    props:{
        title:{
            type:String,
            require:true
        },
        icon:{
            type:String,
            require:true
        },
        itemData:{
            type:Array,
            default(){
                return []
            }
        },
        slotClass:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            currentIndex: 0
        } 
    },
    methods:{
        current(i){
            this.currentIndex = i
        }
    }
}
</script>

<style>

</style>