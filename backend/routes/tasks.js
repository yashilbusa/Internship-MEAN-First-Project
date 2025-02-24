import express from "express";
import { Task } from '../models/task.js';

const router = express.Router();

router.get("/",async(req,res)=>{
    const allTask = await Task.find()
    res.send(allTask)
})

router.post("/",async(req,res)=>{
    const newTask = new Task({
        title:req.body.title,
        description:req.body.description,
        completed:req.body.completed
    })
    await newTask.save()
    res.send(newTask)
})

module.exports = router