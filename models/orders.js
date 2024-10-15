const mongoose=require('mongoose')

const orderschema=new mongoose.Schema({
    prod:{type:mongoose.Schema.Types.ObjectId,ref:'products'},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    shop:{type:mongoose.Schema.Types.ObjectId,ref:'shop'},
    quantity:Number,
    prodtot:Number,
    status:String,
})

const Order=mongoose.model('orders',orderschema)
module.exports=Order