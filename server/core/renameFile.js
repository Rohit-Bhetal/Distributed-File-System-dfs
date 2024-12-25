const File = require("../model/File")

const renameFile = async(req,res)=>{
    try {
        const {newName,oldName,hashkey} = req.body

        if (!newName || !oldName||!hashkey ){
           return res.status(404).json({
                message:'No File name was sent or HashKey Missing'
            })
        }

        const val = await File.findOne({accessKey:hashkey});

        
        if (!val){
            return res.status(404).json({
                message:'No File Such exist or Hashkey is wrong'
            })
        }
        const newFileName = newName+'.'+oldName.split('.')[1]
        val.filename=newFileName
        await val.save()
        return res.status(200).json({
            message:`File name renamed: ${newName}`
        })
    } catch (error) {
        return res.status(500).json({
            message:`Error:${error}`
        })
    }
}

module.exports = renameFile