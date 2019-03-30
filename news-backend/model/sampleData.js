var mongoose =require('mongoose')
var Schema =mongoose.Schema()


var userSchema= new Schema({
    name:String,
    username:String,
    email:email,
    password:password
})


var user =mongoose.model("user",userSchema)

module.exports=user