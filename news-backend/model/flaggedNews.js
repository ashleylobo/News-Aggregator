var mongoose =require('mongoose')

var flaggedSchema= new mongoose.Schema({
    title:String,
    count:String,
    url:String
})



module.exports=mongoose.model("flagged",flaggedSchema)