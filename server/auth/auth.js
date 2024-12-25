require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Person = require("../model/Person");

const login =  async(req,res)=>{
    try {
        const {email,password} = req.body;
        const existentUser = await Person.findOne({
            email:email
        })
        if (!existentUser){
            return res.status(500).json({
                error:'Non Exisiting User'
            })
        }

        const passwordMatch = await bcrypt.compare(password,existentUser.password);
        if (!passwordMatch){
            return res.status(401).json({
                error:"Invalid Credentials"
            });
        }
        const token = jwt.sign({
            email:email,
            
            
        },process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({
            token
        })

    } catch (error) {
        res.status(500).json({
            error:'Internal Server Error'
        })
    }
}

const signup =  async(req,res)=>{
    try {
        const {email,password} = req.body;
        const existentUser = await Person.findOne({
            email:email
        })
        if (existentUser){
            return res.status(500).json({
                error:'Exisiting User'
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = Person.create({
            email:email,
            password:hashedPassword
        });
        (await newUser).save();
        res.status(200).json({
            message:"User Successfully Registered"
        })

    } catch (error) {
        res.status(500).json({
            error:'Internal Server Error'
        })
    }
}

module.exports={login,signup};