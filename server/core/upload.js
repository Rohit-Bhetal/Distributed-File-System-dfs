const {Storage}  = require('megajs')
require('dotenv').config()
const keyGenerator = require('../func/keyGenerator')
const File = require('../model/File')
const Person = require('../model/Person')

const uploadManager = async(req,res) =>{
    try {
        const cloud1 = await  new Storage({
            email:process.env.email,
            password:process.env.password,
            autologin:true,
            autoload:true
            
        }).ready
        const cloud2 = await  new Storage({
            email:process.env.email1,
            password:process.env.password,
            autologin:true,
            autoload:true,
            
            
        }).ready
        if (!req.files || Object.keys(req.files).length!=2 || !req.body.filename){
            return res.status(400).json({
                error:'Error in chunking or No file was sent'
            })
        }
        
        const {file1,file2} = req.files;
        const accessKey = keyGenerator();
        if (!accessKey) {
            throw new Error('Internal Error While creating the access key');
        }
        try {

            
            const file1Size = file1.size
            const file2Size = file2.size
            const [uploadFirst, uploadSecond] = await Promise.all([
                cloud1.upload({name:accessKey,size:file1Size}, file1.data).complete,
                cloud2.upload({name:accessKey,size:file2Size}, file2.data).complete,
            ]);

            // Find user
            const user = await Person.findOne({
                email: req.user.email
            });

            if (!user) {
                throw new Error('User not found');
            }

            // Save file metadata
            const data = new File({
                user: user._id,
                filename: req.body.filename,
                accessKey: accessKey
            });
            await data.save();

            if (uploadFirst && uploadSecond) {
                res.status(200).json({
                    accessKey,
                    message: 'Successfully Uploaded. Keep the key safe'
                });
            } else {
                throw new Error('Upload failed');
            }

        } catch (error) {
            throw new Error(`Upload failed: ${error.message}`);
        }

                                                                                          
    } catch (error) {
        res.status(500).json({
            error: error.message 
        })
    }
}

module.exports = uploadManager