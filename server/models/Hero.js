const mongooes = require('mongoose')

const schema = new mongooes.Schema({
    name:{ type:String },
    avatar:{ type:String },
    title:{ type:String },
    categories:[{ type:mongooes.SchemaTypes.ObjectId,ref:'Categories' }],
    scores:{
        difficult:{ type:Number },
        skill:{ type:Number },
        attack:{ type:Number },
        survive:{ type:Number }
    },
    skills:[
        {
            icon:{ type:String },
            name:{ type:String },
            cd:{ type:String },
            consume:{ type:Number },
            description:{ type:String },
            tips:{ type:String }
        }
    ],
    items1:[{ type:mongooes.SchemaTypes.ObjectId,ref:'Items' }],
    items2:[{ type:mongooes.SchemaTypes.ObjectId,ref:'Items' }],
    usageTip:{ type:String },
    battleTip:{ type:String },
    teamIdea:{ type:String },
    partners:[
        {
            hero:{ type:mongooes.SchemaTypes.ObjectId,ref:'Heroes' },
            description:{ type:String }
        }
    ],
    weak:[
        {
            hero:{ type:mongooes.SchemaTypes.ObjectId,ref:'Heroes' },
            description:{ type:String }
        }
    ],
    strong:[
        {
            hero:{ type:mongooes.SchemaTypes.ObjectId,ref:'Heroes' },
            description:{ type:String }
        }
    ]
})

module.exports = mongooes.model('Heroes',schema)