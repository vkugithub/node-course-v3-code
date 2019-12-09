require('../mongoosedb')
const express = require('express')
const Task = require('../model/Task')
const auth = require('../auth')
const router = new express.Router()

router.get('/tasks', auth, async (req, res) => {
    try {

//        const tasks = await Task.find({'owner' : req.user._id})
//        res.send(tasks)

        await req.user.populate('tasks').execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/task', auth, async (req, res) => {
    try {
//    const _id = req.params.id
//    const task = await Task.findById(_id)

    const task = await Task.findOne({'owner' : req.user._id})

    if(!task){
        return res.status(404).send(task)
    }
        res.send(task)

    }catch(error){
             res.status(500).send(error);
             }
})

router.post('/create/task', auth, async (req, res) => {
    try{
    const task = new Task({...req.body, 'owner' : req.user._id})
     await task.save()
        res.send(task)
        }
        catch(error){
                res.status(500).send(error);
                }
    })

module.exports=router