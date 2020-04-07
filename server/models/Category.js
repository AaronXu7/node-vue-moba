const mongooes = require('mongoose')

const schema = new mongooes.Schema({
    name:{ type:String },
    parent:{ type:mongooes.SchemaTypes.ObjectId,ref:'Categories' }
})

module.exports = mongooes.model('Categories',schema)