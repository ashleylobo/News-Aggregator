var mongoose=require("mongoose")

mongoose.connect("mongodb://bug busters:bugbusters10@ds119606.mlab.com:19606/news-aggregator",{ useNewUrlParser: true } )       //run mongod -dbpath directory for local database
mongoose.connection
.once("open",()=>{
console.log("Database is connected")
})
.on("error",(error)=>{
  console.log(  "connection failed \n",error)
})
