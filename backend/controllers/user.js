const mongoose = require('mongoose')
const jwt=  require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User=  require('../models/user.js')
 
module.exports.signUp = async(req,res)=>{
    const {name,email,id,department,year,section,dob,mobile,password} = req.body
    try {
        const existinguser=await User.findOne({id})
        if(existinguser){
            return res.status(400).json({message:'User already found..'})
        }
        const hashPassword = await bcrypt.hash(password,12);
        const newUser=new User({name,email,id,department,year,section,dob,mobile,password:hashPassword})
        await newUser.save();
        const token = jwt.sign({id:newUser.id,uid:newUser._id},'token',{expiresIn:'1h'})
        res.status(200).json({result:newUser,token})
    } catch (err) {
        res.status(500).json('Something went worng...')
    }
}

module.exports.login = async(req,res) =>{
    const {id,password} = req.body;
    try{
        const existinguser = await User.findOne({id})
        if(!existinguser){
            console.log("User not found...");
            return res.status(404).json({message:"User not found..."})
        }
        const isPasswordCrt = await bcrypt.compare(password,existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token = jwt.sign({id:existinguser.id,uid:existinguser._id},'token',{expiresIn:'48h'})
        res.status(200).json({result:existinguser,token})
    }catch(err){
        res.status(500).json(err.message)
    }
}