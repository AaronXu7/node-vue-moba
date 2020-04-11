<template>
  <div id="hero-detail" v-if="heroData">
        <!-- 英雄介绍卡片 -->
        <div class="hero-card text-white" :style="{ 'background-image':`url(${heroData.banner})` }">
            <div class="shadow px-3 pb-3 flex-end f-column">
                <div class="fs-sm pt-1">{{ heroData.title }}</div>
                <strong class="fs-xl pt-1">{{ heroData.name }}</strong>
                <div class="fs-sm pt-1">{{ heroData.categories.map(i => i.name).join('/') }}</div>
                <div class="flex-between pt-1">
                    <div class="scores flex-start" v-if="heroData.scores">
                        <div class="fs-sm">难度<span class="mx-2 bg-primary px-1 fs-xs">{{ heroData.scores.difficult }}</span></div>
                        <div class="fs-sm">技能<span class="mx-2 bg-info px-1 fs-xs">{{ heroData.scores.skill }}</span></div>
                        <div class="fs-sm">攻击<span class="mx-2 bg-danger px-1 fs-xs">{{ heroData.scores.attack }}</span></div>
                        <div class="fs-sm">生存<span class="mx-2 bg-grey-1 px-1 fs-xs">{{ heroData.scores.survive }}</span></div>
                    </div>
                    <router-link tag="div" :to="`/hero/skins/${id}`" v-if="heroData.skins">
                        皮肤：{{ heroData.skins.length }} &gt;
                    </router-link>
                </div>
            </div>
        </div>
        <!-- 英雄技能介绍 -->
        <div class="pt-3 pb-2 bg-white">
            <nav-bar :isReverse="true" align="around" class="pb-2">
                <card-item v-for="(item,index) in heroNav" :key="index" 
                            :name='item'
                            :itemIndex='index'
                            :isCurrent='navIndex === index'
                            @current='$refs.heroSwiper.$swiper.slideTo($event)'/>
            </nav-bar>
            <swiper ref="heroSwiper"
                    :options="{ autoHeight:true }"
                    @slide-change="() => navIndex = $refs.heroSwiper.$swiper.realIndex">
                <swiper-slide class="flex-start f-wrap">
                    <!-- 技能介绍 -->
                    <hero-skill :skillData="skillData"/>
                    <!-- 出装推荐 -->
                    <div class="bg-whitesmoke w-1">
                        <ax-card title="出装推荐"
                            icon="circle-star"
                            :itemData="skillData"
                            :onlyCard="true"
                            :slotClass="'flex-start f-wrap'"
                            :isTouch="false"
                            :isHr="false">
                            <div class="fs-xl pt-2">顺风出装</div>
                            <div class="flex-between py-2">
                                <div class="w-6 text-center" v-for="item1 in heroData.items1" :key="item1.index">
                                    <img class="w-80 border-c" :src="item1.icon" :alt="item1.name">
                                    <div>{{ item1.name.length > 4 ? item1.name.slice(0,4) : item1.name }}</div>
                                </div>
                            </div>
                            <hr class="br-smoke"/>
                            <div class="fs-xl">逆风出装</div>
                            <div class="flex-between py-2">
                                <div class="w-6 text-center" v-for="item2 in heroData.items2" :key="item2.index">
                                    <img class="w-80 border-c" :src="item2.icon" :alt="item2.name">
                                    <div>{{ item2.name.length > 4 ? item2.name.slice(0,4) : item2.name }}</div>
                                </div>
                            </div>
                        </ax-card>
                        <ax-card title="使用技巧"
                            icon="circle-flag"
                            :itemData="skillData"
                            :onlyCard="true"
                            :slotClass="'flex-start f-wrap'"
                            :isTouch="false"
                            :isHr="false">
                            <div class="fs-md text-grey-2 pt-2">{{ heroData.usageTip }}</div>
                        </ax-card>
                        <ax-card title="对抗技巧"
                            icon="circle-flag_"
                            :itemData="skillData"
                            :onlyCard="true"
                            :slotClass="'flex-start f-wrap'"
                            :isTouch="false"
                            :isHr="false">
                            <div class="fs-md text-grey-2 pt-2">{{ heroData.battleTip }}</div>
                        </ax-card>
                        <ax-card title="团队思路"
                            icon="circle-view"
                            :itemData="skillData"
                            :onlyCard="true"
                            :slotClass="'flex-start f-wrap'"
                            :isTouch="false"
                            :isHr="false">
                            <div class="fs-md text-grey-2 pt-2">{{ heroData.teamIdea }}</div>
                        </ax-card>
                        <ax-card title="英雄关系"
                            icon="circle-cent"
                            :itemData="skillData"
                            :onlyCard="true"
                            :slotClass="'flex-start f-wrap'"
                            :isTouch="false"
                            :isHr="false">
                            <div class="fs-xl pt-2">最佳搭档</div>
                            <div class="py-2 flex-start f-align-center" v-for="item in heroData.partners" :key="item.index">
                                <img class="w-6" :src="item.hero.avatar" :alt="item.hero.name">
                                <div class="pl-2">{{ item.description }}</div>
                            </div>
                            <hr class="br-smoke"/>
                            <div class="fs-xl pt-2">被谁克制</div>
                            <div class="py-2 flex-start f-align-center" v-for="item in heroData.weak" :key="item.index">
                                <img class="w-6" :src="item.hero.avatar" :alt="item.hero.name">
                                <div class="pl-2">{{ item.description }}</div>
                            </div>
                            <hr class="br-smoke"/>
                            <div class="fs-xl pt-2">被谁克制</div>
                            <div class="py-2 flex-start f-align-center" v-for="item in heroData.strong" :key="item.index">
                                <img class="w-6" :src="item.hero.avatar" :alt="item.hero.name">
                                <div class="pl-2">{{ item.description }}</div>
                            </div>
                        </ax-card>
                    </div>
                    
                </swiper-slide>
                <swiper-slide class="flex-start f-wrap">
                    2
                </swiper-slide>
            </swiper>
        </div>
  </div>
</template>

<script>
import navBar from '../../../../components/common/navBar/navBar'
import cardItem from '../../../../components/common/navBar/cardItem'

import HeroSkill from './childCpn/HeroSkill'

export default {
    name:'HeroDetail',
    components:{
        HeroSkill,
        navBar,
        cardItem
    },
    props:{
        id:''
    },
    data(){
        return {
            heroData:null,
            heroNav:[ '英雄初识','进阶攻略' ],
            navIndex: 0,
            skillData:[]
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get(`/hero/list/${this.id}`)
            this.heroData = res.data
            this.skillData = this.heroData.skills.map(item => {
                return {
                    icon:item.icon,
                    dataList:item
                }
            })
        }
    },
    created(){
        this.fetch()
    }
}
</script>

<style lang="scss">
    #hero-detail{
        .hero-card{
            width: 100%;
            height: 14.5rem;
            background-size: 100% 100%;
            .shadow{
                background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
                height: 100%;
            }
            .scores{
                span{
                    border-radius:100%;
                    border:1px solid grey;
                }
            }
        }
    }
</style>