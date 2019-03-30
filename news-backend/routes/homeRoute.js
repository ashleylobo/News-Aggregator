var exp=require('express')
var router=exp.Router()

router
.route('/')
.get((req,res)=>{
    console.log("req is ",req.user)
    // console.log("type is ",typeof(req.user))
    res.render('homePage',{req:req})
})


router
.route("/datasent")
.post((req,res)=>{
    res.render('second',{d:req.body.data,req:req})  //when data comes from form
})


module.exports=router