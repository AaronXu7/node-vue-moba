const mongooes = require('mongoose')

const schema = new mongooes.Schema({
    name:{ type:String },
    items:[{ 
        title:{ type:String },
        img:{ type:String },
        href:{ type:String }
     }]
})

module.exports = mongooes.model('Ads',schema)