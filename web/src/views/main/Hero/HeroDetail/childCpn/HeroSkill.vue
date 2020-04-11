<template>
  <div class="hero-skill w-1">
        <ax-card 
                :itemData="skillData"
                :slotClass="'flex-start f-wrap'"
                :isShow="false"
                :isTouch="false"
                :isImg="true"
                :isHr="false">
                <div slot="card-ad">
                    <button>1</button>
                    <button>2</button>
                </div>
                <template #card="{ items }">
                    <div class="py-2">
                        <div>
                            <strong class="fs-xl">{{ items.name }} </strong>
                            <span class="pl-3 fs-sm text-grey-2">(冷却值：{{ items.cd }} 消耗：{{ items.consume }})</span>
                        </div>
                        <div class="py-3 text-grey-1 border-b">
                            {{ items.description }}
                        </div>
                        <div class="text-grey-2 py-2">
                            小提示： {{ items.tips }}
                        </div>
                    </div>
                </template>   
        </ax-card>
    </div>
</template>

<script>

export default {
    name:'HeroSkill',
    props:{
        skillData:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="scss">

</style>