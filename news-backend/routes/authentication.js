var exp=require('express')
var router=exp.Router()
var passport=require('passport')
var User=require('../model/user')

router
.route('/register')
.get((req,res)=>{
    res.render('register',{req:req})
})
.post((req,res)=>{
    console.log("registered here ")
    var name=req.body.name
    var username=req.body.username
    var email=req.body.email
    var password=req.body.password
     User.create({name:name,username:username,email:email,password:password})
    .then((us)=>{
        console.log("registered user ",us)
        res.redirect('/')
    })
    .catch((err)=>{
        console.log("error is ",err)
    })
})

router

.route('/login')
.get((req,res)=>{

    
    res.render('login')

})
.post( 
  passport.authenticate('local', { failureRedirect: '/authentication/register',failureMessage:"error in password" }),
  function(req, res) {
    console.log("logged in user ",req.user)         
 
    res.redirect("/")
});


module.exports=router



