const express = require('express')

const app = express()

// 跨域模块
app.use(require('cors')())
// 设置数据格式
app.use(express.json())
// 托管静态文件
app.use('/uploads',express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000,() => {
    console.log('done');
})