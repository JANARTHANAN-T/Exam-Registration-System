const express = require('express')
const app = express()
const mongoose=require("mongoose")
const cors=require("cors")

const userRoutes = require('./routes/user.js')
const examRoutes= require('./routes/exam.js')

// const DATABASE_URL = 'mongodb+srv://karthi:karthi12003@edulearn.otd1ji6.mongodb.net/?retryWrites=true&w=majority'
const DATABASE_URL = 'mongodb+srv://Janarthanan:jana@examregistration.rw39vek.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then( () => {
    console.log("Connection open")
}).catch(err => {
    console.log("OOPS !! ERROR")
})

app.use(express.json({extended:true}))
app.use(express.urlencoded({ extended: true }));


app.use(cors())
app.use('/user',userRoutes)
app.use('/exam',examRoutes)
app.get('/',(req,res)=>{
    res.send('Exam Registration')
})

app.listen(4000,()=> console.log("server is running"))