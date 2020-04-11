<template>
  <div class="ax-card bg-white mt-3 py-2 px-3 border-y w-1">
    <div class="card-header" v-if="isShow">
        <div class="header-main flex-start f-align-center text-black py-1">
            <i class="iconfont pr-2" :class="'icon-' + icon"></i>
            <strong class="fs-xl f-1">{{ title }}</strong>
            <a>
            <i v-if="!onlyCard" class="iconfont icon-dots-horizontal fs-xxl text-black"></i>
            </a>
        </div>
        <div class="header-info">
            <slot name="card-ad"/>
        </div>
    </div>
    <hr class="br-smoke" v-if="isHr"/>
    <div class="card-body">
        <slot/>
        <div class="pt-3 pb-2 px-3" v-if="!onlyCard">
            <nav-bar :isReverse="true" align="between" class="pb-2">
                <card-item v-for="(item,index) in itemData" :key="index" 
                            :name='item.name'
                            :itemIndex='index'
                            :isCurrent='currentIndex === index'
                            :isImg="isImg"
                            :src="item.icon"
                            @current='$refs.cardSwiper.$swiper.slideTo($event)'>
                </card-item>
            </nav-bar>
            <swiper ref="cardSwiper"
                    :options="{ autoHeight:true,allowTouchMove: isTouch }"
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
        },
        isShow:{
            type:Boolean,
            default:true
        },
        isTouch:{
            type:Boolean,
            default:true
        },
        isImg:{
            type:Boolean,
            default:false
        },
        onlyCard:{
            type:Boolean,
            default:false
        },
        isHr:{
            type:Boolean,
            default:true
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