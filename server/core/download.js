const {Storage} = require('megajs')
require('dotenv').config();
const File = require('../model/File')



const downloadManager = async(req,res)=>{
    try{
            console.log(req.body)
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

            cloud1.once('ready',()=>{
                    console.log('Cloud 1 is Started')
            })
            cloud2.once('ready',()=>{
                    console.log('Cloud 2 is Started')
            })
            
        
            
            const {hashKey} = req.body
            if (!hashKey){
                throw new Error('Hash Key Not Found')
            }
            const file1 =  cloud1.root.children.find((file) =>
                file.name == hashKey
            );
            const file2 =  cloud2.root.children.find((file) =>
                file.name == hashKey
            );
            if (!file1 || !file2){
                throw new Error('File was not found in the DFS Cloud')
            }
            const [stream1,stream2] = await Promise.all([
                file1.downloadBuffer(),
                file2.downloadBuffer()]
            )
            
            await file2.downloadBuffer();
            if (!stream1 && !stream2) {
                throw new Error('No File got Downloaded')
            }
            console.log('Downloading Trigerred')
            
            const chunks = [stream1,stream2]
            const fileName = await File.findOne({accessKey:hashKey},{filename:1});
            console.log(fileName.filename)
            const completeFile = Buffer.concat(chunks);
            const time = new Date()
            res.setHeader('Content-Type','application/octet-stream');
            res.setHeader('Content-Disposition',`attachment; filename="${fileName.filename}"`);
            res.setHeader('Content-Length', completeFile.length);
            res.setHeader('Date',time)
            res.status(200).send(completeFile);
        } catch (error) {
        
            console.error('Error in downloadManager:', error);
            res.status(500).json({ error: error.message || 'Server error' });
            process.exit(1)
    } 
}

module.exports=downloadManager