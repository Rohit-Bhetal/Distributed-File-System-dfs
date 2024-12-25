const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Person',
        required:true
    },
    filename:{
        type:String,
        required:true
    },
    accessKey:{
        type:String,
        required:true
    },
    metadata:{ 
        uploadedAt:{
            type:Date,
            default:Date.now
        }

    }

},{
    timestamps:true
})

module.exports=mongoose.model('File',FileSchema);