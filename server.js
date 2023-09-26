const express = require("express")
const mongoose = require("mongoose")
const app = express()



mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://mohand800001:u7RRxaBSjh1bDjaG@cluster0.5gesuqe.mongodb.net/test",()=>{
    app.listen(3000,()=>{
        console.log("Server Start")
    })
    console.log("connected")
},e =>{
    console.error(e)
})
// u7RRxaBSjh1bDjaG