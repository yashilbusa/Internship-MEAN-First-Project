import express from "express";
import { Task } from '../models/task.js';

const router = express.Router();

router.get("/",async(req,res)=>{
    const allTask = await Task.find()
    res.send(allTask)
})

router.post("/",async(req,res)=>{
    const { title, description, completed } = req.body;
    const newTask = new Task({
        title,
        description,
        completed
    })
    await newTask.save()
    res.json(newTask)
})

// module.exports = router it gives error 
export default router;
