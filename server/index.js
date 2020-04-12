const express = require('express')

const app = express()

// token
app.set('secret','aslkdh123hoh')

// 跨域模块
app.use(require('cors')())
// 设置数据格式
app.use(express.json())
// 托管静态文件
app.use('/uploads',express.static(__dirname + '/uploads'))
app.use('/admin',express.static(__dirname + '/static/admin'))
app.use('/',express.static(__dirname + '/static/web'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000,() => {
    console.log('http://localhost:3000');
})