import express from 'express'
import cors from 'cors'
const app = express()
const port = 3012

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello Yashil, It is Backend Server")
})

app.listen(port,(req,res)=>{
    console.log(`Server Running on http://localhost:${port}`);
})

