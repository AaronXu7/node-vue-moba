<template>
  <div class="news">
        <ax-card title="新闻资讯"
                icon="cc-menu-circle"
                :itemData="itemData">
                <template #card="{ items }">
                    <div v-for="i in items" :key="i.index" class="news-item py-2 fs-lg flex-start">
                        <span class="text-grey-2">[{{ i.categoryName }}]</span>
                        <span class="px-1">|</span>
                        <span class="f-1 text-ellipsis">{{ i.title }}</span>
                        <span class="fs-sm text-grey-2">{{ i.createdAt | showDate }}</span>
                    </div>
                </template>   
        </ax-card>
    </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
    name:'News',
    data(){
        return {
            itemData:[]
        }
    },
    filters:{
        showDate(value){
            return dayjs(value).format('MM/DD')
        }
    },
    methods:{
        async fetchData(){
            const res = await this.$http.get('/article/list')
            console.log(res);
            this.itemData = res.data
        }
    },
    created(){
        this.fetchData()
    }
}
</script>

<style>

</style>