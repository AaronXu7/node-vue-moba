module.exports = options => {
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const adminUser = require('../models/User')
    
    return async (req,res,next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token,401,'请登录账号！')
        const { id } = jwt.verify(token,req.app.get('secret'))
        assert(id,401,'请登录账号！')
        req.user = await adminUser.findById(id)
        assert(req.user,401,'请登录账号！')
        await next()
    }
}