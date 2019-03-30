var exp=require('express')
var router=exp.Router()
var usercntrlr=require('../controller/usercntrlr')



router.get("/search",function(req,res){
  
    Pet.find({},function(err,pets){
      
      if(!err)
        return res.render("Search/index",{pets : pets,title: "Search"});
      else {
        console.log(err);
        req.flash("error","Please try again after some time");
        res.redirect("back");
      }
    });
});