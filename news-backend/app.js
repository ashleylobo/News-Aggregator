var express =require('express')
var app=express()
var port=2454
var ip =require('ip')
addr              = ip.address()
var path          = require('path')
var parser        = require('body-parser')
var passport      = require('passport')
var localstrategy = require('passport-local').Strategy
var User          = require('./model/user')
var flaggedNews   = require('./model/flaggedNews')

require('./model/dbconnection')
//Assigning public folder for all static file references

var publicDir =__dirname+'/public'
app.use(express.static(publicDir));

app.set('view engine','ejs')            //all ejs reference
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

//***************************Passport setup ***********************************//

app.use(require('express-session')({
	secret:'short' ,
	resave:false,
  saveUninitialized:false,
  cookie:{secure:false}
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localstrategy(function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (user.password!=password) { return done(null, false); }
      return done(null, user);
    });
  }
))
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())
// app.use(isLoggedIn);

//**************************** Routes section ********************************//
var homeRoute=require('./routes/homeRoute')
app.use('/',homeRoute)
var auth=require('./routes/authentication')
app.use('/authentication/',auth)


var api=require('./routes/newsapi')
app.use("/api",api)

var keywords=require('./routes/keywords')
app.use("/keywords",keywords)

var rss=require('./routes/rss')
app.use("/rss",rss)

//**************************** Controllers section ********************************//



//**************************** Routes section ********************************//


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()||req.path==='/authentication/login'||req.path==='/'||req.path==='/authentication/register'){
    // console.log("user is ",req.isAuthenticated())
      return next();
  }
  res.redirect("/authentication/login");
}

// let Parser = require('rss-parser');
// let parse = new Parser();
 
// (async () => {
 
//   let feed = await parse.parseURL('https://www.reddit.com/.rss');
//   console.log("\n\n\n \tDATA IS ",feed.title);
 
//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });
 
// })();

app.get("*",function(req,res){
	res.send("<h1>404 Page Not Found<h1>");
});


app.listen(port,()=>{
    console.log("Site live on ",port +" Address is ",addr)
    //sudo killall -9 node
})