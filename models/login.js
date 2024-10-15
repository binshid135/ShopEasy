const mongoose=require('mongoose')

const loginschema=new mongoose.Schema({
    username:String,
    password:String,
    type:String
})

const Log=mongoose.model('login',loginschema)
module.exports=Log