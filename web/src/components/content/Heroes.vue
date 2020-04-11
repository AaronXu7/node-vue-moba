<template>
  <div class="heroes">
        <ax-card title="英雄列表"
                icon="weapons"
                :itemData="itemData"
                :slotClass="'flex-start f-wrap'"
                :isShow="show">
                <template #card="{ items }">
                    <router-link tag="div" 
                                v-for="i in items" :key="i.index" 
                                :to="`/hero/detail/${i._id}`" 
                                class="news-item py-2 text-center w-5 px-1">
                        <img :src="i.avatar" :alt="i.name" class="w-1">
                        <div>{{ i.name }}</div>
                    </router-link>
                </template>   
        </ax-card>
    </div>
</template>

<script>

export default {
    name:'Heroes',
    props:{
        show:{
            type:Boolean,
            default:true
        }
    },
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
    watch:{
        itemData(){
            this.fetchData()
        }
    },
    created(){
        this.fetchData()
    }
}
</script>

<style lang="scss">

</style>