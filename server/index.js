const express = require('express')
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js');
const app = express()
const PORT =3030;


const authRouter = require('./routes/authRoute.js')
const coreRouter = require('./routes/coreRoute.js')
const fileUpload = require('express-fileupload');

const cors = require('cors')
const dbconn= require('./config/dbconn.js');

require('dotenv').config()


app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.urlencoded({extended:true}));



//Serve Swagger Documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));


//Auth Router
app.use(authRouter)
app.use(coreRouter)


//server
app.listen(PORT,()=>{
    dbconn();
    console.log(`Server Running at Port: ${PORT}`)
})