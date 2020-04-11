<template>
  <div id="main">
      <top-bar>
        <template slot="left">
          <div class="px-2 f-1">
            <div class="text-white fs-md">王者荣耀</div>
            <div class="text-grey-2 fs-sm">团队成就更多</div>
          </div>
        </template>
        <a slot="right" href="//pvp.qq.com/zlkdatasys/mct/d/play.shtml" class="btn bg-primary text-black">立即下载</a>
      </top-bar>
      <menu-nav />
      <!-- <home /> -->
      <router-view></router-view>
  </div>
</template>

<script>
import topBar from '../../components/content/topBar'
import menuNav from '../../components/content/menuNav'

// import Home from '../main/Home/Home'

export default {
    name:'Main',
    components:{
      // Home,
      topBar,
      menuNav
    }
}
</script>

<style>

</style>