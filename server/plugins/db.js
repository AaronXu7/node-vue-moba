module.exports = app => {
    const mongooes = require('mongoose')

    mongooes.connect('mongodb://127.0.0.1:27017/node-vue-moba',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
}