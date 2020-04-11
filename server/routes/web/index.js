module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })
    const mongoose = require('mongoose')
    const Category = mongoose.model('Categories')
    const Article = mongoose.model('Articles')
    const Hero = mongoose.model('Heroes')
    const Ad = mongoose.model('Ads')
    // 导入文章数据
    // router.get('/article/init',async (req,res) => {
    //     const parent = await Category.findOne({
    //         name:'新闻分类'
    //     })
    //     const cate = await Category.find().where({
    //         parent:parent
    //     }).lean()
    //     const newTitle = ["新皮肤爆料丨拔刀斩恶魂！橘右京新装登场~", "豪横！王者荣耀英雄主打歌完整歌单霸气登陆酷狗！", "蔡文姬繁星吟游皮肤，史诗升级进行时！", "冷艳御姐是如何练成的？参与「镜」主题创作赢荣耀水晶", "廉颇重塑计划爆料", "4月5日开服及奖励通知", "4月9日体验服不停机更新公告", "4月8日净化游戏环境声明及处罚公告", "4月8日“演员”惩罚名单", "4月8日体验服停机更新公告", "橘右京全新史诗皮肤上架 SNK皮肤齐聚峡谷福利大放送", "【预告】荣耀中国节·轻风戏纸鸢，参与必得纸鸢回城特效（永久）", "参与“S19战令集结号”，赢80级直升经验大礼", "【镜界诞生 见证觉醒】活动公告", "S19赛季来临 多重好礼邀你开启全新赛季", "《一招即浪》第二期：逆天牛魔王最浪打法，城市赛教你一招制敌", "为战队争夺荣誉！城市联赛战队赛通道报名开启！", "高校联赛分站赛即将打响 今年又有多少好玩的活动值得期待？", "《一招即浪》第一期：白起强势归来，教你如何化身“边路杀神”", "KPL王者荣耀职业联赛4月4日比赛停赛公告"]
    //     const newList = newTitle.map(item => {
    //         const randomCate = cate.slice().sort((a,b) => Math.random() - 0.5)
    //         return {
    //             categories:randomCate.slice(0,2),
    //             title:item
    //         }
    //     })
    //     await Article.deleteMany({})
    //     await Article.insertMany(newList)
    //     res.send(newList)
    // })
    // 获取文章列表数据
    router.get('/article/list',async (req,res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
          })
        const cats = await Category.aggregate([
            { $match: { parent: parent._id } },
            {
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'dataList'
                }
            },
            {
                $addFields: {
                    dataList: { $slice: ['$dataList', 5] }
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            dataList: await Article.find().where({
                categories: { $in: subCats }
            }).populate('categories').limit(5).lean()
        })

        cats.map(cat => {
        cat.dataList.map(news => {
                news.categoryName = (cat.name === '热门')
                ? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })
    // 获取文章详情
    router.get('/article/list/:id',async (req,res) => {
        const data = await Article.findById(req.params.id).lean()
        data.related = await Article.find().where({
            categories:{ $in: data.categories}
        }).limit(2)
        res.send(data)
    })

    // 导入英雄数据
    // router.get('/hero/init',async (req,res) => {
    //     await Hero.deleteMany({})
    //     const heroData = 
    //     for (let item of heroData){
    //         if(item.name === '热门'){
    //             continue
    //         }
    //          // 找到当前分类在数据库中对应的数据
    //         const category = await Category.findOne({
    //             name: item.name
    //         })
    //         item.heroes = item.heroes.map(hero => {
    //             hero.categories = [category]
    //             return hero
    //         })
    //         // 录入英雄
    //         await Hero.insertMany(item.heroes)
    //     }
    //     res.send(await Hero.find())
    // })

    // 获取英雄数据
    router.get('/hero/list',async (req,res) =>{
        const parent = await Category.findOne({
            name:'英雄分类'
        })
        const hero = await Category.aggregate([
            { $match:{ parent:parent._id } },
            {
                $lookup:{
                    from:'heroes',
                    localField:'_id',
                    foreignField:'categories',
                    as:'dataList'
                }
            }
        ])
        const subCats = hero.map(v => v._id)
        hero.unshift({
            name: '热门',
            dataList: await Hero.find().where({
                categories: { $in: subCats }
            }).populate('categories').limit(10).lean()
        })
        res.send(hero)
    })
    // 获取英雄详情
    router.get('/hero/list/:id',async (req,res) => {
        const data = await  Hero
                            .findById(req.params.id)
                            .populate('categories items1 items2 partners.hero weak.hero strong.hero')
                            .lean()
        res.send(data)
    })
    router.get('/article/list/:id',async (req,res) => {
        const data = await Article.findById(req.params.id).lean()
        data.related = await Article.find().where({
            categories:{ $in: data.categories}
        }).limit(2)
        res.send(data)
    })

    // 获取广告位数据
    router.get('/ad/list',async (req,res) => {
        const ad = await Ad.find()
        res.send(ad)
    })


    app.use('/web/api',router)
}