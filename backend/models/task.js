import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

export const Task = mongoose.model('Task',taskSchema)