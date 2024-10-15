const express = require('express')
const path = require('path')
const Shop = require('../models/shop')
const Pro = require('../models/products')
const Com = require('../models/complaint')
const Order = require('../models/orders')
const Stock = require('../models/stock')
const db = require('../config/db')
db()
const router = express.Router()
router.use(express.urlencoded({ extended: true }))

const multer = require('multer')
const Log = require('../models/login')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})
const upload = multer({ storage })


// 




router.get('/shop', (req, res) => {
    res.render('shopregister')
})

router.post('/shoppost', upload.single('fl'), async (req, res) => {
    const name = req.body.n
    const pass = req.body.p
    const mob = req.body.m
    const email = req.body.em
    const place = req.body.pl
    const pincode = req.body.pi
    const licence = req.file.path
    console.log(req.body.n);
    // console.log(licence);
    var item2 = {
        username: name,
        password: pass,
        type: "shop"
    }

    var items = {
        shopname: name,
        shoppass: pass,
        shopno: mob,
        shopemail: email,
        shopplace: place,
        pincode: pincode,
        licence: licence
    }
    
    const newshop = new Shop(items)
    const newlogin = new Log(item2)
    await newshop.save()
    await newlogin.save()

    res.json({"data":"ok"})
})

// next 

router.get('/shopshow', (req, res) => {
    res.render('shop')
})
router.post('/addpropost/:sid', upload.single('fl'), async (req, res) => {
    const name = req.body.name
    const type = req.body.type
    const desc = req.body.description
    const price = req.body.price
    const image = req.file.path

    var items = {
        name: name,
        type: type,
        desc: desc,
        price: price,
        image: image,
        shop_id: req.params.sid
    }

    const newproduct = new Pro(items)
    await newproduct.save()
    
    res.json({"data":"ok"})

})
router.get('/products/:sid', async (req, res) => {
    const data = await Pro.find({ shop_id: req.params.sid })
    var s = []
    for (const i of data) {
        const stock = await Stock.findOne({ product: i._id })
        if (stock == null) {
            s.push({
                "_id": i._id,
                "stock": "0",
                "image": i.image,
                "name": i.name,
                "type": i.type,
                "desc": i.desc,
                "shop_id": i.shop_id,
                "price": i.price

            })
        }
        else {
            s.push({
                "stock": stock.stock,
                "image": i.image,
                "name": i.name,
                "type": i.type,
                "desc": i.desc,
                "shop_id": i.shop_id,
                "price": i.price,
                "_id": i._id

            })
        }


    }
    console.log(s)
    res.json({ data: s })
})

router.get('/profile/:sid', async (req, res) => {
    const data = await Shop.findOne({ _id: req.params.sid })
    res.json({ data: data })
})

router.post('/searchpost', async (req, res) => {
    const search = req.body.search
    const pro = await Pro.find({ name: { $regex: search, $options: 'i' } })
    res.render('products', { data: pro })
})

router.get('/edit/:id', async (req, res) => {
    const id = req.params.id
    console.log(id);
    
    const data = await Pro.findOne({ _id: Object(id) })
    console.log(data);
    res.json({ data: data })
})
router.post('/editpost', upload.single('fl'), async (req, res) => {
    const name = req.body.name
    const type = req.body.type
    const desc = req.body.description
    const price = req.body.price
    var id = req.body.id
    
    var items = {
        name: name,
        type: type,
        desc: desc,
        price: price,
    }

    if (req.file) {
        const image = req.file.path
        items.image = image
    }

    await Pro.findOneAndUpdate(
        { _id: id },
        { $set: items },
        { new: true })
    res.json({"data":"ok"})
})
router.get('/delete/:id', async (req, res) => {
    const id = req.params.id
    await Pro.findOneAndDelete({ _id: id })
    res.redirect('/product/products')
})
router.get('/showcomplaint', async (req, res) => {
    const com = await Com.find({ shop: req.session.sid }).populate('name')
    res.render('showcomplaint', { data: com })
})
router.get('/reply/:id', (req, res) => {
    req.session.rep = req.params.id
    res.render('reply', { rep: req.session.rep })
})
router.post('/replypost', async (req, res) => {
    const id = req.body.id
    const reply = req.body.reply
    const status = "complaint replied"
    items = {
        replay: reply,
        status: status
    }
    await Com.findOneAndUpdate(
        { _id: id },
        { $set: items },
        { new: true })
    res.redirect('/product/showcomplaint')
})
router.get('/orders', async (req, res) => {
    const sid = req.session.sid
    const orders = await Order.find({ shop: sid }).populate('prod').populate('shop').populate('user')
    res.render('orders', { data: orders })
})
router.post('/deliverypost', async (req, res) => {
    const id = req.body.id
    const ord = await Order.findOne({ _id: id })

    var items = {
        status: "succesfully delivered"
    }

    await Order.findOneAndUpdate(
        { _id: id },
        { $set: items },
        { new: true }
    )
    res.redirect('/product/orders')
})
router.get('/stock/:id', async (req, res) => {
    const id = req.params.id
    const prod = await Pro.findOne({ _id: id })
    res.render("stock", { data: prod })
})
router.post('/stockpost', async (req, res) => {
    const id = req.body.id
    const stock = Number(req.body.stock)
    const st = await Stock.findOne({ product: id })

    if (st == null) {
        var items = {
            stock: stock,
            product: id
        }
        const newstock = new Stock(items)
        await newstock.save()
    }
    else {
        const s = Number(st.stock)
        var items = {
            stock: stock + s,
            product: id
        }

        await Stock.findOneAndUpdate({ product: id },
            { $set: items },
            { new: true }
        )
    }
    res.redirect("/product/products")
})

module.exports = router