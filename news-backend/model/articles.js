var mongoose =require('mongoose')

var articleSchema= new mongoose.Schema({
    title:String,
    url:String,
    positiveFlags:String,
    negativeFlags:String
})



module.exports=mongoose.model("articleSchema",articleSchema)