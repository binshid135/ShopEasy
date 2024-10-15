const express = require('express')
const path = require('path')
const Log = require('../models/login')
const User = require('../models/user')
const Shop = require('../models/shop')
const Pro = require('../models/products')
const Com = require('../models/complaint')
const Order = require('../models/orders')
const Cart = require('../models/cart')
const Stock = require('../models/stock')

const db = require('../config/db')
const router = express.Router()
router.use(express.urlencoded({ extended: true }))

db()
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})
const upload = multer({ storage })

router.get('/user', (req, res) => {
    res.render('user')
})
router.post('/userpost', upload.single('fl'), async (req, res) => {
    const name = req.body.n
    const pass = req.body.p
    const mobile = req.body.m
    const age = req.body.ag
    const gender = req.body.ge
    const email=req.body.em
    const image = req.file.path

    const check=await User.findOne({email:email})
    console.log(check);
    

    if(check){
        console.log("hiii");
        res.json({"data":"exist"})
    }
    else{
    console.log("heloo");
    var item2 = {
        username: email,
        password: pass,
        type: "user"
    }

    var items = {
        email:email,
        name: name,
        password: pass,
        mobile: mobile,
        age: age,
        gender: gender,
        image: image
    }

    
    const newuser = new User(items)
    await newuser.save()
    const newlog = new Log(item2)
    await newlog.save()
    res.json({ "data": "ok" })
}
    
})

router.get('/login', async (req, res) => {
    res.render('login')
})
router.post('/loginpost', async (req, res) => {
    const name = req.body.u
    const pass = req.body.ps


    const user = await Log.findOne({ username: name, password: pass })
    if (name == [] && pass == []) {
        res.json({ "data": "null" })
    }
    else if (user) {
        if (user.type == 'shop') {
            const s = await Shop.findOne({ shopname: name })
            // req.session.sid = s._id
            res.json({ "data": "shop", "sid": s._id })
        }
        else if (user.type == 'user') {
            const u = await User.findOne({ email : name })
            // req.session.uid = u._id
            res.json({ "data": "user", "uid": u._id })
        }
        else {
            res.json({ "data": "error" })
        }
    }
    else {
        res.json({ "data": "error" })
    }

})


// module.exports = router

router.get('/userhome', async (req, res) => {
    const shops = await Shop.find()
    res.json({ data: shops })
})
router.get('/userview/:uid', async (req, res) => {
    const user = await User.findOne({ _id: req.params.uid })
    res.json({ data: user })
})

router.get('/userproducts', async (req, res) => {
    // const sid = req.params.sid
    const pro = await Pro.find()
    res.json({ data: pro })
})

router.get('/shopspro/:sid', async (req, res) => {
    const sid = req.params.sid
    const pro = await Pro.find({ shop_id: sid })
    const shops = await Shop.findOne({ _id: sid })

    const sh = shops.shopname
    const shupper = sh.toUpperCase()
    res.json({ data: pro, shop: shupper })
})

router.get('/complaint/:id', async (req, res) => {
    const uid = req.session.uid
    req.session.cid = req.params.id
    res.render('usercomplaint', ({ uid: uid }))
})

router.post('/complaintpost', async (req, res) => {



    console.log(req.body);
    

    const id = req.body.id
    const complaint = req.body.msg
    const date = Date.now()
    const shopname = req.body.shop
    const shop = await Shop.findOne({ shopname: shopname })

    if(shop){
        var items={
            shop:shop._id
        }
    }
    else{
        res.json({"data":"no shop"})
    }

    if (shop) {
        var items = {
            complaint: complaint,
            name: id,
            shop: shop._id,
            date: date,
            replay: "pending",
            status: "pending"
        }
        const com = new Com(items)
        await com.save()
        res.json({ "data": "ok" })
    }
    else {
        res.json({ "data": "no shop" })
    }
})

router.post('/google',async(req,res)=>{
    const email=req.body.email
    const name=req.body.n
    const image=req.body.pic
    console.log(req.body);


    const check=await User.findOne({email:email})
    console.log(check);
    

    if(check){
        console.log("hiiihooo");
        res.json({"data":"exist"})
    }
    else{
    var items={
        email:email,
        name:name,
        image:image,
        password:"*****",
        mobile:"**********",
        age:"**",
        gender:"**"
    }

    var items2={
        username:email,
        password:"*****",
        type:"user"
    }
    const newuser = new User(items)
    await newuser.save()
    const newlog = new Log(items2)
    await newlog.save()
    res.json({"data":"ok"})
    }
})


