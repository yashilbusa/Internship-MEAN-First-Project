import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import taskRoutes from './routes/tasks.js';

const app = express()
const port = 3012

app.use("/tasks",taskRoutes)

app.use(cors());
app.use(express.json())
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