const {Storage} = require('megajs')
const File = require("../model/File");
require('dotenv').config();

const deleteFile = async(req,res)=>{
    try{
        const {hashKey} = req.body
            if (!hashKey){
                throw new Error('Hash Key Not Found')
            }
        const data = await File.deleteOne({accessKey:hashKey});
        if (data.deletedCount == 0){
            return res.status(500).json({
                message:'No File exists for this hashKey'
            })
        }
        const cloud1 = await new Storage({
            email:process.env.email,
            password:process.env.password,
            autologin:true,
            autoload:true
            
        }).ready
        const cloud2 = await new Storage({
            email:process.env.email1,
            password:process.env.password,
            autologin:true,
            autoload:true
            
            
        }).ready
        const file1 = cloud1.root.children.find((file)=>file==hashKey);
        const file2 = cloud2.root.children.find((file)=>file==hashKey);
        if (!file1||!file2){
            res.status(500).json({
                error:"File Not found"
            })
        }
        await file1.delete()
        await file2.delete()
        res.status(200).json({
            message:'Successfully Deleted the File'
        })

    }
    catch(error){
        res.status(500).json({
            error:error.message
        })
    }
}

module.exports=deleteFile