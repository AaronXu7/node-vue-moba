<template>
  <div id="main">
      <top-bar />
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