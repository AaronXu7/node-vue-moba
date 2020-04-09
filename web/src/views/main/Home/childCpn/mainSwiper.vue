<template>
  <swiper ref="mainSwiper" :options="swiperOptions">
    <swiper-slide>
        <a href="">
            <img class="w-1" src="../../../../assets/img/swiper (1).jpeg" alt="">
        </a>
    </swiper-slide>
    <swiper-slide>
        <a href="">
            <img class="w-1" src="../../../../assets/img/swiper (2).jpeg" alt="">
        </a>
    </swiper-slide>
    <swiper-slide>
        <a href="">
            <img class="w-1" src="../../../../assets/img/swiper (3).jpeg" alt="">
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
        }
      }
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