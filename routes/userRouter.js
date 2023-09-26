const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const userModel = require('../models/userModel')

router.get('/user/getall',(req,res)=>{
    // res.send('All Data ')
    userController.getAll(req,res)
})

router.get('/user/show/:id',(req,res)=>{
    // res.send('user by id '+req.params.id)
    userController.getbyid(req,res)
})
router.post('/user/add',(req,res)=>{
    console.log(req.body)
    // res.send('add user')
    userController.create(req,res);
    
})
router.post('/user/update/:id',(req,res)=>{
    // res.send('user updated with id'+req.params.id)
    userController.update(req,res);
})
router.delete('/user/delete/:id',(req,res)=>{
    // res.send('delete user with id'+req.params.id)
    userController.delete(req,res);
})
module.exports = router