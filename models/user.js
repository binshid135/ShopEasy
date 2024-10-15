const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    email:String,
    name:String,
    password:String,
    mobile:String,
    age:String,
    gender:String,
    image:String
})

const User=mongoose.model('user',userschema)
module.exports=User