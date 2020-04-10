<template>
  <swiper ref="mainSwiper" :options="swiperOptions">
    <swiper-slide v-for="item in swiperData" :key="item.index">
        <a :href="item.href">
            <img class="w-1" :src="item.img" :alt="item.title">
        </a>
    </swiper-slide>
    <div class="swiper-pagination main-swiper text-right pr-3" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
    name:'mainSwiper',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination.main-swiper'
          },
          autoplay: true
        },
        swiperData:[]
      }
    },
    methods:{
      async fetch(){
        const res = await this.$http.get('/ad/list')
        this.swiperData = res.data[0].items
      }
    },
    created(){
      this.fetch()
    }
}
</script>

<style lang="scss">
@import '../../../../common/_variable.scss';

.swiper-pagination-bullet{
    opacity: 1;
    width: 8.5px;
    height: 8.5px;
    border-radius: 2px;
    background: map-get($colors, 'white');
    &.swiper-pagination-bullet-active{
        background: map-get($colors, 'info');
    }
}

</style>