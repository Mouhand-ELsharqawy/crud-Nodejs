const { default: mongoose } = require('mongoose')
const userModel = require('../models/userModel')


exports.create = async (req,res)=>{
    try{
        const result = await userModel.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email,
            fovariteColor: req.body.color,
            address: req.body.address,
            city: req.body.city,  
        })
        res.status(200).json(result)
        console.log(result)
        
    }catch(error){
        res.status(500).json({error:error.message})
    } 
}


exports.getbyid = async (req,res)=>{
    try{

        const user = await userModel.findById(req.params.id)
        res.status(200).json(user)

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.getAll = async(req,res)=>{
    try{
        const users = await userModel.find()
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.update = async (req,res)=>{
    try{
        const user = await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.delete = async (req,res)=>{
    try{
        const user = await userModel.findByIdAndDelete(req.params.id,{new:true})
        res.status(200).json({message: 'user deleted successfully'})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}


exports.findbyname = async (req,res)=>{
    try{
        const user = await userModel.find({ firstName: req.body.firstName})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
exports.findbyphoneNumber = async (req,res)=>{
    try{
        const user =  await userModel.find({phone: {
            countryKey: req.body.countryKey,
            phoneNumber: req.body.phoneNumber
        }})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
exports.work = async (req,res)=>{
    try{
        const userFindOne = await userModel.findOne({ firstName: req.body.firstName})
        const userDeleteAll = await userModel.delete({ firstName: req.body.firstName})
        const userDeleteOne = await userModel.deleteOne({ firstName: req.body.firstName})
        const userUpdate = await userModel.update({firstName: req.body.firstName})
        const userUpateOne = await userModel.updateOne({firstName: req.body.firstName})
        const userUpateMany = await userModel.updateMany({firstName: req.body.firstName})
        const findByfirstNameUsingWhere = await userModel.where("firstName").equals(req.body.firstName)
        const findByAgeAndName = await userModel.where("age").gt(10).lt(100).where("firstName")
        .equals(req.body.firstName).limit(2).select("lastName","email","phone")
        findByAgeAndName[0].bestFriend = "644c26e908bd1b75d34fea5b"
        await findByAgeAndName[0].save()


        const userJoin = await userModel.where("firstName")
        .equals(req.body.firstName)
        .limit(1)
        .populate("bestFriend")
    }catch(error){
        res.status(500).json({error: error.message})
    }
}