var user=require('../model/user')

module.exports.displayAll=(req,res)=>{

    user.find({},(err,users)=>{
        if(err){
            console.log("some server error")
        }
        else{
            res.render("userList",{users:users,req:req})
        }
    })
}