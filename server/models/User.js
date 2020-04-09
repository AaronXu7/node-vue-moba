const mongooes = require('mongoose')

const schema = new mongooes.Schema({
    username:{ type:String },
    password:{
        type:String,
        select:false,
        set(val){
            return require('bcryptjs').hashSync(val,10)
        }
    }
},{
    timestamps:true
})

module.exports = mongooes.model('User',schema)