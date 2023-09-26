const mongoose = require('mongoose')
const userSchema = require('../schema/schema')

const userModel = mongoose.model('users',userSchema)

module.exports = userModel



