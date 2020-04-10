module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })
    
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const adminUser = require('../../models/User')


    // 登录校验中间件
    const authMiddleware = require('../../middleware/auth')
    // 模型资源中间件
    const modelMiddleware = require('../../middleware/model')

    // 新建资源
    router.post('/',async (req,res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    // 更新资源
    router.put('/:id',async (req,res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    // 删除资源
    router.delete('/:id',async (req,res) => {
        await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    // 获取资源
    router.get('/',async (req,res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Categories') {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(300)
        res.send(items)
    })

    //获取指定资源 
    router.get('/:id',async (req,res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)

    })

    //搜索指定资源 
    router.get('/search/:keyword',async (req,res) => {
        const model = await req.Model.find().where({
            name:{ $regex:req.params.keyword }
        })
        res.send(model)
    })

    // 数据模型判断
    app.use('/admin/api/manage/:resource',authMiddleware(),modelMiddleware(),router)

    // 处理上传资源
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/admin/api/upload',authMiddleware(),upload.single('file'),async (req,res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    // 登录验证
    app.post('/admin/api/login',async (req,res) => {
        const { username,password } = req.body
        // 查找用户
        const user = await adminUser.findOne({ username }).select('+password')
        assert(user,422,'用户名不存在')
        // 校验密码
        const check = require('bcryptjs').compareSync(password,user.password)
        assert(check,422,'密码错误')
        // 返回token
        const token = jwt.sign({ id:user._id },app.get('secret'))
        res.send({ token,username })
    })

    // 错误处理函数
    app.use(async (err,req,res,next) => {
        res.status(err.statusCode || 500).send({
            message:err.message
        })
    })
}