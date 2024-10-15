const mongoose=require('mongoose')

const productschema=new mongoose.Schema({
    name:String,
    type:String,
    desc:String,
    image:String,
    price:Number,
    shop_id:{type:mongoose.Schema.Types.ObjectId,ref:'shop'}
})
const Pro=mongoose.model('products',productschema)
module.exports=Pro;