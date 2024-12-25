const File = require("../model/File")
const findFile=  async(req,res)=>{
    try {
        const fileReq = req.body.searchFile
        if (!fileReq){
            return res.status(500).json({
                error:'File Name Missing'
            })
        }
        const isFileExist = await File.find({
            filename:fileReq
        });
        if (isFileExist.length>0){
            return res.status(200).json({
                success:'True'
            })
        }
        return res.status(200).json({
            success:'False'
        })
    

    } catch (error) {
        return res.status(500).json({
            'error':error.message
        })
    }
}


module.exports =findFile