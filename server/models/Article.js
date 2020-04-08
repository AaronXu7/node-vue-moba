const mongooes = require('mongoose')

const schema = new mongooes.Schema({
    title:{ type:String },
    categories:[{ type:mongooes.SchemaTypes.ObjectId,ref:'Categories' }],
    content:{ type:String }
})

module.exports = mongooes.model('Articles',schema)