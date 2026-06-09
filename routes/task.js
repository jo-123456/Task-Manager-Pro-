const express = require("express");

const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req,res)=>{

    try{

        const tasks =
        await Task.find({
            userId:req.user.id
        }).sort({
            createdAt:-1
        });

        res.json(tasks);

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

});

router.post("/", auth, async (req,res)=>{

    try{

        const {
            title,
            description,
            status,
            priority,
            dueDate
        } = req.body;

        const task =
        new Task({

            title,
            description,
            status,
            priority,
            dueDate,

            userId:req.user.id

        });

        await task.save();

        res.json(task);

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

});

router.put("/:id", auth, async (req,res)=>{

    try{

        const updatedTask =
        await Task.findByIdAndUpdate(

            req.params.id,

            {
                title:req.body.title,
                description:req.body.description,
                status:req.body.status,
                priority:req.body.priority,
                dueDate:req.body.dueDate
            },

            {
                new:true
            }

        );

        res.json(updatedTask);

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

});

router.delete("/:id", auth, async (req,res)=>{

    try{

        await Task.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:"Task deleted"
        });

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

});

module.exports = router;