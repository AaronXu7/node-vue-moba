<template>
  <div id="menu" class="bg-primary pt-3 pb-2 px-3">
      <nav-bar>
          <nav-bar-item path='/home' name='首页' />
          <nav-bar-item path='/about' name='攻略中心' />
          <nav-bar-item path='/hom1' name='赛事中心' />
      </nav-bar>
  </div>
</template>

<script>
import navBar from '../common/navBar/navBar'
import navBarItem from '../common/navBar/navBarItem'

export default {
    name:'menuNav',
    components:{
        navBar,
        navBarItem
    }
}
</script>

<style>

</style>