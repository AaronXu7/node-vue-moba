<template>
  <div id="home">
    <!-- 首页轮播图 -->
    <main-swiper />
    <!-- 功能导航 -->
    <link-nav />
    <!-- 新闻资讯 -->
    <news />
    <!-- 英雄列表  -->
    <hero />
  </div>
</template>

<script>
import mainSwiper from './childCpn/mainSwiper'
import linkNav from './childCpn/linkNav'
import News from './childCpn/News'
import Hero from './childCpn/Hero'

export default {
    name:'Home',
    components:{
        mainSwiper,
        linkNav,
        News,
        Hero
    }
}
</script>

<style lang="scss">
@import '../../../common/_variable.scss';


</style>