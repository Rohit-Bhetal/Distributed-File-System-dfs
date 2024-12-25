const File = require("../model/File")
const Person = require("../model/Person")

const getAll=  async(req,res)=>{
    try {
        const user = await Person.findOne({ email: req.user.email });
        const allUserFiles = await File.find({
            user:user._id 
        },{createdAt:1,filename:1,user:0}).populate('user');
        if(!allUserFiles){
            res.status(204).json({
                message:'No data Yet'
            })
        }
        
        res.status(200).json({
            allUserFiles,
            'user':req.user.email
        }
        )
    } catch (error) {
        res.status(500).json({
            error:error
        })
    }
}

module.exports= getAll