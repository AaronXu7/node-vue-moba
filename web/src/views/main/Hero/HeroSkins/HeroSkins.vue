<template>
    <div id="hero-skin" class="p-2">
        <swiper ref="skinSwiper" :options="swiperOptions" v-if="skins">
            <swiper-slide v-for="item in skins" :key="item.index">
                <img class="w-1" :src="item.src" :alt="item.name">
                <div class="text-center text-black pt-3 pb-4">{{ item.name }}</div>
            </swiper-slide>
            <div class="swiper-pagination skin-swiper text-center" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HeroSkins',
    props:{
        id:{ type:String }
    },
    data(){
        return {
            skins:null,
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination.skin-swiper'
                },
                loop:true
            }
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get(`/hero/list/${this.id}`)
            this.skins = res.data.skins
        }
    },
    created(){
        this.fetch()
    }
}
</script>

<style lang="scss">
    #hero-skin{
        .swiper-pagination-bullets{
            bottom:0;
            .swiper-pagination-bullet{
                width: 10px;
                height: 5px;
                border-radius: .5rem; 
                &.swiper-pagination-bullet-active{
                    width: 15px;
                    background-color: #000;
                }
            }
        }
    }
</style>