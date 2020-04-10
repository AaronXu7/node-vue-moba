<template>
  <div id="article" v-if="article">
      <div class="flex-between f-align-center px-1 py-2">
        <div class="text-info flex-start f-align-center w-80" @click="$router.go(-1)">
            <i class="iconfont icon-back pr-1"></i>
            <strong class="text-ellipsis">{{ article.title }}</strong>
        </div>
        <div class="fs-sm text-grey-3">{{ article.updatedAt | showDate }}</div>
      </div>
      <div class="img-1 px-3 border-y" v-html="article.content"></div>
      <div class="related py-2 px-3">
          <div class="flex-start f-align-center">
              <i class="iconfont icon-huixingzhen fs-xxl pl-1"></i>
              <strong class="text-info">相关资讯</strong>
          </div>
          <router-link v-for="item in article.related" :key="item.index"
                        tag="div" 
                        :to="`/article/${item._id}`"
                        class="flex-between py-2">
            <div class="fs-md text-ellipsis w-80">{{ item.title }}</div>
            <div class="fs-sm text-grey-3">{{ article.item | showDate }}</div>
          </router-link>
      </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
    name:'Article',
    props:{
        id:{ require:true }
    },
    data(){
        return {
            article:null
        }
    },
    filters:{
        showDate(value){
            return dayjs(value).format('YYYY-MM-DD')
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get(`/article/list/${this.id}`)
            this.article = res.data
        }
    },
    watch:{
        id(){
            this.fetch()
        }
    },
    created(){
        this.fetch()
    }
}
</script>

<style lang="scss">
    #article{
        iframe{
            width: 100%;
            height: auto;
        }
    }
</style>