router.get('/replied', async (req, res) => {
    const uid = req.session.uid
    const data = await Com.find({ name: uid }).populate('shop')
    res.render('replied', { data: data })
})
router.get('/buyproduct/:idd', async (req, res) => {
    const id = req.params.idd
    const prods = await Pro.findOne({ _id: id }).populate('name')
    res.render('buyproduct', { data: prods })
})
router.post('/buypost', async (req, res) => {
    const id = req.body.id
    const price = req.body.price
    const uid = req.session.uid
    const pro = await Pro.findOne({ _id: id })
    const shop = pro.shop_id
    
    var items = {
        prod: id,
        user: uid,
        shop: shop,
        quantity: 1,
        price: price,
        prodtot: price,
        status: "delivery pending"
    }

    const neworder = new Order(items)
    await neworder.save()
    res.redirect("/user/ordered")
})
router.get('/changepassword', async (req, res) => {
    res.render('changepassword')
})
router.post('/changepost', async (req, res) => {
    const name = req.body.name
    const oldp = req.body.opassword
    const newp = req.body.npassword
    const uid = req.session.uid
    const user = await User.findOne({ _id: uid })
    const log = await Log.findOne({ username: name })
    const id = log._id
    if (user.name == name && user.password == oldp) {

        items = {
            password: newp
        }
        await User.findOneAndUpdate(
            { _id: uid },
            { $set: items },
            { new: true }
        )
        await Log.findOneAndUpdate(
            { _id: id },
            { $set: items },
            { new: true }
        )
        res.redirect('/user/login')
    }
    else {
        res.send('wrong username or password')
    }


})
router.get('/ordered/:uid', async (req, res) => {
    const orders = await Order.find({ user: req.params.uid }).populate('shop').populate('prod')
    console.log("ooorrrrddd"+orders);
    
    res.json({ data: orders })
})
router.get('/cart/:uid', async (req, res) => {
    const uid = req.params.uid

    const j = [];
    const datas = await Cart.find({ user: uid }).populate('product').populate('shop')
    let total = 0;
    for (const i of datas) {
        total += i.price * i.quantity
        j.push({

            "name": i.product.name,
            "prodtot": i.product.price * i.quantity,
            "image": i.product.image,
            "price": i.product.price,
            "quantity": i.quantity,
            "user": i.user,
            "shop": i.shop.shopname,
            "_id": i._id,
        })
    }
    const length = j.length
    res.json({ data: j, total: total, length: length })
})

router.post("/qty", async (req, res) => {
    const qt = req.body.newqt
    const crtid = req.body.id

    var items = {
        quantity: qt
    }

    await Cart.findOneAndUpdate(
        { _id: crtid },
        { $set: items },
        { new: true }
    )
    res.json({ "data": "ok" })
})

router.get('/searchpost/:search', async (req, res) => {
    const search = req.params.search
    
    
    const pro = await Pro.find({ name: { $regex: search, $options: 'i' } })
    // console.log(pro);
    res.json({data:pro})
})

router.post('/cartpost', async (req, res) => {

    console.log(req.body);
    

    const user = req.body.userid
    const product = req.body.proid
    const pro = await Pro.findOne({ _id: product })
    const shop = pro.shop_id
    const date = Date.now()
    // const image = req.body.image
    const price = req.body.price

    const crt = await Cart.findOne({ user: user, product: product })
    console.log("ccccccc "+crt);



    if (crt) {
        console.log(crt._id);
        items = {
            quantity: crt.quantity +1
        }
        await Cart.findOneAndUpdate(
            { _id: crt._id },
            { $set: items },
            { new: true }
        )

    }
    else {
        const quantity = 1
        var items = {
            user: user,
            product: product,
            quantity: quantity,
            date: date,
            shop: shop,
            // image: image,
            price: price
        }
        const newcart = new Cart(items)
        await newcart.save()
    }


    res.json({ "data": "ok" })
})



router.post('/buyall', async (req, res) => {
    const cart = await Cart.find({ user: req.session.uid }).populate('product').populate('shop')

    for (const i of cart) {
        var items = {
            prod: i.product,
            prodtot: i.product.price * i.quantity,
            price: i.product.price,
            quantity: i.quantity,
            status: "delivery pending",
            user: i.user,
            shop: i.shop
        }
        const stock = await Stock.findOne({ product: i.product })
        const sid = stock._id
        if (stock.stock > 0) {
            const neworder = new Order(items)
            await neworder.save()
            const newstock = stock.stock - i.quantity
            var items = {
                stock: newstock
            }
            await Stock.findOneAndUpdate({ _id: sid },
                { $set: items },
                { new: true }
            )
        }
        if (stock.stock == 0) {
            res.send("out of stock")
        }
    }
    await Cart.deleteMany({ user: req.session.uid })
    res.redirect('/user/ordered')
})
router.post('/close/:id', async (req, res) => {
    const id = req.params.id
    const cart = await Cart.findOneAndDelete({ _id: id })
    res.json({ "data": "ok" })
})
router.get('/edituser/:id', async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({ _id: id })
    res.render("useredit", { data: user })
})
router.post('/edituserpost', async (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const mobile = req.body.mobile
    const gender = req.body.gender

    var items = {
        name: name,
        mobile: mobile,
        age: age,
        gender: gender,
    }

    if (req.file) {
        const image = req.file.path
        items.image = image
    }



    await User.findOneAndUpdate(
        { _id: id },
        { $set: items },
        { new: true }
    )

    res.redirect('/user/userview')
})

router.get('/type/:t',async(req,res)=>{
    const t=req.params.t
    let data=[]

    if(t=="all"){
        data=await Pro.find()
    }
    else{
        data=await Pro.find({type:t})
    }
    console.log(data);
    res.json({data:data})
})


module.exports = router
