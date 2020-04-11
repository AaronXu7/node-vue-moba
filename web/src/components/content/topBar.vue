<template>
    <div class="topbar bg-grey-1 py-2 px-4 flex-start f-align-center">
        <img src="../../assets/logo.png" height="30" alt="游戏logo">
        <slot name="left"/>
        <slot name="right"/>
    </div>
</template>

<script>
export default {
    name:'topBar'
}
</script>

<style lang="scss">
    .topbar{
        position: sticky;
        top: 0;
        z-index: 99;
    }
</style>