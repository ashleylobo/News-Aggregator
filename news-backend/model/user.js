var mongoose              = require('mongoose')
var Schema                = mongoose.Schema
var passportlocalmongoose = require("passport-local-mongoose")
var userSchema=new Schema({
    name:String,
    email:String,
    age:Number,
    password:String,
    preferences:[{type:String}],
    bookmarks:[{type:String}],
    bias_level:[{type:Number,enum:[0,1,2]}]//left,center,right
})

userSchema.plugin(passportlocalmongoose)
module.exports=mongoose.model("user",userSchema)


