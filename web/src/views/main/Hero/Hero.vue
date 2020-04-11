<template>
  <div id="hero-main">
      <top-bar>
        <template slot="left">
          <div class="px-2">
            <div class="text-white fs-md">王者荣耀</div>
          </div>
          <div class="px-3 f-1">
            <div class="text-white fs-md">攻略站</div>
          </div>
        </template>
        <router-link tag="div" slot="right" to="/hero/list">
            <strong class="text-white fs-sm">更多英雄 &gt;</strong>
        </router-link>
      </top-bar>
      <router-view />
  </div>
</template>

<script>
import topBar from '../../../components/content/topBar'

export default {
    name:'Hero',
    components:{
        topBar
    }
}
</script>

<style>

</style>