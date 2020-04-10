<template>
  <div class="heroes">
        <ax-card title="英雄列表"
                icon="weapons"
                :itemData="itemData"
                :slotClass="'flex-start f-wrap'">
                <template #card="{ items }">
                    <div v-for="i in items" :key="i.index" class="news-item py-2 text-center w-5 px-1">
                        <img :src="i.avatar" :alt="i.name" class="w-1">
                        <div>{{ i.name }}</div>
                    </div>
                </template>   
        </ax-card>
    </div>
</template>

<script>

export default {
    name:'Heroes',
    data(){
        return {
            itemData:[]
        }
    },
    methods:{
        async fetchData(){
            const res = await this.$http.get('/hero/list')
            this.itemData = res.data
        }
    },
    created(){
        this.fetchData()
    }
}
</script>

<style lang="scss">

</style>