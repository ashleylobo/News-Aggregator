var mongoose=require("mongoose")

mongoose.connect("mongodb://localhost/sample",{ useNewUrlParser: true } )       //run mongod -dbpath directory for local database
mongoose.connection
.once("open",()=>{
console.log("Database is connected")
})
.on("error",(error)=>{
  console.log(  "connection failed \n",error)
})
