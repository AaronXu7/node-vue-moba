<template>
  <heroes :show="false"/>
</template>

<script>
import Heroes from '../../../../components/content/Heroes'

export default {
    name:'HeroList',
    components:{
        Heroes
    }
}
</script>

<style>

</style>