import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const port = 3012

const app = express()
app.use(cors());
dotenv.config()

try{
    await mongoose.connect(process.env.url)
    console.log('Connected to MongoDB');

    app.listen(port,(req,res)=>{
        console.log(`Server Running on http://localhost:${port}`);
    });
}catch(err){
    console.log(`Error Connecting to MongoDB ${err.message}`)
}


app.get("/",(req,res)=>{
    res.send("Hello Yashil, It is Backend Server")
})