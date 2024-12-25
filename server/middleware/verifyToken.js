const jwt = require('jsonwebtoken')
//Middleware
//JWT Validation Middleware
const verifyToken = (req,res,next)=>{
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).json({
            error:'UnAuthorized Error'
        })
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.status(401).json({
                error:'UnAuthorized'
            })
        }
        req.user=decoded;
        next();
    })
}

module.exports=verifyToken