<template>
  <div id="home">
    <!-- 首页轮播图 -->
    <main-swiper />
    <!-- 功能导航 -->
    <link-nav />
    <!-- 新闻资讯 -->
    <news />
    <!-- 英雄列表  -->
    <heroes />
  </div>
</template>

<script>
import mainSwiper from './childCpn/mainSwiper'
import linkNav from './childCpn/linkNav'
import News from './childCpn/News'
import Heroes from '../../../components/content/Heroes'

export default {
    name:'Home',
    components:{
        mainSwiper,
        linkNav,
        News,
        Heroes
    }
}
</script>

<style lang="scss">
@import '../../../common/_variable.scss';


</style>