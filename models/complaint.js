const mongoose=require('mongoose')

const complaintschema=new mongoose.Schema({
    name:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    shop:{type:mongoose.Schema.Types.ObjectId,ref:'shop'},
    date:String,
    complaint:String,
    replay:String,
    status:String

})
const Com=mongoose.model('complaint',complaintschema)
module.exports=Com