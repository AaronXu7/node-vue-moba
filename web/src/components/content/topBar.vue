<template>
    <div class="topbar bg-grey-1 py-2 px-4 flex-start f-align-center">
        <img src="../../assets/logo.png" height="30" alt="游戏logo">
        <div class="px-2 f-1">
            <div class="text-white fs-md">王者荣耀</div>
            <div class="text-grey-2 fs-sm">团队成就更多</div>
        </div>
        <a href="//pvp.qq.com/zlkdatasys/mct/d/play.shtml" class="btn bg-primary text-black">立即下载</a>
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