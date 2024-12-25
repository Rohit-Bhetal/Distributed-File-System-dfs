const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const dbconn=  async()=>{
    try {
        const con =await mongoose.connect(process.env.mongodb)
        console.log("MongoDb connnected")
        console.log(con.connection.host)
    } catch (err) {
        console.error(err);
        process.exit(1);
        
    }
    
}
module.exports=dbconn