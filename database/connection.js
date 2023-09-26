require('dotenv').config();
const mongoose = require('mongoose')
const db_url = process.env.DB_URL;

const connect = ()=>{
    mongoose.connect(db_url).then((val)=>{
        console.log('database connected')
    }).catch((err)=>{
        console.log('error on connection',err)
    })
}

module.exports = connect