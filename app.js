const express=require('express')
const cors=require('cors')
const app=express()
const port=8090
const product=require('./main/product')
const user=require('./main/user')
const session=require('express-session')
app.use(session({
    secret:"ss",
    resave:true,
    saveUninitialized:true,
}))
app.use(cors())
app.use(express.json())

app.use('/user',user)
app.use('/product',product)
// app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use('/uploads',express.static('uploads'))
app.listen(port)
module.exports=app
