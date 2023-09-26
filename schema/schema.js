const mongoose = require('mongoose')
// const connect = require('../database/connection')
const citySchema = new mongoose.Schema({
    country: String,
    cityname:String
})
const phoneNumaberSchema = new mongoose.Schema({
    countryKey:{
        type:String,
        minLength:1,
        maxLength:4
    },
    phoneNumber:{
        type:String,
        minLength:5,
        maxLength:20
    }
})
const gendertype = ["male","female"]
const schema = new mongoose.Schema({
    firstName: { 
        type:String,
        required:true, 
        minLength:1,
        maxLength:50,
        uppercase: true
    },
    lastName: { 
        type:String,
        required:true, 
        minLength:1,
        maxLength:50,
        uppercase:true
    },
    age: { 
        required:true, 
        type:String,
        min:1,
        max:130
    },
    gender: { 
        required:true, 
        type:String,
        validate:{
            validator: v =>  gendertype.includes(v),
            message: v => v+' is not a gender type'
        }
    },
    email: {
        required:true, 
        type:String,
        unique:true
    },
    fovariteColor: {
        required:true, 
        type:String
    },
    address: {
        required:true, 
        type:String
    },
    // city: {require:true, type:String},
    city: citySchema,
    createdAt: {
        type:Date,
        immutable: true,
        default: ()=> Date.now()
    },
    updatedAt: {
        type: Date,
        default: ()=> Date.now()
    },
    bestFriend: {
        type: mongoose.SchemaType.objectId,
        ref: "users"
    },

    hobbies:[String],
    
    phone: phoneNumaberSchema
})

module.exports= schema;

