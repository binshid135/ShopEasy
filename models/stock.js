const mongoose=require('mongoose')

const stockschema=new mongoose.Schema({
    stock:String,
    product:{type:mongoose.Schema.Types.ObjectId,ref:'products'},
})

const Stock=mongoose.model('stock',stockschema)
module.exports=Stock