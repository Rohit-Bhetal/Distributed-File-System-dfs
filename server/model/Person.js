const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    files:[
        {type:
            mongoose.Schema.Types.ObjectId,
            ref:'File'
        }
    ]
})

module.exports = mongoose.model("Person",PersonSchema)