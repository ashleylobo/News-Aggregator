var exp=require('express')
var router=exp.Router()
var User=require('../model/user')
router
.route('/')
.get((req,res)=>{
    console.log("req is ",req.user)
    // console.log("type is ",typeof(req.user))
    res.render('homePage',{req:req})
})
router
.route('/registerUser')
.post((req,res)=>{
    data=req.body.data
    print("data received ",data)
    User.create({data})
    .then((s)=>{
        console.log("registered successfully ",s)

    })
    .catch((e)=>{
        print("error ocurred")
    })
})

router
.route("/datasent")
.post((req,res)=>{
    res.render('second',{d:req.body.data,req:req})  //when data comes from form
})
module.exports=router