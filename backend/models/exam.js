const mongoose=require('mongoose')
const Schema =mongoose.Schema

const examSchema= new Schema({
    id:{
        type:String,
        unique:true,
    },
    name:{
        type:String
    },
    date:{
        type:Date,
        require:true
    },
    start:{
        type:String
    },
    end:{
        type:String
    }
})

module.exports=new mongoose.model("Exam",examSchema );