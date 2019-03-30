var mongoose              = require('mongoose')
var Schema                = mongoose.Schema
var passportlocalmongoose = require("passport-local-mongoose")
var userSchema=new Schema({
    name:String,
    email:String,
    username:String,
    password:String,
})

userSchema.plugin(passportlocalmongoose)
module.exports=mongoose.model("user",userSchema)

