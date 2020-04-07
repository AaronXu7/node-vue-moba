const mongooes = require('mongoose')

const schema = new mongooes.Schema({
    name:{ type:String },
    icon:{ type:String }
})

module.exports = mongooes.model('Items',schema)