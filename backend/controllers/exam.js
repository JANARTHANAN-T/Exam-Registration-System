const mongoose=require('mongoose')
const Exam = require('../models/exam.js')
const User = require('../models/user.js')

module.exports.getAllExam = async(req,res)=>{
    try{
        const exam=await Exam.find();   
        res.status(200).json(exam);
    }catch(err){
        console.log(err.message)
        res.status(500).send("Server error")
    }
}

module.exports.RegisterExam = async(req,res) =>{
    const {id,exam_id} =  req.body
    console.log(id,exam_id);
    try {
        const user = await User.findById(id)
        console.log(user);
        user.registered.push(exam_id)
        await user.save();
        res.status(200).json({msg:"Success"})
    } catch (err) {
        console.log(err.message);
            res.status(500).json({msg:'Internal server error'})
            }
}


module.exports.getRegisteredExam = async(req,res) =>{
    const {id}=req.params
    try{
        const user=await User.findById(id).populate('registered');
        res.status(200).json(user);
    }catch(err){
        console.log(err.message)
        res.status(500).json({msg:"Internal Server error"})
    }
}

module.exports.createExam = async(req,res)=>{
    try{
        const exam= new Exam({...req.body});
        await exam.save();
        res.status(200).json("success")
    }catch(err){
        console.log(err.message)
        res.status(500).json({msg:'internal server error'})
    }
}