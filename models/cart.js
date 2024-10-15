const mongoose=require('mongoose')

const cartschema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    product:{type:mongoose.Schema.Types.ObjectId,ref:'products'},
    shop:{type:mongoose.Schema.Types.ObjectId,ref:'shop'},
    quantity:Number,
    image:String,
    date:String,
    price:Number,
})
const Cart=mongoose.model('cart',cartschema)
module.exports=Cart