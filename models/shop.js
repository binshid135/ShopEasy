const mongoose=require('mongoose')

const shopschema=new mongoose.Schema({
    shopname:String,
    shoppass:String,
    shopno:String,
    shopemail:String,
    shopplace:String,
    pincode:String,
    licence:String

})
const Shop=mongoose.model('shop',shopschema);
module.exports=Shop