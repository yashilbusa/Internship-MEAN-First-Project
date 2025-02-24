import express from 'express'
const app = express()
const port = 3012

app.get("/",(req,res)=>{
    res.send("Hello Yashil")
})

app.listen(port,(req,res)=>{
    console.log(`Server Running on https://localhost:${port}`);
})